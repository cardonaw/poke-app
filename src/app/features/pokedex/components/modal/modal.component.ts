import { Component, EventEmitter, Input, Output, type OnInit } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-modal',
  templateUrl: './modal.component.html',
  styles: ``,
})
export class ModalComponent implements OnInit {

  public imgUrl: string = '';
  public soundUrl: string = '';

  public imgLoaded: boolean = false;

  @Input()
  public visibleModal: boolean = false;

  @Input()
  public pokemonInfo!: Pokemon;

  @Output()
  public hideModal = new EventEmitter<void>();


  ngOnInit(): void {

    this.setSprite();

  }

  setSprite():void {

    this.pokemonInfo.sprites.other['official-artwork'].front_default ?

    this.imgUrl = this.pokemonInfo.sprites.other['official-artwork'].front_default :

    this.imgUrl = this.pokemonInfo.sprites.front_default

  }


  setVisibleFalse() {
    this.hideModal.emit();
  }

  onLoadImg() {
    this.imgLoaded = true;
    console.log('img loaded')
  }

}
