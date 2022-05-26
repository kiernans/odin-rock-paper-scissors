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

let game = () => {
    let result;
    let compWins = 0;
    let playerWins = 0;
    let fields;
    let winner;

    for (let i = 0; i < 5; i++){
        const playerSelection = prompt(`What's your choice?`).toLowerCase();
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);

        if (result === null) {
            return;
        }

        console.log(result);
        fields = result.split(' ');
        result = fields[1];

        if (result === 'Win!') playerWins++;
        if (result === 'Lose!') compWins++;
    }
    if (playerWins > compWins) winner = 'You win!';
    if (compWins > playerWins) winner = `You lose...`;
    else winner = `You've tied lol`;

    return winner;
};


