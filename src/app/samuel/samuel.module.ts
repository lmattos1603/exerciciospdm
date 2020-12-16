import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamuelPageRoutingModule } from './samuel-routing.module';

import { SamuelPage } from './samuel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamuelPageRoutingModule
  ],
  declarations: [SamuelPage]
})
export class SamuelPageModule {}
