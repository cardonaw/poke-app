import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';
import { TypeService } from '../../../../services/type.service';

@Component({
  selector: 'game-card',
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent {
  public visibleModal: boolean = false;
  public visibleModalAnimDelay: boolean = false;
  public pokemon!: Pokemon;

  public typeMap: any = this.typeService.i18nTypeMap;

  @Output()
  public pokemonEmitter = new EventEmitter<Pokemon>();

  constructor(private typeService: TypeService) {}

  public showDialog() {
    this.visibleModal = true;
    this.visibleModalAnimDelay = true;
  }

  public hideDialog() {
    this.visibleModal = false;
    setTimeout(() => {
      this.visibleModalAnimDelay = false;
    }, 200);
  }

  public changePokemon(selectedPokemon: Pokemon) {
    this.pokemon = selectedPokemon;
    this.pokemonEmitter.emit(selectedPokemon);
  }

  public setSprite(): string {
    return this.pokemon.sprites.other['official-artwork'].front_default
      ? this.pokemon.sprites.other['official-artwork'].front_default
      : this.pokemon.sprites.front_default;
  }
}
