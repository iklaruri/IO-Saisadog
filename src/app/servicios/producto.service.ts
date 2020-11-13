import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/producto';
import { URL_SERVICIO, httpOptions } from '../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) {}

  getProducto(codProducto,fecha): Observable<Producto> {
    return this.httpClient.get<Producto>(URL_SERVICIO + "/producto/obtenerProducto/" + codProducto + "/" + fecha,httpOptions);
  }

  getProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(URL_SERVICIO + "/producto/obtener",httpOptions);
  }

  getProductosPorTipo(tipo:number): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(URL_SERVICIO + "/producto/obtenerPorTipo/" + tipo,httpOptions);
  }

  getProductosPorArtista(artista:number): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(URL_SERVICIO + "/producto/obtenerPorArtista/" + artista,httpOptions);
  }

  getProductosPorGenero(genero:number): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(URL_SERVICIO + "/producto/obtenerPorGenero/" + genero,httpOptions);
  }

  getProductosNovedades(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(URL_SERVICIO + "/producto/obtenerNovedades",httpOptions);
  }
}
