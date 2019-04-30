import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/database";
import * as firebase from "firebase";
import {Pedido} from "../../models/pedido.model";
import {AuthService} from "../auth/auth.service";
import * as _ from 'lodash'


@Injectable()
export class PedidosService{

    private path_pedidos = "pedidos/";
    private pedidosRef = firebase.database().ref(this.path_pedidos);
    private pedidosRefHorario = this.db.list<Pedido>('pedidos', q =>
        q.orderByChild("horario"))
   ;
    private pedidosRefParoquia = this.db.list<Pedido>('pedidos', qR =>
    qR.orderByChild('delivery').equalTo(false));

    userRoles: Array<string>;

    constructor(private db: AngularFireDatabase, private authService: AuthService) {
        authService.usuario.switchMap(user => {
            /// Set an array of user roles, ie ['admin', 'author', ...]
            return this.userRoles = _.keys(_.get(user, 'roles'))
        })
            .subscribe()
    }

    /// Helper to determine if any matching roles exist
    private matchingRole(allowedRoles): boolean {
        return !_.isEmpty(_.intersection(allowedRoles, this.userRoles))
    }

    getAdd(): boolean {
        const allowed = ['admin', 'caixa']
        return this.matchingRole(allowed)
    }

    getEdit(): boolean {
        const allowed = ['admin', 'caixa', 'atendimento']
        return this.matchingRole(allowed)
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