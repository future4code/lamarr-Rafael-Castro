´´´
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let total = 0
  for (let i of arrayDeNumeros){
    if (i === numeroEscolhido){
      total++
    }
  }
  if (total === 0){
    return "Número não encontrado"
  } else {
      return `O número ${numeroEscolhido} aparece ${total}x`
  }
}
´´´