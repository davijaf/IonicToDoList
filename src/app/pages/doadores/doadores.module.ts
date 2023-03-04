import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoadoresPageRoutingModule } from './doadores-routing.module';

import { DoadoresPage } from './doadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoadoresPageRoutingModule
  ],
  declarations: [DoadoresPage]
})
export class DoadoresPageModule {}
