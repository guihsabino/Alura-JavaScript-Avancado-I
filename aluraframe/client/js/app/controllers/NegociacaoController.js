class NegociacaoController {

    constructor() {
        // Atribuindo a um caracter a função de selecionar, pra facilitar (bind serve pra manter o document na jogada)
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = $('#negociacoesView');
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem;
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        /* Criando uma variável que altera o formato da data (1ª maneira)
        let data = new Date(this._inputData.value.replace(/-/g, ','));*/

        // Criando a data usando o DateHelper e passando pra Negociação
        let helper = new DateHelper();

        // Cria negociação e add ela na lista
        this._listaNegociacoes.adiciona(this._criaNegociacao);
        this._negociacoesView.update(this._listaNegociacoes);
        // Mensagem ao adicionar, e atualizando
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        // Limpa o formulario após add
        this._limpaFormulario();
    }
    // Metodo para criar negociação
    _criaNegociacao() {

        return new Negociacao(
            // Colocando o helper no lugar da data, pra ele fazer o paranaue
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }
    // Metodo para limpar formulario
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}