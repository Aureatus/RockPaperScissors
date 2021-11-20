function computerPlay() {
    let options = ["Rock", "Paper" , "Scissors"]
    let randomnumber = (Math.random()*3)
    let roundedvalue = (Math.floor(randomnumber))
    let randomselection = options[roundedvalue]
    return randomselection
}

let computerSelection = computerPlay();
let playerInput = prompt("Please enter Rock, Paper or Scissors.");
function caseInsensitivty(playerInput) {
    let firstLetter = (playerInput.charAt(0)).toUpperCase()
    let otherLetters = playerInput.slice(1).toLowerCase()
    return (firstLetter + otherLetters)
}
let playerSelection = caseInsensitivty(playerInput)
console.log(playerSelection)

function playRound(computerSelection, playerSelection) {
 /* Rock beats Scissors.
    Paper beats Rock.
    Scissors beat Paper. */
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors")
            return "You win! Rock beats Scissors."
        else if (computerSelection === "Paper")
            return "You lose! Paper beats Rock."
        else if (computerSelection === "Rock")
            return "You draw!"
    }
    
    else if (playerSelection === "Paper") {
            if (computerSelection === "Rock")
                return "You win! Paper beats Rock."
            else if (computerSelection === "Scissors")
                return "You lose! Scissors beat Paper."
            else if (computerSelection === "Paper")
                return "You draw!"
    }
    
    else if (playerSelection === "Scissors") {
            if (computerSelection === "Paper")
                return "You win! Scissors beats Paper."
            else if (computerSelection === "Rock")
                return "You lose! Rock beats Scissors."
            else if (computerSelection === "Scissors")
                return "You draw!"
    }
    else {
        return "Please input a valid choice."
    }
}

console.log(playRound(computerSelection, playerSelection));
