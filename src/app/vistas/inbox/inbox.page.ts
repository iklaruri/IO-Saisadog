import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


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

    constructor(private productoService:ProductoService,private router:Router,public loadingController:LoadingController) { }

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
          if(producto.tipo=="CD" || producto.tipo=="Album Digital" || producto.tipo=="Vinilo")
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

    mostrarProducto(codProducto)
    {
      let date_ob = new Date();
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      // current year
      let year = date_ob.getFullYear();

      let fecha = year + "-" + month;
      this.router.navigateByUrl('/producto/' + codProducto + "/" + fecha);
    }

    ngOnInit() {
      this.obtenerProductos();
    }


}
