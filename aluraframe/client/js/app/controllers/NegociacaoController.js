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
        let data = new Date(...
            this._inputData.value.split('-').map(function (item, indice) {
                if (indice == 1) {
                    return item - 1;
                } else {
                    return item;
                }
            })
        );

        // Gerando uma nova negociação
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value

        );
    }
}