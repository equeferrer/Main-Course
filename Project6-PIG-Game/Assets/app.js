/* GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game */ 

setTimeout(function(){ 
	document.querySelector("#instructions").style.display = "block";
 }, 1000);

const player0 = {
    name: document.querySelector('#name-0'),
    panel: document.querySelector('.player-0-panel'),
    currentScore: document.querySelector("#current-0"),
    totalScore: document.querySelector("#score-0"),
}

const player1 = {
    name: document.querySelector('#name-1'),
    panel: document.querySelector('.player-1-panel'),
    currentScore: document.querySelector("#current-1"),
    totalScore: document.querySelector("#score-1"),
}

const dice = {
    panel: document.querySelector('.dice-panel'),
    One: document.querySelector("#dice-0"),
    Two: document.querySelector("#dice-1"),
}

// Starting settings
player0.currentScore.innerText = "0";
player1.currentScore.innerText = "0";
player0.totalScore.innerText = "0";
player1.totalScore.innerText = "0";
dice.One.style.opacity = "0.5";
dice.Two.style.opacity = "0.5";

class Game {
    constructor(player0, player1) {
        this.player0 = player0
        this.player1 = player1
    }
    reset(){
        // Reset Scores and Names
        player0.currentScore.innerText = "0";
        player1.currentScore.innerText = "0";
        player0.totalScore.innerText = "0";
        player1.totalScore.innerText = "0";
        player0.name.innerText = document.querySelector("#player-1-name").value;
        player1.name.innerText = document.querySelector("#player-2-name").value;

        // Reset Active class
        player0.panel.classList.add("active");
        player1.panel.classList.remove("active");
    
        // Remove Winner Class
        player0.panel.classList.remove("winner");
        player1.panel.classList.remove("winner");
    }        
    switchActive(){ 
        if (player0.panel.classList.contains('active')){
            player0.panel.classList.remove("active");
            player1.panel.classList.add("active");
        } else if (player1.panel.classList.contains('active')) {
            player0.panel.classList.add("active");
            player1.panel.classList.remove("active");
        }
    }
    hideRoll() {
        document.querySelector(".btn-roll").style.display = "none";
    }
    showRoll() {
        document.querySelector(".btn-roll").style.display = "block";
    }
    showHold() {
        document.querySelector(".btn-hold").style.display = "block";
    }
    hideHold() {
        document.querySelector(".btn-hold").style.display = "none";
    }
    winner(){
        let input = document.querySelector("#win-score").value;

        if (player0.totalScore.innerText >= parseFloat(input)){ 
            player0.panel.classList.add("winner");
            document.querySelector('#name-0').innerHTML = "WINNER!<br>" + player0.name.innerText;
            game.hideHold();
            game.hideRoll();
            alert(player0.name.innerText + " Wins!");
        } else if (player1.totalScore.innerText >= parseFloat(input)) {
            player1.panel.classList.add("winner");
            document.querySelector('#name-1').innerHTML = "WINNER!<br>" + player1.name.innerText;
            game.hideHold();
            game.hideRoll();
            alert(player1.name.innerText + " Wins!");
        }
    }
    soundRoll(){
        const audio = new Audio("Assets/Sounds/Dice-1.mp3");
        audio.play();
    }
    soundHold(){
        const audio = new Audio("Assets/Sounds/Hold-sound.wav");
        audio.play();
    }        
    soundLose(){
        const audio = new Audio("Assets/Sounds/Lose-sound.wav");
        audio.play();
    }
    styleDice(diceValue, dice) {
        if (diceValue === 1) {
            dice.style.boxShadow = '0px 0px 5px 5px rgba(255, 0, 0, 0.3)';
            dice.style.opacity = "0.8";
        } else {
            dice.style.boxShadow = "0px 10px 50px rgba(0, 0, 0, 0.1)";
            dice.style.opacity = "1.0";
        }
    }      
    rotateDice(dice){
        dice.classList.add("spin");
    }
}

const game = new Game(player0, player1);

document.querySelector('.btn-new').addEventListener('click', function() { 
    game.reset();
    game.showRoll();
    game.showHold();
});

document.querySelector('.btn-roll').addEventListener('click', function() {

    let min = 1;
    let max = 6;
    let random0 = Math.floor(Math.random() * (max - min + 1)) + min;
    let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let sum = random0 + random1;

    let twoDice = document.querySelector("#twoDice").checked;
    if (twoDice == true){
        sum = random0 + random1
        dice.Two.style.display = "block";
        document.querySelector("#dice-0").src = "Assets/dice-" + random0 + ".png";
        document.querySelector("#dice-1").src = "Assets/dice-" + random1 + ".png";
        document.querySelector("#dice-0").style.margin = "0 0 0 0";
    } else {
        sum = random0;
        dice.Two.style.display = "none";
        random1 = 0;
        document.querySelector("#dice-0").src = "Assets/dice-" + random0 + ".png";
        document.querySelector("#dice-1").src = "";
        document.querySelector("#dice-0").style.margin = "50px 0 0 0";
    }
    
    console.log('%c ROLL DICE', 'color:green; font-weight: bold', {twoDice, random0, random1});
    // switching player scores based on who has active class
    if (player0.panel.classList.contains('active')){
        current = player0.currentScore;
        total = player0.totalScore;
    } else if (player1.panel.classList.contains('active')) {
        current = player1.currentScore;
        total = player1.totalScore;
    }

    // if at least 1 dice rolls 1, switchActive + return 0; else, add to current
    if (random0 === 1 || random1 === 1) {
        current.innerText = 0;
        game.switchActive();
        game.soundLose();
    } else {
        current.innerText = parseInt(current.innerText) + sum;
        game.soundRoll();
    }

    // change image and style of dice
    game.styleDice(random0,dice.One);
    game.styleDice(random1,dice.Two); 

    // rotate dice, remove class after to allow for next spins
    game.rotateDice(dice.One);
    game.rotateDice(dice.Two);
    setTimeout(function () { dice.One.classList.remove("spin") }, 500);
    setTimeout(function () { dice.Two.classList.remove("spin") }, 500);
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to totals, reset current to 0
    total.innerText = parseInt(total.innerText) + parseInt(current.innerText);  
    current.innerText = "0"; 
    game.switchActive();
    game.soundHold();
    game.winner();
});


// Event Listeners for Pop-ups //
document.querySelector('.btn-settings').addEventListener('click', function() {
	document.querySelector('#popup').style.display = 'block';
})

document.querySelector('#set-btn').addEventListener('click', function() {
	game.reset();
    game.showHold();
    game.showRoll();
    document.querySelector('#popup').style.display = 'none';
    player0.name.innerText = document.querySelector("#player-1-name").value;
    player1.name.innerText = document.querySelector("#player-2-name").value;
});

document.querySelector('.popup-close').addEventListener('click', function() {
	document.querySelector('#popup').style.display = 'none';
})

document.querySelector('#close-guide').addEventListener('click', function() {
	document.querySelector("#instructions").style.display = 'none';
})

document.querySelector('.btn-rules').addEventListener('click', function() {
	document.querySelector("#instructions").style.display = "block";
})