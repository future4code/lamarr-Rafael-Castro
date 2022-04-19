// Exercícios Operadores e Lógica de Programação

// Exercícios de interpretação de código
// Exercício 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
// b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// c. true

console.log("d. ", typeof resultado)
// d. boolean


// Exercício 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
/* O codígo precisa da função Number() para converter o valor coletado pela função
prompt() de string para number.
Será impresso os dois valores inseridos pelo usuário, mas em formato string.
Dessa forma os números não serão somados, mas concatenados. Ex: "1020" ("10"+"20") */


// // Exercício 3
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)



// Exercícios de Escrita de código
// Exercício 1
let suaIdade = Number(prompt("Qual é a sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do seu amigo?"))

console.log("Sua idade é maior do que a do seu amigo?", suaIdade > idadeAmigo)
console.log(suaIdade - idadeAmigo)


// Exercício 2
let numeroPar = Number(prompt("Insira um número par."))
console.log(numeroPar % 2)
// Todo número par vai resultar num resto 0.
// Todo número impar vai resultar num resto 1.


// Exercício 3
let idade = Number(prompt("Quantos anos você tem?"))
console.log(idade*12, "meses")
console.log(idade*365, "dias")
console.log(idade*8760, "horas");


// Exercício 4
let num1 = Number(prompt("Insira o primeiro número."))
let num2 = Number(prompt("Insira o segundo número."))

console.log("O primeiro número é maior que o segundo?", num1 > num2)
console.log("O primeiro número é igual ao segundo?", num1 === num2)
console.log("O primeiro número é divisível pelo segundo?", num1 % num2 === 0)
console.log("O segundo número é divisível pelo primeiro?", num2 % num1 === 0)



// Desafio
// 1.
console.log((77 - 32)*(5/9) + 273.15, "K")
console.log(80*(9/5) + 32, "F")

let trintaEmFar = 30*(9/5) + 32
console.log(trintaEmFar, "F", "-", (trintaEmFar - 32)*(5/9) + 273.15, "K")

let temperatura = Number(prompt("Insira uma temperatura em Celsius."))*(9/5) + 32
console.log(temperatura, "F", "-", (temperatura - 32)*(5/9) + 273.15, "K")