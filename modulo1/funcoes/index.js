// Exercícios sobre Funções

// Exercícios de interpretação de código
// Exrcício 1
/* a. 10 e 50
   b. Nada apareceria no console. A função seria realizada e os valores
      retornados não teriam nenhum destino. */


      // Exercício 2
/*  a. Essa função converte para minúsculo todos os caracteres do texto inserido pelo
usuário e verifica se ele contém a string 'cenoura', retornando um resultado booleano.

    b.  i. true
        ii. true
        iii. true
*/



// Exercícios de escrita do código
// Exercício 1
// a.
let sobreMim = () => console.log("Eu sou Rafael, tenho 37 anos e estudo programação.")
sobreMim()

// b.
let sobreMim2 = (nome,idade,cidade,profissao) => `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
console.log(sobreMim2('Rafael','37','São Paulo','Programador'))


// Exercício 2
// a.
let soma2 = (num1,num2) => num1+num2
console.log(soma1(500,20))

// b.
let maiorOuIgual = (n1,n2) => n1>=n2

// c.
let checaPar = (n) => n%2==0

// d.
let sizeNBigger = mensagem => console.log((mensagem.length + ' ' + mensagem.toUpperCase()))


// Exercício 3
let soma3 = (n1,n2) => n1+n2
let subtracao3 = (n1,n2) => n1-n2
let multiplicacao3 = (n1,n2) => n1*n2
let divisao3 = (n1,n2) => n1/n2
let primeiroNumero = Number(prompt('Insira o primeiro número'))
let segundoNumero = Number(prompt('Insira o segundo número'))
console.log('Números inseridos: ', primeiroNumero, segundoNumero)
console.log('Soma: ', soma3(primeiroNumero,segundoNumero))
console.log('Diferença: ', subtracao3(primeiroNumero,segundoNumero))
console.log('Multiplicação: ', multiplicacao3(primeiroNumero,segundoNumero))
console.log('Divisão: ', divisao3(primeiroNumero,segundoNumero))



// Desafios
//1.
//  a.
let imprime = param1 => console.log(param1)
    
//  b.
let somaDesafio = (n1,n2) => imprime(n1+n2)
somaDesafio(10,50)

// 2.
let pitagoras = (n1,n2) => Math.sqrt((n1**2)+(n2**2))
console.log(pitagoras(7,24))

