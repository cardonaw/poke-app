import {
  Component,
  EventEmitter,
  Input,
  Output,
  type OnInit,
} from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'game-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input()
  public visibleModal: boolean = true;

  @Output()
  public hideModal = new EventEmitter<void>();

  @Output()
  public pokemonSelected = new EventEmitter<Pokemon>();

  ngOnInit(): void {}

  setVisibleFalse() {
    this.hideModal.emit();
  }

  emitPokemon(pokemon: Pokemon) {
    this.pokemonSelected.emit(pokemon);
  }
}
