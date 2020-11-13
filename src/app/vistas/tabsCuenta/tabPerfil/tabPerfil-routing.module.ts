import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPerfilPage } from './tabPerfil.page';

const routes: Routes = [
  {
    path: '',
    component: TabPerfilPage,
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPerfilPageRoutingModule {}
