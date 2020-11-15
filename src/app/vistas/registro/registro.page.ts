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

  constructor(private loadingController: LoadingController, private usuarioService: UsuarioService, private router: Router) {

  }

  async registro(){
    const loading = await this.loadingController.create(
      {message: 'Cargando'}
    );

    await loading.present();

    this.usuarioService.registrar(this.registroForm).subscribe(data => {
        loading.dismiss();
        Swal.fire({
          allowOutsideClick:false,
          icon:'success',
          text:'Registro completado'
        });
        this.router.navigateByUrl('/login');
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  enviarFormulario()
  {
    console.log(this.registroForm);
    this.registro();
  }

  ngOnInit(){

    this.registroForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      tlf:  new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(9),Validators.minLength(9)]),
    });

  }

}
