import { FormsModule } from '@angular/forms';
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
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPedidosPageRoutingModule {}
