import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {PedidosAntecipadosPage} from "../pages/pedidos-antecipados/pedidos-antecipados";
import {AuthService} from "../services/auth/auth.service";
import {TodosPedidosPage} from "../pages/todos-pedidos/todos-pedidos";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private authService: AuthService) {

    this.initializeApp();

    // // used for an example of ngFor and navigation
     this.pages = [
       { title: 'Home - Fila', component: HomePage },
       { title: 'Pedidos Antencipados', component: PedidosAntecipadosPage },
       { title: 'Todos os Pedidos', component: TodosPedidosPage }
     ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
