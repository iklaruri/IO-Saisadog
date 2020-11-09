import { Component } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-tabRopa',
  templateUrl: 'tabRopa.page.html',
  styleUrls: ['tabRopa.page.scss']
})
export class TabRopaPage {


  ropas:Producto[]=[];

  constructor(private productoService:ProductoService,public loadingController:LoadingController) { }


  async obtenerProductos()
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

    this.productoService.getProductosPorTipo(2).subscribe(data =>
    {
      this.ropas = data;
      loading.dismiss();
    })

  }

  ngOnInit() {
    this.obtenerProductos();
  }

}
