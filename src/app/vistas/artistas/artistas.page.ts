import { Component, OnInit } from '@angular/core';
import { ArtistaService } from 'src/app/servicios/artista.service';
import { Artista } from 'src/app/model/artista';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {

  artistas:Artista[]=[];

  constructor(private artistaService:ArtistaService,public loadingController:LoadingController) { }

  async obtenerArtistas()
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

    this.artistaService.getArtistas().subscribe(data =>
    {
      this.artistas = data;
      loading.dismiss();
    })

  }

  ngOnInit() {
    this.obtenerArtistas();
  }


}
