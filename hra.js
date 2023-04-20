import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

let currentPlayer = "circle";
let activePlayer = document.querySelector(".stats__active")

const buttons = document.querySelectorAll('.button'); //selects all buttons
const fieldArray = Array.from(buttons); //creates and array from the selected buttons

const handleButtonClick = (e) => {

    if(currentPlayer === "circle") 
    {e.target.classList.add("btn--circle");
    currentPlayer = "cross";
    e.target.disabled = true;
    activePlayer.removeAttribute("background-color");
    activePlayer.classList.toggle("cross");
    }  
    else
    {e.target.classList.add("btn--cross");
    currentPlayer = "circle";
    e.target.disabled = true;
    activePlayer.classList.toggle("cross");
    }

    const fieldSign = fieldArray.map((sign) => {
        if (sign.classList.contains('btn--cross')) {
            return 'x';
        } else if (sign.classList.contains('btn--circle')) {
            return 'o';
        } else {
            return '_';
        }
    });
    
    const winner = findWinner(fieldSign);
    
    if (winner === "o" || winner === "x") {alert(`Vyhrál hráč se symbolem "${winner}".`)}; 

};

buttons.forEach((button) => button.addEventListener("click", handleButtonClick))
