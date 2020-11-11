import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerosPageRoutingModule } from './generos-routing.module';

import { GenerosPage } from './generos.page';
import { GenerosProductosPage } from './productos/generosProductos';


@NgModule({
  imports: [
    MbscModule,
    CommonModule,
    FormsModule,
    IonicModule,
    GenerosPageRoutingModule
  ],
  declarations: [GenerosPage,GenerosProductosPage]
})
export class GenerosPageModule {}
