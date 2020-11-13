import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabCarritoPage } from './tabCarrito.page';


const routes: Routes = [
  {
    path: '',
    component: TabCarritoPage,
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabCarritoPageRoutingModule {}
