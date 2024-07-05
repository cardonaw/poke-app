import { Injectable } from '@angular/core';
import { Pokemon } from '../core/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {
    console.log('servicio GAME construido');
  }

  public selectedPokemon!: Pokemon;
}
