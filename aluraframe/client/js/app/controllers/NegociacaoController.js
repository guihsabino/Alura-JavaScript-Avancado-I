class NegociacaoController {

    constructor() {
        // Atribuindo a um caracter a função de selecionar, pra facilitar (bind serve pra manter o document na jogada)
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        /* Criando uma variável que altera o formato da data (1ª maneira)
        let data = new Date(this._inputData.value.replace(/-/g, ','));*/

        //Criando uma variável que altera o formato da data (2ª maneira)
        // Dessa forma, a string que vem é transformada em um Array
        let data = new Date(
            ...this._inputData.value.split('-').map(function (item, indice) {
                // Usado módulo, pois com 0 e com 2 da 0, so no item 1 que sobra 1 pra subtrair
                return item - indice % 2
            })
        );
        console.log(data);
        /* Gerando uma nova negociação
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value); */
    }
}