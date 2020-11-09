import { Component } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabOtros',
  templateUrl: 'tabOtros.page.html',
  styleUrls: ['tabOtros.page.scss']
})
export class TabOtrosPage {

  otros:Producto[]=[];

  constructor(private productoService:ProductoService,public loadingController:LoadingController) { }


  async obtenerProductos()
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

    this.productoService.getProductosPorTipo(3).subscribe(data =>
    {
      this.otros = data;
      loading.dismiss();
    })

  }

  ngOnInit() {
    this.obtenerProductos();
  }

}
