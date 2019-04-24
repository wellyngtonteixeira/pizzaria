import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/database";
import * as firebase from "firebase";
import {Pedido} from "../../models/pedido.model";
import {FirebaseListObservable} from "@angular/fire/database-deprecated";


@Injectable()
export class PedidosService{

    private path_pedidos = "pedidos/";
    private pedidosRef = firebase.database().ref(this.path_pedidos);
    private pedidosRefHorario = this.db.list<Pedido>('pedidos', q =>
        q.orderByChild("horario"))
   ;
    private pedidosRefParoquia = this.db.list<Pedido>('pedidos', qR =>
    qR.orderByChild('delivery').equalTo(false));

    constructor(private db: AngularFireDatabase) {

    }

    getPedidos(){
        return this.pedidosRef;
    }

    addPedido(pedido: Pedido){
        return this.pedidosRef.push(pedido);
    }

    editPedido(pedido){
        return firebase.database().ref(this.path_pedidos+pedido.key).update(pedido);
    }

    getPedidosPorHorario(){
        return this.pedidosRefHorario;
    }

    getPedidosNaParoquia(){
        return this.pedidosRefParoquia;
    }
}