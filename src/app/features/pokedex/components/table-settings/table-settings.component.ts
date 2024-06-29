import { Component, EventEmitter, Output, type OnInit } from '@angular/core';
import { TypeService } from '../../../../services/type.service';
import { PokemonsTypesList, TypesListResult } from '../../../../core/interfaces/pokemons-types-list.interface';
import { DropdownChangeEvent } from 'primeng/dropdown';

@Component({
  selector: 'pokedex-table-settings',
  templateUrl: './table-settings.component.html',
  styles: ``,
})
export class TableSettingsComponent implements OnInit {

  public selectedType: { name: string, url: string } | undefined;


  public offset: number = 0;
  public limit: number = 100;

  public typesArray: TypesListResult[] = [];

  @Output()
  public onTypeChange = new EventEmitter< { name: string, url: string } >();


  constructor(private typeService: TypeService) { }


  ngOnInit(): void {

    this.getTypesList( this.offset, this.limit );

  }

  getTypesList( offset:number, limit:number ): void {
    this.typeService.getTypesList(offset, limit)
    .subscribe( resp => {

      this.typesArray = resp.results;

    } )
  }

  onChange( event: DropdownChangeEvent ): void {

    this.onTypeChange.emit( this.selectedType )

    console.log('event', event);

    console.log('Selected', this.selectedType);

  }



}
