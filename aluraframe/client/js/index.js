// Criando a variavel campos, para puxar as informações via array list do HTML
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);
// Buscando o tbody do HTML
var tbody = document.querySelector('table tbody');

// Adicionando uma função ao Botão Incluir para dar Submit
document.querySelector(".form").addEventListener('submit', function (event) {

    event.preventDefault();
    // Criando uma tr a cada vez que o botão for acionado
    var tr = document.createElement("tr");

    campos.forEach(function (campo) {
        // Colocando as tds dentro das trs
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });
    // Criando a td volume
    var tdVolume = document.createElement('td');
    // Definindo que o conteudo de volume é a multiplicação de valor e qntd
    tdVolume.textContent = campo[1].value * campo[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);
    // Limpando os campos e deixando os valores padrões de inicio
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();


});