import { HttpHeaders } from '@angular/common/http';

export const URL_SERVICIO = "http://192.168.0.135:8000/ws/saisadog";
export const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
