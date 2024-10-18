import {displayPlayersDiv, playersArray} from "../controllers/main.js"

export function displayPlayers() {
    displayPlayersDiv.innerHTML = "";
    playersArray.forEach((player) => {
      let div = document.createElement("div");
      if (player.currentPlayer) {
        div.innerHTML =

        `${player.name} :
        ${player.score} points.
        <br>Fléchettes en main : ${player.volley} `;


      } else {
        div.innerHTML =

        `${player.name} :
        ${player.score} points.`;

      }

      div.setAttribute("class", "displayPlayerCell")
      displayPlayersDiv.appendChild(div);

    });
}