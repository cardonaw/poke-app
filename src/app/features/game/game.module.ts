import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PokedexModule } from '../pokedex/pokedex.module';
import { CardComponent } from './components/card/card.component';
import { CoreModule } from '../../core/core.module';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [GamePageComponent, CardComponent, ModalComponent],
  imports: [CommonModule, GameRoutingModule, CoreModule, PokedexModule],
})
export class GameModule {}
