
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { TabsTiendaPage } from './tabsTienda.page';
import { TabsTiendaPageRoutingModule } from './tabsTienda-routing.module';



@NgModule({
  imports: [    
    IonicModule,
    CommonModule,
    FormsModule,
    TabsTiendaPageRoutingModule
  ],
  declarations: [TabsTiendaPage]
})
export class TabsTiendaPageModule {}
