import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/model/producto';

import Swal from 'sweetalert2';
import { exit } from 'process';
import { Talla } from 'src/app/model/talla';
import { TallaService } from 'src/app/servicios/talla.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  codProducto: string;
  fecha: string;
  producto = new Producto();
  talla1 = {'id':-1,'nombre':'','stock':0};
  productos:Producto[]=[];
  tallas:Talla[]=[];


  constructor(private activatedRoute:ActivatedRoute,private router:Router,private productoService:ProductoService,
    private tallaService:TallaService,public loadingController:LoadingController) {

    if(JSON.parse(localStorage.getItem('carrito')))
    {
      this.productos = JSON.parse(localStorage.getItem('carrito'));
    }else{
      this.productos.length = 0;
    }

  }



  async obtenerProducto(codProducto,fecha)
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

      this.productoService.getProducto(codProducto,fecha).subscribe(data => {
        this.producto = data;
        loading.dismiss();

        if(this.producto.tipo === "Ropa")
        {
          let index = 1;
          this.tallaService.getTallas(this.producto.id).subscribe(data => {
              if(index == 1){
                this.talla1 = data[0];
                index = 20;
              }
              this.tallas = data;
              loading.dismiss();

          },err => {
            console.log(err);
            loading.dismiss();
          });
        }

      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }



  anadirAlCarrito()
  {

    this.producto.cantidad = 1;

    if(this.productos.length === 0)
    {
      if(this.producto.tipo === "Ropa")
      {
        this.producto.talla = this.obtenerTalla();
      }

      this.productos.push(this.producto);
      localStorage.setItem('carrito',JSON.stringify(this.productos));

      Swal.fire({
        allowOutsideClick:false,
        icon:'success',
        text:'Producto añadido al carrito'
      });
      this.router.navigateByUrl('');
    }else
    {
      let estaEnCarrito = false;

      if(this.producto.tipo === "Ropa")
      {
        this.producto.talla = this.obtenerTalla();
      }

      this.productos.forEach(productoCarrito => {

          if(productoCarrito.tipo === "Ropa"){
            if(this.producto.id === productoCarrito.id){
              if(this.producto.talla.id === productoCarrito.talla.id)
              {
                estaEnCarrito=true;
                exit;
              }
              else{
                estaEnCarrito=false;
                exit;
              }
            }
          }else{
            if(productoCarrito.id === this.producto.id){
              estaEnCarrito=true;
              exit;
            }
          }

      });

        if(estaEnCarrito)
        {
          Swal.fire({
            allowOutsideClick:false,
            icon:'warning',
            text:'El producto ya ha sido añadido al carrito'
          });
          this.router.navigateByUrl('');
        }else
        {
          this.productos.push(this.producto);
          localStorage.setItem('carrito',JSON.stringify(this.productos));

          Swal.fire({
            allowOutsideClick:false,
            icon:'success',
            text:'Producto añadido al carrito'
          });
          estaEnCarrito=false;
          this.router.navigateByUrl('');
        }

    }

  }

  obtenerTalla()
  {
    return this.talla1;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
    this.codProducto = params.get('codProducto');
    this.fecha = params.get('fecha')
  });

    this.obtenerProducto(this.codProducto,this.fecha);
  }

}
