import { Component, OnInit } from '@angular/core';
import { MbscScrollViewOptions, MbscNavOptions, MbscListviewOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  categorySettings: MbscNavOptions = {
      theme: 'ios',
      themeVariant: 'light'
  };

  contentSettings: MbscScrollViewOptions = {
      theme: 'ios',
      themeVariant: 'light',
      layout: 1,
      paging: true,
      threshold: 15,
      cssClass: 'md-page',
      onAnimationStart: (event, inst) => {
          const selectedIndex = parseInt((-(event.destinationX / inst.contWidth)).toString(), 10);
      }
  };

  listviewSettings: MbscListviewOptions = {
      theme: 'ios',
      themeVariant: 'light',
      swipe: false,
      striped: true,
      enhance: true
  };
;

data = {
    pop: [
        { id: 1, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 2, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 3, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 4, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 5, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 6, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 7, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 8, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 9, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 10, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 12, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 13, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 14, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 15, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 16, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 17, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 18, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 19, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 20, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 21, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 22, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
        { id: 23, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele', genero: 'pop'},
    ]
};

}
