import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-artistasProductos',
  templateUrl: './artistaProductos.page.html',
  styleUrls: ['./artistaProductos.page.scss'],
})

export class ArtistaProductosPage implements OnInit {

  codArtista: string;
  productos:Producto[]=[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private productoService:ProductoService,private loadingController:LoadingController){}

  async obtenerProductos(codArtista)
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

      this.productoService.getProductosPorArtista(codArtista).subscribe(data => {
        this.productos = data;
        console.log(this.productos);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
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

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
    this.codArtista = params.get('codArtista');
    });

    this.obtenerProductos(this.codArtista);
  }


}
