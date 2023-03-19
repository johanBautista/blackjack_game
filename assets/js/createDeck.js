import { barajar } from "./randomCard.js";

/**
 *
 * @param {Array<String>} types
 * @param {Array<String>} specialCards
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */


export const createDeck = (types, specialCards) => {
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of types) {
      deck.push(i + tipo);
    }
  }

  for (const special of specialCards) {
    for (let tipo of types) {
      deck.push(special + tipo);
    }
  }

  console.log(barajar(deck));
  return barajar(deck);
};
