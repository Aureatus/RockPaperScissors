
function computerPlay() {
    let options = ["Rock", "Paper" , "Scissors"]
    let randomnumber = (Math.random()*3)
    let roundedvalue = (Math.floor(randomnumber))
    let randomselection = options[roundedvalue]
    return randomselection
}

let computerSelection;
let playerInput = "Placeholder";
function caseInsensitivty(playerInput) {
    let firstLetter = (playerInput.charAt(0)).toUpperCase()
    let otherLetters = playerInput.slice(1).toLowerCase()
    return (firstLetter + otherLetters)
}
let playerSelection
let playerScore = 0
let computerScore = 0

function playRound(computerSelection, playerSelection) {
 /* Rock beats Scissors.
    Paper beats Rock.
    Scissors beat Paper. */
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            playerScore = ++playerScore
            return "You win! Rock beats Scissors."
        } else if (computerSelection === "Paper") {
            computerScore = ++computerScore
            return "You lose! Paper beats Rock."
        } else if (computerSelection === "Rock")
            return "You draw!"
    }
    
    else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                playerScore = ++playerScore
                return "You win! Paper beats Rock."
            } else if (computerSelection === "Scissors") {
                computerScore = ++computerScore
                return "You lose! Scissors beat Paper."
            } else if (computerSelection === "Paper")
                return "You draw!"
    }
    
    else if (playerSelection === "Scissors") {
            if (computerSelection === "Paper") {
                playerScore = ++playerScore
                return "You win! Scissors beats Paper."
            } else if (computerSelection === "Rock") {
                computerScore = ++computerScore
                return "You lose! Rock beats Scissors."
            } else if (computerSelection === "Scissors")
                return "You draw!"
    }
    else {
        return "Please input a valid choice."
    }
}

// TextAddition
const scoreDiv = document.createElement('div')
const resultsDiv = document.createElement('div')
const body = document.body
const container = document.querySelector(".container")
container.appendChild(scoreDiv)
scoreDiv.classList.add("score")
scoreDiv.textContent = 
    ("Player score is: " + (playerScore) + " " +
    "Computer score is: "+ (computerScore));
container.appendChild(resultsDiv)
resultsDiv.classList.add("results")
resultsDiv.textContent = "Results will appear when either player reaches 5 points."
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    playerSelection = "Rock"
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection)
    scoreDiv.textContent = 
    "Player score is: " + (playerScore) + " " +
    "Computer score is: "+ (computerScore);
    if (playerScore == 5) {
        resultsDiv.textContent =
        "The player wins with " + playerScore + 
        " points,whilst the computer only had " + computerScore + " points" 
    }
    else if (computerScore == 5) {
        resultsDiv.textContent =
        "The computer wins with " + computerScore + 
        " points,whilst the player only had " + playerScore + " points"
    };
});

paperBtn.addEventListener("click", () => {
    playerSelection = "Paper"
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection)
    scoreDiv.textContent = 
    "Player score is: " + (playerScore) + " " +
    "Computer score is: "+ (computerScore);
    if (playerScore == 5) {
        resultsDiv.textContent =
        "The player wins with " + playerScore + 
        " points,whilst the computer only had" + computerScore + " points" 
    }
    else if (computerScore == 5) {
        resultsDiv.textContent =
        "The computer wins with " + computerScore + 
        " points,whilst the player only had" + playerScore + " points"
    };
});

scissorsBtn.addEventListener("click", () => {
    playerSelection = "Scissors"
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection)
    scoreDiv.textContent = 
    "Player score is: " + (playerScore) + " " +
    "Computer score is: "+ (computerScore);
    if (playerScore == 5) {
        resultsDiv.textContent =
        "The player wins with " + playerScore + 
        " points,whilst the computer only had" + computerScore + " points" 
    }
    else if (computerScore == 5) {
        resultsDiv.textContent =
        "The computer wins with " + computerScore + 
        " points,whilst the player only had" + playerScore + " points"
    };
});


/*function game() {
    for( let i = 0; i < 5; i++ ) {
        playerInput = prompt("Please enter Rock, Paper or Scissors.");
        playerSelection = caseInsensitivty(playerInput);
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection)
        console.log(("Player score is: ")+ (playerScore));
        console.log(("Computer score is: ")+ (computerScore));
    }
    if (playerScore > computerScore) {
        return "Player won."
    }
    else if (computerScore > playerScore) {
        return "Computer won."
    }

    else if (computerScore == playerScore) {
        return "Draw."
    }
}

console.log(game())
*/