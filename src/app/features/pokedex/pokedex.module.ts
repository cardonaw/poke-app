import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonsTableComponent } from './components/pokemons-table/pokemons-table.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { TableSettingsComponent } from './components/table-settings/table-settings.component';


@NgModule({
  declarations: [
    PokedexPageComponent,
    PokemonsTableComponent,
    TableSettingsComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    PrimeNgModule
  ]
})
export class PokedexModule { }
