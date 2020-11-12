import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVICIO, httpOptions } from '../config/config';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  login(usuario:Usuario): Observable<any>
  {
    return this.httpClient.post(URL_SERVICIO + "/usuario/login", usuario,httpOptions);
  }

}
