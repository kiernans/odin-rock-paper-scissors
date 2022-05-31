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

let getResult = (result) => {
    let fields = result.split(' ');
    return fields[1];
};

let keepScore = (result) => {
    if (result === 'Win!') playerScore++;
    if (result === 'Lose!') compScore++;
};

let decideWinner = (playerScore, compScore) => {
    if (playerScore > compScore) winner = 'You win!';
    else if (compScore > playerScore) winner = `You lose...`;
    else winner = `You've tied lol`;
    return winner;
};

let result = '';
let compScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const div = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result = playRound(button.textContent, computerPlay());
        result = getResult(result);
        keepScore(result);

        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);
        
        if(playerScore >= 5 || compScore >= 5) {
            div.textContent = decideWinner(playerScore, compScore);
            container.appendChild(div);
        }

    });
});











