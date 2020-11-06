import { Component, OnInit } from '@angular/core';
import { MbscScrollViewOptions } from '@mobiscroll/angular';


@Component({
    selector: 'app-inobx',
    templateUrl: './inbox.page.html',
    styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

    constructor() {}

    scrollViewOptions: MbscScrollViewOptions = {
        layout: 'fixed',
        itemWidth: 100,
        snap: false
    };
  
    tienda = [{
        image: 'https://img.mobiscroll.com/demos/worms3.png',
        title: 'Worms 3',
        dev: 'Team 17 Digital Limited'
    }, {
        image: 'https://img.mobiscroll.com/demos/candycrush.png',
        title: 'Candy Crush Saga',
        dev: 'King'
    }, {
        image: 'https://img.mobiscroll.com/demos/angrybirds.png',
        title: 'Angry Birds',
        dev: 'Rovino'
    }, {
        image: 'https://img.mobiscroll.com/demos/nfs.png',
        title: 'Need for Speed™ No Limits',
        dev: 'ELECTRONIC ARTS'
    }, {
        image: 'https://img.mobiscroll.com/demos/heartstone.png',
        title: 'Hearthstone',
        dev: 'Blizzard Entertainment Inc.'
    }, {
        image: 'https://img.mobiscroll.com/demos/fruitninja.png',
        title: 'Fruit Ninja',
        dev: 'Halfbrick Studios'
    }, {
        image: 'https://img.mobiscroll.com/demos/subwaysurf.png',
        title: 'Subway Surfers',
        dev: 'Kiloo'
    }, {
        image: 'https://img.mobiscroll.com/demos/templerun.png',
        title: 'Temple Run',
        dev: 'Imangi Studios'
    }, {
        image: 'https://img.mobiscroll.com/demos/minecraft.png',
        title: 'Minecraft: Pocket Edition',
        dev: 'Mojang '
    }];

    articulos = [{
        image: 'https://img.mobiscroll.com/demos/vlc.png',
        title: 'VLC for Android',
        dev: 'Videolabs '
    }, {
        image: 'https://img.mobiscroll.com/demos/realplayer.png',
        title: 'RealPlayer®',
        dev: 'RealNetworks, Inc.',
    }, {
        image: 'https://img.mobiscroll.com/demos/motogal.png',
        title: 'Motorola Gallery',
        dev: 'Motorola Mobility LLC. '
    }, {
        image: 'https://img.mobiscroll.com/demos/revesemov.png',
        title: 'Reverse Movie FX',
        dev: 'Bizo Mobile'
    }, {
        image: 'https://img.mobiscroll.com/demos/sure.png',
        title: 'SURE Universal Remote',
        dev: 'Tekoia Ltd.'
    }, {
        image: 'https://img.mobiscroll.com/demos/ringdriod.png',
        title: 'Ringdroid',
        dev: 'Ringdroid Team '
    }, {
        image: 'https://img.mobiscroll.com/demos/funny.png',
        title: 'Funny Camera - Video Booth Fun',
        dev: 'Kiloo'
    }, {
        image: 'https://img.mobiscroll.com/demos/gif.png',
        title: 'GIF Keyboard',
        dev: 'IRiffsy, Inc.'
    }, {
        image: 'https://img.mobiscroll.com/demos/bs.png',
        title: 'BSPlayer',
        dev: 'BSPlayer media'
    }, {
        image: 'https://img.mobiscroll.com/demos/vac.png',
        title: 'video audio cutter',
        dev: 'mytechnosound '
    }];

    generos = [{
        image: 'https://img.mobiscroll.com/demos/netflix.png',
        title: 'Netflix',
        dev: 'Netflix, Inc. ',
        rank: 4.4
    }, {
        image: 'https://img.mobiscroll.com/demos/colorfy.png',
        title: 'Colorfy - Coloring Book Free',
        dev: 'Fun Games For Free',
        rank: 4.7
    }, {
        image: 'https://img.mobiscroll.com/demos/wego.png',
        title: 'Wego Flights & Hotels',
        dev: 'Wego.com',
        rank: 4.3
    }, {
        image: 'https://img.mobiscroll.com/demos/ali.png',
        title: 'Alibaba.com B2B Trade App',
        dev: 'Alibaba.com Hong Kong Limited ',
        rank: 4.1
    }, {
        image: 'https://img.mobiscroll.com/demos/5k.png',
        title: '5K Run: 5K Runner®',
        dev: 'Fitness22',
        rank: 4.4
    }, {
        image: 'https://img.mobiscroll.com/demos/nuzzelnws.png',
        title: 'Nuzzel News',
        dev: 'Nuzzel, Inc.',
        rank: 4.3
    }, {
        image: 'https://img.mobiscroll.com/demos/solarsysexpl.png',
        title: 'Solar System Explorer 3D',
        dev: 'Neil Burlock',
        rank: 4.5
    }, {
        image: 'https://img.mobiscroll.com/demos/elevate.png',
        title: 'Elevate - Brain Training',
        dev: 'Elevate Labs',
        rank: 4.5
    }, {
        image: 'https://img.mobiscroll.com/demos/deezer.png',
        title: 'Deezer Music',
        dev: 'Deezer Mobile',
        rank: 4.1
    }];


    ngOnInit() {

    }


}
