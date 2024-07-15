import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'game-select-modal',
  templateUrl: './select-modal.component.html',
})
export class SelectModalComponent {
  public isSelected: boolean = false;
  public selectedPokemon!: Pokemon;

  @Input()
  public visibleModal: boolean = false;

  @Output()
  public hideModal = new EventEmitter<void>();

  @Output()
  public pokemonSelected = new EventEmitter<Pokemon>();

  setVisibleFalse() {
    this.hideModal.emit();
  }

  onDone() {
    if (!this.isSelected) return;
    this.pokemonSelected.emit(this.selectedPokemon);
    this.hideModal.emit();
  }

  onPokemonSelect(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.isSelected = true;
  }
}
