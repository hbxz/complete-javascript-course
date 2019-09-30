/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls two dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game. (You may change the winning score as you wish)
*/


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable) 
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScore, activePlayer;
var isGamePlaying;  // state variable
var lastDice;       // recording last dice in a round; init as -1 at the round begining;

var winningBar = 100; 

// view elements
var inputField = document.querySelector('.winning-score');
var dice0 = document.getElementById('dice-0');
var dice1 = document.getElementById('dice-1');


newGame(); // init view

// events and event handling 
document.querySelector('.btn-new').addEventListener('click', newGame);
document.querySelector('.btn-roll').addEventListener('click', roll);
document.querySelector('.btn-hold').addEventListener('click', hold);

function newGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    winningBar = inputField.value;

    dice0.style.display = 'none';
    dice1.style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    isGamePlaying = true;
}


function roll() {
    if (!isGamePlaying) {
        return;
    }

    var dice0Number = Math.ceil(Math.random() * 6);
    var dice1Number = Math.ceil(Math.random() * 6);

    // update view
    dice0.style.display = 'block';
    dice1.src = 'dice-' + dice1Number + '.png'; 
    dice1.style.display = 'block';
    dice0.src = 'dice-' + dice0Number + '.png'; 

    // update the round score If the rolled number was NOT a 1
    if (dice0Number == 1 || dice1Number == 1) {
        nextPlayer();
    } else {
        roundScore += dice0Number + dice1Number;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
}

function nextPlayer() {
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    dice0.style.display = 'none';
    dice1.style.display = 'none';
}


function hold() {
    // Add current score to global score
    scores[activePlayer] += roundScore;
    
    // update UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game
    if (scores[activePlayer] >= winningBar) {
        gameEnd();
    } else {
        nextPlayer();
    }

    function gameEnd() {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        dice0.style.display = 'none';
        dice1.style.display = 'none';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        isGamePlaying = false;
    }
}

function popupGameRule() {
    document.getElementById("myPopup").classList.toggle("show");
    console.log('hello');
}