import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucasSPageRoutingModule } from './lucas-s-routing.module';

import { LucasSPage } from './lucas-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucasSPageRoutingModule
  ],
  declarations: [LucasSPage]
})
export class LucasSPageModule {}
