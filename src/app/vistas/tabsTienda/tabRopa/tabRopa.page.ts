import { Component } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';
import { Producto } from 'src/app/model/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabRopa',
  templateUrl: 'tabRopa.page.html',
  styleUrls: ['tabRopa.page.scss']
})
export class TabRopaPage {


  ropas:Producto[]=[];

  constructor(private productoService:ProductoService,private router:Router,public loadingController:LoadingController) { }


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
