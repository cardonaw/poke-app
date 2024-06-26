
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { PokemonsListResult } from '../../../../core/interfaces/pokemons-list.interface';

@Component({
  selector: 'pokedex-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css',
})
export class PokedexPageComponent implements OnInit {

  public pokemons: PokemonsListResult[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.getPokemons()

  }

  public getPokemons() {

    this.pokemonService.getPokemonsList()
      .subscribe(resp => {

        console.log(resp)

        this.pokemons = resp.results;

        console.log('pokemons:', this.pokemons)

      });
    // console.log('click')

  }

}
