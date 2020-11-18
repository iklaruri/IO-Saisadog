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
  mostrar = -1;


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
        data.forEach(res => {
         this.ventaService.obtenerDetallesPedido(res.idVenta,this.fecha).subscribe(data => {
            this.pedido = new Pedido();
            this.pedido.id = res.idVenta;
            this.pedido.fecha = res.fecha;
            this.pedido.detallePedidos = data;
            this.pedidos.push(this.pedido);
          });
        });
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      })

  }

  obtenerPedidos(mes)
  {
    this.fecha = this.anio + "-" + mes.valor;
    this.historialPedidos(this.codUsuario,this.fecha);
    this.pedidos = [];
  }

  mostrarDetallePedidos(index){
   if(index==this.mostrar){
     this.mostrar=-1;
   }else{
     this.mostrar=index;
   }

  }

  ngOnInit() {

  }

}
