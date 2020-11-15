import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm = {'email':'', 'usuario':'','password':'','direccion':'','tlf':'','foto':''};

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

  }

}
