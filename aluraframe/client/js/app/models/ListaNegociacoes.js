class ListaNegociacoes {

    // Quando instanciada, cria uma lista de negociações em branco
    constructor() {

        this._negociacoes = []
    }

    // Permite adicionar negociações dentro dessa lista
    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    // Permite listar essas negociações
    get negociacoes() {

        return this._negociacoes;

    }
}