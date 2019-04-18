import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/database";
import {Pedido} from "../../models/pedido.model";
import {FirebaseListObservable} from "@angular/fire/database-deprecated";


@Injectable()
export class PedidosService{

    private pedidosRef = this.db.list<Pedido>('pedidos');
    private pedidosRefHorario = this.db.list<Pedido>('pedidos', q =>
        q.orderByChild("horario")
    );

    constructor(private db: AngularFireDatabase) {

    }

    getPedidos(){
        return this.pedidosRef;
    }

    addPedido(pedido: Pedido){
        return this.pedidosRef.push(pedido);
    }

    getPedidosPorHorario(){
        return this.pedidosRefHorario;
    }
}