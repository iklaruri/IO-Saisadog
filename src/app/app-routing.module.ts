import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArtistaProductosPage } from './vistas/artistas/productos/artistaProductos';
import { GenerosProductosPage } from './vistas/generos/productos/generosProductos';


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
    path: 'artistas/productos/:codArtista',
    component: ArtistaProductosPage
  },
  {
    path: 'generos',
    loadChildren: () => import('./vistas/generos/generos.module').then( m => m.GenerosPageModule)
  },
  {
    path: 'generos/productos/:codGenero',
    component: GenerosProductosPage
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./vistas/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'cuenta/info',
    loadChildren: () => import('./vistas/tabsCuenta/tabsCuenta.module').then( m => m.TabsCuentaPageModule)
  },
  {
    path: 'producto/:codProducto/:fecha',
    loadChildren: () => import('./vistas/producto/producto.module').then( m => m.ProductoPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
