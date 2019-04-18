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

  pedidos_db$: Observable<any>;

  constructor(public navCtrl: NavController, private pedidosService: PedidosService) {

  }

  ngOnInit(): void {
      this.pedidos_db$ = this.pedidosService.getPedidosPorHorario()
          .valueChanges()
          .pipe(map( changes => {
              let st = changes.filter(f => f.status === "fila");
              return st;
          }))
   }

}
