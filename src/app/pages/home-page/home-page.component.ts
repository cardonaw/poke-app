import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokedex.service';
import { Pokemon } from '../../core/interfaces/pokemon.interface';
import { pipe } from 'rxjs';
import { PokemonsList } from '../../core/interfaces/pokemons-list.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  public randomPokemon: Pokemon[] = [];

  public randomShapesUrls: string[] = [];

  public imgLoaded: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getRandomShapesUrls();
  }

  onLoadImg() {
    this.imgLoaded = true;
  }

  getRandomNum(max: number): number {
    // always returns a random number between min and max (both included)

    const min = 0;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomShapesUrls() {
    this.pokemonService.getPokemonsList(0, 100000).subscribe((listResp) => {
      this.getRandomPokemon(listResp);

      this.getRandomPokemon(listResp);
    });
  }

  getRandomPokemon(pokemonsList: PokemonsList) {
    const pokemonSelected: number = this.getRandomNum(pokemonsList.count);

    this.pokemonService
      .getPokemonById(pokemonsList.results[pokemonSelected].name)
      .subscribe((pokemonResp) => {
        this.randomPokemon.push(pokemonResp);

        this.randomShapesUrls.push(
          pokemonResp.sprites.other['official-artwork'].front_default
        );
      });
  }
}
