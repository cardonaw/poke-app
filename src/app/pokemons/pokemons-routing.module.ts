import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  // {
  //   path: 'by-region',
  //   component: ByRegionPageComponent,
  // },
  // {
  //   path: 'by/:id',
  //   component: CountryPageComponent,
  // },
  // {
  //   path: '**',
  //   redirectTo: 'by-capital'
  // },
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
