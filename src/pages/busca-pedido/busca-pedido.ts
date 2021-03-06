import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Pedido} from "../../models/pedido.model";
import {Observable} from "rxjs";
import {PedidosService} from "../../services/pedidos/pedidos.service";
import {map} from "rxjs/operators";

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
  pedidosParoquia_db$: Observable<any[]>;
  pedidosParoquia$: Pedido[];
  dt_pedido_b: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              private pedidosService: PedidosService) {
    this.pedido = new Pedido();
  }

  ngOnInit(){

    this.pedidosParoquia_db$ = this.pedidosService.getPedidosNaParoquia()
        .snapshotChanges()
        .pipe(map( changes => {
          let st = changes.filter(f => f.payload.val().status === "comprado");
          let st2 = st.filter(f2 => f2.payload.val().dt === this.dt_pedido_b);
          return st2.map(rt => {return {key: rt.payload.key,...rt.payload.val()}});
        }))
    this.pedidosParoquia_db$.forEach(obb => this.pedidosParoquia$ = obb)

  }

  ionViewWillLoad() {
    this.dt_pedido_b = this.navParams.get("dt_valida_b");
    console.log(this.dt_pedido_b)
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }

  pedidoChange(event: any) {

      const val = event.target.value;

    if (val && val.trim() != '') {
      this.pedidosParoquia$ = this.pedidosParoquia$.filter((item) => {
        return (item.cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.ngOnInit()
    }
  }

  selecionaCliente(cliente: Pedido){
    this.viewCtrl.dismiss(cliente);
  }


}
