/* GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game */ 

const currentScore0 = document.querySelector("#current-0");
const playerScore0 = document.querySelector("#score-0");
const currentScore1 = document.querySelector("#current-1");
const playerScore1 = document.querySelector("#score-1");
const player0 = document.querySelector('.player-0-panel');
const player1 = document.querySelector('.player-1-panel');
const dice = document.querySelector(".dice");

dice.style.opacity = "0.5"
playerScore0.innerText = "0"
currentScore0.innerText = "0"
playerScore1.innerText = "0"
currentScore1.innerText = "0"

document.querySelector('.btn-new').onclick = function () { 
    // Change Text below
    currentScore0.innerText = "0"
    playerScore0.innerText = "0"
    currentScore1.innerText = "0"
    playerScore1.innerText = "0"

    // X only for testing*
    document.querySelector('#name-0').innerText = "Player 1x"
    document.querySelector('#name-1').innerText = "Player 2x"

    player0.classList.add("active");
    player1.classList.remove("active");
    
    dice.src = "Assets/dice-5.png"

    player0.classList.remove("winner");
    player1.classList.remove("winner");
}

document.querySelector('.btn-roll').onclick = function() {
    
    if (!playerScore0.classList.contains("winner") || !playerScore1.classList.contains("winner")) { 

        //generate a random number between 1 and 6
        let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

        // to validate random numbers are between 1 & 6
        console.log(random);

        // switching player scores based on who has active class
        if (player0.classList.contains('active')){
            currentScore = currentScore0;
            playerScore = playerScore0;
        } else if (player1.classList.contains('active')) {
            currentScore = currentScore1;
            playerScore = playerScore1;
        }

        // Change dice image based on random number generated
        switch (random) {
            case 1: 
                dice.src = "Assets/dice-1.png";
                currentScore.innerText = 0;
                // change turns when player rolls === 1
                if (player0.classList.contains('active')){
                    player0.classList.remove("active");
                    player1.classList.add("active");
                } else if (player1.classList.contains('active')) {
                    player0.classList.add("active");
                    player1.classList.remove("active");
                }
                break;
            case 2: 
                dice.src = "Assets/dice-2.png";
                currentScore.innerText = parseInt(currentScore.innerText) + 2;
                break;
            case 3: 
                dice.src = "Assets/dice-3.png";
                currentScore.innerText = parseInt(currentScore.innerText) + 3;
                break;
            case 4: 
                dice.src = "Assets/dice-4.png";
                currentScore.innerText = parseInt(currentScore.innerText) + 4;
                break;        
            case 5: 
                dice.src = "Assets/dice-5.png";
                currentScore.innerText = parseInt(currentScore.innerText) + 5;
                break;        
            case 6: 
                dice.src = "Assets/dice-6.png";
                currentScore.innerText = parseInt(currentScore.innerText) + 6;
                break;
        }

        // styles for dices
        if (random === 1) {
            dice.style.boxShadow = '0px 0px 5px 5px rgba(255, 0, 0, 0.3)';
            dice.style.opacity = "0.8"
        } else {
            dice.style.boxShadow = "0px 10px 50px rgba(0, 0, 0, 0.1)";
            dice.style.opacity = "1.0"
        }
    }
}

document.querySelector('.btn-hold').onclick = function () {

    // add current score to totals, reset current to 0
    playerScore.innerText = parseInt(playerScore.innerText) + parseInt(currentScore.innerText);  
    currentScore.innerText = "0"; 

    // change active status after hold
    if (player0.classList.contains('active')){
        player0.classList.remove("active");
        player1.classList.add("active");
    } else if (player1.classList.contains('active')) {
        player0.classList.add("active");
        player1.classList.remove("active");
    }

    if (playerScore0.innerText >= 20){ 
        alert("Hello!");
        player0.classList.add("winner");
        document.querySelector('#name-0').innerText = "WINNER !"
    } else if (playerScore1.innerText >= 20) {
        alert("howdy!");
        player1.classList.add("winner");
        document.querySelector('#name-1').innerText = "WINNER !"
    }
}

// let sum0 = parseInt(playerScore0.innerText) + parseInt(currentScore0.innerText);

// if (sum0 > 50) {
//     player0.classList.add("winner")
//     alert("Hello!")
// }






// class Game {
//     constructor(playerScore, currentScore) {
//         this.playerScore = playerScore
//         this.currentScore = currentScore
//         this.clear()
//     }        
//     clear () {
//         this.playerScore.innerText = "0"
//         this.currentScore.innerText = "0"
//     }
// }

// const game = new Game(playerScore, currentScore);


// newGameBtn.addEventListener('click', function () {
//     // console.log("Hello");
//     game.clear();
// })

// rollBtn.addEventListener('click', function() {
//     console.log("Hello!");
// })

// holdBtn.addEventListener('click', function() {
//     console.log("Hello!!");
// })

// console.log(newGameBtn)
// console.log(playerScore)
// console.log(currentScore)
