import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

let currentPlayer = "circle";
let activePlayer = document.querySelector(".stats__active")

const buttons = document.querySelectorAll('.button'); //selects all buttons
const fieldArray = Array.from(buttons); //creates and array from the selected buttons

const homeBtn = document.querySelector(".stats__home") //selects the home button
const restartBtn = document.querySelector(".stats__restart") //selects the restart button

//confirm functions for the HOME and RESTART buttons
const restartConfirm = (event) => {
    const confirmed = confirm("Opravdu chcete začít novou hru?")
    if (confirmed === false) {
        event.preventDefault()
    }
} 

const homeConfirm = (event) => {
    const confirmed = confirm("Opravdu se chcete vrátit na úvodní stránku?")
    if (confirmed === false) {
        event.preventDefault()
    }
} 

homeBtn.addEventListener("click", homeConfirm)
restartBtn.addEventListener("click", restartConfirm)

//fuction that handles clicking on board fields
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

    //function that handles the "x" player
fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
	method: 'POST',
	headers: {
		'Content-type': 'application/json',
	},
	body: JSON.stringify({
		board: fieldSign,
		player: 'cross', 
	}),
    })
    
	.then((response) => response.json())
	.then((data) => {
        if (currentPlayer === "cross") {
		const { x, y } = data.position 
		const field = buttons[x + y * 10]
		field.click()
        }
	})

    const winner = findWinner(fieldSign);
    
    if (winner === "o" || winner === "x") {
        alert(`Vyhrál hráč se symbolem "${winner}".`)
        location.reload()
    }; 
};

buttons.forEach((button) => button.addEventListener("click", handleButtonClick))






