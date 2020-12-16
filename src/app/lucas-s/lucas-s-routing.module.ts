import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LucasSPage } from './lucas-s.page';

const routes: Routes = [
  {
    path: '',
    component: LucasSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LucasSPageRoutingModule {}
