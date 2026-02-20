let score =JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            ties:0
        };
        updateScore();
        /* another way to do it for !score
 if (!score){
        score={
            wins:0,
            losses:0,
            ties:0
        };
 }
        */
function play(pmove) {
    const computerMove = move();
    let result = '';

    if (pmove === 'Scissors') {
        if (computerMove === 'Computer chose Rock') {
            result = 'You lose!';
        } else if (computerMove === 'Computer chose Paper') {
            result = 'You win!';
        } else if (computerMove === 'Computer chose Scissors') {
            result = 'Tie!';
        }
    } else if (pmove === 'Paper') {
        if (computerMove === 'Computer chose Rock') {
            result = 'You win!';
        } else if (computerMove === 'Computer chose Paper') {
            result = 'Tie!'; 
        } else if (computerMove === 'Computer chose Scissors') {
            result = 'You lose!';
        }
    } else if (pmove === 'Rock') {
        if (computerMove === 'Computer chose Rock') {
            result = 'Tie!';
        } else if (computerMove === 'Computer chose Paper') {
            result = 'You lose!';
        } else if (computerMove === 'Computer chose Scissors') {
            result = 'You win!';
        }
    }

    if (result === 'You win!') {
        score.wins++;
    } else if (result === 'You lose!') {
        score.losses++;
    } else if (result === 'Tie!') {
        score.ties++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You picked ${pmove}\n${computerMove}`;
 
    // remove the alert and replace it with the above two lines to display the result and moves on the webpage instead of an alert box.

    // alert(`You picked ${pmove} \n${computerMove} \n${result} \nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}
function updateScore(){
            document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

function move() {
    const rand = Math.random();
    let computerMove = '';
    if (rand >= 0 && rand < 1/3) {
        computerMove = 'Computer chose Rock';
    } else if (rand >= 1/3 && rand < 2/3) {
        computerMove = 'Computer chose Paper';
    } else if (rand >= 2/3 && rand < 1) {
        computerMove = 'Computer chose Scissors';
    }
    return computerMove;
}