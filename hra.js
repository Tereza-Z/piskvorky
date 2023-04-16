let currentPlayer = "circle";
let activePlayer = document.querySelector(".stats__active")


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
    };
};

const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => button.addEventListener("click", handleButtonClick))



