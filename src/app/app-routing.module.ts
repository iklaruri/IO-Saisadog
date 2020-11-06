import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./vistas/inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./vistas/inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'tienda',
    loadChildren: () => import('./vistas/tabsTienda/tabsTienda.module').then(m => m.TabsTiendaPageModule)
  },
  {
    path: 'novedades',
    loadChildren: () => import('./vistas/novedades/novedades.module').then( m => m.NovedadesPageModule)
  },
  {
    path: 'artistas',
    loadChildren: () => import('./vistas/artistas/artistas.module').then( m => m.ArtistasPageModule)
  },
  {
    path: 'generos',
    loadChildren: () => import('./vistas/generos/generos.module').then( m => m.GenerosPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./vistas/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./vistas/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./vistas/carrito/carrito.module').then( m => m.CarritoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
