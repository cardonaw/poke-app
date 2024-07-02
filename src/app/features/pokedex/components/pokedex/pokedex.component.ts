import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../../../../services/pokemon.service';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';
import { Subject, catchError, takeUntil } from 'rxjs';
import { TypeService } from '../../../../services/type.service';

@Component({
  selector: 'pokedex-pokedex',
  templateUrl: './pokedex.component.html',
  styles: '',
})
export class PokedexComponent implements OnInit, OnDestroy {
  public offset: number = 0;
  public limit: number = 5;

  public isLoading: boolean = false;
  public firstLoadingFlag: boolean = false;

  public pokemonsArray: Pokemon[] = [];
  public pokemonsCount: number = 0;

  public pokemonInfo!: Pokemon;

  public visibleModal: boolean = false;
  public visibleModalAnimDelay: boolean = false;

  public switchTable: boolean = false;

  @Input()
  public gameMode: boolean = false;

  // //Antes del constructor
  // const destroy$ = new Subject<boolean>()

  private destroy$ = new Subject<boolean>();

  constructor(
    private pokemonService: PokemonService,
    private typeService: TypeService
  ) {}

  // //ngOnInit
  // this.getAllPokemon().pipe(takeUntil(destroy$)).suscribe()
  ngOnInit(): void {
    this.getPokemons(this.offset, this.limit);
  }

  // //ngOnDestroy
  // destroy$.next(true)
  // destroy$.unsubscribe()
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public showDialog(id: number) {
    this.pokemonsArray.forEach((pokemon) => {
      if (pokemon.id === id) {
        this.pokemonInfo = pokemon;
      }
    });
    this.visibleModal = true;
    this.visibleModalAnimDelay = true;
  }

  public hideDialog() {
    this.visibleModal = false;
    setTimeout(() => {
      this.visibleModalAnimDelay = false;
    }, 200);
  }

  public onTablePageChange(event: { first: number; rows: number }) {
    this.offset = event.first;
    this.limit = event.rows;
    this.getPokemons(this.offset, this.limit);
  }

  public getPokemons(offset: number, limit: number) {
    // this.pokemonsArray = [];
    this.isLoading = true;

    this.pokemonService
      .getPokemons(offset, limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe((resp) => {
        if (!this.firstLoadingFlag) {
          this.firstLoadingFlag = true;
        }

        this.pokemonsCount = this.pokemonService.pokemonsCount;
        this.pokemonsArray = resp;

        this.isLoading = false;
      });

    console.log('Arreglo de pokemons en pokedex: ', this.pokemonsArray);
  }

  public onTypeChange(type: string): void {
    console.log('type set on pokedex: ', type);

    type === 'all' ? (this.switchTable = false) : this.tableSwap(type);
  }

  public tableSwap(type: string): void {
    this.switchTable = true;
    this.getPokemonsByType(type);
  }

  public getPokemonsByType(type: string): void {
    this.isLoading = true;
    this.typeService
      .getPokemonsByType(type)
      .pipe(takeUntil(this.destroy$))
      .subscribe((resp) => {
        this.pokemonsCount = resp.length;
        this.pokemonsArray = resp;
        this.isLoading = false;
      });
  }
}
