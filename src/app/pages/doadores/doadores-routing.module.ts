import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoadoresPage } from './doadores.page';

const routes: Routes = [
  {
    path: '',
    component: DoadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoadoresPageRoutingModule {}
