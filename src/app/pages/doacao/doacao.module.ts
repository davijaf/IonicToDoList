import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoacaoPageRoutingModule } from './doacao-routing.module';

import { DoacaoPage } from './doacao.page';
import { SharedComponentsModule } from 'src/app/components/shared-components-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoacaoPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [DoacaoPage]
})
export class DoacaoPageModule {}
