import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';
import { UsuarioService } from 'src/app/servicios/usuario.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  providers:[
    UsuarioService
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
