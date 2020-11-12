import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPedidosPage } from './tabPedidos.page';



const routes: Routes = [
  {
    path: '',
    component: TabPedidosPage,
  }
];

@NgModule({
  imports: [
    FormsModule,
    MbscModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPedidosPageRoutingModule {}
