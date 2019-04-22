class DateHelper {


    constructor() {

        throw new Error('Esta classe não pode ser instanciada!');
    }

    textoParaData(texto) {

        // Dessa forma, a string que vem é transformada em um Array
        // Usado módulo, pois com 0 e com 2 da 0, so no item 1 que sobra 1 pra subtrair

        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            // E também foi testado o formato e colocado um fast fail
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    dataParaTexto(data) {
        // Formatando a exibição da data para o usuário, lembrando que o mais 1 resolve a questão do mês

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

    }
}