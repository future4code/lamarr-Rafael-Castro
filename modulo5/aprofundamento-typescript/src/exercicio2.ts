// A) A função deve receber um array de números como entrada e devolve um
// objeto com 3 propriedades.

type Estatistica = {
    maior:number,
    menor:number,
    media:number
}

function obterEstatisticas(numeros:number[]):Estatistica {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// B) Outras variáveis:
// soma, do tipo número;
// num, to tipo number (inferido). Váriavel criada dentro do loop for of
// Um objeto chamado estatísticas, contendo três propriedades do tipo numero

// C)
type Amostra = {
    numeros:number[],
    obterEstatisticas:(numeros:Number[])=>Estatistica
}