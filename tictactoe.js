import prompt from "prompt";

var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

var winCombinations = [
    [1,2,3], [4,5,6], [7,8,9], [1,4,7],
    [2,5,8], [3,6,9], [1,5,9], [3,5,7]
];

function markBoard(position, simbol){
    board[position] = simbol.toUpperCase();
    
}

function printBoard(){
    console.log('\n' + 
    ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
    ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
    ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n'
    );
}

function isInteger(value) {
    let valueParsed;
    if(isNaN(value)){
        return false;
    }
    valueParsed = parseFloat(value);
    return (valueParsed | 0) === valueParsed;
}

function validateMove(position){
    return (isInteger(position) && board[position] === ' ')
}

function checkWin(player){
    let winCombinationIndex, boardIndex, markCount;
    
    for(winCombinationIndex = 0; winCombinationIndex < winCombinations.length; winCombinationIndex++){
        markCount = 0;
        for(boardIndex = 0; boardIndex < winCombinations[winCombinationIndex].length; boardIndex++){
            if(board[winCombinations[winCombinationIndex][boardIndex]] === player){
                markCount++;
            }
            if(markCount === 3){
                return true;
            }
        }
    }
    return false;
}

function checkTie(){
    for(let index = 1; index <= Object.keys(board).length; index++){
        if(board[index] === ' '){
            return false;
        }
    }
    return true;
}

function startGame(player) {
    prompt.start();
    prompt.get(['position'], function (err, result) {
        play(player, result.position)
    });
}

async function play(player, position) {
    console.log('É a vez do jogador ' + player);
    if (validateMove(position) === true) {
        console.log("position: " + position)
        markBoard(position, player);
        printBoard();
        if (checkWin(player) === true) {
            console.log('Vencedor ' + player);
            return player;
        }
        if (checkTie() === true) {
            console.log("Empate!");
            return "empate"
        }
        if (player === 'X') {
            startGame('O');
        }
        else {
            startGame('X');
        }
    }
    else {
        console.log('Entrada incorreta, por favor tente novamente');
        startGame(player);
    }
}

startGame('X');


export { play, printBoard, markBoard, checkTie, checkWin }
