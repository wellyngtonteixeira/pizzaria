import {DateTime} from "ionic-angular";
import {Pizza} from "./pizza.model";

export interface Pedido {
    $key?: string
    delivery: boolean
    cliente:string
    endereco: string
    telefone: string
    dt: DateTime
    horario: DateTime
    vendedor: string
    pizzas: Pizza[]
    status: string


}