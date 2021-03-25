import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoTabPage } from './geo-tab.page';

const routes: Routes = [
  {
    path: '',
    component: GeoTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoTabPageRoutingModule {}
