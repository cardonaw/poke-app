import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'game-select-modal',
  templateUrl: './select-modal.component.html',
})
export class SelectModalComponent {
  public isSelected: boolean = false;

  @Input()
  public visibleModal: boolean = false;

  @Output()
  public hideModal = new EventEmitter<void>();

  @Output()
  public pokemonSelected = new EventEmitter<Pokemon>();

  setVisibleFalse() {
    if (!this.isSelected) return;
    this.hideModal.emit();
  }

  onPokemonSelect(pokemon: Pokemon) {
    this.isSelected = true;
    this.pokemonSelected.emit(pokemon);
  }
}
