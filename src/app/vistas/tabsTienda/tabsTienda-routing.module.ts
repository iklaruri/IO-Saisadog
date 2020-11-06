import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
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
        path: 'tabMerch',
        loadChildren: () => import('../tabsTienda/tabMerch/tabMerch.module').then(m => m.TabMerchPageModule)
      },
      {
        path: 'tabRopa',
        loadChildren: () => import('../tabsTienda/tabRopa/tabRopa.module').then(m => m.TabRopaPageModule)
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
    MbscModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsTiendaPageRoutingModule {}
