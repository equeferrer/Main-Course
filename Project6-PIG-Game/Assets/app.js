/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
const newGameBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');
const playerScore = document.querySelector('.player-score');
const currentScore = document.querySelector('.player-current-score');
const playerScoreOne = document.querySelector('#score-0')
const currentScoreOne = document.querySelector('#current-0')



class Game {
    constructor(playerScore, currentScore, playerScoreOne, currentScoreOne) {
        this.playerScore = playerScore
        this.currentScore = currentScore
        this.playScoreOne = playerScoreOne
        this.currentScoreOne = currentScoreOne
        this.clear()
    }        
    clear () {
        this.playerScore = "0"
        this.currentScore = "0"
    }
}


const game = new Game(playerScore, currentScore);


newGameBtn.addEventListener('click', function () {
    console.log("Hello");
    game.clear();
})

rollBtn.addEventListener('click', function() {
    console.log("Hello!");
})

holdBtn.addEventListener('click', function() {
    console.log("Hello!!");
})

console.log(game(playerScoreOne))

