import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-generosProductos',
  templateUrl: './generosProductos.page.html',
  styleUrls: ['./generosProductos.page.scss'],
})

export class GenerosProductosPage implements OnInit {

  codGenero: string;
  productos:Producto[]=[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private productoService:ProductoService,private loadingController:LoadingController){}

  async obtenerProductos(codGenero)
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

      this.productoService.getProductosPorGenero(codGenero).subscribe(data => {
        this.productos = data;        
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  mostrarProducto(codProducto)
  {
    let date_ob = new Date();
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();

    let fecha = year + "-" + month;
    this.router.navigateByUrl('/producto/' + codProducto + "/" + fecha);
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
    this.codGenero = params.get('codGenero');
    });

    this.obtenerProductos(this.codGenero);
  }


}
