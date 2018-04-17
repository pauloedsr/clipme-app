import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { TrataErroProvider } from './../trata-erro/trata-erro';
import { Login } from './../../types/login.type';
import { SERVER_URL } from './../../config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  token: string = undefined;
  constructor(private readonly http: HttpClient, private trataErro: TrataErroProvider) {}

  public login(login: Login): Observable<Object> {
    console.log(login);
    return this.http.post(`${SERVER_URL}/login-api`, login).map(data => {
        let json: any = data;
        this.token = json.token;
        localStorage.setItem('token', this.token);
        localStorage.setItem('autor', json.user._id);
        return json;
      });
  }

}
