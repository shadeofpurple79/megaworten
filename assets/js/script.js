
// game variables
let words = [];
let word = "";
let score = 0;
let elapsedTime = 0;

// create game categories
const gameCategories = ["Fruits", "Animals"];

// select game category
    if (category === "Fruits") {
        words = fruitWords;
    } else if (category === "Animals") {
        words = animalWords;
    }
  
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

// Set the initial score and elapsed time
    score = 0;
    elapsedTime = 0;

// If the elapsed time has reached 60 seconds, end the game
    if (elapsedTime === 60) {
        endGame();
    } { (1000);
    }
 
// Player can reset the game and re-start the timer and score



// randomly show a fruit image


// randomly show an animal image



// create game timer


// create game score


// check player answer
