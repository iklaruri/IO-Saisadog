import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistasPage } from './artistas.page';


const routes: Routes = [
  {
    path: '',
    component: ArtistasPage
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistasPageRoutingModule {}
