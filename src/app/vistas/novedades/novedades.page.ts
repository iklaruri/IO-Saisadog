import { Component, OnInit } from '@angular/core';
import { MbscScrollViewOptions } from '@mobiscroll/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';
import { ArtistaService } from 'src/app/servicios/artista.service';
import { Producto } from 'src/app/model/producto';
import { Artista } from 'src/app/model/artista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {

  productos:Producto[]=[];
  artistas:Artista[]=[];

  constructor(private productoService:ProductoService,private artistaService:ArtistaService,private router:Router,public loadingController:LoadingController) { }

  scrollViewOptions: MbscScrollViewOptions = {
      layout: 'fixed',
      itemWidth: 100,
      snap: false
  };

  async obtenerNovedades()
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

    this.productoService.getProductosNovedades().subscribe(data =>
    {
      this.productos = data;
      loading.dismiss();
    })

    this.artistaService.getArtistasNovedades().subscribe(data =>
    {
      this.artistas = data;
      loading.dismiss();
    })

  }

  mostrarProducto(codProducto)
  {
    let date_ob = new Date();
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();

    let fecha = year + "-" + month;
    this.router.navigateByUrl('/producto/' + codProducto + "/" + fecha);
  }

  mostrarProductos(codArtista)
  {
    this.router.navigateByUrl('/artistas/productos/' + codArtista);
  }

  ngOnInit() {
    this.obtenerNovedades();
  }

}
