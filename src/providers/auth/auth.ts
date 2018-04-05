import { Login } from './../../types/login.type';
import { SERVER_URL } from './../../config';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  constructor(private readonly http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  public login(login: Login): Observable<Object> {
    console.log(login);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`http://localhost:3000/login-api`, login, options)
      .map(res => res.text())
      .map(res => {
        console.log('LOGIN',res);
        return JSON.parse(res);
      })
  }

}
