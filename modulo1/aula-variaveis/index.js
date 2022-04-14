// Aula Variáveis


// Interpretação de código
// Exercício 1
let a = 10
let b = 10

console.log(b)
// 10

b = 5
console.log(a, b)
// 10 5



// Exercício 2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
// 10 10 10

// Exercício 3
let quantidadeHoras = prompt("Quantas horas você trabalha por dia?")
let pagamentoDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${pagamentoDiario/quantidadeHoras} por hora`)



// Escrita de código
// Exercício 1
let nome
let idade

console.log(typeof(nome));
console.log(typeof(idade));
/*
Ambas variáveis são do tipo undefined, que significa indefinidas. Isso devido a nenhum
valor ter sido atribuído a elas e consequentemente seu tipo não foi estabelecido.
*/

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log(typeof(nome));
console.log(typeof(idade));
/*
Ambos os resultados são do tipo string, pois a função prompt armazena os valores
inseridos pelo usuário no formato string por padrão. Se necessário, os valores devem
ser convertidos em outro tipo.
*/

console.log("Olá", nome, ", você tem", idade, "anos");



// Exercício 2
let pergunta1 = "Seu dia foi bom?"
let pergunta2 = "Você quer comer pipoca?"
let pergunta3 = "Você gosta de séries?"

let resposta1 = prompt(pergunta1)
let resposta2 = prompt(pergunta2)
let resposta3 = prompt(pergunta3)

console.log(pergunta1, "-", resposta1);
console.log(pergunta2, "-", resposta2);
console.log(pergunta3, "-", resposta3);



// Exercício 3
let a = 10
let b = 25

let auxiliar
auxiliar = a
a = b
b = auxiliar

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);



// Desafio
let primeiroNumero = Number(prompt("Informe o primeiro número."))
let segundoNumero = Number(prompt("Informe o segundo número."))
let somados = primeiroNumero + segundoNumero
let multiplicados = primeiroNumero * segundoNumero

console.log("O primeiro número somado ao segundo número resulta em:", somados);
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicados);
