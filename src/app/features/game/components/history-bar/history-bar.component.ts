import {
  Component,
  EventEmitter,
  Input,
  Output,
  type OnInit,
} from '@angular/core';
import { BattleStore } from '../../../../core/interfaces/cache-store.interface';
import { GameService } from '../../../../services/game.service';

@Component({
  selector: 'game-history-bar',
  templateUrl: './history-bar.component.html',
  styles: ``,
})
export class HistoryBarComponent implements OnInit {
  @Input() public sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange = new EventEmitter<boolean>();

  constructor(private gameService: GameService) {}

  get battles(): BattleStore[] {
    return this.gameService.battleCacheStore;
  }

  ngOnInit(): void {
    console.table(this.battles);
  }

  public visibilityChange(value: boolean) {
    this.sidebarVisible = value;
    this.sidebarVisibleChange.emit(this.sidebarVisible);
    console.table(this.battles);
  }
}
