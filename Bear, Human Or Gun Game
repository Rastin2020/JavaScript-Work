function getUserChoice() {
    
    while(true) {
    var userInput = prompt("Please choose a bear, human or gun: "); 
    userInput = userInput.toLowerCase();
    
        if(userInput === "bear" || userInput === "human" || userInput === "gun") {
            return userInput;
            break;
        } else {
            console.log("Please enter a valid option: ");
        }
    }
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random()*3);

    if(randomNumber === 1) {
        return "bear";
    } else if(randomNumber === 2) {
        return "human";
    } else {
        return "gun";
    }
}

function determineWinner(getUserChoice, getComputerChoice) {
    if(getUserChoice === getComputerChoice) {
        return "Tie";
    } else if(getUserChoice === "bear") {
        if(getComputerChoice === "human") {
            return "Player Won!";
        } else {
            return "Computer Won...";
        }
    } else if(getUserChoice === "human") {
        if(getComputerChoice === "gun") {
            return "Player Won!";
        } else {
            return "Computer Won...";
        }
    } else if(getUserChoice === "gun") {
        if(getComputerChoice === "bear") {
            return "Player Won!";
        } else {
            return "Computer Won...";
        }
    }
}

function playGame() {
    var userChoice = getUserChoice();
    console.log("Player picked " + userChoice);
    var computerChoice = getComputerChoice();
    console.log("Computer picked " +computerChoice);

    console.log(determineWinner(userChoice,computerChoice));
}

playGame();
