import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcosPageRoutingModule } from './marcos-routing.module';

import { MarcosPage } from './marcos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcosPageRoutingModule
  ],
  declarations: [MarcosPage]
})
export class MarcosPageModule {}
