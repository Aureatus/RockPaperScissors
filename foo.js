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

function game() {
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
