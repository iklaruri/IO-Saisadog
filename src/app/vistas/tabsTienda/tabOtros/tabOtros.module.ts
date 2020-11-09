import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabOtrosPageRoutingModule } from './tabOtros-routing.module';
import { TabOtrosPage } from './tabOtros.page';



@NgModule({
  imports: [
    MbscModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabOtrosPageRoutingModule
  ],
  declarations: [TabOtrosPage]
})
export class TabOtrosPageModule {}
