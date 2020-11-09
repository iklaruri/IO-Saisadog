import { Component, OnInit } from '@angular/core';
import { MbscScrollViewOptions } from '@mobiscroll/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';
import { ArtistaService } from 'src/app/servicios/artista.service';
import { Producto } from 'src/app/model/producto';
import { Artista } from 'src/app/model/artista';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {

  productos:Producto[]=[];
  artistas:Artista[]=[];

  constructor(private productoService:ProductoService,private artistaService:ArtistaService,public loadingController:LoadingController) { }

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

  ngOnInit() {
    this.obtenerNovedades();
  }

}
