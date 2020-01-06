function UserName() {
    var userName = prompt("What if your name?");

    if(userName != null) {
        console.log("Hello " + userName);
    } else {
        console.log("Hello!");
    }
}

function Game() {
    UserName();
    var userQuestion = prompt("Please ask a question: ");
    console.log("You asked - " + userQuestion);
    var randomNumber = Math.floor(Math.random()*8);
    var eightBall = EightBallReply(randomNumber);
    console.log("Eight ball answers: " + eightBall);
}

function EightBallReply(numberInput) {
    if(numberInput === 0) {
        return "Better not let you now.";
    } else if(numberInput === 1) {
        return "Concentrate and try again.";
    } else if(numberInput === 2) {
        return "Reply hazy try again";
    } else if(numberInput === 3) {
        return "Cannot predict now";
    } else if(numberInput === 4) {
        return "My reply is no.";
    } else if(numberInput === 5) {
        return "My sources say no";
    } else if(numberInput === 6) {
        return "Outlook not so good";
    } else {
        return "Signs point to yes";
    }
}

Game();
