import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveShapesComponent } from './components/responsive-shapes/responsive-shapes.component';



@NgModule({
  declarations: [
    ResponsiveShapesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResponsiveShapesComponent
  ]
})
export class SharedModule { }
