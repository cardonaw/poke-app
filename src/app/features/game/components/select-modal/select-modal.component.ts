import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'game-select-modal',
  templateUrl: './select-modal.component.html',
})
export class SelectModalComponent {
  @Input()
  public visibleModal: boolean = false;

  @Output()
  public hideModal = new EventEmitter<void>();

  @Output()
  public pokemonSelected = new EventEmitter<Pokemon>();

  setVisibleFalse() {
    this.hideModal.emit();
  }

  emitPokemon(pokemon: Pokemon) {
    this.pokemonSelected.emit(pokemon);
  }
}
