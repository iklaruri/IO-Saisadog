import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabPerfil',
  templateUrl: 'tabPerfil.page.html',
  styleUrls: ['tabPerfil.page.scss']
})
export class TabPerfilPage implements OnInit{

  usuario = new Usuario();
  perfilForm:FormGroup;
  codUsuario;
  mensaje;


  constructor(private usuarioService:UsuarioService, private loadingController:LoadingController, private router:Router) {
    this.codUsuario = JSON.parse(localStorage.getItem('usuario'));
  }

  async obtenerUsuario(codUsuario)
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

    this.usuarioService.getUsuario(this.codUsuario).subscribe(data => {
      this.usuario = data;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  async actualizarPerfil()
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();
    console.log(this.perfilForm);

    this.usuarioService.actualizar(this.perfilForm.value).subscribe(data => {
      this.mensaje = data['status'];
      loading.dismiss();
      Swal.fire({
        allowOutsideClick:false,
        icon:'success',
        text:this.mensaje
      });
      this.router.navigateByUrl('');
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  enviarFormulario(){
    this.actualizarPerfil();
  }

  ngOnInit() {
    this.obtenerUsuario(this.codUsuario);

    this.perfilForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      tlf:  new FormControl(null, Validators.required)
    });
  }

}
