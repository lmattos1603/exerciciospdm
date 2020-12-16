import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViniciusPage } from './vinicius.page';

const routes: Routes = [
  {
    path: '',
    component: ViniciusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViniciusPageRoutingModule {}
