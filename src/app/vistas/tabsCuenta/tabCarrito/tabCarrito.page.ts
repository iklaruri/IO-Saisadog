import { Component } from '@angular/core';
import { Carrito } from 'src/app/model/carrito';

@Component({
  selector: 'app-tabCarrito',
  templateUrl: 'tabCarrito.page.html',
  styleUrls: ['tabCarrito.page.scss']
})
export class TabCarritoPage {

  carrito = new Carrito();

  constructor() {
    this.carrito.productos = JSON.parse(localStorage.getItem('carrito'));
  }

  eliminarProducto(index:number)
  {
    this.carrito.productos.splice(index);
    localStorage.setItem('carrito',JSON.stringify(this.carrito.productos));
  }

}
