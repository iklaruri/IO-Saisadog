import { Component } from '@angular/core';
import { MbscScrollViewOptions } from '@mobiscroll/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-tabDisco',
  templateUrl: 'tabDisco.page.html',
  styleUrls: ['tabDisco.page.scss']
})
export class TabDiscoPage {

  cds:Producto[]=[];
  albumDigitales:Producto[]=[];
  vinilos:Producto[]=[];

  constructor(private productoService:ProductoService,public loadingController:LoadingController) { }

  scrollViewOptions: MbscScrollViewOptions = {
      layout: 'fixed',
      itemWidth: 100,
      snap: false
  };

  async obtenerProductos()
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

    this.productoService.getProductosPorTipo(1).subscribe(data =>
    {
      this.cds = data;
      loading.dismiss();
    })

    this.productoService.getProductosPorTipo(4).subscribe(data =>
    {
      this.albumDigitales = data;
      loading.dismiss();
    })

    this.productoService.getProductosPorTipo(5).subscribe(data =>
    {
      this.vinilos = data;
      loading.dismiss();
    })

  }

  ngOnInit() {
    this.obtenerProductos();
  }

}
