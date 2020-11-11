import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/model/producto';
import { MbscScrollViewOptions } from '@mobiscroll/angular';
import Swal from 'sweetalert2';
import { exit } from 'process';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  codProducto: string;
  fecha: string;
  productoForm = {'id':-1,'producto':'','artista':'','tipo':'','precio':0,'stock':0};
  producto = new Producto();
  productos:Producto[]=[];


  constructor(private activatedRoute:ActivatedRoute,private router:Router, private productoService:ProductoService,
    public loadingController:LoadingController) {
    if(JSON.parse(localStorage.getItem('carrito')))
    {
      this.productos = JSON.parse(localStorage.getItem('carrito'));
    }else{
      this.productos.length = 0;
    }

  }

  scrollViewOptions: MbscScrollViewOptions = {
        layout: 'fixed',
        itemWidth: 100,
        snap: false
    };


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
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  anadirAlCarrito(producto:Producto)
  {

    if(this.productos.length === 0)
    {
      this.productos.push(producto);
      localStorage.setItem('carrito',JSON.stringify(this.productos));
      console.log("CARRITO NUEVO" + producto);
      Swal.fire({
        allowOutsideClick:false,
        icon:'success',
        text:'Producto añadido al carrito'
      });
    }else
    {
      let estaEnCarrito = false;
      this.productos.forEach(productoCarrito => {
        if(productoCarrito.id === producto.id){
          estaEnCarrito=true;
          exit;
        }

      });

        if(estaEnCarrito)
        {
          Swal.fire({
            allowOutsideClick:false,
            icon:'warning',
            text:'El producto ya ha sido añadido al carrito'
          });
        }else
        {
          this.productos.push(producto);
          localStorage.setItem('carrito',JSON.stringify(this.productos));
          console.log("CARRITO ACTUALIZADO" + producto);
          Swal.fire({
            allowOutsideClick:false,
            icon:'success',
            text:'Producto añadido al carrito'
          });
        }

    }

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
    this.codProducto = params.get('codProducto');
    this.fecha = params.get('fecha')
  });

    this.obtenerProducto(this.codProducto,this.fecha);
  }

}
