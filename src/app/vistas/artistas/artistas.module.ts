import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ArtistasPageRoutingModule } from './artistas-routing.module';

import { ArtistasPage } from './artistas.page';
import { ArtistaProductosPage } from './productos/artistaProductos';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistasPageRoutingModule,
  ],
  declarations: [ArtistasPage,ArtistaProductosPage]
})
export class ArtistasPageModule {}
