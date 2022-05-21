let startingMenu = document.getElementById("startingMenu");
let menu = document.getElementById("menu");
let game = document.getElementById("game");

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

startButton.addEventListener('click', e => {
    console.log(e);
    menu.style.display = "flex";
    startingMenu.style.display = "none";
})

submitButton.addEventListener("click", e=> {
    e.preventDefault();
    console.log(playerOne.value);
    console.log(playerTwo.value);

    menu.style.display = "none";
    game.style.display = "grid"

})