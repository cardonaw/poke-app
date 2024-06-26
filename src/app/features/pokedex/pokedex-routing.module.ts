import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexPageComponent,
  },
  // {
  //   path: 'pokedex',
  //   loadChildren: () => import('./features/pokedex/pokedex.module').then( m => m.PokedexModule )
  // },
  // {
  //   path: 'by/:id',
  //   component: '',
  // },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
