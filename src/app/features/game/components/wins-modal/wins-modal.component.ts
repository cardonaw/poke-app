import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';
import { TypeService } from '../../../../services/type.service';

@Component({
  selector: 'game-wins-modal',
  templateUrl: './wins-modal.component.html',
  styles: ``,
})
export class WinsModalComponent {
  public typeMap: any = this.typeService.i18nTypeMap;

  @Input()
  public visibleModal: boolean = false;

  @Input()
  public winner!: Pokemon;

  @Output()
  public hideModal = new EventEmitter<void>();

  constructor(private typeService: TypeService) {}

  setVisibleFalse() {
    this.hideModal.emit();
  }

  public setSprite(): string {
    return this.winner.sprites.other['official-artwork'].front_default
      ? this.winner.sprites.other['official-artwork'].front_default
      : this.winner.sprites.front_default;
  }
}
