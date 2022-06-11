// export class Negociacao {
//     #data;
//     #quantidade;
//     #valor;
//     constructor(data, quantidade, valor){
//         this.#data = data;
//         this.#quantidade = quantidade;
//         this.#valor = valor;
//     }
//     get data(){
//         return this.#data;
//     }
//     get quantidade(){
//         return this.#quantidade;
//     }
//     get valor(){
//         return this.#valor;
//     }
//     get volume() {
//         return this.#quantidade * this.#valor;
//     }
// }
export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // constructor(data: Date, quantidade: number, valor: number){
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
