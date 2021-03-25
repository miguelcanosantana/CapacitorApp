import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqliteTabPageRoutingModule } from './sqlite-tab-routing.module';

import { SqliteTabPage } from './sqlite-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqliteTabPageRoutingModule
  ],
  declarations: [SqliteTabPage]
})
export class SqliteTabPageModule {}
