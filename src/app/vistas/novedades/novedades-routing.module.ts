import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovedadesPage } from './novedades.page';

const routes: Routes = [
  {
    path: '',
    component: NovedadesPage
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovedadesPageRoutingModule {}
