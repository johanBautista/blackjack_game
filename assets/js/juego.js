let deck = [];
let types = ["C", "D", "H", "S"];
let specialCards = ["A", "J", "Q", "K"];
let cardsGame = [];
let playerPoints = 0;
let computerPoints = 0;

// referencias HTML
const btnNewGame = document.querySelector("#btnNewGame");
const btnGetCard = document.querySelector("#btnGetCard");
const btnStopGame = document.querySelector("#btnStopGame");
const htmlPoints = document.querySelectorAll("small");
const playerCards = document.querySelector("#playerCards");
const computerCards = document.querySelector("#computerCards");

// crear y revolver la baraja
const createDeck = () => {
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

  deck = barajar(deck);
  return deck;
};
createDeck();

// tomar una card y quitarla del mazo
const getCard = () => {
  if (deck.length === 0) {
    alert("No hay cards en el deck");
    return;
  }
  const card = deck.pop();
  return card;
};

// Obtener valor card
const cardValue = (card) => {
  const valor = card.substring(0, card.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

// turno de la computadora
const turnComputer = (minimPoints) => {
  do {
    // tomar carta y sumar score
    const card = getCard();
    computerPoints = computerPoints + cardValue(card);
    htmlPoints[1].innerText = computerPoints;

    // obtener img
    const imgCard = document.createElement("img");
    imgCard.classList.add("card");
    imgCard.src = `assets/cartas/${card}.png`;
    computerCards.append(imgCard);
    if (minimPoints > 21) {
      break;
    }
  } while (computerPoints < minimPoints && minimPoints <= 21);

  //
  setTimeout(() => {
    if (computerPoints === minimPoints) {
      alert("Nadie gana :(");
    } else if (minimPoints > 21) {
      alert("Computadora gana");
    } else if (computerPoints > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 1000);
};

// eventos
btnGetCard.addEventListener("click", () => {
  // tomar carta y sumar score
  const card = getCard();
  playerPoints = playerPoints + cardValue(card);
  htmlPoints[0].innerText = playerPoints;

  // obtener img
  const imgCard = document.createElement("img");
  imgCard.classList.add("card");
  imgCard.src = `assets/cartas/${card}.png`;
  playerCards.append(imgCard);

  // logica puntos
  if (playerPoints > 21) {
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;
    turnComputer(playerPoints);
  } else if (playerPoints === 21) {
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;
    turnComputer(playerPoints);
  }
});

btnStopGame.addEventListener("click", () => {
  btnGetCard.disabled = true;
  btnStopGame.disabled = true;
  turnComputer(playerPoints);
});

btnNewGame.addEventListener("click", () => {
  // reiniciar mesa
  deck = [];
  deck = createDeck();
  // contadores a 0
  playerPoints = 0;
  computerPoints = 0;

  htmlPoints[0].innerText = 0;
  htmlPoints[1].innerText = 0;

  btnGetCard.disabled = false;
  btnStopGame.disabled = false;
  // quitar divs creados
  playerCards.innerHTML = "";
  computerCards.innerHTML = "";
});
