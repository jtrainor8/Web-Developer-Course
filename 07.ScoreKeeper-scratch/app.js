const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const reset = document.querySelector('#reset');
const winScore = document.querySelector('#winScore');

let gameWon = '';

p1btn.addEventListener('click', (e) => {
    if (p1score.innerHTML < winScore.value) {
        p1score.innerHTML++;
        if (p1score.innerHTML === winScore.value) {
            displayWin('p1');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
    else if (p1score.innterHTML > winScore.value) {

    }
})
p2btn.addEventListener('click', (e) => {
    if (p2score.innerHTML < winScore.value) {
        p2score.innerHTML++;
        if (p2score.innerHTML === winScore.value) {
            displayWin('p1');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
    else if (p2score.innterHTML > winScore.value) {
    }
})

reset.addEventListener('click', (e) => {
    p1score.innerHTML = 0;
    p2score.innerHTML = 0;
    if (gameWon === 'p1') {
        p1score.classList.toggle('isWinner');
        p2score.classList.toggle('isLoser');
    } else if (gameWon === 'p2') {
        p2score.classList.toggle('isWinner');
        p1score.classList.toggle('isLoser');
    }
    p1btn.disabled = false;
    p2btn.disabled = false;
    p1score.classList.toggle('reset');
    p1score.classList.toggle('reset');
    gameWon = '';
})

function displayWin(winner) {
    gameWon = winner;
    if (winner === 'p1') {
        p1score.classList.toggle('isWinner')
        p2score.classList.toggle('isLoser')
    }
    else if (winner === 'p2') {
        p1score.classList.toggle('reset')
        p2score.classList.toggle('reset')
        p2score.classList.toggle('isWinner')
        p1score.classList.toggle('isLoser')
    }
}

//**missing some finer points but honestly gonna redo it with his stuff so not bad at all for from scratch lol */