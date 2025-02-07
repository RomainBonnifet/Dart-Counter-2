import Player from "../models/Player.js";
import { createNewPlayer } from "../models/Player.js";
import { displayLastPlayer } from "../views/views.js";

// Les éléments SVG sélectionnés
const svgElements = { 
  double20 : document.querySelector(".use21"),
  outer20 : document.querySelector(".use23"),
  triple20 : document.querySelector(".use25"),
  inner20 : document.querySelector(".use27"),

  double5 : document.querySelector(".use31"),
  outer5 : document.querySelector(".use33"),
  triple5 : document.querySelector(".use35"),
  inner5 : document.querySelector(".use37"),

  double12 : document.querySelector(".use41"),
  outer12 : document.querySelector(".use43"),
  triple12 : document.querySelector(".use45"),
  inner12 : document.querySelector(".use47"),

  double9 : document.querySelector(".use51"),
  outer9 : document.querySelector(".use53"),
  triple9 : document.querySelector(".use55"),
  inner9 : document.querySelector(".use57"),

  double14 : document.querySelector(".use61"),
  outer14 : document.querySelector(".use63"),
  triple14 : document.querySelector(".use65"),
  inner14 : document.querySelector(".use67"),

  double11 : document.querySelector(".use71"),
  outer11 : document.querySelector(".use73"),
  triple11 : document.querySelector(".use75"),
  inner11 : document.querySelector(".use77"),

  double8 : document.querySelector(".use81"),
  outer8 : document.querySelector(".use83"),
  triple8 : document.querySelector(".use85"),
  inner8 : document.querySelector(".use87"),

  double16 : document.querySelector(".use91"),
  outer16 : document.querySelector(".use93"),
  triple16 : document.querySelector(".use95"),
  inner16 : document.querySelector(".use97"),

  double7 : document.querySelector(".use101"),
  outer7 : document.querySelector(".use103"),
  triple7 : document.querySelector(".use105"),
  inner7 : document.querySelector(".use107"),

  double19 : document.querySelector(".use111"),
  outer19 : document.querySelector(".use113"),
  triple19 : document.querySelector(".use115"),
  inner19 : document.querySelector(".use117"),

  double3 : document.querySelector(".use121"),
  outer3 : document.querySelector(".use123"),
  triple3 : document.querySelector(".use125"),
  inner3 : document.querySelector(".use127"),

  double17 : document.querySelector(".use131"),
  outer17 : document.querySelector(".use133"),
  triple17 : document.querySelector(".use135"),
  inner17 : document.querySelector(".use137"),

  double2 : document.querySelector(".use141"),
  outer2 : document.querySelector(".use143"),
  triple2 : document.querySelector(".use145"),
  inner2 : document.querySelector(".use147"),

  double15 : document.querySelector(".use151"),
  outer15 : document.querySelector(".use153"),
  triple15 : document.querySelector(".use155"),
  inner15 : document.querySelector(".use157"),

  double10 : document.querySelector(".use161"),
  outer10 : document.querySelector(".use163"),
  triple10 : document.querySelector(".use165"),
  inner10 : document.querySelector(".use167"),

  double6 : document.querySelector(".use171"),
  outer6 : document.querySelector(".use173"),
  triple6 : document.querySelector(".use175"),
  inner6 : document.querySelector(".use177"),

  double13 : document.querySelector(".use181"),
  outer13 : document.querySelector(".use183"),
  triple13 : document.querySelector(".use185"),
  inner13 : document.querySelector(".use187"),

  double4 : document.querySelector(".use191"),
  outer4 : document.querySelector(".use193"),
  triple4 : document.querySelector(".use195"),
  inner4 : document.querySelector(".use197"),

  double18 : document.querySelector(".use201"),
  outer18 : document.querySelector(".use203"),
  triple18 : document.querySelector(".use205"),
  inner18 : document.querySelector(".use207"),

  double1 : document.querySelector(".use211"),
  outer1 : document.querySelector(".use213"),
  triple1 : document.querySelector(".use215"),
  inner1 : document.querySelector(".use217"),

  center : document.querySelector(".circle219"),
  centerDouble : document.querySelector(".circle221"),
}

// Utilisation des valeurs de svgElements dans targetElements
const targetElements = [
  svgElements.double20, svgElements.outer20, svgElements.triple20, svgElements.inner20,
  svgElements.double5, svgElements.outer5, svgElements.triple5, svgElements.inner5,
  svgElements.double12, svgElements.outer12, svgElements.triple12, svgElements.inner12,
  svgElements.double9, svgElements.outer9, svgElements.triple9, svgElements.inner9,
  svgElements.double14, svgElements.outer14, svgElements.triple14, svgElements.inner14,
  svgElements.double11, svgElements.outer11, svgElements.triple11, svgElements.inner11,
  svgElements.double8, svgElements.outer8, svgElements.triple8, svgElements.inner8,
  svgElements.double16, svgElements.outer16, svgElements.triple16, svgElements.inner16,
  svgElements.double7, svgElements.outer7, svgElements.triple7, svgElements.inner7,
  svgElements.double19, svgElements.outer19, svgElements.triple19, svgElements.inner19,
  svgElements.double3, svgElements.outer3, svgElements.triple3, svgElements.inner3,
  svgElements.double17, svgElements.outer17, svgElements.triple17, svgElements.inner17,
  svgElements.double2, svgElements.outer2, svgElements.triple2, svgElements.inner2,
  svgElements.double15, svgElements.outer15, svgElements.triple15, svgElements.inner15,
  svgElements.double10, svgElements.outer10, svgElements.triple10, svgElements.inner10,
  svgElements.double6, svgElements.outer6, svgElements.triple6, svgElements.inner6,
  svgElements.double13, svgElements.outer13, svgElements.triple13, svgElements.inner13,
  svgElements.double4, svgElements.outer4, svgElements.triple4, svgElements.inner4,
  svgElements.double18, svgElements.outer18, svgElements.triple18, svgElements.inner18,
  svgElements.double1, svgElements.outer1, svgElements.triple1, svgElements.inner1,
  svgElements.center, svgElements.centerDouble,
]

// tableau des points de la cible
const targetElementPoint = [
  40, 20, 60, 20, 10, 5, 15, 5, 24, 12, 36, 12, 18, 9, 27, 9, 28, 14, 42, 14,
  22, 11, 33, 11, 16, 8, 24, 8, 32, 16, 48, 16, 14, 7, 21, 7, 38, 19, 57, 19, 
  6, 3, 9, 3, 34, 17, 51, 17, 4, 2, 6, 2, 30, 15, 45, 15, 20, 10, 30, 10, 12, 
  6, 18, 6, 26, 13, 39, 13, 8, 4, 12, 4, 36, 18, 54, 18, 2, 1, 3, 1, 25, 50,
]

let inputName = document.querySelector("#playerName");
let displayPlayersContainer = document.querySelector(".displayPlayersContainer");
let infoGame = document.querySelector(".infoGame");
let displayCurrentVolley = document.querySelector('.currentScores')

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.classList.remove("hidden");
  element.classList.add("show"); 
  console.log("show");
}

let gameIsStarted = false;
let currentVolley = []
const playersArray = []
let currentPlayerIndex = 0;

// Fonction pour gérer le score au clic
export function returnScoreOfClick() {

  if (!gameIsStarted) return

  targetElements.forEach((element, index) => {
    if (element) {
      element.addEventListener("click", () => {

        let targetElementValue = targetElementPoint[index];
        console.log(targetElementValue);
        

        if (playersArray[currentPlayerIndex].volley > 0) {

          playersArray[currentPlayerIndex].volley--
          currentVolley.push(targetElementValue);
          updateCurrentPlayerScores()
        }

        if (currentVolley.length === 3) {
          validationVolley();
          return
        }
      });
    }
  });
}

let playerForm = document.querySelector("#formAddPlayer");
playerForm.addEventListener("submit", (event) => {
  console.log("prevent default");
  event.preventDefault();
  createNewPlayer()
})

// écouteur d'event sur le bouton Start pour lancer le décompte
const startGameButton = document.querySelector("#startButton");
startGameButton.addEventListener("click", startGame);

function startGame() {
  //on vérifie qu'au moins un joueur est inscrit dans le tableau playersArray
  if (playersArray.length >= 1) {
    gameIsStarted = true;
    returnScoreOfClick();
    hide(startGameButton);
    hide(playerForm)
    show(missedShotBtn)
    infoGame.innerText = `Au tour de ${playersArray[currentPlayerIndex].name}`
  }
}

let missedShotBtn = document.getElementById("missedBtn");
missedShotBtn.addEventListener('click', missedScore)

function missedScore(){
  // on retire une fléchette au current player
  playersArray[currentPlayerIndex].volley--
  updateCurrentPlayerScores()
  //On push un score fléchette de zéro
  if (currentVolley.length < 3){
    currentVolley.push(0)
  }
  //Déclenche la suite du script si le joueur a lancé ses 3 fléchettes
  if (currentVolley.length === 3) {
    validationVolley()
  }
}

function subtractScore(){
  let volleyScore = sumVolleyArray(currentVolley)

  console.log(volleyScore);
  
  if (playersArray[currentPlayerIndex].currentPlayer) {
    playersArray[currentPlayerIndex].score -= volleyScore
    playersArray[currentPlayerIndex].volley = 3
  }

  checkScore(playersArray[currentPlayerIndex].score, volleyScore)

  defineNextPlayer(playersArray)
  infoGame.innerText = `Au tour de ${playersArray[currentPlayerIndex].name}`
}

function checkScore(score, lastScore){
  if (score < 0) {
    playersArray[currentPlayerIndex].score += lastScore
    alert("Vous devez finir par un score exact. Au tour du joueur suivant")
  }
  if (score === 0){
    alert(`${playersArray[currentPlayerIndex].name} a gagné !`)
    restartGame()
  }
}

// on récupère les valeurs de la volée de fléchettes pour les additionner et décrémenter le score du joueur.
function sumVolleyArray(volley) {
  currentVolley = []
  return volley.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}


function validationVolley() {

  const span = infoGame;
  span.innerText = `Valider la série ${currentVolley}`;

  const yesButton = document.createElement("button");
  yesButton.innerText = "Oui";
  yesButton.addEventListener("click", () => {
    subtractScore()
    updateCurrentPlayerScores()
    show(missedShotBtn)
  });

  const noButton = document.createElement("button");
  noButton.innerText = "Non";
  noButton.addEventListener("click", () => {
    currentVolley.length = 0;
    playersArray[currentPlayerIndex].volley = 3;
    updateCurrentPlayerScores();
    show(missedShotBtn);
    span.innerText = `Au tour de ${playersArray[currentPlayerIndex].name}`
  });

  // Ajouter la question et les boutons dans le span
  span.appendChild(yesButton);
  span.appendChild(noButton);
}

// fonction qui définie le current player en fonction des joueurs du tableau playersArray
function defineNextPlayer(playersArray) {
  playersArray[currentPlayerIndex].currentPlayer = false;
  currentPlayerIndex = (currentPlayerIndex + 1) % playersArray.length;
  playersArray[currentPlayerIndex].currentPlayer = true;
}

function restartGame(){
  playersArray.forEach((player) => {
    player.score = 301
    player.volley = 3
  })
  currentPlayerIndex = 0
  startGame()
}

if (!startGameButton) console.error("Bouton start introuvable");
if (!displayPlayersContainer) console.error("Conteneur joueurs introuvable");


export {inputName, playersArray, currentPlayerIndex, displayPlayersContainer, show, hide, startGameButton, infoGame, gameIsStarted } 