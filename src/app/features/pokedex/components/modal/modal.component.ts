import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  type OnInit,
} from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';
import { TypeService } from '../../../../services/type.service';

@Component({
  selector: 'pokedex-modal',
  templateUrl: './modal.component.html',
  styles: ``,
})
export class ModalComponent implements OnInit {
  public imgUrl: string = '';
  public soundUrl: string = '';

  public imgLoaded: boolean = false;

  public typeMap: any = this.typeService.i18nTypeMap;

  @Input()
  public visibleModal: boolean = false;

  @Input()
  public pokemonInfo!: Pokemon;

  @Output()
  public hideModal = new EventEmitter<void>();

  @ViewChild('cries')
  public cries!: ElementRef<HTMLAudioElement>;

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.setSprite();
  }

  setSprite(): void {
    this.pokemonInfo.sprites.other['official-artwork'].front_default
      ? (this.imgUrl =
          this.pokemonInfo.sprites.other['official-artwork'].front_default)
      : (this.imgUrl = this.pokemonInfo.sprites.front_default);
  }

  setVisibleFalse() {
    this.hideModal.emit();
  }

  onLoadImg() {
    this.imgLoaded = true;
    // console.log('img loaded')
  }

  cry() {
    this.cries.nativeElement.volume = 0.3;
    this.cries.nativeElement.play();
  }
}
