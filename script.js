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
        return `You Win! Rock beats Scissors. You: ${countPlayer} Computer: ${countComputer}`;
    }

    else if (playerSelection == `paper` && computerSelection == `rock`) {
        countPlayer++;
        return `You Win! Paper beats Rock. You: ${countPlayer} Computer: ${countComputer}`;
    }

    else if (playerSelection == `scissors` && computerSelection == `paper`) {
        countPlayer++;
        return `You Win! Scissors beats Paper. You: ${countPlayer} Computer: ${countComputer}`;
    }

    else if (playerSelection == `scissors` && computerSelection == `rock`) {
        countComputer++;
        return `You Lose! Rock beats Scissors. You: ${countPlayer} Computer: ${countComputer}`;
    }

    else if (playerSelection == `rock` && computerSelection == `paper`) {
        countComputer++;
        return `You Lose! Paper beats Rock. You: ${countPlayer} Computer: ${countComputer}`;
    }

    else if (playerSelection == `paper` && computerSelection == `scissors`) {
        countComputer++;
        return `You Lose! Scissors beats Paper. You: ${countPlayer} Computer: ${countComputer}`;
    }

    else {
        return `It is a draw!  You: ${countPlayer} Computer: ${countComputer}`;
    }
}

function game() {

        let computerSelection = computerPlay();
        let playerSelection = ``;


        console.log(`You: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);
        console.log(`Result: ${playOneRound(playerSelection, computerSelection)}`);
    

    if (countPlayer > countComputer) {
        console.log(`Final Result: It is ${countPlayer} to ${countComputer}. You Win!`);
    }
    else if (countComputer > countPlayer) {
        console.log(`Final Result: It is ${countComputer} to ${countPlayer}. You Lose!`);
    }
    else {
        console.log(`Final Result: It is a draw!`);
    }
}