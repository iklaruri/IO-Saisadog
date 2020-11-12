import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabPedidosPage } from './tabPedidos.page';
import { TabPedidosPageRoutingModule } from './tabPedidos-routing.module';




@NgModule({
  imports: [
    MbscModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabPedidosPageRoutingModule
  ],
  declarations: [TabPedidosPage]
})
export class TabPedidosPageModule {}
