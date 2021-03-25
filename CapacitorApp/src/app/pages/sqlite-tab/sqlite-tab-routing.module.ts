import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqliteTabPage } from './sqlite-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SqliteTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqliteTabPageRoutingModule {}
