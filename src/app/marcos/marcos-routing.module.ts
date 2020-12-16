import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcosPage } from './marcos.page';

const routes: Routes = [
  {
    path: '',
    component: MarcosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcosPageRoutingModule {}
