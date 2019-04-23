export class Pizza {

    id: number;
    assada: boolean = true;
    sabor: string = 'Mista';
    quantidade: number = 1;

    constructor(id: number){
        this.id = id;
    }

}