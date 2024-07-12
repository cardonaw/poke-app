import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'game-wins-modal',
  templateUrl: './wins-modal.component.html',
  styles: ``,
})
export class WinsModalComponent {
  @Input()
  public visibleModal: boolean = false;

  @Input()
  public winner!: Pokemon;

  @Output()
  public hideModal = new EventEmitter<void>();

  setVisibleFalse() {
    this.hideModal.emit();
  }

  public setSprite(): string {
    return this.winner.sprites.other['official-artwork'].front_default
      ? this.winner.sprites.other['official-artwork'].front_default
      : this.winner.sprites.front_default;
  }
}
