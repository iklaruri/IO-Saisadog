import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarioForm = {'id':-1,'usuario':'', 'password':'','direccion':'','email':'','tlf':'','foto':''};
  usuario = new Usuario();

  constructor(private loadingController: LoadingController, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {

  }

  async login() {
    const loading = await this.loadingController.create(
      {message: 'Cargando'}
    );

    await loading.present();

    this.usuarioService.login(this.usuarioForm).subscribe(data => {
      this.usuario = data;
      this.usuarioForm = {'id':-1,'usuario':'', 'password':'','direccion':'','email':'','tlf':'','foto':''};

      if(this.usuario != null)
      {
        localStorage.setItem('usuario',JSON.stringify(this.usuario.usuario));
        this.router.navigateByUrl('info');
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

}