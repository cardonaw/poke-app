import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { PokemonsList } from '../interfaces/pokemons-list.interface';

@Injectable({ providedIn: 'root' })
export class PokemonService {


  private apiUrl: string = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient ) {
    console.log('servicio construido')
   }



  public getPokemonsList(): Observable<PokemonsList>{

    return this.http.get<PokemonsList>(`${this.apiUrl}/pokemon`)
      .pipe(
      catchError( error => {
        throw 'Error while fetching' + error
      } ),
      // tap( pokemons => console.log(pokemons))
      // delay( 2000 )
    );
  }



}
