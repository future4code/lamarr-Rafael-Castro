// Exercícios sobre condicionais

// Exercício 1
/* a) O código recebe um valor inserido pelo usuário e converte esse valor para numeral.
Após isso, o valor numérico passa por uma verificação condicional que visa determinar se
ele é par. Essa verificação é feita através do operador %, que serve para obter o resto
de uma divisão. Caso o número passe na verificação, uma mensagem é exibida no console.
Caso contrário, uma segunda mensagem é exibida. */

// b) Para números pares.

// c) Para números impares.


// Exercício 2
/* a) O código recebe como valor o nome de uma fruta, inserido pelo usuário.
Em seguida ele verifica se essa fruta é alguma das frutas especificadas no código.
Se for, um valor específico aquela fruta é atribuído à variável preco. Caso não seja,
um valor padrão é atribuido à variável preco. Finalmente o código imprime no console
uma string, preenchedo-a com o nome da fruta inserida pelo usuário e o valor presente
na variavel preco. */

// b) "O preço da fruta Maçã é R$ 2.25"

// c) "O preço da fruta Pêra é R$ 5"



// Exercício 3
/* a) Está pedindo que o usuário insira um número, convertendo o valor recebido para
numeral e armazendo-o na variável numero. */

/* b) Caso 10 seja inserido, a mensagem: "Esse número passou no teste" será exibida
no console, seguida de uma mensagem de erro referente a variavel mensagem. Caso -10
seja inserido, apenas a mensagem de erro referente a variável mensagem é exibida.  */

/* c) A mensagem de erro acusa que a variável mensagem não foi definida. Isso ocorre
porque, nos casos do número inserido ser maior que 0, a variável mensagem só é 
declarada dentro do bloco if, ficando seu escopo limitado a esse bloco. */



// Exercícios de escrita de código
// Exercício 1
// a) e b)
let idadeUsuario = Number(prompt("Qual é a sua idade?"))

// c)
if (idadeUsuario > 17) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}


// Exercício 2
let periodoUsuario = prompt("Informe o turno do dia do aluno.(M, V ou N)")
if (periodoUsuario === "M") {
    console.log("Bom Dia!")
} else if (periodoUsuario === "V") {
    console.log("Boa Tarde!")
} else if (periodoUsuario === "N") {
    console.log("Boa Noite!")
}



// Exercícios 3
let periodoUsuario = prompt("Informe o turno do dia do aluno.(M, V ou N)")
switch (periodoUsuario) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
}



// Exercício 4
let generoFilme = prompt("Qual é o gênero do filme?")
let valor = Number(prompt("Qual é o valor do ingresso?"))

if (generoFilme === 'fantasia') {
    if (valor < 15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
} else {
    console.log("Escolha outro filme :(")
}



// Desafios
// 1
let generoFilme = prompt("Qual é o gênero do filme?")
let valor = Number(prompt("Qual é o valor do ingresso?"))

if (generoFilme === 'fantasia') {
    if (valor < 15) {
        let lanche = prompt("Escolha pipoca doce ou salgada.")
        console.log("Bom filme!")
        console.log(`Aproveite sua pipoca ${lanche}.`)
    } else {
        console.log("Escolha outro filme :(")
    }
} else {
    console.log("Escolha outro filme :(")
}


// 2
let nomeCliente = prompt("Informe seu nome completo.")
let tipoJogo = prompt("Escolha jogo doméstico(DO) ou internacional(IN).")
let tipoJogoNovo
let etapaJogo = prompt("Escolha semi-final(SF), decisão de terceiro lugar(DT) ou final(FI).")
let etapaJogoNovo
let categoria = Number(prompt("Escolha a categoria: (1, 2, 3 ou 4)"))
let quantidade = Number(prompt("Quantos ingressos?"))
let valoresDT = [660, 440, 330, 170]
let valoresSF = [1320, 880, 550, 220]
let valoresFI = [1980, 1320, 880, 330]
let valorDolar = 4.10
let moeda
let valorIngressoInd
let valorTotal

switch (tipoJogo) {
    case "DO":
        tipoJogoNovo = "Nacional"
        moeda = "R$"
        break;
    case "IN":
        tipoJogoNovo = "Internacional"
        moeda = "U$"
        break;
}

switch (etapaJogo) {
    case "SF":
        etapaJogoNovo = "Semifinal"
        break;
    case "DT":
        etapaJogoNovo = "Decisão de terceiro lugar"
        break;
    case "FI":
        etapaJogoNovo = "Final"
        break;
}

if (categoria === 1) {
    if (etapaJogo === "DT") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresDT[0]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresDT[0]/valorDolar
        }
    } else if (etapaJogo === "SF") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresSF[0]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresSF[0]/valorDolar
        }
    } else if (etapaJogo === "FI") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresFI[0]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresFI[0]/valorDolar
        }
    }
} else if (categoria === 2) {
    if (etapaJogo === "DT") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresDT[1]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresDT[1]/valorDolar
        }
    } else if (etapaJogo === "SF") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresSF[1]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresSF[1]/valorDolar
        }
    } else if (etapaJogo === "FI") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresFI[1]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresFI[1]/valorDolar
        }
    }    
} else if (categoria === 3) {
    if (etapaJogo === "DT") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresDT[2]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresDT[2]/valorDolar
        }
    } else if (etapaJogo === "SF") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresSF[2]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresSF[2]/valorDolar
        }
    } else if (etapaJogo === "FI") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresFI[2]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresFI[2]/valorDolar
        }
    }    
} else if (categoria === 4) {
    if (etapaJogo === "DT") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresDT[3]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresDT[3]/valorDolar
        }
    } else if (etapaJogo === "SF") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresSF[3]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresSF[3]/valorDolar
        }
    } else if (etapaJogo === "FI") {
        if (tipoJogo === "DO") {
            valorIngressoInd = valoresFI[3]
        } else if (tipoJogo === "IN") {
            valorIngressoInd = valoresFI[3]/valorDolar
        }
    }    
}

valorTotal = parseInt(valorIngressoInd * quantidade)


console.log("---Dados da compra---")
console.log("Nome do cliente:",nomeCliente)
console.log("Tipo de jogo:",tipoJogoNovo)
console.log("Etapa do jogo:",etapaJogoNovo)
console.log("Categoria:",categoria)
console.log(`Quantidade de Ingressos: ${quantidade} ingressos`)
console.log("---Valores---")
console.log("Valor do ingresso:",moeda ,valorIngressoInd)
console.log("Valor total:",moeda , valorTotal)