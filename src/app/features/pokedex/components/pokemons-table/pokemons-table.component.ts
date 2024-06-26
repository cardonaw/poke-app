import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { PokemonsListResult } from '../../../../core/interfaces/pokemons-list.interface';

@Component({
  selector: 'pokedex-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrl: './pokemons-table.component.css',
})
export class PokemonsTableComponent implements OnInit {

  public first: number = 0;

  public rows: number = 10;


  @Input()
  public pokemons: PokemonsListResult[] = [];


  ngOnInit(): void { }


  next() {

    if (this.isLastPage()) return;

    this.first = this.first + this.rows;
  }

  prev() {

    if (this.isFirstPage()) return;

    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  rowsChange( event:number ) {
    console.log(event);
  }

  isLastPage(): boolean {
    return this.pokemons ? this.first === (this.pokemons.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.pokemons ? this.first === 0 : true;
  }

}
