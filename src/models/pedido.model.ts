import {DateTime} from "ionic-angular";
import {Pizza} from "./pizza.model";

export class Pedido {
    $key?: string
    delivery: boolean = false
    cliente:string = ""
    endereco: string = ""
    telefone: string = ""
    dt: DateTime
    horario: DateTime
    vendedor: string = ""
    pizzas: Pizza[] = []
    status: string = "fila"

    constructor(){

    }
}