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
let cardsFacesList
let gameOn

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

// Reúne os textos das cartas em um array para exibição
function cardFaces(cards) {
   cardsFacesList = []
   for (let i = 0; i < cards.length; i++) {
      cardsFacesList.push(cards[i].texto)
   }
}

// Verfica se jogador "estourou" e recomeça jogo ou jogador compra nova carta
function playerTurn() {
   if (playerScore > 21) {
      console.log("O computador ganhou!")
      gameOn = false
      startGame()
   } else {
      hitMe(playerCards)
   }
}

// Computador saca cartas até finalizar
function computerTurn(){
   while (computerScore < playerScore) {
      computerCards.push(comprarCarta())
      computerScore = sumPoints(computerCards)
      cardFaces(computerCards)
      console.log(`Computador - cartas: ${cardsFacesList} - pontuação ${computerScore}`)
   }
}

// Verifica vencedor e recomeça partida
function checkWinner() {
   if (computerScore > 21) {
      console.log("O jogador venceu!")
      startGame()
   } else if (playerScore > computerScore) {
      console.log("O jogador venceu!")
      startGame()
   } else if (playerScore < computerScore) {
      console.log("O computador venceu!")
      startGame()
   } else if (playerScore === computerScore) {
      console.log("Empate!")
      startGame()
   }
}

// Game loop
function gameLoop(){
   playerScore = 0
   computerScore = 0
   playerCards = []
   computerCards = []
   gameOn = true

   // "Compra" e adiciona cartas à mão
   playerCards.push(comprarCarta())
   playerCards.push(comprarCarta())

   // Verifica e troca se as 2 cartas forem Ases
   playerCards = checkCards(playerCards)

   //Soma os pontos das cartas
   playerScore = sumPoints(playerCards)
   
   computerCards.push(comprarCarta())
   computerScore = sumPoints(computerCards)
   
   cardFaces(playerCards)
   console.log(`Usuário - cartas: ${cardsFacesList} - pontuação ${playerScore}`)
   console.log(`Computador - cartas: ${computerCards[0].texto} - pontuação ${computerScore}`)

   hitMe(playerCards)
   playerScore = sumPoints(playerCards)
   
   cardFaces(playerCards)
   console.log(`Usuário - cartas: ${cardsFacesList} - pontuação ${playerScore}`)
   
   while (gameOn) {
   playerTurn()
   playerScore = sumPoints(playerCards)
   }
   
   checkWinner()
}

startGame()