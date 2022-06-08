function computerPlay() {
    let randomOne = Math.floor(Math.random() * 3) + 1;
    if(randomOne == 1) {
        return `rock`;
    }
    else if(randomOne == 2) {
        return `paper`;
    }
    else {
        return `scissors`;
    }
}

let countPlayer = 0;
let countComputer = 0;

function playOneRound (playerSelection, computerSelection) {

    if (playerSelection == `rock` && computerSelection == `scissors`) {
        countPlayer++;
        return `You Win! Rock beats Scissors.`;
    }

    else if (playerSelection == `paper` && computerSelection == `rock`) {
        countPlayer++;
        return `You Win! Paper beats Rock.`;
    }

    else if (playerSelection == `scissors` && computerSelection == `paper`) {
        countPlayer++;
        return `You Win! Scissors beats Paper.`;
    }

    else if (playerSelection == `scissors` && computerSelection == `rock`) {
        countComputer++;
        return `You Lose! Rock beats Scissors.`;
    }

    else if (playerSelection == `rock` && computerSelection == `paper`) {
        countComputer++;
        return `You Lose! Paper beats Rock.`;
    }

    else if (playerSelection == `paper` && computerSelection == `scissors`) {
        countComputer++;
        return `You Lose! Scissors beats Paper.`;
    }

    else {
        return `It is a draw!`;
    }
}

document.querySelector(".rock").addEventListener("click", function() {
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    document.querySelector(".result").innerHTML = `You: ${playerSelection} | Computer: ${computerSelection} | ${playOneRound(playerSelection, computerSelection)}`;
    document.querySelector(".win-count").innerHTML = `You: ${countPlayer} | Computer: ${countComputer}`;

    if(countPlayer >= 5) {
        alert(`You Won!`);
        countComputer = 0;
        countPlayer = 0;
    }
    else if(countComputer >= 5) {
        alert(`You Lose!`);
        countComputer = 0;
        countPlayer = 0;
    }
});

document.querySelector(".paper").addEventListener("click", function() {
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    document.querySelector(".result").innerHTML = `You: ${playerSelection} | Computer: ${computerSelection} | ${playOneRound(playerSelection, computerSelection)}`;
    document.querySelector(".win-count").innerHTML = `You: ${countPlayer} | Computer: ${countComputer}`;

    if(countPlayer >= 5) {
        alert(`You Won!`);
        countComputer = 0;
        countPlayer = 0;
    }
    else if(countComputer >= 5) {
        alert(`You Lose!`);
        countComputer = 0;
        countPlayer = 0;
    }
});

document.querySelector(".scissors").addEventListener("click", function() {
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    document.querySelector(".result").innerHTML = `You: ${playerSelection} | Computer: ${computerSelection} | ${playOneRound(playerSelection, computerSelection)}`;
    document.querySelector(".win-count").innerHTML = `You: ${countPlayer} | Computer: ${countComputer}`;

    if(countPlayer >= 5) {
        alert(`You Won!`);
        countComputer = 0;
        countPlayer = 0;
    }
    else if(countComputer >= 5) {
        alert(`You Lose!`);
        countComputer = 0;
        countPlayer = 0;
    }
});