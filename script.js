let startingMenu = document.getElementsByClassName("startingMenu");
let menu = document.getElementsByClassName("menu");

let startButton = document.getElementById("continue");
let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo");
let submitButton = document.getElementById("submit")



let players = (name, move) => {
    const getName = () => name;
    
    return {getName};
};

let gameBoard = (() => {

    let array = [["a","b","c"],["d","e","f"],["g","h","i"]];
    return { array

    };
})();

let displayController = (() => {

    return {

    };
})();

startButton.addEventListener('click', e=> {
    console.log("Test")
})

submitButton.addEventListener("click", e=> {
    e.preventDefault();
    console.log(playerOne.value);
    console.log(playerTwo.value);
})