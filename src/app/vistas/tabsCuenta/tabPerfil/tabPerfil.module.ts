import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabPerfilPage } from './tabPerfil.page';
import { TabPerfilPageRoutingModule } from './tabPerfil-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    TabPerfilPageRoutingModule
  ],
  declarations: [TabPerfilPage]
})
export class TabPerfilPageModule {}
