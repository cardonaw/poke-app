import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    ButtonModule,
    TableModule,
    SkeletonModule,
    DialogModule,
    DropdownModule,
    CardModule,
  ],
})
export class CoreModule {}
