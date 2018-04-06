import { SERVER_URL } from './../config';
import { AlertService } from './../providers/utils/alert-service';
import { Http, HttpModule } from '@angular/http';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { TrataErroProvider } from '../providers/trata-erro/trata-erro';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { ClipmeServiceProvider } from '../providers/clipme-service/clipme-service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: 'clipme',
      driverOrder: ['indexeddb']
    }),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWFjMjQ2OTcxYmJiMmU1Mjk0ZmJkMTA2IiwiaWF0IjoxNTIyODYxMDk5fQ.TF4F-GDk7YTgVAOkvyKBQ0tD0tmqpnRhxpCRTM5I8z4"}
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    TrataErroProvider,
    AlertService,
    ClipmeServiceProvider,
  ]
})
export class AppModule {}
