import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {

  constructor(private alertCtrl: AlertController) { }

  presentAlert(message: string, titulo?: string) {
      let alert = this.alertCtrl.create({
          title: titulo ? titulo : 'Aviso',
          subTitle: message,
          buttons: ['OK']
          });
          alert.present();
  }

  presentAlertErrors(errors: any[], titulo?: string) {
    let erros = '';
    if(errors) {
      errors.forEach((value) => {
        erros += `<li>${value.msg}</li>`;
      })
    }

    let alert = this.alertCtrl.create({
        title: titulo ? titulo : 'Aviso',
        message: erros,
        buttons: ['OK']
        });
        alert.present();
  }
}
