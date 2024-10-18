import { displayPlayers } from "../views/views.js";
import { inputName, playersArray, currentPlayerIndex } from "../controllers/main.js";


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
  // retire le comportement par défaut du form, appel de la fonction qui crée un nouveau joueur
  let formAddPlayer = document.querySelector("#formAddPlayer");
  formAddPlayer.addEventListener("submit", (event) => {
    
    event.preventDefault();
    //pour chaques submit, on créer une nouvelle instance de Player avec name = valeur du champ envoyé
    let newPlayer = new Player(inputName.value);
    //on push le nouveau player dans le tableau des joueurs
    playersArray.push(newPlayer);
    //vide le champ du formulaire
    inputName.value = "";
    //on définie le 1er joueur du tableau comme joueur actuel 
    playersArray[currentPlayerIndex].currentPlayer = true
    console.log(newPlayer);
    console.log(playersArray);
    //affiche les joueurs du tableau playersArray
    displayPlayers()
  });
}


export default Player;
