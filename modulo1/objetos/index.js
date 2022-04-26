// Exercícios sobre Objetos

// Exercícios de interpretação de código
// Exercício 1
// "Matheus Nachtergaele"
// "Virginia Cavendish"
// {canal: "Globo", horario: "14h"}


// Exercício 2
// a)
// { nome: "Juca", idade: 3, raca: "SRD"}
// { nome: "Juba", idade: 3, raca: "SRD"}
// { nome: "Jubo", idade: 3, raca: "SRD"}
// b)
/* Através do processo de espalhamento, permite que os dados de um objeto ou estrutura de dados sejam
acessados de outro objeto ou estrutura de dados, permitindo por exemplo que um objeto receba as
mesmas propriedades de um outro objeto. */


// Exercício 3
// a)
// false
// undefined

// b)
/* O objeto pessoa não recebeu nenhuma propriedade chamado altura. Dessa forma nenhum valor foi definido
a uma propriedade com esse nome e devido a isso o console.log informa undefined. */



// Exercícios de escrita de código
// Exercício 1
// a)
const pet = {
    nome: "Tico",
    apelidos:["Pitico","Amarelo","Gorducho"]
}
const funcao1 = (obj) => console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`)
funcao1(pet)

// b)
const pet2 = {
    ...pet,
    apelidos:["Pangarélo","Bagunça","Grude"]
}
funcao1(pet2)


// Exercício 2
// a)
const obj1 = {
    nome: "Hugh Janus",
    idade: 30,
    profissão: "Dublê"
}

const obj2 = {
    nome: "Mike Oxmol",
    idade: 50,
    profissão: "Ator"
}

const funcao2 = (obj) => [obj.nome,obj.nome.length,obj.idade,obj.profissão,obj.profissão.length]
console.log(funcao2(obj1))
console.log(funcao2(obj2))


// Exercício 3
// a)
const carrinho = []

// b)
const fruta1 = {
    nome: "maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "abacaxi",
    disponibilidade: false
}

const fruta3 = {
    nome: "uva",
    disponibilidade: true
}

// c)
const encheCarrinho = (fruta) => carrinho.push(fruta)
encheCarrinho(fruta1)
encheCarrinho(fruta2)
encheCarrinho(fruta3)

// d)
console.log(carrinho)


// Desafios
// 1
const funcaoDesafio1 = () => {
    nomeUsuario = prompt("Qual é o seu nome?")
    idadeUsuario = prompt("Qual é a sua idade?")
    profissaoUsuario = prompt("Qual é a sua profissão?")

    let obj3 = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        profissao: profissaoUsuario
    }
    
    console.log(obj3)
    console.log(typeof(obj3))
}
funcaoDesafio1()

// 2
const filme1 = {
    ano: 2000,
    nome: "Piratas do Caribe"
}

const filme2 = {
    ano: 1990,
    nome: "Matrix"
}

const funcaoDesafio2 = (obj1,obj2) => {
    console.log("O primeiro filme foi lançado antes do segundo?", obj1.ano < obj2.ano)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", obj1.ano == obj2.ano)
}
funcaoDesafio2(filme1,filme2)

// 3
const funcaoDesafio3 = (fruta) => !fruta.disponibilidade
console.log(funcaoDesafio3(fruta1))
console.log(funcaoDesafio3(fruta2))
console.log(funcaoDesafio3(fruta3))