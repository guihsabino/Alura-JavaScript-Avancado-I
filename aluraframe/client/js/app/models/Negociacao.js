class Negociacao {
    // Esse construtor já seta o que cada negociação vai ter por padrão
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // Criando método que obtem o volume da negociação
    obtemVolume() {
        return this.quantidade * this.valor;
    }
}