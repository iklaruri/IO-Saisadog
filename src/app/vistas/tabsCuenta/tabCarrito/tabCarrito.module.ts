import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabCarritoPage } from './tabCarrito.page';
import { TabCarritoPageRoutingModule } from './tabCarrito-routing.module';


@NgModule({
  imports: [    
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabCarritoPageRoutingModule,
  ],
  declarations: [TabCarritoPage]
})
export class TabCarritoPageModule {}
