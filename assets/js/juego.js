import { cardValue, createCards, getCard } from "./card.js";
import { createDeck } from "./createDeck.js";

// patron modulo
const blackjackGame = (() => {
  "use strict";

  let deck = [];
  let types = ["C", "D", "H", "S"];
  let specialCards = ["A", "J", "Q", "K"];
  let pointsPlayers = [];

  // referencias HTML
  const btnNewGame = document.querySelector("#btnNewGame");
  const btnGetCard = document.querySelector("#btnGetCard");
  const btnStopGame = document.querySelector("#btnStopGame");
  const htmlPoints = document.querySelectorAll("small");
  const containerCardsPlayers = document.querySelectorAll(".containerCards");

  const startGame = (numPlayers = 2) => {
    // crear y revolver la baraja
    console.log(deck, "ll");
    pointsPlayers = [];
    for (let i = 0; i < numPlayers; i++) {
      pointsPlayers.push(0);
    }

    htmlPoints.forEach((elemet) => (elemet.innerText = 0));
    containerCardsPlayers.forEach((elemet) => (elemet.innerHTML = ""));

    btnGetCard.disabled = false;
    btnStopGame.disabled = false;
  };

  deck = createDeck(types, specialCards);

  const acumulatePoints = (card, turn) => {
    pointsPlayers[turn] = pointsPlayers[turn] + cardValue(card);
    htmlPoints[turn].innerText = pointsPlayers[turn];
    return pointsPlayers[turn];
  };

  const detectWinner = () => {
    const [minimPoints, computerPoints] = pointsPlayers;

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
    }, 500);
  };

  // turno de la computadora
  const turnComputer = (minimPoints) => {
    let computerPoints = 0;
    do {
      // tomar carta y sumar score
      const card = getCard(deck);
      computerPoints = acumulatePoints(card, pointsPlayers.length - 1);
      createCards(card, pointsPlayers.length - 1);
    } while (computerPoints < minimPoints && minimPoints <= 21);

    detectWinner();
  };

  // eventos
  btnGetCard.addEventListener("click", () => {
    const card = getCard(deck);
    let playerPoints = acumulatePoints(card, 0);

    createCards(card, 0);

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
    turnComputer(pointsPlayers[0]);
  });

  btnNewGame.addEventListener("click", () => {
    startGame();
  });

  return {
    newGame: startGame,
  };
})();
