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

  token: string = undefined;
  constructor(private readonly http: Http, private trataErro: TrataErroProvider) {}

  public login(login: Login): Observable<Object> {
    console.log(login);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${SERVER_URL}/login-api`, login, options)
      .map(res => res.text())
      .map(res => {
        let json = JSON.parse(res);
        this.token = json.token;
        localStorage.setItem('token', this.token);
        localStorage.setItem('autor', json.user._id);
        return json;
      }).catch((err) => {
        return this.trataErro.trata(err);
      });
  }

}
