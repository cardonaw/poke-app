import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [

  {
    path: '',
    component: GamePageComponent,
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
export class GameRoutingModule { }
