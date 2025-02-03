import { displayPlayers } from "../views/views.js";
import { inputName, playersArray, currentPlayerIndex, show, hide, startGameButton, infoGame } from "../controllers/main.js";




class Player {
  constructor(name) {
    this.name = name;
    this.score = 301;
    this.volley = 3;
    this.lastScores = [0];
    this.currentPlayer = false;
    this.index = 0
  }
}

export function createNewPlayer(){

    try {
      // Vérifier si le champ de nom est vide
      if (inputName.value.trim() === "") {
        throw new Error("Le nom du joueur ne peut pas être vide.");
      }
      if (inputName.value !== "") {
        let newPlayer = new Player(inputName.value);
        console.log(newPlayer);
        playersArray.push(newPlayer);
        inputName.value = "";
        playersArray[currentPlayerIndex].currentPlayer = true;
      }
      displayPlayers();
      if (playersArray.length >= 1 ){
        show(startGameButton)
      }
  

    } catch (error) {
      // Afficher une alerte si une erreur est levée
      alert(error.message); 
    }

}

export default Player;