const coresEscolhidas = require("readline-sync")

function imprimeTresCoresFavoritas(){
    const primeiraCor = coresEscolhidas.question("Informe sua primeira cor favorita.")
    const segundaCor = coresEscolhidas.question("Informe sua segunda cor favorita.")
    const terceiraCor = coresEscolhidas.question("Informe sua terceira cor favorita.")
    console.log([primeiraCor, segundaCor, terceiraCor])
}

imprimeTresCoresFavoritas()