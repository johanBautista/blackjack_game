console.log("eiii");

let deck = [];
let types = ["C", "D", "H", "S"];
let specialCards = ["A", "J", "Q", "K"];
let cardsGame = [];

// crear y revolver la baraja
const crearDeck = () => {
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

  // console.log(deck);
  // deck = _.shuffle(deck);
  deck = barajar(deck);
  console.log(deck);
  return deck;
};
crearDeck();

// tomar una carta y quitarla del mazo
const tomarCarta = () => {
  if (deck.length === 0) {
    alert("No hay cartas en el deck");
    return;
  }

  const carta = deck.pop();
  // cardsGame.push(...carta);
  // console.log(deck, carta);
  return carta;
};
tomarCarta();
