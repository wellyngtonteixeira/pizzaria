import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {PedidosService} from "../../services/pedidos/pedidos.service";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'
import {Pedido} from "../../models/pedido.model";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  pedidos_db$: Observable<Pedido[]>;
  dt_parametro: Date;
  str_dt_valida: string;


  constructor(public navCtrl: NavController, private pedidosService: PedidosService) {

  }

  ngOnInit(): void {
      this.confereData()
      this.formataData()
      //console.log(this.str_dt_valida);
      this.pedidos_db$ = this.pedidosService.getPedidosPorHorario()
          .snapshotChanges()
          .pipe(map( changes => {
              let st1 = changes.filter(f => f.payload.val().status === "fila"
              );
              let st2 = st1.filter(f2 => f2.payload.val().dt === this.str_dt_valida);
              return st2.map(rt => {return {key: rt.payload.key,...rt.payload.val()}});
          }))

   }

   confereData(){
      let dt_primeiro = new Date("2019-05-04");
      let dt_segundo = new Date("2019-05-05");

      if(new Date().toLocaleDateString() == dt_primeiro.toLocaleDateString()){
          this.dt_parametro = dt_primeiro;
      }
      else if (new Date().toLocaleDateString() == dt_segundo.toLocaleDateString()){
          this.dt_parametro = dt_segundo;
      } else {
          this.dt_parametro = dt_primeiro;
      }
   }

   formataData(){

      let ano = this.dt_parametro.getFullYear()
       let mes = this.dt_parametro.getMonth()+1
       let mes_s = mes.toString();
       if(mes < 10){
           mes_s = "0"+mes_s
       }

       let dia = this.dt_parametro.getDate()
       let dia_s = dia.toString()
       if(dia < 10){
           dia_s = "0"+dia_s
       }

       this.str_dt_valida = ano+"-"+mes_s+"-"+dia_s;

   }

    toArray(answers: object) {
        return Object.keys(answers).map(key => answers[key])
    }

    entregaPedido(pedido: Pedido){
      pedido.status = "entregue";
      this.pedidosService.editPedido(pedido).then(rf => {
          this.navCtrl.setRoot('HomePage');
      });
    }

    cancelaPedido(pedido: Pedido){
        pedido.status = "cancelado";
        this.pedidosService.editPedido(pedido).then(rf => {
            this.navCtrl.setRoot('HomePage');
        });
    }

}
