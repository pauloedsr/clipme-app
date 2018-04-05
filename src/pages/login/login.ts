import { AuthProvider } from './../../providers/auth/auth';
import { Login } from './../../types/login.type';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: Login;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
    this.login = new Login();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  acessar() {
    this.authProvider.login(this.login).subscribe(() => {

    });
  }

}
