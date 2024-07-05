import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

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

  ngOnInit(): void {}

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

    console.log('Los luchadores son: ', this.pokemonsFighters);
  }

  public onWinner() {
    this.winner = this.pokemonsFighters[0];
    this.showDialog();
  }
}
