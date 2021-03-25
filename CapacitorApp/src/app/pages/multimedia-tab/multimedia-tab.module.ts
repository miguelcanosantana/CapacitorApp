import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultimediaTabPageRoutingModule } from './multimedia-tab-routing.module';

import { MultimediaTabPage } from './multimedia-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultimediaTabPageRoutingModule
  ],
  declarations: [MultimediaTabPage]
})
export class MultimediaTabPageModule {}
