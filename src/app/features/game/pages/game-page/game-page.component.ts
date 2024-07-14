import { Location } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';
import { TypeService } from '../../../../services/type.service';
import { forkJoin, Observable, Subject, takeUntil } from 'rxjs';
import { PokeType } from '../../../../core/interfaces/type.interface';
import { GameService } from '../../../../services/game.service';

@Component({
  selector: 'game-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css',
})
export class GamePageComponent implements OnInit {
  public pokemonsFighters: Pokemon[] = [];
  public winner!: Pokemon;

  public visibleModal: boolean = false;
  public visibleModalAnimDelay: boolean = false;

  private destroy$ = new Subject<boolean>();

  constructor(
    private typeService: TypeService,
    private gameService: GameService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  public back(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public twoFighters(): boolean {
    return this.pokemonsFighters[0] && this.pokemonsFighters[1] ? true : false;
  }

  public showDialog() {
    this.visibleModal = true;
    this.visibleModalAnimDelay = true;
  }

  public hideDialog() {
    this.visibleModal = false;
    setTimeout(() => {
      this.visibleModalAnimDelay = false;
    }, 200);
  }

  public onPokemonChange(pokemon: Pokemon, place: number) {
    this.pokemonsFighters[place] = pokemon;
    this.gameService.cacheStore.fighters[place] = pokemon;

    console.log('Los luchadores son: ', this.pokemonsFighters);
  }

  public onWinner(i: number) {
    this.winner = this.pokemonsFighters[i];
    this.gameService.cacheStore.winner = this.pokemonsFighters[i];
    this.showDialog();
    this.gameService.saveToLocalStorage();
  }

  public onFight() {
    this.getFighterTypes();
  }

  public getFighterTypes() {
    forkJoin(
      this.pokemonsFighters[0].types.map((type) => {
        return this.typeService.getTypeInfo(type.type.name);
      })
    ).subscribe((resp) => this.getWinner(resp));
  }

  public getWinner(pokemonTypesInfo: PokeType[]) {
    const prob: number = this.calcProb(pokemonTypesInfo);
    console.log('La probabilidad de luchador #1 es de: ', prob);

    const randomNum: number = Math.floor(Math.random() * 101);
    randomNum < prob ? this.onWinner(0) : this.onWinner(1);

    // console.log('La probabilidad de luchador #1 es de: ', prob);
  }

  public calcProb(pokemonTypeInfo: PokeType[]) {
    let prob: number = 0;
    let avg: number = 0;

    pokemonTypeInfo.forEach((type) => {
      prob += this.probAssign(
        type,
        this.pokemonsFighters[1].types[0].type.name
      );
      avg += 1;

      if (this.pokemonsFighters[1].types[1]) {
        prob += this.probAssign(
          type,
          this.pokemonsFighters[1].types[1].type.name
        );
        avg += 1;
      }
    });

    return prob / avg;
  }

  public probAssign(pokemonTypeInfo: PokeType, secondPokemonType: string) {
    let prob: number = 0;

    const {
      double_damage_to,
      half_damage_to,
      no_damage_to,
      double_damage_from,
      half_damage_from,
      no_damage_from,
    } = pokemonTypeInfo.damage_relations;

    if (double_damage_to.some((type) => type.name === secondPokemonType)) {
      prob = 75;
    } else if (half_damage_to.some((type) => type.name === secondPokemonType)) {
      prob = 50;
    } else if (no_damage_to.some((type) => type.name === secondPokemonType)) {
      prob = 25;
    } else {
      prob = 50;
      console.log('PROBABILIDAD POR DEFECTO');
    }

    if (double_damage_from.some((type) => type.name === secondPokemonType)) {
      prob = (prob + 25) / 2;
    } else if (
      half_damage_from.some((type) => type.name === secondPokemonType)
    ) {
      prob = (prob + 50) / 2;
    } else if (no_damage_from.some((type) => type.name === secondPokemonType)) {
      prob = (prob + 75) / 2;
    } else {
      prob = (prob + 50) / 2;
      console.log('PROBABILIDAD POR DEFECTO');
    }

    return prob;
  }
}
