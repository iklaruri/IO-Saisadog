import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabRopaPage } from './tabRopa.page';


const routes: Routes = [
  {
    path: '',
    component: TabRopaPage,
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRopaPageRoutingModule {}
