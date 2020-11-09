import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVICIO, httpOptions } from '../config/config';
import { Genero } from '../model/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private httpClient: HttpClient) {}

  getGeneros(): Observable<Genero[]> {
    return this.httpClient.get<Genero[]>(URL_SERVICIO + "/genero/obtener",httpOptions);
  }
}
