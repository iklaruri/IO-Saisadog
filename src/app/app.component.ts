import {Component, OnInit} from '@angular/core';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public selectedIndex = 0;
  public grupo1 = [
    {
      title: 'Inicio',
      url: '/inbox',
      icon: 'home'
    },
    {
      title: 'Tienda',
      url: '/tienda/tabsTienda/tabDiscos',
      icon: 'basket'
    },
    {
      title: 'Novedades',
      url: '/novedades',
      icon: 'megaphone'
    },
    {
      title: 'Artistas',
      url: '/artistas',
      icon: 'disc'
    },
    {
      title: 'Generos',
      url: '/generos',
      icon: 'musical-note'
    }
  ];


  public grupo2 = [
    {
      title: 'Login/Logout',
      url: '/login',
      icon: 'home'
    },
    {
      title: 'Cuenta',
      url: '/cuenta/tabsCuenta/tabCarrito',
      icon: 'person'
    }
  ];

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.hide();
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {    

        this.selectedIndex = this.grupo1.findIndex(page => page.title.toLowerCase() === path.toLowerCase());

    }
  }
}
