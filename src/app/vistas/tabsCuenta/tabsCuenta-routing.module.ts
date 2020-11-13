import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsCuentaPage } from './tabsCuenta.page';



const routes: Routes = [
  {
    path: 'tabsCuenta',
    component: TabsCuentaPage,
    children: [
      {
        path: 'tabPerfil',
        loadChildren: () => import('../tabsCuenta/tabPerfil/tabPerfil.module').then(m => m.TabPerfilPageModule)
      },
      {
        path: 'tabCarrito',
        loadChildren: () => import('../tabsCuenta/tabCarrito/tabCarrito.module').then(m => m.TabCarritoPageModule)
      },
      {
        path: 'tabPedidos',
        loadChildren: () => import('../tabsCuenta/tabPedidos/tabPedidos.module').then(m => m.TabPedidosPageModule)
      },
      {
        path: 'cuenta',
        redirectTo: '/tabsCuenta/tabCarrito',
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
export class TabsCuentaPageRoutingModule {}
