import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Talla } from '../model/talla';
import { URL_SERVICIO, httpOptions } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class TallaService {

  constructor(private httpClient: HttpClient) { }

  getTallas(codProducto):Observable<Talla[]>
  {
    return this.httpClient.get<Talla[]>(URL_SERVICIO + "/talla/obtener/" + codProducto,httpOptions);
  }
}
