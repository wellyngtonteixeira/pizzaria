import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {IonicSelectableComponent} from "ionic-selectable";
import {Pedido} from "../../models/pedido.model";
import {Observable} from "rxjs";
import {PedidosService} from "../../services/pedidos/pedidos.service";
import {map} from "rxjs/operators";
import {snapshotToArray} from "../../environments/firebase.credentials";

/**
 * Generated class for the BuscaPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca-pedido',
  templateUrl: 'busca-pedido.html',
})
export class BuscaPedidoPage implements OnInit{

  pedido: Pedido;
  pedidosParoquia_db$: Observable<any>;
  pedidosParoquia$: Pedido[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              private pedidosService: PedidosService) {
    this.pedido = new Pedido();
  }

  ngOnInit(){
    this.pedidosParoquia_db$ = this.pedidosService.getPedidosNaParoquia()
        .snapshotChanges()
        .pipe(map( changes => {
          let st = changes.filter(f => f.payload.val().status === "comprado");
          console.log(st)
          return st.map(rt => {return {key: rt.payload.key,...rt.payload.val()}});
        }))
    this.pedidosParoquia_db$.forEach(obb => this.pedidosParoquia$ = obb)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaPedidoPage');
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }

  pedidoChange(event: any) {
      this.ngOnInit();

      const val = event.target.value;

    if (val && val.trim() != '') {
      this.pedidosParoquia$ = this.pedidosParoquia$.filter((item) => {
        return (item.cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selecionaCliente(cliente: Pedido){
    this.viewCtrl.dismiss(cliente);
  }


}
