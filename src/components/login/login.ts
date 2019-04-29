import {Component, ViewChild} from '@angular/core';
import {App, MenuController} from "ionic-angular";
import {AuthService} from "../../services/auth/auth.service";

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

  user: firebase.User
  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;

  constructor(private app: App,private authService: AuthService, private menuCtrl: MenuController) {

  }

  loginComEmail(){
    this.authService.login(this.usuario.value, this.senha.value)
        .then(suc =>{
          this.user = suc.user
          this.app.getActiveNav().setRoot('HomePage')
        })
  }

  logout(){
      this.menuCtrl.close()
      this.authService.signOut()
      this.user = null
      this.app.getActiveNav().setRoot('LoginPage')
  }

}
