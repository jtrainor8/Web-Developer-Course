const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


let winningScore = 3;
let gameOver = false;

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
});
p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
});

function updateScore(player, oponent) {
    if (!gameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add('winner');
            oponent.display.classList.add('loser');
            player.button.disabled = true;
            oponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    gameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p1.score;
    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('winner', 'loser');
    p1.button.disabled = false;
    p2.button.disabled = false;
}


//removed and reworked code to make it shorter

// const p1Button = document.querySelector('#p1Button');
// const p1Display = document.querySelector('#p1Display')
// const p2Button = document.querySelector('#p2Button');
// const p2Display = document.querySelector('#p2Display')

// p1Button.addEventListener('click', () => {
//     if (!gameOver) {
//         p1Score++;
//         if (p1Score === winningScore) {
//             gameOver = true;
//             p1Display.classList.add('winner');
//             p2Display.classList.add('loser');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p1Display.textContent = p1Score;
//     }
// })

// p2Button.addEventListener('click', () => {
//     if (!gameOver) {
//         p2Score++;
//         if (p2Score === winningScore) {
//             gameOver = true;
//             p2Display.classList.add('winner');
//             p1Display.classList.add('loser');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p2Display.textContent = p2Score;
//     }
// })



//for whatever reason the below doesnt work.. probably has to do with the keyword this lol - 

// winningScoreSelect.addEventListener('change', () => {
//     winningScore = parseInt(this.value);
// })

