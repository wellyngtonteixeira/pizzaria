import {Pizza} from "./pizza.model";

export class Pedido {
    $key?: string
    delivery: boolean = false
    cliente:string = ""
    endereco: string = ""
    telefone: string = ""
    dt: string = ""
    horario: string = ""
    vendedor: string = ""
    pizzas: Pizza[] = []
    status: string = "fila"
    obs: string
    pago: boolean = true

    constructor(){

    }
}