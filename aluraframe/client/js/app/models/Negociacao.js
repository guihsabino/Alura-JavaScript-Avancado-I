class Negociacao {
    // Esse construtor já seta o que cada negociação vai ter por padrão
    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    /* Metodos acessadores, ja que tem o (_) pra não permitir acesso externo à classe */

    getVolume() {
        // obtem e calcula o volume da negociação
        return this._quantidade * this._valor;
    }
    getData() {
        return this._data;
    }
    getQuantidade() {
        return this._quantidade;
    }
    getValor() {
        return this._valor;
    }



}