import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonsTableComponent } from './components/pokemons-table/pokemons-table.component';
import { TableSettingsComponent } from './components/table-settings/table-settings.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    PokedexPageComponent,
    PokemonsTableComponent,
    TableSettingsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    PokedexRoutingModule,
  ]
})
export class PokedexModule { }
