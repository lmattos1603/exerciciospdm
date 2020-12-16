import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LucasMPage } from './lucas-m.page';

const routes: Routes = [
  {
    path: '',
    component: LucasMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LucasMPageRoutingModule {}
