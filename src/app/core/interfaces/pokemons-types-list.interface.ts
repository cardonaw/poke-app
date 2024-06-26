export interface PokemonsTypesList {
  count:    number;
  next:     string;
  previous: string;
  results:  TypesListResult[];
}

export interface TypesListResult {
  name: string;
  url:  string;
}
