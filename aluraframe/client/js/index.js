// Criando a variavel campos, para puxar as informações via array list do HTML
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);
// Adicionando uma função ao Botão Incluir para dar Submit
document.querySelector(".form").addEventListener('submit', function (event) {

    alert("oi");
});