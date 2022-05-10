// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // return array.reverse()
    let invArr = []
    for (let i = array.length-1; i >= 0; i--) {
        invArr.push(array[i])
    }
    return invArr
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // return array.sort((a,b) => a-b)
    let loop = true
    while (loop) {
        loop = false
        for (let i = 1; i < array.length; i++) {
            if (array[i-1] > array[i]) {
                let aux = array[i-1]
                array[i-1] = array[i]
                array[i] = aux
                loop = true
            }
        }
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    // return array.filter(item => item % 2 === 0)
    let newArray = []
    for (let n of array) {
        if (n % 2 === 0) {
            newArray.push(n)
        }
    }
    return newArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let newArray = []
    for (let n of array) {
        if (n % 2 === 0) {
            newArray.push(n**2)
        }
    }
    return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNum = 0
    let menorNum = 0
    if (num1 > num2) {
        maiorNum = num1
        menorNum = num2
    } else {
        menorNum = num1
        maiorNum = num2
    }
    return {
        maiorNumero: maiorNum,
        maiorDivisivelPorMenor: maiorNum % menorNum === 0,
        diferenca: maiorNum - menorNum
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    return [...Array(n*2).keys()].filter(item => item % 2 === 0)
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}