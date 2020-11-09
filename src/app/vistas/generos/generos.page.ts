import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/model/genero';
import { LoadingController } from '@ionic/angular';
import { GeneroService } from 'src/app/servicios/genero.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.page.html',
  styleUrls: ['./generos.page.scss'],
})
export class GenerosPage implements OnInit {

  generos:Genero[]=[];

  constructor(private generoService:GeneroService,public loadingController:LoadingController) { }

  async obtenerGeneros()
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

    this.generoService.getGeneros().subscribe(data =>
    {
      this.generos = data;
      loading.dismiss();
    })

  }

  ngOnInit() {
    this.obtenerGeneros();
  }

}
