import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  type OnInit,
} from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';
import { TypeService } from '../../../../services/type.service';

@Component({
  selector: 'pokedex-by-type-table',
  templateUrl: './by-type-table.component.html',
  styles: '',
})
export class ByTypeTableComponent implements OnInit {
  public offset: number = 0;
  public rows: number = 5;
  public flag: boolean = false;
  public paginatorPosition: 'top' | 'bottom' | 'both' = 'top';
  public windowSize: number = window.innerWidth;
  public selectedPokemon!: Pokemon;

  public typeMap: any = this.typeService.i18nTypeMap;

  @Input()
  public gameMode: boolean = false;

  @Input()
  public isLoading: boolean = false;

  @Input()
  public firstLoadingFlag: boolean = false;

  @Input()
  public pokemonsArray: Pokemon[] = [];

  @Input()
  public pokemonsCount: number = 0;

  @Output()
  public showDialog = new EventEmitter<number>();

  @Output()
  public onPokemonSelect = new EventEmitter<Pokemon>();

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowSize = window.innerWidth;
  }

  pageChange(event: { first: number; rows: number }) {
    this.paginatorPositionControl(event.rows);

    // console.log('firstchange', event.rows);
    // console.log('rowchange', event.first);
  }

  paginatorPositionControl(rows: number) {
    rows >= 10
      ? (this.paginatorPosition = 'both')
      : (this.paginatorPosition = 'top');
  }

  paginatorLinksControl(): number {
    return this.windowSize < 780 ? 1 : 5;
  }

  smallViewWidth(): boolean {
    return this.windowSize < 655;
  }

  onClickInfo(id: number) {
    this.showDialog.emit(id);
  }

  selectionMode(): 'single' | null {
    return this.gameMode ? 'single' : null;
  }

  rowSelect() {
    this.onPokemonSelect.emit(this.selectedPokemon);
  }

  // next() {

  //   if (this.isLastPage()) return;

  //   this.first = this.first + this.rows;
  // }

  // prev() {

  //   if (this.isFirstPage()) return;

  //   this.first = this.first - this.rows;
  // }

  // reset() {
  //   this.first = 0;
  // }

  // isLastPage(): boolean {
  //   return this.pokemonsList?.results ? this.first === (this.pokemonsList.count - this.rows) : true;
  // }

  // isFirstPage(): boolean {
  //   return this.pokemonsList?.results ? this.first === 0 : true;
  // }
}
