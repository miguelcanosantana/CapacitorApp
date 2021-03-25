import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoTabPageRoutingModule } from './geo-tab-routing.module';

import { GeoTabPage } from './geo-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoTabPageRoutingModule
  ],
  declarations: [GeoTabPage]
})
export class GeoTabPageModule {}
