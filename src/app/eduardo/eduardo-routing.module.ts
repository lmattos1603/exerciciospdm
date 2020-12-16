import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EduardoPage } from './eduardo.page';

const routes: Routes = [
  {
    path: '',
    component: EduardoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EduardoPageRoutingModule {}
