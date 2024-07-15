export interface BattleStore {
  fighters: HistoryPokemon[];
  winner: number;
}

export interface HistoryPokemon {
  name: string;
  sprite: string;
}
