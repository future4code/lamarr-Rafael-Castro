const InputAnos = require("readline-sync")

const anoAtual = InputAnos.question('Informe o ano atual.')
const anoNascimento = InputAnos.question('Informe o seu ano de nascimento.')
const anoEmissao = InputAnos.question('Informe o ano de emissao do documento.')

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number):string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao

    if (idade <= 20) {
        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"

    } else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"

    } else if (idade > 50) {
        return tempoCarteira >= 15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"

    } else {
        return "error"
    }
}

console.log(checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao))
