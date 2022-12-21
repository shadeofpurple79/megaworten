
// game variables
let = play
let = reset
let words = [];
let word = "";

// Set the initial score and elapsed time to zero
let score = 0;
let timer = 0;

// game categories
const gameCategories = ["Fruits", "Animals"];

// game cards
  
// create words for each fruit and map them to each fruit image
const fruitWords = [
    {name: "der Apfel", url: "assets/images/apple.png"}
    {name: "die Banana", url: "assets/images/banana.png"}
    {name: "die Zitrone", url: "assets/images/lemon.png"}
    {name: "die Orange", url: "assets/images/orange.png"}
    {name: "der Pfirsich", url: "assets/images/peach.png"}
    {name: "die Birne", url: "assets/images/pear.png"}
    {name: "die Ananas", url: "assets/images/pineapple.png"}
    {name: "die Pflaume", url: "assets/images/plum.png"}
    {name: "der Granatapfel", url: "assets/images/pomegranet.png"}
    {name: "die Erdbeere", url: "assets/images/strawberry.png"}
    {name: "die Wassermelone", url: "assets/images/watermelon.png"}
]

// create words for each animal and map them to each animal image
const animalWords = [
    {name:"die Katze", url: "assets/images/cat.png""}
    {name:"der Hund", url: "assets/images/dog.png""}
    {name:"der Goldfisch", url: "assets/images/goldfish.png""}
    {name:"die Maus", url: "assets/images/mouse.png""}
    {name:"der Wellensittich", url: "assets/images/parrot.png""}
    {name:"das Kaninchen", url: "assets/images/rabbit.png""}
    {name:"die Schlange", url: "assets/images/snake.png""}
    {name:"die Schildkrote", url: "assets/images/turtle.png""}
]

// select game category
if (category === "Fruits") {
    words = fruitWords;
    numberOfCardsInSelectedCategory = fruitWords.length
} else if (category === "Animals") {
    words = animalWords;
    numberOfCardsInSelectedCategory = animalWords.length
}

// Select a random game card to display
    function displayGameCard() {
        // Generate a random number to be used for displaying game cards
        const randomNumber = Math.floor(Math.random()) * numberOfCardsInSelectedCategory
        console.log(randomNumber)
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
