const cellElements = document.querySelectorAll('.press-box');
const xClass = "X";
const oClass = "O";
let counter = 0;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const playerX = {
    turn: true,
    winner: false,
}

const playerO = {
    turn: false,
    winner: false,
}

cellElements.forEach(grid => {
    grid.addEventListener('click',  handleClick, { once: true });
});    

function handleClick(e){
    const grid = e.target;
    const player = playerX.turn ? playerX : playerO
    const currentClass = playerX.turn ? xClass : oClass;
    game.putSymbol(grid, currentClass);
    game.nextPlayer();
    if (game.checkWinner(currentClass)){
        console.log("Winner winner chicken dinner!");
        game.endGame(player);
    }
    game.checkDraw();
}

class Game {
    constructor(playerX, playerO) {
        this.playerX = playerX
        this.playerO = playerO
    }
    nextPlayer(){
        if (playerX.turn === true){ 
            playerX.turn = false;
            playerO.turn = true;
        } else if (playerO.turn === true){
            playerO.turn = false;
            playerX.turn = true;
        }
    } 
    putSymbol(grid, currentClass){
        counter += 1;
        grid.classList.add(currentClass)
    }
    checkDraw(){
        if (counter === 9 && playerX.winner === false && playerO.winner === false) {
            console.log("DRAW");
            document.querySelector('.winning-message').style.display="block";
            document.querySelector('.win-text').innerText = "DRAW !"
        } else {
            return;
        }
    }
    checkWinner(currentClass){
        return winningCombinations.some(comb => {
            return comb.every(index => {
                return cellElements[index].classList.contains(currentClass)
            })
        })
    }
    endGame(player){      
        player.winner = true;
        document.querySelector('.winning-message').style.display="block";
        if (player === playerX) {
            console.log("playerX wins");
            document.querySelector('.win-text').innerText = "X Wins !"
        } else if (player === playerO) {
            console.log("playerO wins");
            document.querySelector('.win-text').innerText = "O Wins !"
        }
    }
}

let game = new Game;

document.querySelector('.restart').addEventListener('click', () => {
    window.location.reload()
});

document.querySelector('.reset').addEventListener('click', () => {
    window.location.reload()
});