class Negociacao {
    // Esse construtor já seta o que cada negociação vai ter por padrão
    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        // congelando os atributos após add pra não permitir alterações
        Object.freeze(this);
    }

    /* Metodos acessadores, ja que tem o (_) pra não permitir acesso externo à classe */

    get volume() {
        // obtem e calcula o volume da negociação
        return this._quantidade * this._valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }



}