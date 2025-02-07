import {displayPlayersContainer, playersArray, gameIsStarted, currentPlayerIndex} from "../controllers/main.js"

export function displayLastPlayer() {
  if (gameIsStarted) {
    return;
  }
  const divPlayer = document.createElement("div");
  divPlayer.classList.add("displayPlayersCell");
  const lastPlayer = playersArray[playersArray.length - 1];
  divPlayer.innerText = `${lastPlayer.name} : ${lastPlayer.score}`;
  displayPlayersContainer.appendChild(divPlayer);



  setTimeout(() => {
    divPlayer.classList.add("show");
  }, 500);
  return divPlayer;
}

