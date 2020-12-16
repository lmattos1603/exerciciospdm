import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamuelPage } from './samuel.page';

const routes: Routes = [
  {
    path: '',
    component: SamuelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamuelPageRoutingModule {}
