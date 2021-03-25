import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: 'geo-tab',
        loadChildren: () => import('../pages/geo-tab/geo-tab.module').then(m => m.GeoTabPageModule)
      },
      {
        path: 'multimedia-tab',
        loadChildren: () => import('../pages/multimedia-tab/multimedia-tab.module').then(m => m.MultimediaTabPageModule)
      },
      {
        path: 'sqlite-tab',
        loadChildren: () => import('../pages/sqlite-tab/sqlite-tab.module').then(m => m.SqliteTabPageModule)
      },
      {
        path: '',
        redirectTo: '/pages/geo-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/geo-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
