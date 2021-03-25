import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultimediaTabPage } from './multimedia-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MultimediaTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultimediaTabPageRoutingModule {}
