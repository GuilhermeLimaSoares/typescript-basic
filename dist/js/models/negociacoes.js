export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): readonly Negociacao[] {
    lista() {
        return this.negociacoes;
    }
}
