
const O_LETTER = 'O';
const X_LETTER = 'X';
const winningTiles = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
console.log(winningTiles);
let current_player = X_LETTER;

let restartButton = document.getElementById('restart-button');
let ruudud = Array.from(document.getElementsByClassName('square'));
let playerTurn = document.getElementById('player-turn');
let tiles = Array(9).fill(null);
console.log(tiles);
console.log(ruudud);



function startGame() {
    ruudud.forEach(square => square.addEventListener('click', checkClick))
}

function checkClick(e){
    const id = e.target.id[1];

    if(tiles[id] == null){
        tiles[id] = current_player;
        e.target.value = current_player;
        
        if(PlayerHasWon()){
            playerTurn.innerText = `${current_player} has won!`
            return
        }
        else if(PlayerHasWon() == false){
            playerTurn.innerText = `TIE!`
            return
        }
        
        if(current_player == X_LETTER) current_player = O_LETTER;
        else current_player = X_LETTER;
        playerTurn.innerText = `${current_player}'s turn!`
    }
}

function PlayerHasWon(){
    for(let i = 0; i < winningTiles.length; i++){
        const condition = winningTiles[i];
        const cellA = tiles[condition[0]];
        const cellB = tiles[condition[1]];
        const cellC = tiles[condition[2]];
        if(cellA == null && cellB == null && cellC == null)
            continue
        if(cellA == cellB && cellA == cellC){
            console.log('won');
            return true
        }
    }
    if(!tiles.includes(null)){
        console.log('tie')
        return false
    }
        
}

function showScore(){
    console.clear();
    
    for(let i = 0; i<tiles.length; i++){
        console.log(i+') '+tiles[i]);
    }
}

function restart(){
    tiles.fill(null);
    ruudud.forEach(square => square.value = '');
    current_player = X_LETTER
    playerTurn.innerText = `${current_player}'s turn'!`
    console.clear();
}

startGame()