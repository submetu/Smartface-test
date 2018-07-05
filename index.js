import {comparator } from "./helper.js";
import {Game} from './Game.js';
import {Player} from './Player.js';
import {Computer} from './Computer.js';
import {player,computer} from './constants.js';



let playerOne = new Player();
let computerOne = new Computer();
let rock_paper_scisson_game = new Game(playerOne, computerOne, comparator);

let rollBtn = document.getElementById('roll')
let resultDiv = document.getElementById('result');
let playerStateDiv = document.getElementById('player-state');
let ComputerStateDiv = document.getElementById('computer-state');

rollBtn.addEventListener('click', () => {
  resultDiv.innerHTML = '';
  rock_paper_scisson_game.start();
  playerStateDiv.innerHTML = playerOne.state;
  ComputerStateDiv.innerHTML = computerOne.state;
  let result = rock_paper_scisson_game.result;
  
  //if it's not a draw
  if (result !== false) {
    let winningPlayer = (playerOne.state === result) ? player : computer
    rock_paper_scisson_game.end();
    resultDiv.innerHTML = `${winningPlayer} WINS!!`;
  }
  else {
    resultDiv.innerHTML = 'Draw!';
  }
});





