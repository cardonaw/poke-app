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
import { PokemonsList } from '../core/interfaces/pokemons-list.interface';
import { Pokemon } from '../core/interfaces/pokemon.interface';
import { PokeType } from '../core/interfaces/type.interface';
import { PokemonsTypesList } from '../core/interfaces/pokemons-types-list.interface';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  //

  constructor(private http: HttpClient) {
    console.log('servicio POKEMON construido');
  }

  public getAllPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10').pipe(
      map((pokemonList: any) => {
        return pokemonList.results.map(
          (pokemonUrl: any) => this.http.get<Pokemon>(pokemonUrl.url)
          // this.http.get<Pokemon>(`${this.apiUrl}/${id}`)
        );
      }),
      mergeMap((calls) => forkJoin([...calls]))
    );
  }

  public getPokemonsList(
    offset: number,
    limit: number
  ): Observable<PokemonsList> {
    const params = new HttpParams().set('offset', offset).set('limit', limit);

    return this.http.get<PokemonsList>(`${this.apiUrl}?`, { params }).pipe(
      catchError((error) => {
        throw 'Error while fetching' + error;
      })
      // tap( pokemons => console.log(pokemons))
      // delay( 2000 )
    );
  }

  public getPokemonById(id: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        throw 'Error while fetching pokemon' + error;
      })

      // tap ( pokemon => console.log('pokemonbyID: ', pokemon) )
    );
  }

  public getTypesList(
    offset: number,
    limit: number
  ): Observable<PokemonsTypesList> {
    const params = new HttpParams().set('offset', offset).set('limit', limit);

    return this.http.get<PokemonsTypesList>(`${this.apiUrl}?`, { params }).pipe(
      catchError((error) => {
        throw 'Error while fetching' + error;
      }),
      tap((types) => console.log('tipos: ', types))
      // delay( 2000 )
    );
  }

  public getTypeById(id: string | number): Observable<PokeType> {
    return this.http.get<PokeType>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        throw 'Error while fetching pokemon' + error;
      })

      // tap ( pokemon => console.log('pokemonbyID: ', pokemon) )
    );
  }
}
