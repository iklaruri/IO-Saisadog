import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { TabDiscoPage } from './tabDisco.page';
import { TabDiscoPageRoutingModule } from './tabDisco-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    MbscModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabDiscoPageRoutingModule
  ],
  declarations: [TabDiscoPage]
})
export class TabDiscoPageModule {}
