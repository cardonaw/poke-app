import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonsTableComponent } from './components/pokemons-table/pokemons-table.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { TableSettingsComponent } from './components/table-settings/table-settings.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokedexPageComponent,
    PokemonsTableComponent,
    TableSettingsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class PokedexModule { }
