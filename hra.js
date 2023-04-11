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


document.querySelector('.game__buttons button:nth-child(1)').addEventListener("click", handleButtonClick);
document.querySelector('.game__buttons button:nth-child(2)').addEventListener("click", handleButtonClick);
document.querySelector('.game__buttons button:nth-child(3)').addEventListener("click", handleButtonClick);
document.querySelector('.game__buttons button:nth-child(4)').addEventListener("click", handleButtonClick);
document.querySelector('.game__buttons button:nth-child(5)').addEventListener("click", handleButtonClick);
document.querySelector('.game__buttons button:nth-child(6)').addEventListener("click", handleButtonClick);
document.querySelector('.game__buttons button:nth-child(7)').addEventListener("click", handleButtonClick);
document.querySelector('.game__buttons button:nth-child(8)').addEventListener("click", handleButtonClick);
document.querySelector('.game__buttons button:nth-child(9)').addEventListener("click", handleButtonClick);
document.querySelector('.game__buttons button:nth-child(10)').addEventListener("click", handleButtonClick);




