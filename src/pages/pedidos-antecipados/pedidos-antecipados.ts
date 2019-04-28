import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PedidosService} from "../../services/pedidos/pedidos.service";
import {Observable} from "rxjs";
import {Pedido} from "../../models/pedido.model";
import {map} from "rxjs/operators";
import {Pizza} from "../../models/pizza.model";

/**
 * Generated class for the PedidosAntecipadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-pedidos-antecipados',
  templateUrl: 'pedidos-antecipados.html',
})
export class PedidosAntecipadosPage implements OnInit{

  pedidos_db$: Observable<Pedido[]>;
  lista_pizzas: Pizza[] = [];
  l1: Pizza[] = [];
  l2: Pizza[] = [];
  l3: Pizza[] = [];
  l4: Pizza[] = [];
  l5: Pizza[] = [];
  l6: Pizza[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private pedidosService: PedidosService) {
  }

  ngOnInit(): void {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosAntecipadosPage');
      this.pedidos_db$ = this.pedidosService.getPedidosPorHorario()
          .snapshotChanges()
          .pipe(map( changes => {
              let st1 = changes.filter(f => f.payload.val().status === "fila" ||
                  f.payload.val().status === "comprado"
              );
              return st1.map(rt => {return {key: rt.payload.key,...rt.payload.val()}});
          }));
      this.pedidos_db$.forEach(pds => pds.forEach(pzs => {
          pzs.pizzas.forEach(p => {this.lista_pizzas.push(p)
              if(p.sabor == "Calabresa" && p.assada){
                  this.l1.push(p);
              }else if(p.sabor === "Calabresa" && !p.assada){
                  this.l2.push(p)
              }else if(p.sabor === "Frango" && p.assada){
                  this.l3.push(p)
              }else if(p.sabor === "Frango" && !p.assada){
                  this.l4.push(p)
              }else if(p.sabor === "Mista" && p.assada){
                  this.l5.push(p)
              }else {
                  this.l6.push(p);
              }
          })
      }));
  }

  ionViewDidEnter(){
    this.mostrarGrafico()
  }

  mostrarGrafico(){

      var data = google.visualization.arrayToDataTable([
          ['Sabor', 'Qtd'],
          ['Calabresa assada - '+this.l1.length,     this.l1.length],
          ['Calabresa crua - '+this.l2.length,      this.l2.length],
          ['Frango assada - '+this.l3.length,  this.l3.length],
          ['Frango crua - '+this.l4.length, this.l4.length],
          ['Mista assada - '+this.l5.length,    this.l5.length],
          ['Mista crua - '+this.l6.length, this.l6.length]
      ]);

      var options = {
          title: 'Pizzas'
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

      chart.draw(data, options);
  }

}
