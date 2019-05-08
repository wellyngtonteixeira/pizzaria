import {Component, OnInit} from '@angular/core';
import {IonicPage, Modal, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Pedido} from "../../models/pedido.model";
import {PedidosService} from "../../services/pedidos/pedidos.service";
import {AddPizzaPage} from "../add-pizza/add-pizza";
import {HomePage} from "../home/home";

/**
 * Generated class for the EditPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-pedido',
  templateUrl: 'edit-pedido.html',
})
export class EditPedidoPage implements OnInit{

  pedido: Pedido;
  idPizza: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public modalCtrl: ModalController, private pedidosService: PedidosService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPedidoPage');
  }

  ngOnInit(): void {
    this.pedido = this.navParams.get('pedido');
    this.idPizza = this.pedido.pizzas.length;
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

  savePedido(pedido){
    this.pedidosService.editPedido(pedido).then(rf => {
      this.viewCtrl.dismiss()
    });
  }

}
