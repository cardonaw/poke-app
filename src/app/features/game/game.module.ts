import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PokedexModule } from '../pokedex/pokedex.module';
import { CardComponent } from './components/card/card.component';
import { CoreModule } from '../../core/core.module';
import { SelectModalComponent } from './components/select-modal/select-modal.component';
import { WinsModalComponent } from './components/wins-modal/wins-modal.component';
import { HistoryBarComponent } from './components/history-bar/history-bar.component';

@NgModule({
  declarations: [
    GamePageComponent,
    CardComponent,
    SelectModalComponent,
    WinsModalComponent,
    HistoryBarComponent,
  ],
  imports: [CommonModule, GameRoutingModule, CoreModule, PokedexModule],
})
export class GameModule {}
