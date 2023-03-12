# MEGAWORTEN

Mega Worten is a German language learning game, aimed at absolute beginners, gradually improving to more advanced levels. 

Mega Worten's objective is to expand the vocabulary of the student, teach the correct spelling and appropriate noun genders of the words while learning, and through repetition and using visual memory, create a lasting knowledge of German language. 

Gamification has become a vital part of learning over the last decades as it stimulates engagement, memory, improved retention of knowledge, while offering an element of fun. Mega Worten utilises all these elements while offering a fun and stimulating game with increasing engagement. 

Mega Worten offers huge potential to grow as increasing levels of difficulty can be added, with challenges to include decreasing time limits, and competing with friends in real time. The game is age-agnostic as it's full of colourful images that can appeal to school children, as well as teens and adults. 

Mega Worten

![Responsive Views](documentation/images/megaworten-highlevel.png)

## UX

Mega Worten game is based on a minimalistic flow. The player follows these basic steps:
- Start the game
- See an image, enter the German word
- If it's correct, earn more points
- Move to the next image and continue until there are no more images left in the game

Game Flow

![Game Flow](documentation/images/megaworten-gameflow.png)

### Colour Scheme

Mega Worten's colour scheme is based on a minimalistic and calming theme. The blue colour and its different shades such as turquoise, aquamarine and so on are associared with feelings of calmness and relaxation and is often described as peaceful, tranquil, secure, and orderly. Blue is seen as a sign of stability and reliability.

Mega Worten has used this colour scheme even though it is a game but its main purpose is educational and requires the mind to be open to learning, as opposed to the more stressful sensation in competitive gaming. 

- `#turquoise`  used for background colour
- `#whitesmoke` used for game area background
- `#2f4f4f`     used for H1 text
- `#1ab5db`     used for button background
- `#aquamarine` used for displayed score

Colour Scheme

I used [coolors.co](https://coolors.co/40e0d0-f5f5f5-2f4f4f-1ab5db-7fffd4) to generate my colour palette.

![Colour Scheme](documentation/images/colour-scheme.png)

### Typography

- [Google Pairing](https://www.fontpair.co/pairings/roboto-condensed-roboto) suggestion was used to pair Roboto and Roboto Condensed fonts 

- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) was used for the primary headers and titles.

- [Roboto](https://fonts.google.com/specimen/Roboto) was used for all other secondary text.

- [Font Awesome](https://fontawesome.com) icons were used in the game, when displaying game messages and important game rules, as well as social media icons in the footer. 

## Wireframes

I used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](documentation/images/megaworten-wireframe-mobile.png) |
| Tablet | ![screenshot](documentation/images/megaworten-wireframe-tablet.png) |
| Desktop | ![screenshot](documentation/images/megaworten-wireframe-desktop.png) |

## Features
IMPORTANT: Remember to always include a screenshot of each individual feature!

### Existing Features

- **Feature #1**
    - Show a random picture from the array of 20 pictures. Next to the picture, show a text input field and a "GO" button for the user. Wait for the user input. 
    - ![screenshot](documentation/feature01.png)

- **Feature #2**
    - User sees the picture, enters the word for the picture in the input field, and clicks the GO button. When GO button is clicked, check if the word entered by the user is the same as the word assigned to the image. If it's the same, then user answer is correct. If it's not, then user answer is wrong.
    - ![screenshot](documentation/feature01.png)

- **Feature #3**
    - User score is zero at the start. For correct answers: increase score by one
    - ![screenshot](documentation/feature01.png)

- **Feature #4**
    - When user clicks the NEXT button, display a new random image from the array and repeat the same loop from the beginning. When there are no more images left to show: display message to the user "Congrats, you completed the game!" display a button that says "NEW GAME"
    - ![screenshot](documentation/feature01.png)

- **Feature #5**
    - If user clicks the NEW GAME button, reload the full 20 images and restart the game from the beginning. 
    - ![screenshot](documentation/feature01.png)

### Future Features

- **Future Feature #1**
    - Game Timer

- **Future Feature #2** 
    - Game Levels and Rewards

- **Future Feature #3**
    - Additional Game Arrays  - that can be unlocked with each new level (days, months, seasons, numbers, foods, drinks, transport vehicles, colours, clothes, body, nature, and many more)

- **Future Feature #4**
    - Login and Save Scores
 
- **Future Feature #5**
    - Challenges with decreasing time limit

- **Future Feature #6**
    - Play Live Against Real People

- **Future Feature #7** 
    - Artificial intelligence and learning capability to follow trending popular culture topics and create word categories using the most frequently used words (perhaps using chatGPT)
 
## Tools & Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS Grid](https://www.w3schools.com/css/css_grid.asp) used for an enhanced responsive layout.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [Gitpod](https://gitpod.io) used as a cloud-based IDE for development.
- [Markdown Builder by Tim Nelson](https://traveltimn.github.io/markdown-builder) used to help generate the Markdown files.

# Testing

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| File | Test Result URL | Screenshot | Notes |
| --- | --- | --- | --- |
| index.html | [W3C](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fshadeofpurple79.github.io%2Fmegaworten%2F#l43c86) | ![screenshot](documentation/images/screencapture-validator-w3-org-nu-2023-03-11-16_06_41.png) | Pass: No Errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Test Result URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fshadeofpurple79.github.io%2Fmegaworten%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![screenshot](documentation/images/screencapture-jigsaw-w3-org-css-validator-validator-2023-03-11-16_07_22.png) | Pass: No Errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/images/screencapture-jshint-2023-03-11-15_49_12.png) | Pass: No Errors |

## Browser Compatibility

Use this space to discuss testing the live/deployed site on various browsers.
Consider testing at least 3 different browsers, if available on your system.

Recommended browsers to consider:
- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Edge](https://www.microsoft.com/edge)
- [Safari](https://support.apple.com/downloads/safari)
- [Brave](https://brave.com/download)
- [Opera](https://www.opera.com/download)

**IMPORTANT**: You must provide screenshots of the tested browsers, to "prove" that you've actually tested them.

Please note, there are services out there that can test multiple browser compatibilities at the same time.
Some of these are paid services, but some are free.
If you use these, you must provide a link to the source used for attribution, and multiple screenshots of the results.

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/images/chrome.png) | Works as expected |
| Firefox | ![screenshot](documentation/images/firefox.png) | Works as expected |
| Safari | ![screenshot](documentation/images/safari.png) | Works as expected |

| Edge | ![screenshot](documentation/browser-edge.png) | Works as expected |
| Brave | ![screenshot](documentation/browser-brave.png) | Works as expected |
| Opera | ![screenshot](documentation/browser-opera.png) | Minor differences |
| Internet Explorer | ![screenshot](documentation/browser-iex.png) | Does not work as expected |

## Responsiveness

If you have tested the project on your actual mobile phone or tablet, consider also including screenshots of these as well.
It showcases a higher level of manual tests, and can be seen as a positive inclusion!

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/images/responsive-phone.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/images/responsive-tablet.png) | Works as expected |
| Desktop | ![screenshot](documentation/images/responsive-desktop.png) | Works as expected |
| ipad mini | ![screenshot](documentation/images/responsive-desktop.png) | Works as expected |
| ipad air | ![screenshot](documentation/images/responsive-desktop.png) | Works as expected |
| iphone 12 pro | ![screenshot](documentation/images/responsive-desktop.png) | Works as expected |

## Lighthouse Audit

Use this space to discuss testing the live/deployed site's Lighthouse Audit reports.

If you don't have Lighthouse in your Developer Tools,
it can be added as an [extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk).

**IMPORTANT**: You must provide screenshots of the results, to "prove" that you've actually tested them.

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/lighthouse-home-mobile.png) | Some minor warnings |
| Home | Desktop | ![screenshot](documentation/lighthouse-home-desktop.png) | Few warnings |
| About | Mobile | ![screenshot](documentation/lighthouse-about-mobile.png) | Some minor warnings |
| About | Desktop | ![screenshot](documentation/lighthouse-about-desktop.png) | Few warnings |
| Gallery | Mobile | ![screenshot](documentation/lighthouse-gallery-mobile.png) | Slow response time due to large images |
| Gallery | Desktop | ![screenshot](documentation/lighthouse-gallery-desktop.png) | Slow response time due to large images |
| x | x | x | repeat for any other tested pages/sizes |


## Bugs

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

For JavaScript and Python applications, it's best to screenshot the errors to include them as well.

screenshots of bugs are extremely helpful, and go a long way!

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I _____________________.

- Python `'ModuleNotFoundError'` when trying to import module from imported package

    ![screenshot](documentation/bug03.png)

    - To fix this, I _____________________.

- Django `TemplateDoesNotExist` at /appname/path appname/template_name.html

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

- Python `E501 line too long` (93 > 79 characters)

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

### GitHub **Issues**

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

An improved way to manage bugs is to use the built-in **Issues** tracker on your GitHub repository.
To access your Issues, click on the "Issues" tab at the top of your repository.
Alternatively, use this link: https://github.com/shadeofpurple79/megaworten/issues

If using the Issues tracker for your bug management, you can simplify the documentation process.
Issues allow you to directly paste screenshots into the issue without having to first save the screenshot locally,
then uploading into your project.

You can add labels to your issues (`bug`), assign yourself as the owner, and add comments/updates as you progress with fixing the issue(s).

Once you've sorted the issue, you should then "Close" it.

When showcasing your bug tracking for assessment, you can use the following format:

**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](https://github.com/shadeofpurple79/megaworten/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [JS Uncaught ReferenceError: `foobar` is undefined/not defined](https://github.com/shadeofpurple79/megaworten/issues/1) | Closed |
| [Python `'ModuleNotFoundError'` when trying to import module from imported package](https://github.com/shadeofpurple79/megaworten/issues/2) | Closed |
| [Django `TemplateDoesNotExist` at /appname/path appname/template_name.html](https://github.com/shadeofpurple79/megaworten/issues/3) | Closed |

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/shadeofpurple79/megaworten/issues).

| Bug | Status |
| --- | --- |
| [JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).](https://github.com/shadeofpurple79/megaworten/issues/4) | Open |
| [Python `E501 line too long` (93 > 79 characters)](https://github.com/shadeofpurple79/megaworten/issues/5) | Open |

## Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed.
This section should include shortcomings of the frameworks or technologies used.
Although time can be a big variable to consider, paucity of time and difficulty understanding
implementation is not a valid reason to leave bugs unfixed.

If you've identified any unfixed bugs, no matter how small, be sure to list them here.
It's better to be honest and list them, because if it's not documented and an assessor finds the issue,
they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- For PP3, when using a helper `clear()` function, any text above the height of the terminal does not clear, and remains when you scroll up.

    ![screenshot](documentation/unfixed-bug02.png)

    - Attempted fix: I tried to adjust the terminal size, but it only resizes the actual terminal, not the allowable area for text.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](documentation/unfixed-bug03.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.

If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

There are no remaining bugs that I am aware of.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:
- In the [GitHub repository](https://github.com/shadeofpurple79/megaworten), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://shadeofpurple79.github.io/megaworten)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/shadeofpurple79/megaworten) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/shadeofpurple79/megaworten.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/shadeofpurple79/megaworten)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/shadeofpurple79/megaworten)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

## Credits

In this section you need to reference where you got your content, media, and extra help from.
It is common practice to use code from other repositories and tutorials,
however, it is important to be very specific about these sources to avoid plagiarism.

### Content

Use this space to provide attribution links to any borrowed code snippets, elements, or resources.

Ideally, you should provide an actual link to every resource used, not just a generic link to the main site!

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder by Tim Nelson](https://traveltimn.github.io/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) | entire site | responsive HTML/CSS/JS navbar |
| [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) | contact page | interactive pop-up (modal) |
| [W3Schools](https://www.w3schools.com/css/css3_variables.asp) | entire site | how to use CSS :root variables |
| [StackOverflow](https://stackoverflow.com/a/2450976) | quiz page | Fisher-Yates/Knuth shuffle in JS |
| [YouTube](https://www.youtube.com/watch?v=YL1F4dCUlLc) | leaderboard | using `localStorage()` in JS for high scores |
| [YouTube](https://www.youtube.com/watch?v=u51Zjlnui4Y) | PP3 terminal | tutorial for adding color to the Python terminal |

### Media

Use this space to provide attribution links to any images, videos, or audio files borrowed from online.

Ideally, you should provide an actual link to every media file used, not just a generic link to the main site!
The list below is by no means exhaustive. Within the Code Institute Slack community, you can find more "free media" links
by sending yourself the following command: `!freemedia`.

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Pexels](https://www.pexels.com) | entire site | image | favicon on all pages |
| [Lorem Picsum](https://picsum.photos) | home page | image | hero image background |
| [Unsplash](https://unsplash.com) | product page | image | sample of fake products |
| [Pixabay](https://pixabay.com) | gallery page | image | group of photos for gallery |
| [Wallhere](https://wallhere.com) | footer | image | background wallpaper image in the footer |
| [This Person Does Not Exist](https://thispersondoesnotexist.com) | testimonials | image | headshots of fake testimonial images |
| [Audio Micro](https://www.audiomicro.com/free-sound-effects) | game page | audio | free audio files to generate the game sounds |
| [Videvo](https://www.videvo.net/) | home page | video | background video on the hero section |
| [TinyPNG](https://tinypng.com) | entire site | image | tool for image compression |

### Acknowledgements

Use this space to provide attribution to any supports that helped, encouraged, or supported you throughout the development stages of this project.
A few examples have been provided below to give you some ideas.

- I would like to thank my Code Institute mentor, [John/Jane Doe](https://github.com/username) for their support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.
- I would like to thank my spouse/partner (John/Jane), for believing in me, and allowing me to make this transition into software development.
- I would like to thank my employer, for supporting me in my career development change towards becoming a software developer.


