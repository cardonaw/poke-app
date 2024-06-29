import {
  Component,
  EventEmitter,
  Input,
  Output,
  type OnInit,
} from '@angular/core';
import {
  PokemonsList,
  PokemonsListResult,
} from '../../../../core/interfaces/pokemons-list.interface';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrl: './pokemons-table.component.css',
})
export class PokemonsTableComponent implements OnInit {
  public offset: number = 0;
  public rows: number = 5;
  public flag: boolean = false;
  public paginatorPosition: 'top' | 'bottom' | 'both' = 'top';

  @Input()
  public isLoading: boolean = false;

  @Input()
  public firstLoadingFlag: boolean = false;

  @Input()
  public pokemonsArray: Pokemon[] = [];

  @Input()
  public pokemonsList: PokemonsList = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };

  @Output()
  public onPageChange = new EventEmitter<{ first: number; rows: number }>();

  @Output()
  public showDialog = new EventEmitter<number>();

  ngOnInit(): void {}

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

  onClickInfo(id: number) {
    this.showDialog.emit(id);
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
