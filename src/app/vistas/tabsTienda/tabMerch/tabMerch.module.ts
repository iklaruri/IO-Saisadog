import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabMerchPage } from './tabMerch.page';
import { TabMerchPageRoutingModule } from './tabMerch-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';



@NgModule({
  imports: [
    MbscModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabMerchPageRoutingModule
  ],
  declarations: [TabMerchPage]
})
export class TabMerchPageModule {}
