import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonsTableComponent } from './components/pokemons-table/pokemons-table.component';


@NgModule({
  declarations: [
    PokedexPageComponent,
    PokemonsTableComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
