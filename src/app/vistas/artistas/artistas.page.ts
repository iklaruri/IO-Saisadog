import { Component, OnInit } from '@angular/core';
import { ArtistaService } from 'src/app/servicios/artista.service';
import { Artista } from 'src/app/model/artista';
import { LoadingController } from '@ionic/angular';
import { Router} from '@angular/router';


@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {

  artistas:Artista[]=[];

  constructor(private artistaService:ArtistaService,private router:Router,public loadingController:LoadingController) { }

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

  async buscarArtistasPorTermino(termino)
  {
    this.artistaService.getArtistasPorTermino(termino).subscribe(data => {
      this.artistas = data;

    }, err => {
      console.log(err);

    });
  }

  buscarArtistas(termino)
  {
    if(termino != '')
    {
      this.artistas = [];
      this.buscarArtistasPorTermino(termino);
    }else{
      this.obtenerArtistas();
    }
  }

  mostrarProductos(codArtista)
  {
    this.router.navigateByUrl('artistas/productos/' + codArtista);
  }

  ngOnInit()
  {
    this.obtenerArtistas();
  }


}
