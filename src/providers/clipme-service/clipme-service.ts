import { TimelineModel, ViewTimeline, ClipModel } from './../../types/clipme.type';
import { Observable } from 'rxjs';
import { SERVER_URL } from './../../config';
import { AuthProvider } from './../auth/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ClipmeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClipmeServiceProvider {

  constructor(private http: HttpClient, private authProvider: AuthProvider) {}

  public timelineList(autor: string) : Observable<any> {
      return this.http.get(`${SERVER_URL}/timeline/list/${autor}`);
  }
  public timelineView(id: string) : Observable<any> {
      return this.http.get(`${SERVER_URL}/timeline/view/${id}`)
  }

  public clipme(clip: string, timelineId: string): Observable<Object> {
    let clipme = new ClipModel();
    clipme.timeline = timelineId;
    clipme.autor = localStorage.getItem('autor');
    clipme.clip = btoa(clip);
    return this.http.post(`${SERVER_URL}/clipme`, clipme);
  }

}
