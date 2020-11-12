import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabCarritoPage } from './tabCarrito.page';
import { TabCarritoPageRoutingModule } from './tabCarrito-routing.module';


@NgModule({
  imports: [
    MbscModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TabCarritoPage }]),
    TabCarritoPageRoutingModule,
  ],
  declarations: [TabCarritoPage]
})
export class TabCarritoPageModule {}
