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

  getProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(URL_SERVICIO + "/producto/obtener",httpOptions);
  }

  getProductosPorTipo(tipo:number): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(URL_SERVICIO + "/producto/obtenerPorTipo/" + tipo,httpOptions);
  }

  getProductosNovedades(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(URL_SERVICIO + "/producto/obtenerNovedades",httpOptions);
  }
}
