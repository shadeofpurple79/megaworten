// game state before the player clicks PLAY button
let isAlive = false 
let gameTimer = 0
let playerScore = 0
// let message = ""
let playerAnswers = []
let playerMessage = document.getElementById("player-message")
const playerAnswer = document.getElementById("player-answer")
const answerBtn = document.getElementById("answer-btn")
// let gameCard = document.getElementById("game-card")
let gameWords = document.getElementById("game-words")




// create words for each fruit and map them to each fruit image
const fruitWords = [
  {name: "der Apfel", img: "assets/images/apple.png"},
  {name: "die Banana", img: "assets/images/banana.png"},
  {name: "die Zitrone", img: "assets/images/lemon.png"},
  {name: "die Orange", img: "assets/images/orange.png"},
  {name: "der Pfirsich", img: "assets/images/peach.png"},
  {name: "die Birne", img: "assets/images/pear.png"},
  {name: "die Ananas", img: "assets/images/pineapple.png"},
  {name: "die Pflaume", img: "assets/images/plum.png"},
  {name: "der Granatapfel", img: "assets/images/pomegranet.png"},
  {name: "die Erdbeere", img: "assets/images/strawberry.png"},
  {name: "die Wassermelone", img: "assets/images/watermelon.png"}
]
console.log(fruitWords.length)
fruitWords.sort(() => 0.5 - Math.random())
console.log(fruitWords)


const wordDisplay = document.querySelector("#game-cards")
console.log(wordDisplay)

// create words for each animal and map them to each animal image
const animalWords = [
  {name:"die Katze", img: "assets/images/cat.png"},
  {name:"der Hund", img: "assets/images/dog.png"},
  {name:"der Goldfisch", img: "assets/images/goldfish.png"},
  {name:"die Maus", img: "assets/images/mouse.png"},
  {name:"der Wellensittich", img: "assets/images/parrot.png"},
  {name:"das Kaninchen", img: "assets/images/rabbit.png"},
  {name:"die Schlange", img: "assets/images/snake.png"},
  {name:"die Schildkrote", img: "assets/images/turtle.png"}
]
console.log(animalWords.length)
animalWords.sort(() => 0.5 - Math.random())
console.log(animalWords)


let categoryFruits = document.getElementsById("fruits-btn")
let categoryAnimals = document.getElementsById("animals-btn")

categoryFruits.addEventListener("click", function() {
   //function to trigger when the button is clicked
   gameCategory()
})

categoryAnimals.addEventListener("click", function() {
  //function to trigger when the button is clicked
  gameCategory()
})

// player selects game category 
function gameCategory() {
  // if fruits button is clicked
  if (gameCategorySelection === "Fruits") {
    gameWords = [fruitWords]
    playerMessage = "you selected fruits"
    // else if animals button is clicked
  } else { (gameCategorySelection === "Animals")
    gameWords = [animalWords]
    message = "you selected animals"
  }
  console.log(gameWords)
  playerMessage.textContent = message
}



// player clicks PLAY button
function startGame() {
      console.log("play button clicked")
      playGame()
}

// player clicks RESET button
function restartGame() {
      console.log("reset button clicked")
      gameWords = []
      gameTimer = 0
      playerScore = 0
      playGame()
}



// function for timer countdown
function gameCountdown(seconds) {
  let counter = seconds;
    
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
      
    if (counter < 0 ) {
      clearInterval(interval);
      console.log('time out game over');
    }
  }, 1000);
}

// call game when play button or reset button are clicked
function playGame() {
   // call timer countdown function 
   gameCountdown()
   isAlive = true  
   console.log("game started")
   let randomIndex = Math.floor(Math.random() * gameWords.length) + 1
   console.log(gameWords)  
   gameWords.textContent = gameWords
   return gameWords[randomIndex]
}

    //  from the selected game category, show a word card until all cards are correctly answered
      // loop:
      // show a random word from the selected game category
      // wait for player answer, check answer
      // if correct, increase score by 1, remove card from the array, show a new random card 
      // if wrong, show a new random card
      // end the game if timer reaches 60 seconds or no cards left in the array


      // for (i = 0; i < gameWords.length; i++) {
      //   gameWords.textContent = word
      // }
      // function getRandomWord() {
      //   let randomNumber = Math.floor(Math.random() * gameWords.length) + 1
      //   gameWords.textContent = word
      // }

      function getAnswer() {
        answerBtn.addEventListener("click", function() {
        playerAnswers.push(plyerAnswer.value)
        console.log(playerAnswers)
        })
      }
      // ending game
      // timer NOT zero, card count NOT zero == > back to Show a random card from selected game category

      // timer zero, card count NOT zero == > Game over, you lost, play again?

      // timer NOT zero, card count zero == > congrats, you won, play again?

      // Listen for player answer == > back to first step




