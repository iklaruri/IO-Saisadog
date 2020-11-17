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
  detallePedido:DetallePedido;
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
      let codVenta = 0;
      console.log(data);
      data.forEach(data => {

          if(codVenta === 0)
          {
            codVenta = data.idVenta;

            this.pedido = new Pedido();
            this.pedido.id = data.idVenta;
            this.pedido.fecha = data.fecha;

            this.detallePedido = new DetallePedido();
            this.detallePedido.id = data.idDetalle;
            this.detallePedido.artista = data.artista;
            this.detallePedido.cantidad = data.cantidad;
            this.detallePedido.imagen = data.ruta;
            this.detallePedido.producto = data.producto;
            this.detallePedido.precio = data.precio;
          }else{
            if(codVenta === data.idVenta)
            {
              this.detallePedido = new DetallePedido();
              this.detallePedido.id = data.idDetalle;
              this.detallePedido.artista = data.artista;
              this.detallePedido.cantidad = data.cantidad;
              this.detallePedido.imagen = data.ruta;
              this.detallePedido.producto = data.producto;
              this.detallePedido.precio = data.precio;

            }else
            {
              codVenta = 0;

            }
          }
          this.detallePedidos.push(this.detallePedido);
          this.pedido.detallePedidos = this.detallePedidos;
      });
      this.pedidos.push(this.pedido);
      console.log(this.pedidos);
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
