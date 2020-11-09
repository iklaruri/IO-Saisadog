import { Component, OnInit } from '@angular/core';
import { MbscScrollViewOptions } from '@mobiscroll/angular';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';


@Component({
    selector: 'app-inobx',
    templateUrl: './inbox.page.html',
    styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

    productos:Producto[]=[];
    discos:Producto[]=[];
    ropas:Producto[]=[];
    otros:Producto[]=[];

    constructor(private productoService:ProductoService,public loadingController:LoadingController) { }

    scrollViewOptions: MbscScrollViewOptions = {
        layout: 'fixed',
        itemWidth: 100,
        snap: false
    };

    async obtenerProductos()
    {
      const loading = await this.loadingController.create(
      {
        message:'Cargando'
      });

      await loading.present();

      this.productoService.getProductos().subscribe(data =>
      {        
        this.productos = data;
        loading.dismiss();
        this.productos.forEach(producto =>
        {
          if(producto.tipo=="CD" || producto.tipo=="Album Digital")
          {
            this.discos.push(producto);
          }

          if(producto.tipo=="Ropa")
          {
            this.ropas.push(producto);
          }

          if(producto.tipo=="Otros")
          {
            this.otros.push(producto);
          }

        });
      })

    }

    ngOnInit() {
      this.obtenerProductos();
    }


}
