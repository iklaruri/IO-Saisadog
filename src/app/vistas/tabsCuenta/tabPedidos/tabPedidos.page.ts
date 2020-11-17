import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/servicios/venta.service';
import { LoadingController } from '@ionic/angular';
import { Pedido } from 'src/app/model/pedido';
import { DetallePedido } from 'src/app/model/detallePedido';


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
  pedidos:Pedido[]=[];
  pedido:Pedido;
  detallePedidos:DetallePedido[]=[];
  mostrar = false;


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
      data.forEach(data => {
        this.pedido = new Pedido();
        this.pedido.id = data.idVenta;
        this.pedido.fecha = data.fecha;
        console.log(this.pedido);
        
        this.ventaService.obtenerDetallesPedido(this.pedido.id,this.fecha).subscribe(data => {
          console.log(data);
          this.pedido.detallePedidos = data;
          this.pedidos.push(this.pedido);
          this.detallePedidos=[];
        }, err => {
          console.log(err);
          loading.dismiss();
        });
      });

      loading.dismiss();

    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  obtenerPedidos(mes)
  {
    this.fecha = this.anio + "-" + mes.valor;
    this.historialPedidos(this.codUsuario,this.fecha);
  }

  mostrarDetallePedidos(){
    if(this.mostrar === false){
      this.mostrar=true;
    }else{
      this.mostrar=false;
    }
  }

  ngOnInit() {

  }

}
