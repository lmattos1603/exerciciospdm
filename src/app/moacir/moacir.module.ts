import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoacirPageRoutingModule } from './moacir-routing.module';

import { MoacirPage } from './moacir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoacirPageRoutingModule
  ],
  declarations: [MoacirPage]
})
export class MoacirPageModule {}
