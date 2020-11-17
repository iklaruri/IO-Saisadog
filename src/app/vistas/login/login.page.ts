import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarioForm = {'usuario':'', 'password':''};
  usuario = new Usuario();
  tokenUsuario;


  constructor(private loadingController: LoadingController, private usuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit() {

  }


  ionViewWillEnter()
  {
    if(JSON.parse(localStorage.getItem('usuario')))
    {
      this.tokenUsuario = JSON.parse(localStorage.getItem('usuario'));
    }else
    {
      this.tokenUsuario = null;
    }
  }

  async login() {
    const loading = await this.loadingController.create(
      {message: 'Cargando'}
    );

    await loading.present();

    this.usuarioService.login(this.usuarioForm).subscribe(data => {
      this.usuario = data;
      this.usuarioForm = {'usuario':'', 'password':''};

      if(this.usuario != null)
      {
        localStorage.setItem('usuario',JSON.stringify(this.usuario.id));
        this.expiraSesion();

        this.router.navigateByUrl('');

      }else
      {

        Swal.fire({
          allowOutsideClick:false,
          icon:'error',
          text:'Error al autenticar'
        });
      }

      loading.dismiss();


    }, err => {
      console.log(err);
      loading.dismiss();
    });

  }


  enviarFormulario()
  {
    this.login();
  }

  desconectarse()
  {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  expiraSesion()
  {
    let tiempo = 1;
    let inicioSesion = new Date().getTime();
    let expira = localStorage.getItem('expira');
    if (expira == null) {
        localStorage.setItem('expira', JSON.stringify(inicioSesion));
    } else {
        if(inicioSesion - Number(expira) > tiempo*60*60*1000) {
            localStorage.clear();
        }
    }
  }



}
