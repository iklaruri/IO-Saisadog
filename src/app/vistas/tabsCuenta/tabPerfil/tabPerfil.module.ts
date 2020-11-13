import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabPerfilPage } from './tabPerfil.page';
import { TabPerfilPageRoutingModule } from './tabPerfil-routing.module';

@NgModule({
  imports: [    
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabPerfilPageRoutingModule
  ],
  declarations: [TabPerfilPage]
})
export class TabPerfilPageModule {}
