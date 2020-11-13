import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsTiendaPage } from './tabsTienda.page';


const routes: Routes = [
  {
    path: 'tabsTienda',
    component: TabsTiendaPage,
    children: [
      {
        path: 'tabDiscos',
        loadChildren: () => import('../tabsTienda/tabDisco/tabDisco.module').then(m => m.TabDiscoPageModule)
      },
      {
        path: 'tabRopa',
        loadChildren: () => import('../tabsTienda/tabRopa/tabRopa.module').then(m => m.TabRopaPageModule)
      },
      {
        path: 'tabOtros',
        loadChildren: () => import('../tabsTienda/tabOtros/tabOtros.module').then(m => m.TabOtrosPageModule)
      },
      {
        path: 'tienda',
        redirectTo: '/tabsTienda/tabDiscos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsTiendaPageRoutingModule {}
