import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  type OnInit,
} from '@angular/core';
import { TypeService } from '../../../../services/type.service';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Subject, takeUntil } from 'rxjs';
import { TypesListResult } from '../../../../core/interfaces/type.interface';

@Component({
  selector: 'pokedex-table-settings',
  templateUrl: './table-settings.component.html',
  styles: ``,
})
export class TableSettingsComponent implements OnInit, OnDestroy {
  public selectedType: TypesListResult | undefined;

  public offset: number = 0;
  public limit: number = 100;

  public typesArray: TypesListResult[] = [];

  @Output()
  public onTypeChange = new EventEmitter<string>();

  private destroy$ = new Subject<boolean>();

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.getTypesList(this.offset, this.limit);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getTypesList(offset: number, limit: number): void {
    this.typeService
      .getTypesList(offset, limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe((resp) => {
        this.typesArray = resp.results;
      });
  }

  onChange(): void {
    this.onTypeChange.emit(this.selectedType ? this.selectedType.name : 'all');

    console.log(
      'Selected: ',
      this.selectedType ? this.selectedType.name : 'all'
    );
  }
}
