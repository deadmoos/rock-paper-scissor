//Take user Input
const userChoice = prompt("Enter Your Choice: Rock, Paper or Scissor").toLowerCase();
//Take computer Input
const gameChoices = ["rock", "paper", "scissor"];
const computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
//Print choices
function gameOutput() {
    console.log("You chose " + userChoice + " & Computer chose " + computerChoice);
}

//Create function to pass user and computer input
function getWinner(userChoice, computerChoice) {
    //Invalid Choice
    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissor")
        console.log("Enter a valid choice");

    //Tie Breaker
    else if (userChoice == computerChoice) {
        console.log("It's a tie");
    }
    //User chooses rock
    else if (userChoice == "rock") {
        if (computerChoice == "paper")
            console.log("You lose. Paper beats rock");
        else
            console.log("You win. Rock beats Scissor");
    }
    //User chooses paper
    else if (userChoice == "paper") {
        if (computerChoice == "scissor")
            console.log("You lose. Scissor beats paper");
        else
            console.log("You win. Paper beats Rock");
    }
    //User chooses Scissor
    else if (userChoice == "scissor") {
        if (computerChoice == "rock")
            console.log("You lose. Rock beats scissor");
        else
            console.log("You win. Scissor beats paper");
    }
}



//Run the game
gameOutput();
getWinner(userChoice, computerChoice);





