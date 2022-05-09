// Exercícios de interpretação de código

// 1
// { nome: "Amanda Rangel", apelido: "Mandi" }
// 0
// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }

// {nome: "Laís Petra", apelido: "Laura" }
// 1
// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }

// { nome: "Letícia Chijo", apelido: "Chijo" }
// 2
// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }


// 2
// ["Amanda Rangel","Laís Petra","Letícia Chijo"]


// 3
// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },



// Exercícios de escrita de código

// 1
let onlyNames = pets.map(item => item.nome)

let onlyDachshunds = pets.filter(item => item.raca === 'Salsicha')

let poodleWinners = pets.filter(item => item.raca === "Poodle").map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)


// 2
// a)
let onlyNames2 = produtos.map(item => item.nome)

// b)
let newArray = produtos.map(item => obj = {nome:item.nome, preco:item.preco-(item.preco*0.05)})

// c)
let onlyBeverages = produtos.filter(item => item.categoria === "Bebidas")

// d)
let onlyYpe = produtos.filter(item => item.nome.includes("Ypê"))

// e)
let ypePhrases = produtos.filter(item => item.nome.includes("Ypê")).map(item => `Compre ${item.nome} por ${item.preco}.`)



// Desafios

// 1
// a)
let alphabeticPokemons = pokemons.map(item => item.nome).sort()

// b)
let onlyTypes = new Set(pokemons.map(item => item.tipo))