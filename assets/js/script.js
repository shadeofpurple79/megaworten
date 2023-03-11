/* jshint esverion: 11 */

// Game rules open/close modal 
// Get the modal
var modal = document.getElementById("rulesModal");
// Get the button that opens the modal
var btn = document.getElementById("rulesBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    }
  }

// Create an array of 20 image objects with names in German
const images = [
{name: "der apfel", src: "assets/images/apple.png"},
{name: "die banana", src: "assets/images/banana.png"},
// {name: "die zitrone", src: "assets/images/lemon.png"},
// {name: "die orange", src: "assets/images/orange.png"},
// {name: "der pfirsich", src: "assets/images/peach.png"},
// {name: "die birne", src: "assets/images/pear.png"},
// {name: "die ananas", src: "assets/images/pineapple.png"},
// {name: "die pflaume", src: "assets/images/plum.png"},
// {name: "der granatapfel", src: "assets/images/pomegranet.png"},
// {name: "die erdbeere", src: "assets/images/strawberry.png"},
// {name: "die wassermelone", src: "assets/images/watermelon.png"},
// {name:"die katze", src: "assets/images/cat.png"},
// {name:"der hund", src: "assets/images/dog.png"},
// {name:"der goldfisch", src: "assets/images/goldfish.png"},
// {name:"die maus", src: "assets/images/mouse.png"},
// {name:"der wellensittich", src: "assets/images/parrot.png"},
// {name:"das kaninchen", src: "assets/images/rabbit.png"},
// {name:"die schlange", src: "assets/images/snake.png"},
// {name:"die schildkrote", src: "assets/images/turtle.png"}
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
let newBtn = document.getElementById("new-btn");

// Game status at the start, score is zero, full set of 20 images available, no image is shown to user
let remainingImages = [...images];   /* Copy the images in the original array into a new array called remaining images */
let currentImage = {};
let currentScore = 0;
startBtn.style.display = "block";
gameBtn.style.display = "none";
nextBtn.style.display = "none";
newBtn.style.display = "none";

// Start button - add event listener to the start button to start the game
startBtn.addEventListener("click", startGame);

// Call the function to start the game when start button is clicked  
function startGame() {
  // When game starts, hide start button, show go button, show next button, load all images in the original array
  startBtn.style.display = "none";
  gameBtn.style.display = "inline";
  nextBtn.style.display = "inline";
  newBtn.style.display = "none";
  currentScore = 0; /* reset score to zero */
  userScore.innerText = currentScore; /* Show score equals zero in html */
  gameMessage.innerHTML = "";
  remainingImages = [...images];

  // calculate how many images left in the array using length, then pick a random image from the remaining game images
  currentImage = remainingImages[Math.floor(Math.random() * remainingImages.length)];

  // Show the image in html
  gameImage.src = currentImage.src;

  // Show an empty text input field
  gameInput.style.display = "inline";
  gameInput.value = "";
  
  // Add event listener to the GO button, call function to check answer when button is clicked
  gameBtn.addEventListener("click", checkAnswer);
}

// Function to check user answer
function checkAnswer() {
  gameBtn.style.display = "none"; /* hide GO button */
  // Get the user's answer from the input field
  let currentAnswer = gameInput.value.toLowerCase();
  
    
    // Check if the answer is correct
    if (currentAnswer == currentImage.name) {
      // Display congrats message
      gameMessage.style.color = "green";
      gameMessage.innerHTML = "✅ Correct, well done!";

      // Increase the user's score and display new score
      currentScore = currentScore + 1;
      userScore.innerText = currentScore;   

      // Remove the current image from the remaining images array
      remainingImages = remainingImages.filter(function(image) {
      return image !== currentImage;
      });
  
            // If there are no more images, display a message, end the game, and show button to start a new game
            if (remainingImages.length === 0) {
              gameMessage.style.color = "purple";
              gameMessage.style.backgroundColor = "white";
              gameMessage.innerHTML = "🔥 CONGRATS, YOU COMPLETED THE GAME!";
              nextBtn.style.display = "none";
              newBtn.style.display = "block";
              newBtn.addEventListener("click", startGame);
            } else {
              // Otherwise, show NEXT button and add event listener, hide GO button
              nextBtn.style.display = "inline";
              nextBtn.addEventListener("click", nextImage);
            }
      } else {
        // Display an incorrect message and show the NEXT button
        gameMessage.style.color = "red";
        gameMessage.innerHTML = "❌ Sorry, that's incorrect";
        nextBtn.style.display = "inline";
        nextBtn.addEventListener("click", nextImage);
      }
}

// Function to show the next image
function nextImage() {
  // Pick a random image object from the remaining images
  currentImage = remainingImages[Math.floor(Math.random() * remainingImages.length)];

  // Show the image in html
  gameImage.src = currentImage.src;

  // Show an empty text input field and GO button
  gameBtn.style.display = "inline";
  gameInput.style.display = "inline";
  gameInput.value = "";
  
  // Clear the previous round message
  gameMessage.innerHTML = "";

  // Add event listener to the GO button
  gameBtn.addEventListener("click", checkAnswer);
}