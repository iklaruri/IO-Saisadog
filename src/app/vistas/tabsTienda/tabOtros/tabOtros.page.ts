import { Component } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabOtros',
  templateUrl: 'tabOtros.page.html',
  styleUrls: ['tabOtros.page.scss']
})
export class TabOtrosPage {

  otros:Producto[]=[];

  constructor(private productoService:ProductoService,private router:Router,public loadingController:LoadingController) { }


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

  ngOnInit() {
    this.obtenerProductos();
  }

}
