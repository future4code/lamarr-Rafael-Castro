// Exercicio 1

// A)
// Podemos usar o comando process.argv, indicando através
//  do índice qual parâmetro do código queremos capturar.
// Ex:
// const var1 = process.argv[3]

// B)
const userName = process.argv[2]
const userAge = process.argv[3]
function printInput(name, age){
	console.log(`Olá, ${name}! Você tem ${age} anos!`)
}
printInput(userName, userAge)

// C)
const userName = process.argv[2]
const userAge = Number(process.argv[3])
const newAge = userAge+7
function plus7(name, age, newAge){
	console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}.`)
}
plus7(userName, userAge, newAge)