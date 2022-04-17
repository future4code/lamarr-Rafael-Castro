// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Informe a altura do retângulo."))
  let largura = Number(prompt("Informe a largura do retângulo."))
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Em que ano você nasceu?"))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual é o seu nome?")
  let idade = Number(prompt("Qual é a sua idade?"))
  let email = prompt("Qual é o seu email?")
  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Informe a primeira cor.")
  let cor2 = prompt("Informe a segunda cor.")
  let cor3 = prompt("Informe a terceira cor.")
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let auxiliar = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = auxiliar
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() == string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Qual é o ano atual?"))
  let anoNascimento = Number(prompt("Qual é o ano de nascimento?"))
  let emissaoIdentidade = Number(prompt("Qual é o ano de emissão da identidade?"))
  let deveRenovar
  if (anoAtual - anoNascimento <= 20) {
    deveRenovar = anoAtual - emissaoIdentidade >= 5
  } else if (anoAtual - anoNascimento > 20 && anoAtual - anoNascimento <= 50) {
    deveRenovar = anoAtual - emissaoIdentidade >= 10
  } else if (anoAtual - anoNascimento > 50) {
    deveRenovar = anoAtual - emissaoIdentidade >= 15
  }
  console.log(deveRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let bissexto
  if (ano % 400 == 0) {
   bissexto = true
  } else if (ano % 4 == 0) {
    if ((ano % 100 == 0 && ano % 400 != 0) == false) {
      bissexto = true
    } else {
      bissexto = false
    }
  } else {
    bissexto = false
  }
  return bissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let maioridade = prompt("Você tem mais de 18 anos? (sim ou não)")
  let ensinoMedio = prompt("Você possui o ensino médio completo? (sim ou não)")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim ou não)")
  console.log(maioridade === 'sim' && ensinoMedio === 'sim' && disponibilidade === 'sim')
}