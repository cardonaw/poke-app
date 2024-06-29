import { Component, OnDestroy, type OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit, OnDestroy {
  public randomShapesUrls: string[] = [];

  public imgLoaded: boolean = false;

  private destroy$ = new Subject<boolean>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getRandomPokemonsUrls();
    this.getRandomPokemonsUrls();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onLoadImg() {
    this.imgLoaded = true;
  }

  getRandomNum(max: number): number {
    // always returns a random number between min and max (both included)

    const min = 0;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomPokemonsUrls() {
    const randomNum = this.getRandomNum(1302 - 1);

    this.pokemonService
      .getPokemons(randomNum, 1)
      .pipe(takeUntil(this.destroy$))
      .subscribe((pokeArray) => {
        this.randomShapesUrls.push(
          pokeArray[0].sprites.other['official-artwork'].front_default
        );
      });
  }
}
