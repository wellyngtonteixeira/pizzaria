export class Pizza {

    private _id: number;
    private _delivery: boolean = false;
    private _assada: boolean = true;
    private _sabor: string = 'Mista';
    private _quantidade: number = 1;

    constructor(id: number){
        this._id = id;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get delivery(): boolean {
        return this._delivery;
    }

    set delivery(value: boolean) {
        this._delivery = value;
    }

    get assada(): boolean {
        return this._assada;
    }

    set assada(value: boolean) {
        this._assada = value;
    }

    get sabor(): string {
        return this._sabor;
    }

    set sabor(value: string) {
        this._sabor = value;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    set quantidade(value: number) {
        this._quantidade = value;
    }
}