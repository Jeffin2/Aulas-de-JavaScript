
//muda a cor do título para azul
document.querySelector('h1.titulo').style.color = 'blue';
console.log("Título alterado para azul");


//altera o texto do título
document.querySelector('h1.titulo').innerText = 'Curso de JavaScript - Editado pelo JS';
console.log("Texto do título alterado");


//altera a cor do subtítulo para verde
document.querySelector('h2.subtitulo').style.color = 'green';
console.log("Subtítulo alterado para verde");


//altera o texto do subtítulo
document.querySelector('h2.subtitulo').innerText = 'Bem-vindo ao curso de JavaScript - Editado pelo JS';
console.log("Texto do subtítulo alterado");


//altera o texto do parágrafo
document.querySelector('p').innerText = 'Texto atualizado pelo JavaScript!';
console.log("Texto do parágrafo alterado");


//altera a cor do parágrafo para vermelho
document.querySelector('p').style.color = 'red';
console.log("Cor do parágrafo alterada para vermelho");


//altera a cor do parágrafo para gold
document.querySelector('h3.sai-maldicao').style.color = 'gold';
console.log("Cor do parágrafo alterada para ouro");


//meus primeiros comandos em JS
window.alert("Olá, seja bem-vindo ao curso de JavaScript!"); //exibe um alerta para o usuário
window.confirm("Deseja continuar?"); //exibe uma caixa de confirmação
window.prompt("Qual é o seu nome?"); //exibe uma caixa de entrada para o usuário

var n1 = Number(window.prompt("Digite um número:")); //solicita ao usuário que digite um número em formato de string
var n2 = Number(window.prompt("Digite outro número:")); //solicita ao usuário que digite outro número em formato de string
var s = n1 + n2; //soma os dois números, convertendo as strings para number
window.alert(`A soma entre ${n1} e ${n2} é: ${s}`); //exibe o resultado da soma em um alerta em formato de number

