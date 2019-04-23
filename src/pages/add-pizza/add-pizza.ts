import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Pizza} from "../../models/pizza.model";

/**
 * Generated class for the AddPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pizza',
  templateUrl: 'add-pizza.html',
})
export class AddPizzaPage {

  pizza: Pizza;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.pizza = new Pizza(this.navParams.get('idPizza'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPizzaPage');
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }

  addPizza(pizza){
    this.viewCtrl.dismiss(pizza);
  }

}
