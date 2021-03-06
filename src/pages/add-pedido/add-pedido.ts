import {Component, Input} from '@angular/core';
import {IonicPage, Modal, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddPizzaPage} from "../add-pizza/add-pizza";
import {BuscaPedidoPage} from "../busca-pedido/busca-pedido";
import {Pedido} from "../../models/pedido.model";
import {PedidosService} from "../../services/pedidos/pedidos.service";
import {DateTimeData} from "ionic-angular/util/datetime-util";


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
  dt_pedido: string;



  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController, private pedidosService: PedidosService) {
    this.pedido = new Pedido();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPedidoPage');
    this.dt_pedido = this.navParams.get('dt_valida');
    this.pedido.dt = this.dt_pedido;
    this.pedido.telefone = "1111111111";
    this.pedido.horario = new Date().toLocaleTimeString();
    this.pedido.vendedor = "Caixa";
  }

  transformeDataString(cp: string): string{

    let ano = cp.substring(0, 4)
    let mes = cp.substring(5,7);
    let dia = cp.substring(8,10)


    let str = dia+"/"+mes+"/"+ano;

    return str;
  }

  buscaPedidoModal() {
    let modal1: Modal = this.modalCtrl.create('BuscaPedidoPage', {dt_valida_b: this.dt_pedido});
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
      //pednew Date().toTimeString()
      this.pedidosService.addPedido(pedido).then(ref => {
        this.navCtrl.setRoot('HomePage', {key: ref.key});
      });
    }

  }

}
