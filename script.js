let computerPlay = () => {
    let compChoice = Math.floor((Math.random() * 3) + 1);
    switch(compChoice) {
        case 1:
            compChoice = "Rock";
            break;
        case 2:
            compChoice = "Paper";
            break;
        case 3:
            compChoice = "Scissors";
            break;
        default:
    }
    return compChoice;
};

let playRound = (playerSelection, computerSelection) => {
    let result;
    playerSelection = playerSelection.toLowerCase();

    if (!(playerSelection === `rock` || playerSelection === `paper` || playerSelection === `scissors`)) {
        console.log(`Invalid choice`);
        return null;
    }

    computerSelection = computerSelection.toLowerCase();
    if ((playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')){
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        result = `It's a tie! You chose ${playerSelection} and they chose ${computerSelection}`;
    }
    return result;
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.textContent, computerPlay()));
    });
});

const container = document.querySelector('.container');
const div = document.createElement('div');
div.textContent = 'Results';

container.appendChild(div);



