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

// Dá novas cartas caso ambas sejam Ases
function checkCards(cards){
   while (cards[0].texto[0] === "A" && cards[1].texto[0] === "A") {
      console.log("Dois Ases! Recebendo novas cartas.")
      cards = []
      cards.push(comprarCarta())
      cards.push(comprarCarta())
   }
   return cards
}

function hitMe(cards) {
   let cardsTextsList = []
   for (let i = 0; i < cards.length; i++) {
      cardsTextsList.push(cards[i].texto)
   }
   if (confirm(`Suas cartas são ${cardsTextsList}. A carta revelada do computador é ${computerCards[0].texto}.\nDeseja comprar mais uma carta?`)) {
      cards.push(comprarCarta())
   } else {
      computerTurn()
   }
}






// let checkCards = (cards) => {
//    while (cards[0].texto[0] === "A" && cards[1].texto[0] === "A") {
//       console.log("Dois Ases! Recebendo novas cartas.")
//       cards = []
//       cards.push(comprarCarta())
//       cards.push(comprarCarta())
//    }
//    return cards
// }