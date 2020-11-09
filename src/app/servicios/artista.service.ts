import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artista } from '../model/artista';
import { httpOptions, URL_SERVICIO } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  constructor(private httpClient: HttpClient) { }

  getArtistas(): Observable<Artista[]> {
    return this.httpClient.get<Artista[]>(URL_SERVICIO + "/artista/obtener",httpOptions);
  }

  getArtistasNovedades(): Observable<Artista[]> {
    return this.httpClient.get<Artista[]>(URL_SERVICIO + "/artista/obtenerNovedades",httpOptions);
  }
}
