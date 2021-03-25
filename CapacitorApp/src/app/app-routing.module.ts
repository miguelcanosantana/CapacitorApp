import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'multimedia-tab',
    loadChildren: () => import('./pages/multimedia-tab/multimedia-tab.module').then( m => m.MultimediaTabPageModule)
  },
  {
    path: 'geo-tab',
    loadChildren: () => import('./pages/geo-tab/geo-tab.module').then( m => m.GeoTabPageModule)
  },
  {
    path: 'sqlite-tab',
    loadChildren: () => import('./pages/sqlite-tab/sqlite-tab.module').then( m => m.SqliteTabPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
