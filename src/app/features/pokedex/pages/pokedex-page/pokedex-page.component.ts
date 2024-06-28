
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { PokemonsList, PokemonsListResult } from '../../../../core/interfaces/pokemons-list.interface';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css',
})
export class PokedexPageComponent implements OnInit {

  public offset: number = 0;
  public limit: number = 5;

  public isLoading: boolean = false;
  public firstLoadingFlag: boolean = false;

  public pokemonsArray: Pokemon[] = [];

  public pokemonsList: PokemonsList = {
    count: 0,
    next: '',
    previous: '',
    results: []
  }

  public pokemonInfo!: Pokemon;

  public visibleModal: boolean = false;
  public visibleModalAnimDelay: boolean = false;


  showDialog( id: number ) {
    this.pokemonsArray.forEach(pokemon => {
      if( pokemon.id === id ) {
        this.pokemonInfo = pokemon;
      }
    });
    this.visibleModal = true;
    this.visibleModalAnimDelay = true;
  }

  hideDialog() {
    this.visibleModal = false;
    setTimeout(() => {
      this.visibleModalAnimDelay = false;
    }, 200);
  }



  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.getPokemons(this.offset, this.limit)

    //Probando el endpoint by id
    // this.pokemonService.getPokemonById(1).subscribe(resp => {
    //   console.log('pokemon by id: ', resp)
    // });

  }

  public onTablePageChange(event: { first: number; rows: number; }) {
    this.offset = event.first;
    this.limit = event.rows;
    this.getPokemons(this.offset, this.limit);
  }

  public getPokemons(offset: number, limit: number) {

    // debugger

    this.pokemonsArray = [];

    this.isLoading = true;

    this.pokemonService.getPokemonsList(offset, limit)
      .subscribe(resp => {

        this.pokemonsList = resp;

        this.isLoading = false;

        if (!this.firstLoadingFlag) { this.firstLoadingFlag = true }


        resp.results.forEach((result) => {
          this.pokemonService.getPokemonById(result.name)
            .subscribe(pokemonInfo => {

              this.pokemonsArray.push(pokemonInfo);

            })
        })

        console.log('pokemons on pokedex table:', this.pokemonsList)

      });

    console.log('Arreglo de pokemons en pokedex: ', this.pokemonsArray)
    // this.pokemonsArray.forEach(pokemon => {
    //   console.log('pokemon: ', pokemon.name);
    // });

  }

}
