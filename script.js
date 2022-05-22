let startingMenu = document.getElementById("startingMenu");
let menu = document.getElementById("menu");
let game = document.getElementById("game");
let gameBox = document.getElementById("gameBox");
let topGame = document.getElementById("topGame");
let bottomMenu = document.getElementById("bottomMenu");
let ending = document.getElementById("ending")

let playerOneName = document.getElementById("playerOneName");
let playerTwoName = document.getElementById("playerTwoName");

let startButton = document.getElementById("continue");
let playerOneForm = document.getElementById("playerOneForm");
let playerTwoForm = document.getElementById("playerTwoForm");
let submitButton = document.getElementById("submit")
let restartButton = document.getElementById("restart");

let gameBoxes = document.querySelectorAll(".gameBox");

let gameOver = false;

let player = (name, mark) => {
    let playerName = name;

    const getName = () => playerName;
    const getMark = () => mark;

    const setName = newName => name = newName;

    
    return {getName, getMark, setName};
};

let gameBoard = (() => {

    let array = [["","",""],["","",""],["","",""]];

    return { array

    };
})();

let displayController = (() => {

    return {

    };
})();

let player1 = player("Player One","X");
let player2 = player("Player Two","O");

let currentPlayer = player1;

startButton.addEventListener('click', e => {
    menu.style.display = "flex";
    startingMenu.style.display = "none";
})

submitButton.addEventListener("click", e=> {
    e.preventDefault();

    menu.style.display = "none";
    game.style.display = "grid"
    bottomMenu.style.display = "flex";
    topGame.style.display = "flex";

    player1.setName(playerOneForm.value);
    player2.setName(playerTwoForm.value);

    playerOneName.innerHTML = player1.getName();
    playerTwoName.innerHTML = player2.getName();
})



let buildBoard = function() {
    let i = 0;
    gameBoard.array.forEach(e => {
        e.forEach(ee=> {
            gameBoxes[i].innerHTML = ee;
            i++;
        })
    })
}

let updateBoard = function() {
    gameBoxes.forEach(e => {
        e.addEventListener('click', e => {
            if(e.target.innerHTML === "") {
                e.target.innerHTML = "X"
            }
        })
    })
}

buildBoard();
updateBoard();

restartButton.addEventListener('click', e => {
    buildBoard();
    updateBoard()
    
});