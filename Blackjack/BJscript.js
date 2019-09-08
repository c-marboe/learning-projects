/*
Practise javascript - blackjack
*/

// Card variables
let suits = ["Diamonds","Clubs","Hearts","Spades"];
    cardValues = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];


//DOM
let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");


//Game vars
let gameStarted = false;
    gameOver = false;
    playerWon = false;
    dealerCards = [];
    playerCards = [];
    dealerScore = 0;
    playerScore = 0;
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

// Buttons

newGameButton.addEventListener('click', function() {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck();

    dealerCards = [getNextCard(),getNextCard()];
    playerCards = [getNextCard(),getNextCard()];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});

hitButton.addEventListener('click', function() {
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayButton.addEventListener('click', function() {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});


// Functions

function checkForEndOfGame() {
    
    updateScores();

    if (gameOver) {
        while(dealerScore < playerScore && playerScore <= 21) {
            dealerCards.push(getNextCard());
            updateScores();
        }
    }

    if (playerScore>21) {
        gameOver = true;
        playerWon = false;
    }
    else if (dealerScore > 21) {
        gameOver = true;
        playerWon = true;
    }
    else if (gameOver) {
        if (playerScore > dealerScore) {
            playerWon = true;
        }
        else {
            playerWon = false;
        }
    }

}

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = "Welcome to the table, sir";
        return;
    }

    let dealerCardString = '';
    for (let i=0; i<dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n';
    }

    let playerCardString = '';
    for (let i=0; i<playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText =
        'Dealer has:\n' +
        dealerCardString +
        '(score: ' + dealerScore + ')\n\n'
        +
        'Player has:\n' +
        playerCardString +
        '(score: ' + playerScore + ')\n\n';
    
    //for (let i=0; i<deck.length; i++) {
    //    textArea.innerText += '\n' + getCardString(deck[i]);

    if (gameOver) {
        if (playerWon) {
            textArea.innerText += 'YOU WIN!';
        }
        else {
            textArea.innerText += 'DEALER WINS!';
        }
        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }
}

function getCardNumericValue(card) {
    switch(card.value) {
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i=0; i<cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if (card.value === 'Ace') {
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function randomNum(max) {
    return Math.trunc(Math.random()*max);
}

function createDeck() {
    let deck = [];
    for (let i=0; i<suits.length; i++) {
        for (j=0; j<cardValues.length; j++) {
            let card = {
                suit: suits[i],
                value: cardValues[j]
            };
            deck.push(card);
        }
    }
    return deck;
}

function getNextCard() {
    if (deck.length > 0) {
        return deck.shift();
    }
    else {
        return "No cards left";
    }
}

function shuffleDeck() {
    for (i=0; i<deck.length; i++) {
        let swapN = randomNum(deck.length);
        let tmp = deck[swapN];
        deck[swapN] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}