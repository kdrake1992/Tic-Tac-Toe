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
    let turn = false;

    const getName = () => playerName;
    const getMark = () => mark;
    const getTurn = () => turn;

    const setName = newName => name = newName;

    const setTurn = () => {
        if(getTurn() === false) {

            turn = true;
        }
        else {
            turn = false;
        }

    }

    
    return {getName, getMark, setName, getTurn, setTurn};
};

let gameBoard = (() => {

    let count = 0;
    let array = [["1","2","3"],["4","5","6"],["7","8","9"]];

    return {array, count};
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
            gameBoxes[i].innerHTML = "";
            i++;
        });
    });
}

let addIntoArray = function(move, mark) {
    if(move === "box1") {
        gameBoard.array[0][0] = mark;
    }
    else if(move === "box2") {
        gameBoard.array[0][1] = mark;
    }
    else if(move === "box3") {
        gameBoard.array[0][2] = mark;
    }
    else if(move === "box4") {
        gameBoard.array[1][0] = mark;
    }
    else if(move === "box5") {
        gameBoard.array[1][1] = mark;
    }
    else if(move === "box6") {
        gameBoard.array[1][2] = mark;
    }
    else if(move === "box7") {
        gameBoard.array[2][0] = mark;
    }
    else if(move === "box8") {
        gameBoard.array[2][1] = mark;
    }
    else if(move === "box9") {
        gameBoard.array[2][2] = mark;
    }
}

let winnerCheck = function(array, count) {
    for (let i = 0; i < 3; i++) {
        if (array[0][i] === array[1][i] & array[0][i] === array[2][i]) {
            return true
        } 
        else if (array[i][0] === array[i][1] & array[i][0] === array[i][2]) {
            return true
        }
    }
    if (array[0][0] === array[1][1] & array[0][0] === array[2][2]){
        return true
    } 
    else if (array[0][2] === array[1][1] & array[0][2] === array[2][0]) {
        return true
    }
    else if (count === 9) {
        return alert("Tie!")
    }
}

let updateBoard = function() {
    playerOneName.style.border = "1px black solid";
    gameBoxes.forEach(e => {
        e.addEventListener('click', e => {
            if(e.target.innerHTML === "") {
                if(player1.getTurn() === false) {
                    playerTwoName.style.border = "3px gold solid";
                    playerOneName.style.border = "1px black solid";
                    e.target.innerHTML = player1.getMark();
                    player1.setTurn();
                    player2.setTurn();
                    addIntoArray(e.target.id, player1.getMark());
                }
                else if(player2.getTurn() === false) {
                    playerOneName.style.border = "3px gold solid";
                    playerTwoName.style.border = "1px black solid";
                    e.target.innerHTML = player2.getMark();
                    player1.setTurn();
                    player2.setTurn();
                    addIntoArray(e.target.id, player2.getMark());
                }

                gameBoard.count++;
                if(winnerCheck(gameBoard.array, gameBoard.count)) {
                    if(player1.getTurn() === true) {
                        alert(player1.getName() + ' wins!')
                        resetGame();
                    }
                    else if(player2.getTurn() === true) {
                        alert(player2.getName() + ' wins!')
                        resetGame();
                    }
                }
            }
        })
    })
}

buildBoard();
updateBoard();
player2.setTurn();
playerOneName.style.border = "3px gold solid";

let resetGame = function() {
    gameBoard.array = [["1","2","3"],["4","5","6"],["7","8","9"]];
    gameBoard.count = 0;
    buildBoard();
    playerOneName.style.border = "3px gold solid";
    playerTwoName.style.border = "1px black solid";
}

restartButton.addEventListener('click', e => {
    resetGame();
});

