import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { PokemonsList } from '../interfaces/pokemons-list.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({ providedIn: 'root' })
export class PokemonService {


  private apiUrl: string = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient ) {
    console.log('servicio construido')
   }



  public getPokemonsList(offset: number, limit: number): Observable<PokemonsList> {

    const params = new HttpParams()
    .set( 'offset', offset )
    .set( 'limit', limit )

    return this.http.get<PokemonsList>(`${this.apiUrl}/pokemon?`, { params })
      .pipe(
      catchError( error => {
        throw 'Error while fetching' + error
      } ),
      // tap( pokemons => console.log(pokemons))
      // delay( 2000 )
    );
  }

  public getPokemonById( id: string | number ): Observable<Pokemon> {
    return this.http.get<Pokemon>( `${ this.apiUrl }/pokemon/${ id }` )
    .pipe(

      catchError( error => {
        throw 'Error while fetching pokemon' + error
      } ),

      // tap ( pokemon => console.log('pokemonbyID: ', pokemon) )

    )
  }



}
