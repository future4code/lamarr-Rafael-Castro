// A)
// const minhaString:string=0
// Resposta: O VS acusa que um valor do tipo número não pode ser 
// atribuído a uma variável do tipo string

// B)
const meuNumero:number=1
// Resposta: usando o operador pipe para incluir o tipo string
const meuNumero1:number|string='string1'

// C)
type Pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}
const pessoa1:Pessoa={
    nome: 'João',
    idade: 20,
    corFavorita: 'preto'
}
const pessoa2:Pessoa={
    nome: 'Maria',
    idade: 30,
    corFavorita: 'azul'
}
const pessoa3:Pessoa={
    nome: 'Pedro',
    idade: 40,
    corFavorita: 'roxo'
}

// D)
enum coresArcoIris{
    VERMELHA='Vermelha',
    LARANJA='Laranja',
    AMARELA='Amarela',
    VERDE='Verde',
    AZUL='Azul',
    INDIGO='Indigo',
    VIOLETA='Violeta'
}
const pessoa4:Pessoa={
    nome: 'João',
    idade: 20,
    corFavorita: coresArcoIris.AMARELA
}
const pessoa5:Pessoa={
    nome: 'Maria',
    idade: 30,
    corFavorita: coresArcoIris.AZUL
}
const pessoa6:Pessoa={
    nome: 'Pedro',
    idade: 40,
    corFavorita: coresArcoIris.LARANJA
}
