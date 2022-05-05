// Exercícios de interpretação de Código

// Exercício 1
// 10


// Exercício 2
// a)
/* 
19
21
23
25
27
30
 */


// b)
// Sim, o for... of... é suficiente pois o alvo é um array.
// Seria necessário usar a função indexOf()
/* 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let n of lista) {
    console.log(lista.indexOf(n))
}
 */


// Exercício 3
/*
*
**
***
****
*/


// Exercícios de escrita de código

// 1
let animaisEstimacao = Number(prompt("Quantos animais você tem?"))
let arrayAnimais = []
// a)
if (animaisEstimacao === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (animaisEstimacao > 0) {
    for (let i = 1; i < animaisEstimacao+1; i++) {
        arrayAnimais.push(prompt(`Qual é o nome do pet ${i}?`))        
    }
}
// c)
console.log(arrayAnimais)


// 2
let arrayOriginal = [1,20,3,4,5,6,7]
// a)
for (const n of arrayOriginal) {
    console.log(n)
}

// b)
for (const n of arrayOriginal) {
    console.log(n/10)
}

// c)
let array1 = []
for (const n of arrayOriginal) {
    if (n%2 ===0) {
        array1.push(n)
    }
}
console.log(array1)

// d)
let array2 = []
for (const n of arrayOriginal) {
    array2.push(`O elemento do index ${n-1} é:`, n)
}
console.log(array2)

//e)
let maiorNumero = 0
let menorNumero = 10
for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > maiorNumero) {
        maiorNumero = arrayOriginal[i]
    }
    if (arrayOriginal[i] < menorNumero){
        menorNumero = arrayOriginal[i]
    }
}
console.log(maiorNumero)
console.log(menorNumero)



// Desafio
// 1
let numeroEscolhido = Number(prompt("Escolha um número"))
let numeroChutado
let numeroTentativas = 0

console.log("Vamos jogar!")

while (numeroEscolhido !== numeroChutado) {
    numeroChutado = Number(prompt("Chute um número"))
    console.log(`O número chutado foi: ${numeroChutado}`)
    if (numeroEscolhido === numeroChutado) {
        console.log("Acertou")
        console.log(`O número de tentativas foi: ${numeroTentativas}`)
    } else {
        if (numeroEscolhido > numeroChutado) {
            console.log("Errou. O número certo é maior.")
            numeroTentativas++
        } else {
            console.log("Errou. O número certo é menor.")
            numeroTentativas++
        } 
    }
}


// 2
/* Foi super fácil executar essa modificação.
Eu busquei no google como gerar um numero aleatório em Js
e encontrei a função indicada. */
let numeroEscolhido = Math.floor(Math.random() * 10)
let numeroChutado
let numeroTentativas = 0

console.log("Vamos jogar!")

while (numeroEscolhido !== numeroChutado) {
    numeroChutado = Number(prompt("Chute um número"))
    console.log(`O número chutado foi: ${numeroChutado}`)
    if (numeroEscolhido === numeroChutado) {
        console.log("Acertou")
        console.log(`O número de tentativas foi: ${numeroTentativas}`)
    } else {
        if (numeroEscolhido > numeroChutado) {
            console.log("Errou. O número certo é maior.")
            numeroTentativas++
        } else {
            console.log("Errou. O número certo é menor.")
            numeroTentativas++
        } 
    }
}