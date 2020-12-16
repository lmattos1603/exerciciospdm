import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViniciusPageRoutingModule } from './vinicius-routing.module';

import { ViniciusPage } from './vinicius.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViniciusPageRoutingModule
  ],
  declarations: [ViniciusPage]
})
export class ViniciusPageModule {}
