import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVICIO, httpOptions } from '../config/config';



@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  usuarioToken;

  constructor(private httpClient: HttpClient) { }

  login(usuario:any): Observable<any>
  {
    return this.httpClient.post(URL_SERVICIO + "/usuario/login", usuario,httpOptions);
  }

  registrar(usuario:any):Observable<any>
  {
    return this.httpClient.post(URL_SERVICIO + "/usuario/anadir", usuario,httpOptions);
  }

  actualizar(usuario:any):Observable<any>
  {
    return this.httpClient.put(URL_SERVICIO + "/usuario/actualizar", usuario,httpOptions);
  }

  getUsuario(codUsuario):Observable<any>
  {
    return this.httpClient.get(URL_SERVICIO + "/usuario/obtener/" + codUsuario,httpOptions);
  }


  autenticado()
  {
    this.usuarioToken = JSON.parse(localStorage.getItem('usuario'));
    if(this.usuarioToken)
    {
      return true;
    }else{
      return false;
    }

  }

}
