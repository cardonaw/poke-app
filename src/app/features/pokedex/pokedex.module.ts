import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonsTableComponent } from './components/pokemons-table/pokemons-table.component';
import { TableSettingsComponent } from './components/table-settings/table-settings.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { ByTypeTableComponent } from './components/by-type-table/by-type-table.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page/pokedex-page.component';

@NgModule({
  declarations: [
    PokedexPageComponent,
    PokedexComponent,
    PokemonsTableComponent,
    ByTypeTableComponent,
    TableSettingsComponent,
    ModalComponent,
  ],
  imports: [CommonModule, CoreModule, FormsModule, PokedexRoutingModule],
})
export class PokedexModule {}
