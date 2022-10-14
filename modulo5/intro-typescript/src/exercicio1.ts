const ladosTriangulo = require("readline-sync")

const ladoA = ladosTriangulo.question("Informe o primeiro lado.")
const ladoB = ladosTriangulo.question("Informe o segundo lado.")
const ladoC = ladosTriangulo.question("Informe o terceiro lado.")


function checaTriangulo(a:string, b:string, c:string):string{
    if (a !== b && b !== c) {
        return "Escaleno"
    } else if (a === b && b === c) {
        return "Equilátero"
    } else {
        return "Isóceles"
    }
}

console.log(checaTriangulo(ladoA, ladoB, ladoC))