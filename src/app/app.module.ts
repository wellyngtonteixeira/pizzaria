import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from "@angular/fire";
import {FIREBASE_CONFIG} from "../environments/firebase.credentials"
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {PedidosService} from "../services/pedidos/pedidos.service";
import {IonicSelectableModule} from "ionic-selectable";
import {PedidosAntecipadosPage} from "../pages/pedidos-antecipados/pedidos-antecipados";
import {PedidosAntecipadosPageModule} from "../pages/pedidos-antecipados/pedidos-antecipados.module";
import {AuthService} from "../services/auth/auth.service";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(FIREBASE_CONFIG),
      AngularFireDatabaseModule,
    IonicSelectableModule,
    PedidosAntecipadosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PedidosAntecipadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      PedidosService,
      AuthService,
      AngularFireAuth
  ]
})
export class AppModule {}
