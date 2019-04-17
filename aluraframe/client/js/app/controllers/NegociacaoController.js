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

        // Criando a data usando o DateHelper e passando pra Negociação
        let helper = new DateHelper();

        //Gerando uma nova negociação
        let negociacao = new Negociacao(
            // Colocando o helper no lugar da data, pra ele fazer o paranaue
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}