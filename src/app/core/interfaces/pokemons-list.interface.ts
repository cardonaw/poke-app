export interface PokemonsList {
  count:    number;
  next:     string;
  previous: string;
  results:  PokemonsListResult[];
}

export interface PokemonsListResult {
  name: string;
  url:  string;
}
