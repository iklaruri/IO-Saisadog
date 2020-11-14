import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm = {'id':-1,'email':'', 'usuario':'','password':'','direccion':'','tlf':'','foto':''};

  constructor(private loadingController: LoadingController, private usuarioService: UsuarioService, private router: Router) { }

  async registro() {
    const loading = await this.loadingController.create(
      {message: 'Cargando'}
    );

    // await loading.present();
    console.log(this.registroForm);

    this.usuarioService.registrar(this.registroForm).subscribe(data => {
      console.log(data);
      // loading.dismiss();

      this.router.navigateByUrl('/login');
    }, err => {
      console.log(err);
      // loading.dismiss();
    });

  }

  enviarFormRegistro()
  {
    this.registro();
  }


  ngOnInit() {

  }



}
