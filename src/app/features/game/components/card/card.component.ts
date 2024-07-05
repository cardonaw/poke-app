import { Component, EventEmitter, Output, type OnInit } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'game-card',
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent implements OnInit {
  public visibleModal: boolean = false;
  public visibleModalAnimDelay: boolean = false;
  public pokemon!: Pokemon;

  @Output()
  public pokemonEmitter = new EventEmitter<Pokemon>();

  ngOnInit(): void {}

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
