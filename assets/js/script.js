
// game variables
let = play
let = reset
let words = [];
let word = "";

// HTML elements  to update
const categoryDropdown = document.querySelector("#game-category");
const timerSpan = document.querySelector("#timer");
const scoreSpan = document.querySelector("#score");
const imageElement = document.querySelector("#image");
const inputElement = document.querySelector("#input");
const scoreElement = document.querySelector("#score");





// Set the initial score and elapsed time to zero
let score = 0;
let timer = 0;

// game categories
const gameCategories = ["Fruits", "Animals"];

// game cards
  
// create words for each fruit and map them to each fruit image
const fruitWords = [
    {name: "der Apfel", img: "assets/images/apple.png",}
    {name: "die Banana", img: "assets/images/banana.png",}
    {name: "die Zitrone", img: "assets/images/lemon.png",}
    {name: "die Orange", img: "assets/images/orange.png",}
    {name: "der Pfirsich", img: "assets/images/peach.png"},
    {name: "die Birne", img: "assets/images/pear.png"},
    {name: "die Ananas", img: "assets/images/pineapple.png"},
    {name: "die Pflaume", img: "assets/images/plum.png"},
    {name: "der Granatapfel", img: "assets/images/pomegranet.png"},
    {name: "die Erdbeere", img: "assets/images/strawberry.png"},
    {name: "die Wassermelone", img: "assets/images/watermelon.png"},
]

// create words for each animal and map them to each animal image
const animalWords = [
    {name:"die Katze", img: "assets/images/cat.png"},
    {name:"der Hund", img: "assets/images/dog.png"},
    {name:"der Goldfisch", img: "assets/images/goldfish.png"},
    {name:"die Maus", img: "assets/images/mouse.png"},
    {name:"der Wellensittich", img: "assets/images/parrot.png"},
    {name:"das Kaninchen", img: "assets/images/rabbit.png"},
    {name:"die Schlange", img: "assets/images/snake.png"},
    {name:"die Schildkrote", img: "assets/images/turtle.png"},
]

// select game category
if (gameCategories === "Fruits") {
    words = fruitWords;
    numberOfCardsInSelectedCategory = fruitWords.length
} else if (gameCategories === "Animals") {
    words = animalWords;
    numberOfCardsInSelectedCategory = animalWords.length
}

// Select a random game card to display
    function displayGameCard() {
        // Generate a random number to be used for displaying game cards
        const randomNumber = Math.floor(Math.random()) * numberOfCardsInSelectedCategory
        for (let i = 0; i <= numberOfCardsInSelectedCategory; i++) {
            const gameCard = document.createElement ("img")
            displayGameCard.appendChild (displayGameCard)

        }
        if (randomNumber === 1) {
            displayGameCard = "der Apfel"
        }
        if (randomNumber === 2) {
            displayGameCard = "die Banana"
        }
        
    }
    displayGameCard.innerHTML = displayGameCard;

// Start timer countdown when game starts


// If the elapsed time has reached 60 seconds, end the game
    if (timer === 60) {
        endGame();
    } { (1000);
    }
 
// Player can reset the game and re-start the timer and score







// create game timer


// create game score


// check player answer
