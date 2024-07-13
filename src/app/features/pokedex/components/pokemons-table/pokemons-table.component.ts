import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  type OnInit,
} from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';
import { TableRowSelectEvent } from 'primeng/table';
import { TypeService } from '../../../../services/type.service';

@Component({
  selector: 'pokedex-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styles: '',
})
export class PokemonsTableComponent implements OnInit {
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
  public onPageChange = new EventEmitter<{ first: number; rows: number }>();

  @Output()
  public showDialog = new EventEmitter<number>();

  @Output()
  public onPokemonSelect = new EventEmitter<Pokemon>();

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.selectionMode();
    this.onPageChange.emit({ first: this.offset, rows: this.rows });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowSize = window.innerWidth;
  }

  pageChange(event: { first: number; rows: number }) {
    this.paginatorPositionControl(event.rows);

    this.offset = event.first;
    this.rows = event.rows;

    this.onPageChange.emit(event);

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
