

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
