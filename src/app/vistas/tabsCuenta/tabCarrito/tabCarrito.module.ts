import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabCarritoPage } from './tabCarrito.page';
import { TabCarritoPageRoutingModule } from './tabCarrito-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabCarritoPageRoutingModule,
  ],
  providers:[
    Geolocation
  ],
  declarations: [TabCarritoPage]
})
export class TabCarritoPageModule {}
