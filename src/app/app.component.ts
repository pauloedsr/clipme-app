import { HomePage } from './../pages/home/home';
import { Storage } from '@ionic/storage';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      let token = localStorage.getItem('token');
      if(token && token != undefined){
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });
  }
}

