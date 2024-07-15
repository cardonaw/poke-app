import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    SidebarModule,
    SkeletonModule,
    TableModule,
    DataViewModule,
  ],
})
export class CoreModule {}
