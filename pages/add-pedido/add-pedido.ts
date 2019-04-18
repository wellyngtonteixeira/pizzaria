import {Component, Input} from '@angular/core';
import {IonicPage, Modal, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddPizzaPage} from "../add-pizza/add-pizza";
import {Pedido} from "../../models/pedido.model";
import {PedidosService} from "../../services/pedidos/pedidos.service";
import {BrMaskerIonic3} from "brmasker-ionic-3";


/**
 * Generated class for the AddPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pedido',
  templateUrl: 'add-pedido.html',
})
export class AddPedidoPage {

  @Input() value: number;
  pedido: Pedido;
  idPizza: number = 1;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController, private pedidosService: PedidosService) {
    this.pedido = new Pedido();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPedidoPage');
  }

  addPizzaModal() {
    let idPizza: number = this.idPizza;
    let modal: Modal = this.modalCtrl.create('AddPizzaPage', {idPizza});
    modal.present();
    modal.onDidDismiss((data) => {
      if(data){
        console.log(data);
        this.pedido.pizzas.push(data);
        this.idPizza++;
      }
    });
  }

  rmPizza(pizza){
      let index = this.pedido.pizzas.indexOf(pizza);
      if(index > -1){
          this.pedido.pizzas.splice(index, 1);
      }
  }

  enviarPedido(pedido: Pedido){
    this.pedidosService.addPedido(pedido).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

}
