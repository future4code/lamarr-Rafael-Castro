// Exercícios String e Arrays

// Exercícios de interpretação de código
// Exercício 1
let array
console.log('a. ', array)
// a. undefined

array = null
console.log('b. ', array)
// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11

let i = 0
console.log('d. ', array[i])
// d. 3

array[i+1] = 19
console.log('e. ', array)
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
// f. 9


// Exercício 2
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27



// Exercícios de escrita de código
// Exercício 1
let nomeDoUsuario = prompt("Qual é o seu nome?")
let emailDoUsuario = prompt("Informe seu email.")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)


// Exercício 2
let comidasFavoritas = ['sushi', 'pudim', 'burrito', 'lasagna', 'hamburger']
// a.
console.log(comidasFavoritas)
// b.
console.log("Essas são minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
// c.
let comidaUsuario = prompt("Qual é sua comida favorita?")
comidasFavoritas[1] = comidaUsuario
console.log(comidasFavoritas)


// Exercício 3
// a.
let listaDeTarefas = []
// b.
listaDeTarefas.push(prompt("Informe uma tarefa"))
listaDeTarefas.push(prompt("Informe uma segunda tarefa"))
listaDeTarefas.push(prompt("Informe uma terceira tarefa"))
// c.
console.log(listaDeTarefas)
// d.
let indiceUsuario = Number(prompt("Informe o número de uma tarefa. (0,1 ou 2)"))
// e.
listaDeTarefas.splice(indiceUsuario,1)
// f.
console.log(listaDeTarefas);



// Desafios
// 1.
let fraseRecebida = prompt("Insira uma frase.")
let array2 = fraseRecebida.split(' ')
console.log(array2)

// 2. 
let frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa']
let index = frutas.indexOf('Abacaxi')
console.log(index, frutas.length)