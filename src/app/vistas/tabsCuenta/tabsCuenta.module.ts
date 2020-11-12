import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { TabsCuentaPage } from './tabsCuenta.page';
import { TabsCuentaPageRoutingModule } from './tabsCuenta-routing.module';



@NgModule({
  imports: [
    MbscModule,
    IonicModule,
    CommonModule,
    FormsModule,
    TabsCuentaPageRoutingModule
  ],
  declarations: [TabsCuentaPage]
})
export class TabsCuentaPageModule {}
