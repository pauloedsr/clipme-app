import { Storage } from '@ionic/storage';
import { TrataErroProvider } from './../trata-erro/trata-erro';
import { Login } from './../../types/login.type';
import { SERVER_URL } from './../../config';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  constructor(private readonly http: Http, private trataErro: TrataErroProvider, private storage: Storage) {}

  public login(login: Login): Observable<Object> {
    console.log(login);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${SERVER_URL}/login-api`, login, options)
      .map(res => res.text())
      .map(res => {
        let json = JSON.parse(res);
        console.log('LOGIN',json);
        this.storage.set('token', json.token).then(()=> {
          return res;
        })
      }).catch((err) => {
        return this.trataErro.trata(err);
      });
  }

}
