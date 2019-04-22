class Mensagem {
    // '' - atribui um valor padrão caso não digite mensagem alguma
    constructor(texto = '') {
        this._texto = texto;
    }
    get texto() {

        return this._texto;
    }

    set texto() {

        this._texto = texto;
    }
}