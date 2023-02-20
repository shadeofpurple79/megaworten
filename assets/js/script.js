// Create an array of 20 image objects with names in German
const images = [
  {name: "der apfel", src: "assets/images/apple.png"},
  {name: "die banana", src: "assets/images/banana.png"},
  {name: "die zitrone", src: "assets/images/lemon.png"},
  {name: "die orange", src: "assets/images/orange.png"},
  {name: "der pfirsich", src: "assets/images/peach.png"},
  {name: "die birne", src: "assets/images/pear.png"},
  {name: "die ananas", src: "assets/images/pineapple.png"},
  {name: "die pflaume", src: "assets/images/plum.png"},
  {name: "der granatapfel", src: "assets/images/pomegranet.png"},
  {name: "die erdbeere", src: "assets/images/strawberry.png"},
  {name: "die wassermelone", src: "assets/images/watermelon.png"},
  {name:"die katze", src: "assets/images/cat.png"},
  {name:"der hund", src: "assets/images/dog.png"},
  {name:"der goldfisch", src: "assets/images/goldfish.png"},
  {name:"die maus", src: "assets/images/mouse.png"},
  {name:"der wellensittich", src: "assets/images/parrot.png"},
  {name:"das kaninchen", src: "assets/images/rabbit.png"},
  {name:"die schlange", src: "assets/images/snake.png"},
  {name:"die schildkrote", src: "assets/images/turtle.png"}
];

// DOM commands to call HTML elements
let gameArea = document.getElementById("game-area");
let gameImage = document.getElementById("game-image");
let gameInput = document.getElementById("game-input");
let gameBtn = document.getElementById("game-btn");
let gameMessage = document.getElementById("game-message");
let nextBtn = document.getElementById("next-btn");
let userScore = document.getElementById("user-score");
let startBtn = document.getElementById("start-btn");

// Game status at the start, score is zero, full set of 20 images available, no image is shown to user
let remainingImages = [...images];   /* Copy the images in the original array into a new array called remaining images */
let currentImage = {};
startBtn.style.display = "block";
gameBtn.style.display = "none";
nextBtn.style.display = "none";

// Start button - add event listener to the start button to start the game
startBtn.addEventListener("click", startGame);

// Call the function to start the game when start button is clicked  
function startGame() {
    // When game starts, hide start button, show game area
    startBtn.style.display = "none";
    gameBtn.style.display = "inline";
    userScore = 0;
  
    // calculate how many images left in the array using length, then pick a random image from the remaining game images
    currentImage = remainingImages[Math.floor(Math.random() * remainingImages.length)];
    console.log(currentImage);

    // Show the image in html
    gameImage.src = currentImage.src;

    // Show an empty text input field and GO button
	  gameInput.style.display = "inline";
    gameInput.value = "";
	  
    // Add event listener to the GO button
	  gameBtn.addEventListener("click", checkAnswer);
}

// Function to check user answer
function checkAnswer() {
    gameBtn.style.display = "none";
    // Get the user's answer from the input field
	  currentAnswer = gameInput.value.toLowerCase();
    console.log(currentAnswer);
    console.log(currentImage.name);
      
      // Check if the answer is correct
      if (currentAnswer == currentImage.name) {
        // Display congrats message
        gameMessage.style.color = "green";
        gameMessage.innerHTML = "Correct, well done!";

        // Increase the user's score and display new score
        userScore = userScore + 1;
        console.log(userScore);
        userScore.innerText = userScore;   /* BAAAAAAAAAAAHHHHHHHH   */

        // Remove the current image from the remaining images array
		    remainingImages = remainingImages.filter(function(image) {
			  return image !== currentImage;
		    });
		
              // If there are no more images, display a message and a new game button to start a new game
              if (remainingImages.length === 0) {
                gameMessage.innerHTML += " You completed the game!";
                nextBtn.innerHTML = "NEW GAME";
                nextBtn.removeEventListener("click", nextImage);
                nextBtn.addEventListener("click", startGame);
              } else {
                // Otherwise, show the NEXT button and add event listener
                gameBtn.style.display = "inline";
                nextBtn.style.display = "inline";
                nextBtn.addEventListener("click", nextImage);
              }
        } else {
          // Display an incorrect message and show the NEXT button
          gameMessage.style.color = "red";
          gameMessage.innerHTML = "Sorry, that's incorrect";
          nextBtn.style.display = "inline";
          nextBtn.addEventListener("click", nextImage);
        }
	
	// Disable the input field and GO button
	// gameInput.disabled = true;
	// gameBtn.disabled = true;

}

// Function to show the next image
function nextImage() {
    // Pick a random image object from the remaining images
    currentImage = remainingImages[Math.floor(Math.random() * remainingImages.length)];
    console.log(currentImage);

    // Show the image in html
    gameImage.src = currentImage.src;

    // Show an empty text input field and GO button
    gameBtn.style.display = "inline";
	  gameInput.style.display = "inline";
    gameInput.value = "";
	  
    // Add event listener to the GO button
	  gameBtn.addEventListener("click", checkAnswer);

}










/*
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


  // next steps
  // remove image text when question card is shown
  // if answer is correct, remove it from the array
  // when all images are removed from the array, end game








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



*/
