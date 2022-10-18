const numerosEscolhidos = require('readline-sync')

const primeiroNumero = Number(numerosEscolhidos.question("Informe o primeiro numero."))
const segundoNumero = Number(numerosEscolhidos.question("Informe o segundo numero."))

function comparaDoisNumeros(num1:number, num2:number){
    let maiorNumero
    let menorNumero

    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    const diferenca = maiorNumero - menorNumero

    return diferenca
}

console.log(comparaDoisNumeros(primeiroNumero, segundoNumero))