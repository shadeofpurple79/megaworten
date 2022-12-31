/// Array of game word cards - fruits 
const imageArray = [
  { url: 'assets/images/apple.png', name: 'der Apfel' },
  { url: 'assets/images/banana.png', name: 'die Banana' },
  { url: 'assets/images/lemon.png', name: 'die Zitrone' },
  { url: 'assets/images/orange.png', name: 'die Orange' },
  { url: 'assets/images/peach.png', name: 'der Pfirsich' },
  { url: 'assets/images/pear.png', name: 'die Birne' },
  { url: 'assets/images/pineapple.png', name: 'die Ananas' },
  { url: 'assets/images/plum.png', name: 'die Pflaume' },
  { url: 'assets/images/pomegranet.png', name: 'der Granatapfel' },
  { url: 'assets/images/strawberry.png', name: 'die Erdbeere' },
  { url: 'assets/images/watermelon.png', name: 'die Wassermelone' }
];

// Use the generate button from html, image container, and image name elements
const generateButton = document.getElementById('generateButton');
const imageContainer = document.getElementById('imageContainer');
const imageName = document.getElementById('imageName');

// Add player text input field and send button
const inputName = document.getElementById('inputName');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

// Image name should not be displayed before the player enters input
imageName.innerHTML = '';

// Listen to player's response with an event listener on the get new card button
generateButton.addEventListener('click', () => {
  // Show a random word card from the fruits category from the array
  const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

// Create an image element and set its src to the random word image URL
  const imageElement = document.createElement('img');
  imageElement.src = randomImage.url;

// Store the displayed image's name in a variable so that we can compare it to player's input later
  // const currentImageName = randomImage.name

// Set the image name element to the random word image name
  imageName.innerHTML = randomImage.name;

// Clear the image container and append the new image element
  imageContainer.innerHTML = '';
  result.innerHTML = '';
  inputName.value = '';
  imageContainer.appendChild(imageElement);
});

// Add event listener to the check answer button
  checkButton.addEventListener('click', () => {
      // Get the player's input name and the current image name
    const input = inputName.value.toLowerCase(); //convert the player input to lower case so that the answers are not case sensitive
    const name = imageName.innerHTML.toLowerCase();
    // check and compare the player's input to the image's actual name and display a message saying it's correct or wrong
    // if-then statement
    if (input === name) {
      result.innerHTML = 'Correct!';
    } else {
      result.innerHTML = `Wrong! The correct answer is "${name}".`;
    }
  });


  








// // game state before the player clicks PLAY button
// let isAlive = false 
// let gameTimer = 0
// let playerScore = 0
// // let message = ""
// let playerAnswers = []
// let playerMessage = document.getElementById("player-message")
// const playerAnswer = document.getElementById("player-answer")
// const answerBtn = document.getElementById("answer-btn")
// // let gameCard = document.getElementById("game-card")
// let gameWords = document.getElementById("game-words")




// // create words for each fruit and map them to each fruit image
// const fruitWords = [
//   {name: "der Apfel", img: "assets/images/apple.png"},
//   {name: "die Banana", img: "assets/images/banana.png"},
//   {name: "die Zitrone", img: "assets/images/lemon.png"},
//   {name: "die Orange", img: "assets/images/orange.png"},
//   {name: "der Pfirsich", img: "assets/images/peach.png"},
//   {name: "die Birne", img: "assets/images/pear.png"},
//   {name: "die Ananas", img: "assets/images/pineapple.png"},
//   {name: "die Pflaume", img: "assets/images/plum.png"},
//   {name: "der Granatapfel", img: "assets/images/pomegranet.png"},
//   {name: "die Erdbeere", img: "assets/images/strawberry.png"},
//   {name: "die Wassermelone", img: "assets/images/watermelon.png"}
// ]
// console.log(fruitWords.length)
// fruitWords.sort(() => 0.5 - Math.random())
// console.log(fruitWords)


// const wordDisplay = document.querySelector("#game-cards")
// console.log(wordDisplay)

// // create words for each animal and map them to each animal image
// const animalWords = [
//   {name:"die Katze", img: "assets/images/cat.png"},
//   {name:"der Hund", img: "assets/images/dog.png"},
//   {name:"der Goldfisch", img: "assets/images/goldfish.png"},
//   {name:"die Maus", img: "assets/images/mouse.png"},
//   {name:"der Wellensittich", img: "assets/images/parrot.png"},
//   {name:"das Kaninchen", img: "assets/images/rabbit.png"},
//   {name:"die Schlange", img: "assets/images/snake.png"},
//   {name:"die Schildkrote", img: "assets/images/turtle.png"}
// ]
// console.log(animalWords.length)
// animalWords.sort(() => 0.5 - Math.random())
// console.log(animalWords)


// let categoryFruits = document.getElementById("fruits-btn")
// let categoryAnimals = document.getElementById("animals-btn")

// categoryFruits.addEventListener("click", function() {
//    //function to trigger when the button is clicked
//    gameCategory()
// })

// categoryAnimals.addEventListener("click", function() {
//   //function to trigger when the button is clicked
//   gameCategory()
// })

// // player selects game category 
// function gameCategory() {
//   // if fruits button is clicked
//   if (gameCategorySelection === "Fruits") {
//     gameWords = [fruitWords]
//     playerMessage = "you selected fruits"
//     // else if animals button is clicked
//   } else { (gameCategorySelection === "Animals")
//     gameWords = [animalWords]
//     message = "you selected animals"
//   }
//   console.log(gameWords)
//   playerMessage.textContent = message
// }



// // player clicks PLAY button
// function startGame() {
//       console.log("play button clicked")
//       playGame()
// }

// // player clicks RESET button
// function restartGame() {
//       console.log("reset button clicked")
//       gameWords = []
//       gameTimer = 0
//       playerScore = 0
//       playGame()
// }



// // function for timer countdown
// function gameCountdown(seconds) {
//   let counter = seconds;
    
//   const interval = setInterval(() => {
//     console.log(counter);
//     counter--;
      
//     if (counter < 0 ) {
//       clearInterval(interval);
//       console.log('time out game over');
//     }
//   }, 1000);
// }

// // show main game cards, wait for answer, check answer, show next card
// function playGame() {
//    // call timer countdown function 
//    gameCountdown()
//    isAlive = true  
//    console.log("game started")
//    for (let i = 0; i < gameWords.length; i++) {
//     const card = document.createElement('img')
//     card.setAttribute('src', "assets/images/spacer.png")
//     card.setAttribute("data-id", i)
//     gridDisplay.appendChild(card)
//     gameWords.appendChild(card)
//     console.log(card, i)
//     // listen to player answer
//     getAnswer()
//     // check answer, continue loop
    
//    }
//   //  let randomIndex = Math.floor(Math.random() * gameWords.length) + 1
//   //  console.log(gameWords)  
//   //  gameWords.textContent = gameWords
//   //  return gameWords[randomIndex]
// }
// playGame()

//     //  from the selected game category, show a word card until all cards are correctly answered
//       // loop:
//       // show a random word from the selected game category
//       // wait for player answer, check answer
//       // if correct, increase score by 1, remove card from the array, show a new random card 
//       // if wrong, show a new random card
//       // end the game if timer reaches 60 seconds or no cards left in the array


//       // for (i = 0; i < gameWords.length; i++) {
//       //   gameWords.textContent = word
//       // }
//       // function getRandomWord() {
//       //   let randomNumber = Math.floor(Math.random() * gameWords.length) + 1
//       //   gameWords.textContent = word
//       // }

//       function getAnswer() {
//         answerBtn.addEventListener("click", function() {
//         playerAnswers.push(plyerAnswer.value)
//         console.log(playerAnswers)
//         })
//       }
//       // ending game
//       // timer NOT zero, card count NOT zero == > back to Show a random card from selected game category

//       // timer zero, card count NOT zero == > Game over, you lost, play again?

//       // timer NOT zero, card count zero == > congrats, you won, play again?

//       // Listen for player answer == > back to first step




