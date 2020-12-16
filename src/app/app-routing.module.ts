import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'anthony',
    loadChildren: () => import('./anthony/anthony.module').then( m => m.AnthonyPageModule)
  },
  {
    path: 'eduardo',
    loadChildren: () => import('./eduardo/eduardo.module').then( m => m.EduardoPageModule)
  },
  {
    path: 'lucas-m',
    loadChildren: () => import('./lucas-m/lucas-m.module').then( m => m.LucasMPageModule)
  },
  {
    path: 'lucas-s',
    loadChildren: () => import('./lucas-s/lucas-s.module').then( m => m.LucasSPageModule)
  },
  {
    path: 'lucas-a',
    loadChildren: () => import('./lucas-a/lucas-a.module').then( m => m.LucasAPageModule)
  },
  {
    path: 'marcos',
    loadChildren: () => import('./marcos/marcos.module').then( m => m.MarcosPageModule)
  },
  {
    path: 'moacir',
    loadChildren: () => import('./moacir/moacir.module').then( m => m.MoacirPageModule)
  },
  {
    path: 'robson',
    loadChildren: () => import('./robson/robson.module').then( m => m.RobsonPageModule)
  },
  {
    path: 'samuel',
    loadChildren: () => import('./samuel/samuel.module').then( m => m.SamuelPageModule)
  },
  {
    path: 'vinicius',
    loadChildren: () => import('./vinicius/vinicius.module').then( m => m.ViniciusPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
