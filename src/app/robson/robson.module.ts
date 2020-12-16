import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RobsonPageRoutingModule } from './robson-routing.module';

import { RobsonPage } from './robson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RobsonPageRoutingModule
  ],
  declarations: [RobsonPage]
})
export class RobsonPageModule {}
