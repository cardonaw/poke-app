import { Injectable } from '@angular/core';
import {
  BattleStore,
  HistoryPokemon,
} from '../core/interfaces/cache-store.interface';
import { Pokemon } from '../core/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public battleCacheStore: BattleStore[] = [];

  constructor() {
    this.loadFromLocalStorage();
    // console.log(
    //   'Local CONSTRUCTOR: ',
    //   JSON.parse(localStorage.getItem('battleCacheStore')!)
    // );
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('battleCacheStore')) return;
    this.battleCacheStore = JSON.parse(
      localStorage.getItem('battleCacheStore')!
    );
  }

  public saveResults(winner: number, pokemonsFighters: Pokemon[]) {
    this.battleCacheStore.unshift({
      fighters: pokemonsFighters.map((pokemon) => {
        return this.getNameNSprite(pokemon);
      }),
      winner: winner,
    });

    this.battleCacheStore.splice(10);

    this.saveToLocalStorage();
  }

  private getNameNSprite(pokemon: Pokemon): HistoryPokemon {
    const name: string = pokemon.name;
    const sprite: string = pokemon.sprites.front_default;
    return { name, sprite };
  }

  private saveToLocalStorage() {
    localStorage.setItem(
      'battleCacheStore',
      JSON.stringify(this.battleCacheStore)
    );
    // console.log(
    //   'Local SAVETOLOCAL: ',
    //   JSON.parse(localStorage.getItem('battleCacheStore')!)
    // );
  }
}
