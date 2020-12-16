import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucasMPageRoutingModule } from './lucas-m-routing.module';

import { LucasMPage } from './lucas-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucasMPageRoutingModule
  ],
  declarations: [LucasMPage]
})
export class LucasMPageModule {}
