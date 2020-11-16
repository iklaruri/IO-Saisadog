import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm:FormGroup;
  mensaje;

  constructor(private loadingController: LoadingController, private usuarioService: UsuarioService, private router: Router) {

  }

  async registro(){
    const loading = await this.loadingController.create(
      {message: 'Cargando'}
    );

    await loading.present();
    
    this.usuarioService.registrar(this.registroForm.value).subscribe(data => {
        loading.dismiss();
        this.mensaje = data['status'];
        if(this.mensaje === "Usuario ya existe")
        {
          Swal.fire({
            allowOutsideClick:false,
            icon:'error',
            text:this.mensaje
          });
          this.router.navigateByUrl('/registro');
        }else
        {
          Swal.fire({
            allowOutsideClick:false,
            icon:'success',
            text:this.mensaje
          });
          this.router.navigateByUrl('/login');
        }

    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  enviarFormulario()
  {
    this.registro();
  }

  ngOnInit(){

    this.registroForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      tlf:  new FormControl(null, Validators.required)
    });

  }

}
