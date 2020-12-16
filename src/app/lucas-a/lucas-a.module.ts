import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucasAPageRoutingModule } from './lucas-a-routing.module';

import { LucasAPage } from './lucas-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucasAPageRoutingModule
  ],
  declarations: [LucasAPage]
})
export class LucasAPageModule {}
