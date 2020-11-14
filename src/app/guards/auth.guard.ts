import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService:UsuarioService,private router:Router){

 }

 canActivate():boolean{
   if(this.usuarioService.autenticado()){
     return true;
   }else{
     this.router.navigateByUrl('/login');
     return false;
   }
 }

}
