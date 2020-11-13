import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabDiscoPage } from './tabDisco.page';


const routes: Routes = [
  {
    path: '',
    component: TabDiscoPage,
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabDiscoPageRoutingModule {}
