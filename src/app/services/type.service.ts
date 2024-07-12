import {
  PokeType,
  PokemonByType,
  TypesList,
} from './../core/interfaces/type.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, mergeMap, tap } from 'rxjs';
import { Pokemon } from '../core/interfaces/pokemon.interface';

@Injectable({ providedIn: 'root' })
export class TypeService {
  private apiUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
    console.log('servicio TYPE construido');
  }

  public getTypesList(offset: number, limit: number): Observable<TypesList> {
    const params = new HttpParams().set('offset', offset).set('limit', limit);

    return this.http.get<TypesList>(`${this.apiUrl}/type?`, { params }).pipe(
      catchError((error) => {
        throw 'Error while fetching typesList: ' + error;
      })
      // delay( 2000 )
    );
  }

  public getTypeInfo(typeName: string): Observable<PokeType> {
    return this.http.get<PokeType>(`${this.apiUrl}/type/${typeName}`).pipe(
      catchError((error) => {
        throw 'Error while fetching pokeType: ' + error;
      })
      // delay( 2000 )
    );
  }

  public getPokemonsByType(id: string | number): Observable<Pokemon[]> {
    return this.http.get<PokeType>(`${this.apiUrl}/type/${id}`).pipe(
      map((type: PokeType) => {
        return type.pokemon.map(
          (pokemonByType: PokemonByType) =>
            this.http.get<Pokemon>(pokemonByType.pokemon.url) // Esto podría ser remplazado por getPokemonById, pero lo dejo asi para "utilizar mas" los recursos de la API
          // this.http.get<Pokemon>(`${this.apiUrl}/${id}`)
        );
      }),
      mergeMap((calls) => forkJoin([...calls]))
    );
  }
}
