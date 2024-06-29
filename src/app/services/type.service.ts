import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { PokemonsTypesList } from '../core/interfaces/pokemons-types-list.interface';
import { PokeType } from '../core/interfaces/type.interface';

@Injectable({ providedIn: 'root' })
export class TypeService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/type';

  constructor(private http: HttpClient) {
    console.log('servicio TYPE construido');
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
