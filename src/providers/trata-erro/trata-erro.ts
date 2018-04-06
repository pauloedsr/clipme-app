import { AlertService } from './../utils/alert-service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/*
  Generated class for the TrataErroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrataErroProvider {

  constructor(public alertService: AlertService) {}

  public trata(error: any) {
    let err = JSON.parse(error._body);
    if(!err.success){
      this.alertService.presentAlertErrors(err.errors);
    }

    return Observable.throw(error);
  }

}
