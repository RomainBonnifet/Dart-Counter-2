import {displayPlayersContainer, playersArray, gameIsStarted} from "../controllers/main.js"

export function displayLastPlayer() {
  if (gameIsStarted) {
    return;
  }
  let player = playersArray[playersArray.length - 1];
  let div = document.createElement("div");
  if (player.currentPlayer) {
    div.innerHTML = `${player.name} :
        ${player.score} points.`;
  } else {
    div.innerText = `${player.name} :
        ${player.score} points.`;
  }
  div.classList.add("displayPlayersCell");
  div.classList.add("hidden");
  displayPlayersContainer.appendChild(div);
  setTimeout(() => {
    div.classList.add("show");
  }, 500);
}

