/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

//Variáveis
let playerScore
let computerScore
let playerCards
let computerCards

//Funções

//Inicio
function startGame(){
   if (confirm("Iniciar jogo?")) {
      gameLoop()
   } else {
      console.log("O jogo acabou.")
   }
}

// Guarda a pontuação das cartas
function sumPoints(cards){
   score = 0
   for (let i = 0; i < cards.length; i++) {
      score += cards[i].valor
   }
   return score
}

// Identifica vencedor
function checkWinner() {
   if (playerScore > 21) {
      console.log("O computador ganhou!")
      startGame()
   } else if (playerScore <= 21) {
      hitMe(playerCards)
   } else {
      winnerMsg = "Empate!"
   }
}

// Computador saca cartas até finalizar
function computerTurn(){

}

// Game loop
function gameLoop(){
   playerScore = 0
   computerScore = 0
   playerCards = []
   computerCards = []

   // "Compra" e adiciona cartas à mão
   playerCards.push(comprarCarta())
   playerCards.push(comprarCarta())

   // Verifica e troca se as 2 cartas forem Ases
   playerCards = checkCards(playerCards)

   //Soma os pontos das cartas
   playerScore = sumPoints(playerCards)
   
   computerCards.push(comprarCarta())
   computerScore = sumPoints(computerCards)
   
   console.log(`Usuário - cartas: ${playerCards[0].texto} ${playerCards[1].texto} - pontuação ${playerScore}`)
   console.log(`Computador - cartas: ${computerCards[0].texto} - pontuação ${computerScore}`)

   hitMe(playerCards)
   playerScore = sumPoints(playerCards)
   console.log(`Usuário - cartas: ${playerCards[0].texto} ${playerCards[1].texto} ${playerCards[2].texto} - pontuação ${playerScore}`)
   checkWinner()
}

startGame()



// computerCards.push(comprarCarta())
// computerCards = checkCards(computerCards)

// computerScore += computerCards[1].valor








// console.log(playerCards[0].texto)
// console.log(playerCards[0].valor)
// console.log(playerCards[1].texto)
// console.log(playerCards[1].valor)
// console.log(computerCards[0].texto)
// console.log(computerCards[0].valor)
// console.log(computerCards[1].texto)
// console.log(computerCards[1].valor)
// console.log(playerScore)
// console.log(computerScore)

// let card1 = {
//    texto: "10♦️",
//    valor: 10
// }
// let card2 = {
//    texto: "A♦️",
//    valor: 7
// }
// let card3 = {
//    texto: "4♦️",
//    valor: 5
// }
// let card4 = {
//    texto: "A♦️",
//    valor: 3
// }

// let playerCards = [card1,card2]
// let computerCards = [card3,card4]