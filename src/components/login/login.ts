import {Component, ViewChild} from '@angular/core';
import {App, MenuController} from "ionic-angular";
import {AuthService} from "../../services/auth/auth.service";
import {BehaviorSubject} from "rxjs";

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  //usuario: firebase.User
  @ViewChild('usuario') email;
  @ViewChild('senha') senha;

  constructor(private app: App,private authService: AuthService, private menuCtrl: MenuController) {

  }

  loginComEmail(){
    this.authService.login(this.email.value, this.senha.value)
        .then(suc =>{
          //this.usuario = suc.user
          this.app.getActiveNav().setRoot('HomePage')
        })
  }

  logout(){
      this.menuCtrl.close()
      this.authService.signOut().then(suc=>{
          this.authService.usuario = new BehaviorSubject(null);
          this.app.getActiveNav().setRoot('LoginPage')
      })

  }

}
