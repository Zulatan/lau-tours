import { Component } from '@angular/core';

//Kode herunder taget fra ionic bog kap 4 navigation s81
// import { Platform } from '@ionic/angular';
// import { SplashScreen }from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [ //Kode herunder taget fra ionic bog kap 4 navigation s81
    {
      title: 'Favorites',
      url: '/favorites',
      icon: 'star'
    },
    {
      title: 'Regions',
      url: '/regions',
      icon: 'images'
    },
    {
      title: 'Tour-Types',
      url: '/tour-types',
      icon: 'bus'
    }
  ];

  constructor(  //Kode herunder taget fra ionic bog kap 4 navigation s81
    // private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
    ) {
    // this.initializeApp();
    }

    // initializeApp() {
    //   this.platform.ready().then(() => {
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    //   });
    // }
}
