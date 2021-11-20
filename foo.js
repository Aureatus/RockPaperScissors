function computerplay() {
    let options = ["Rock", "Paper" , "Scissors"];
    let randomnumber = (Math.random()*3)
    let roundedvalue = (Math.floor(randomnumber))
    let randomselection = options[roundedvalue]
    return randomselection
}

console.log(computerplay())