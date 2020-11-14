import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVICIO, httpOptions } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private httpClient: HttpClient) { }

  anadirVenta(venta): Observable<any>
  {
    return this.httpClient.post(URL_SERVICIO + "/venta/anadir", venta,httpOptions);
  }

  anadirdetalleVenta(detalleVenta): Observable<any>
  {
    return this.httpClient.post(URL_SERVICIO + "/detalleVenta/anadir", detalleVenta,httpOptions);
  }
}
