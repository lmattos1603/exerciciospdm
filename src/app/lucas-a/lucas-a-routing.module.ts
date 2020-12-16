import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LucasAPage } from './lucas-a.page';

const routes: Routes = [
  {
    path: '',
    component: LucasAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LucasAPageRoutingModule {}
