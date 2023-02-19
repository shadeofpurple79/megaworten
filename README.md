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


