import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/model/carrito';
import { LoadingController } from '@ionic/angular';
import { VentaService } from 'src/app/servicios/venta.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { exit } from 'process';

@Component({
  selector: 'app-tabCarrito',
  templateUrl: 'tabCarrito.page.html',
  styleUrls: ['tabCarrito.page.scss']
})
export class TabCarritoPage implements OnInit{

  ventaForm = {'codUsuario':JSON.parse(localStorage.getItem('usuario')),'fecha':'','direccion':''};
  detalleVentaForm = {'codProducto':0,'cantidad':0};
  carrito = new Carrito();
  precioRestar = 0;
  carritoVacio = true;
  latitud;
  longitud;


  constructor(private loadingController: LoadingController,private productoService:ProductoService,
    private ventaService:VentaService,public router:Router,private geolocation:Geolocation) {

    if(!JSON.parse(localStorage.getItem('carrito')))
    {
      this.carritoVacio = true;
      exit;
    }else
    {
      this.carrito.productos = JSON.parse(localStorage.getItem('carrito'));
      this.carrito.preciofinal = 0;
      if(this.carrito.productos.length > 0){
        this.carrito.productos.forEach(carritoProducto => {
          carritoProducto.precio = carritoProducto.precio*carritoProducto.cantidad;
          this.carrito.preciofinal = this.carrito.preciofinal+carritoProducto.precio;
        });
      this.carritoVacio = false;
      }else{
        this.carrito.productos.length = 0;
        this.carritoVacio = true;
      }
    }

  }


  obtenerGeolocalizacion()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
      this.ventaForm.direccion = this.latitud + " " + this.longitud;

    }).catch((error) => {
      Swal.fire({
        allowOutsideClick:false,
        icon:'error',
        text:'Error al conseguir la ubicación'
      });

    });


  }

  async anadirVenta()
  {
    const loading = await this.loadingController.create(
      {message: 'Cargando'}
    );

    await loading.present();

    this.ventaForm.fecha = this.obtenerFecha();

    let getUbicacion = false;

    if(this.ventaForm.direccion != null)
    {
      getUbicacion = true;
    }else{
      getUbicacion = false;
    }

    if(getUbicacion === true)
    {
      this.ventaService.anadirVenta(this.ventaForm).subscribe(data => {

        this.carrito.productos.forEach(carritoProducto => {
          this.detalleVentaForm.codProducto = carritoProducto.id;
          this.detalleVentaForm.cantidad = carritoProducto.cantidad;

          carritoProducto.stock = carritoProducto.stock-carritoProducto.cantidad;
          const stockProducto = {'codProducto':carritoProducto.id,'stock':carritoProducto.stock};

          this.productoService.actualizarStock(stockProducto).subscribe(data => {

            if(carritoProducto.tipo === "Ropa")
            {
              carritoProducto.talla.stock = carritoProducto.talla.stock-carritoProducto.cantidad;
              const stockProductoTalla = {'codTallaje':carritoProducto.talla.id,'codProducto':carritoProducto.id,'stock':carritoProducto.talla.stock};

              this.productoService.actualizarRopaStock(stockProductoTalla).subscribe(data => {
                console.log(data);
              },err => {
                console.log(err);
                loading.dismiss();
              });
            }
          }, err => {
            console.log(err);
            loading.dismiss();
          });

          this.ventaService.anadirdetalleVenta(this.detalleVentaForm).subscribe(data => {
            loading.dismiss();
            localStorage.removeItem('carrito');
            Swal.fire({
              allowOutsideClick:false,
              icon:'success',
              text:'Pedido realizado'
            });
            this.router.navigateByUrl('');
          }, err => {
            console.log(err);
            loading.dismiss();
          });

        });

      }, err => {
        console.log(err);
      });
    }else{
      loading.dismiss();
      return;
    }

  }

  eliminarProducto(index:number,carritoProducto)
  {
    this.precioRestar = carritoProducto.precio*carritoProducto.cantidad;
    this.carrito.preciofinal = this.carrito.preciofinal-this.precioRestar;
    this.carrito.productos.splice(index,1);
    localStorage.setItem('carrito',JSON.stringify(this.carrito.productos));
    if(this.carrito.productos.length === 0){
      this.carritoVacio = true;
    }
  }

  aumentarCantidad(carritoProducto)
  {
    carritoProducto.cantidad = carritoProducto.cantidad+1;
    this.carrito.preciofinal = this.carrito.preciofinal+carritoProducto.precio;
  }

  disminuirCantidad(carritoProducto)
  {
    carritoProducto.cantidad = carritoProducto.cantidad-1;
    this.carrito.preciofinal = this.carrito.preciofinal-carritoProducto.precio;
  }



  obtenerFecha(){
    let date_ob = new Date();
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let day = ("0" + (date_ob.getDay() + 1)).slice(-2);
    let hour = ("0" + (date_ob.getHours())).slice(-2);
    let minutes = ("0" + (date_ob.getMinutes() + 1)).slice(-2);
    let seconds = ("0" + (date_ob.getSeconds() + 1)).slice(-2);

    let fecha = year + "-" + month  + "-" + day + " " + hour + ":" + minutes + ":" + seconds;

    return fecha;
  }

  realizarPedido()
  {
    this.anadirVenta();
  }

  ngOnInit(){
    this.obtenerGeolocalizacion();
  }

}
