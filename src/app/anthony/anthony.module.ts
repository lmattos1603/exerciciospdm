import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnthonyPageRoutingModule } from './anthony-routing.module';

import { AnthonyPage } from './anthony.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnthonyPageRoutingModule
  ],
  declarations: [AnthonyPage]
})
export class AnthonyPageModule {}
