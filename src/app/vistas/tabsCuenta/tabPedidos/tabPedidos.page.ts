import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/servicios/venta.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabPedidos',
  templateUrl: 'tabPedidos.page.html',
  styleUrls: ['tabPedidos.page.scss']
})
export class TabPedidosPage implements OnInit{

  anio=new Date().getFullYear();
  meses=[{'nombre':'Enero','valor':'01'},{'nombre':'Febrero','valor':'02'},{'nombre':'Marzo','valor':'03'},{'nombre':'Abril','valor':'04'},
  {'nombre':'Mayo','valor':'05'},{'nombre':'Junio','valor':'06'},{'nombre':'Julio','valor':'07'},{'nombre':'Agosto','valor':'08'},
  {'nombre':'Septiembre','valor':'09'},{'nombre':'Octubre','valor':'10'},{'nombre':'Noviembre','valor':'11'},{'nombre':'Diciembre','valor':'12'}
  ];

  fecha;
  codUsuario;
  pedidos:any[]=[];

  constructor(private ventaService:VentaService,private loadingController:LoadingController) {
    this.codUsuario = JSON.parse(localStorage.getItem('usuario'));
  }

  async historialPedidos(codUsuario,fecha)
  {
    const loading = await this.loadingController.create(
    {
      message:'Cargando'
    });

    await loading.present();

    this.ventaService.obtenerPedidos(this.codUsuario,this.fecha).subscribe(data => {
      this.pedidos = data;
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  obtenerPedidos(mes)
  {
    this.fecha = this.anio + "-" + mes.valor;
    console.log(this.fecha);
    this.historialPedidos(this.codUsuario,this.fecha);
  }

  ngOnInit() {

  }

}
