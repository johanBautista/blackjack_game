/**
 * funcion para pedir una carta
 * @param {Array<String>} deck
 * @returns {string}
 */

// tomar una card y quitarla del mazo
export const getCard = (deck) => {
  console.log("ddd", deck);
  if (!deck || deck.length === 0) {
    alert("No hay cards en el deck");
    return;
  }
  return deck.pop();
};

/**
 * obtener el valor de la carta
 * @param {String} card
 * @returns {Number} valor de la carta
 */

// Obtener valor card
export const cardValue = (card) => {
  const valor = card.substring(0, card.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

/**
 *
 * @param {String} card
 * @param {Number} turn
 */

export const createCards = (card, turn) => {
  console.log(card, turn);
  const containerCardsPlayers = document.querySelectorAll(".containerCards");

  const imgCard = document.createElement("img");
  imgCard.classList.add("card");
  imgCard.src = `assets/cartas/${card}.png`;
  containerCardsPlayers[turn].append(imgCard);
};
