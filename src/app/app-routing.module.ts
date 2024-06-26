import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./features/pokedex/pokedex.module').then( m => m.PokedexModule )
  },
  {
    path: 'game',
    loadChildren: () => import('./features/game/game.module').then( m => m.GameModule )
  },
  // {
  //   path: 'by/:id',
  //   component: '',
  // },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
