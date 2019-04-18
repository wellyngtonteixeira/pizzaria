import {DateTime} from "ionic-angular";
import {Pizza} from "./pizza.model";

export class Pedido {
    key?: string
    cliente:string = "";
    endereco: string = "";
    telefone: string = "";
    dt: DateTime = undefined;
    horario: DateTime = undefined;
    vendedor: string = "";
    pizzas: Pizza[] = [];
    status: string = "fila";

    constructor(){

    }
}