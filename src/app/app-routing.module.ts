import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from './guards/authorize.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'doacao',
    loadChildren: () => import('./pages/doacao/doacao.module').then( m => m.DoacaoPageModule)
  },
  {
    path: 'doadores/:nome',
    canActivate: [AuthorizeGuard],
    loadChildren: () => import('./pages/doadores/doadores.module').then( m => m.DoadoresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
