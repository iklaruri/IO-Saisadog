import { Component } from '@angular/core';

import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';
import { Producto } from 'src/app/model/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabDisco',
  templateUrl: 'tabDisco.page.html',
  styleUrls: ['tabDisco.page.scss']
})
export class TabDiscoPage {

  cds:Producto[]=[];
  albumDigitales:Producto[]=[];
  vinilos:Producto[]=[];
  discos:Producto[]=[];
  constructor(private productoService:ProductoService,private router:Router,public loadingController:LoadingController) { }


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

  async buscarDiscosPorTermino(termino){
    this.productoService.getDiscosPorTermino(termino).subscribe(data => {
      this.discos = data;
      this.discos.forEach(producto =>
      {
        if(producto.tipo=="CD")
        {
          this.cds.push(producto);
        }

        if(producto.tipo=="AlbumDigital")
        {
          this.albumDigitales.push(producto);
        }

        if(producto.tipo=="Vinilo")
        {
          this.vinilos.push(producto);
        }
      });

    }, err => {
      console.log(err);

    });
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

  buscarDiscos(termino)
  {
    if(termino != '')
    {
      this.cds = [];
      this.albumDigitales = [];
      this.vinilos = [];
      this.buscarDiscosPorTermino(termino);
    }else{
      this.obtenerProductos();
    }
  }

  ngOnInit() {
    this.obtenerProductos();
  }

}
