import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  delay,
  forkJoin,
  map,
  mergeMap,
  of,
  tap,
} from 'rxjs';
import {
  Pokemon,
  PokemonsList,
  PokemonsListResult,
} from '../core/interfaces/pokemon.interface';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2';

  public pokemonsCount: number = 0;

  constructor(private http: HttpClient) {
    // console.log('servicio POKEMON construido');
  }

  public getPokemons(offset: number, limit: number) {
    const params = new HttpParams().set('offset', offset).set('limit', limit);

    return this.http
      .get<PokemonsList>(`${this.apiUrl}/pokemon?`, { params })
      .pipe(
        tap((pokemonList: PokemonsList) => {
          this.pokemonsCount = pokemonList.count;
        }),
        map((pokemonList: PokemonsList) => {
          return pokemonList.results.map(
            (pokemonResult: PokemonsListResult) =>
              this.http.get<Pokemon>(pokemonResult.url) // Esto podría ser remplazado por getPokemonById, pero lo dejo asi para "utilizar mas" la API
            // this.http.get<Pokemon>(`${this.apiUrl}/${id}`)
          );
        }),
        mergeMap((calls) => forkJoin([...calls]))
      );
  }

  public getPokemonById(id: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        throw 'Error while fetching pokemonById' + error;
      })

      // tap ( pokemon => console.log('pokemonByID: ', pokemon) )
    );
  }

  /*
      //Idea de servicio
      servicioType{
      return
      this.get(AllPokemon)
      .pipe(
      map(
      () => {}
      ),
      )
      }
      */
}
