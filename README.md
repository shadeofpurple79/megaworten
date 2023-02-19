UPDATED README - SIMPLER VERSION OF THE GAME

Create an array of 20 images, assign a name to each image. 
User score is zero at the start. 

Show a "START" button that starts the game. 

User clicks the START button.

Show a random picture from the array of 20 pictures. 
Next to the picture, show a text input field and a "GO" button for the user. 
Wait for the user input. 

User sees the picture, enters the word for the picture in the input field, and clicks the GObutton. 

When GO button is clicked, check if the word entered by the user is the same as the word assigned to the image. 

If it's the same, then user answer is correct. 
If it's not, then user answer is wrong.

For correct answers:
	increase score by one
	remove that image from the array for the duration of this game
	display a message to the user saying "correct, well done"
	display a button that says "NEXT" 
	
For incorrect answers:
	display a message to the user saying "incorrect" 
	user score remains unchanged
	display a button that says "NEXT"

When user clicks the NEXT button, display a new random image from the array and repeat the same loop from the beginning. 

When there are no more images left to show:
	display message to the user "Congrats, you completed the game!" 
	display a button that says "NEW GAME"

If user clicks the NEW GAME button, reload the full 20 images and restart the game from the beginning. 


FUTURE FEATURES:
- User can select from different categories of images (animals, fruits, colours, body parts, vehicles, etc)
- User can level up when they complete an array and unlock a new array
- User can save their game progress and resume another time


Changes from the original idea:
- no timer
- no game category selection
- 

UPDATED WIREFRAME 

![Basic game flow chart](/assets/images/readme-images/Mega%20Worten%20German%20Word%20Game.png "Basic game flow chart")








Game outline

UI:
player: select game category from a dropdown list of two options - Fruits and Animals
    if player selects Fruits, play in words of fruits
    if player selects Animals, play in words of animals
    player must click a button to start the game "PLAY"
    show a countdown 3-2-1-go and start the game 
    player can end the game any time and reset, start a new game

rules:
    player must complete the game in 60 seconds
    player must answer all words correctly
    words are not case-sensitive
    words cannot have spaces -- this requirement has been removed due to German words having unique articles
    incorrect words will appear to the player again until they're answered correctly
    correct words will not appear to the player again
   
how the game works:
    player will be shown the picture of a fruit or an animal
    player will be shown a text input field
    player will type the name of the fruit or animal in the image, into the input field and hit enter
    if the entry is correct, player score will increase by 1, the word "correct" will be displayed for 1 sec, then show the next image
    if the entry is incorrect, player score will be unchanged, the word "wrong" will be displayed for 1 sec, then show the next image
    if the player completes all words in the category in 1 min from the start of game, "congrats you won", game will end, "play again?:
    if time reaches 1 min and the player has not completed all the words in the category, display "time out, game over, play again?"
    when new game begins, the score resets to zero
    

game layout:
    first section: game logo, improve your German vocabulary and spelling, simple game instructions, link to rules
    second section: select game category, timer, play button, reset button, score
    game section: show images on the left, show input field on the right, show number of correct answers, number of words left in category
    fotter section: like this game? thumbs up or down, vote count, share on insta


WIREFRAME GAME FLOW

![Basic game flow chart](/assets/images/readme-images/Mega%20Worten%20German%20Word%20Game.png "Basic game flow chart")

CODING STEPS

// On pageload, or on reset buttonclick, or play-again buttonclick, show game category selection dropdown

// Listen for game category selection

// Show PLAY button

// Listen for PLAY button click

// Reset timer, Reset score

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
