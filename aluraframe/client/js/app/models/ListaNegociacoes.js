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
        // Copia da lista com conteudo de lista original
        return [].concat(this._negociacoes);

    }
}