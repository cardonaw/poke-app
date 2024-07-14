import { Pokemon } from './pokemon.interface';

export interface BattleStore {
  fighters: Pokemon[];
  winner: Pokemon;
}
