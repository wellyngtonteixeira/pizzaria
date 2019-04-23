import {Component, Input} from '@angular/core';
import {IonicPage, Modal, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddPizzaPage} from "../add-pizza/add-pizza";
import {BuscaPedidoPage} from "../busca-pedido/busca-pedido";
import {Pedido} from "../../models/pedido.model";
import {PedidosService} from "../../services/pedidos/pedidos.service";


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
    this.pedido = {} as Pedido;
    this.pedido.status = "fila";
    this.pedido.pizzas = [];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPedidoPage');
  }

  buscaPedidoModal() {
    let modal1: Modal = this.modalCtrl.create('BuscaPedidoPage', {});
    modal1.present();
    modal1.onDidDismiss((data) => {
      if(data){
        console.log(data);
        this.pedido = data;
      }
    });
  }

  addPizzaModal() {
    let idPizza: number = this.idPizza;
    let modal2: Modal = this.modalCtrl.create('AddPizzaPage', {idPizza});
    modal2.present();
    modal2.onDidDismiss((data) => {
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
    if(pedido.status === "comprado"){
      pedido.status = "fila";
      this.pedidosService.editPedido(pedido).then(rf => {
        this.navCtrl.setRoot('HomePage');
      });
    }else{
      this.pedidosService.addPedido(pedido).then(ref => {
        this.navCtrl.setRoot('HomePage', {key: ref.key});
      });
    }

  }

}
