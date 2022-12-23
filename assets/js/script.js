const title = document.getElementById ('game-controls')
const title = document.getElementById ('category-dropdown')
const title = document.getElementById ('dropdown-content')
const title = document.getElementById ('play-button')
const title = document.getElementById ('game-cards')
const title = document.getElementById ('game-answers')
const title = document.getElementById ('player-answers')


// On pageload, or on reset buttonclick, or play-again buttonclick, show game category selection dropdown

// Listen for game category selection

// Show PLAY button

// Listen for PLAY button click

// Reset timer, Reset score
    let score = 0;
    let timer = 0;

// Start countdown timer

// Throughout the game, Listen for RESET button click, back to first step when clicked

// Show cards count in the selected game category

// Show a random card from selected game category

// Listen for player answer

// Check answer

  // Wrong answer == > go back to Show a random card from selected game category

  // Correct answer == > Remove card from game, increase score by 1, decrease card count in the selected game category by 1

// check elapsed time

  // timer NOT zero, card count NOT zero == > back to Show a random card from selected game category

  // timer zero, card count NOT zero == > Game over, you lost, play again?

  // timer NOT zero, card count zero == > congrats, you won, play again?

  // Listen for player answer == > back to first step





// game variables
let = play
let = reset
let words = [];
let word = "";



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