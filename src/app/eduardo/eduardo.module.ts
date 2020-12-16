import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EduardoPageRoutingModule } from './eduardo-routing.module';

import { EduardoPage } from './eduardo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EduardoPageRoutingModule
  ],
  declarations: [EduardoPage]
})
export class EduardoPageModule {}
