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

 let isAutoPlaying = false;
 let id;
function autoplay() {
    if (!isAutoPlaying) {
        id = setInterval(function(){
            const playerMove = move();
            play(playerMove);
        }, 1000);
        isAutoPlaying = true;
    }
    else{
        clearInterval(id);
        isAutoPlaying = false;
    }
}

function play(pmove) {
    pmove = pmove.toLowerCase();
    const computerMove = move();
    let result = '';

    if (pmove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose!';
        } else if (computerMove === 'paper') {
            result = 'You win!';
        } else if (computerMove === 'scissors') {
            result = 'Tie!';
        }
    } else if (pmove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!';
        } else if (computerMove === 'paper') {
            result = 'Tie!'; 
        } else if (computerMove === 'scissors') {
            result = 'You lose!';
        }
    } else if (pmove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie!';
        } else if (computerMove === 'paper') {
            result = 'You lose!';
        } else if (computerMove === 'scissors') {
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
    document.querySelector('.js-moves').innerHTML = `You<img src="images/${pmove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon">Computer`;
 
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
        computerMove = 'rock';
    } else if (rand >= 1/3 && rand < 2/3) {
        computerMove = 'paper';
    } else if (rand >= 2/3 && rand < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}