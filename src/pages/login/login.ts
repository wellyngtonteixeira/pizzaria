import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any
  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {

  }

  loginComEmail(){
    this.authService.login(this.usuario.value, this.senha.value)
        .then(suc =>{
          this.user = suc
          this.navCtrl.setRoot('HomePage')
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
