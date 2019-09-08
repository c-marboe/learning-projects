/*
Practise javascript - blackjack
*/

// Variables
let card1 = "Ace of spades";
    card2 = "10 of hearts";
    suits = ["Diamonds","Clubs","Hearts","Spades"];
    cardValues = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    players = [];
    deck = [
        "Ace of spades",
        "Two of spades"
    ];


// Functions
function tripleAdd(a,b,c) {
    let x = a+b+c;
    return x;
}
//console.log(tripleAdd(2,3,4));

function getNextCard() {
    if (deck.length > 0) {
        return deck.shift();
    }
    else {
        return "No cards left";
    }
}

function random52() {
    return Math.trunc(Math.random()*52);
}
let r = random52();
console.log(r);

function createDeck() {
    let deck = [];
    for (i=0; i<suits.length(); i++) {
        for (j=0; j<cardValues.length(); j++) {
            let card = {
                suit: suits[i],
                value: cardValues[j]
            };
            deck.push(card);
        }
    }
    return deck;
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}


//interface
let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener('click',function() {
    textArea.innerText = "New game started";
    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
});

// Objects
let player1 = {
    name: "Jim Johnson",
    age: "37",
    luckyNumber: "12"
};
//console.log(player1.age);



// Add elements
players.push("Jim");
players.push("John");

// Take out first/last element
deck.shift();
deck.pop();

//Delete elements and add new
players.splice(1,1,"Johnny","Jimbo","Jen");

//for
for (let j=0; j<4; j++) {
    for (let i=0; i<13; i++) {
        deck.push(cardValues[i]+" of "+suits[j]);
    }    
}

console.log(deck[7]);
console.log(deck[25]);

// print to the console
console.log("Welcome to Blackjack!");
console.log("You are dealt:");
console.log(" "+card1);
console.log(" "+card2);
console.log(players.length + " players");

if (5>10) { // not equal: !==
    console.log("Yes");
}
else if (0) {
    console.log("?");
}
else {
    console.log("No");
}

switch(players[0]) {
    case "John":
        console.log("He's back");
        break;
    case "Johnny":
        console.log("Here's Johnny!");
        break;
    default:
        console.log("Some random person is playing");
        break;
}

