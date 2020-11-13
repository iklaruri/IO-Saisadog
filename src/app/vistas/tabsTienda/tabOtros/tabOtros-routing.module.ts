import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabOtrosPage } from './tabOtros.page';


const routes: Routes = [
  {
    path: '',
    component: TabOtrosPage,
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabOtrosPageRoutingModule {}
