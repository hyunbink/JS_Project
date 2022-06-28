![Title](/images/title_header.png)

Background:

[Retro-Hoops](https://hyunbink.github.io/Retro-Hoops/) is a retro-style 2D game based on shooting basketball free-throws. The game will involve user timing/precision to reach the highest score possible. Difficulty to make a free-throw will depend on the current score (increasing in difficulty as score increases) and visual effects will render depending on user's score.


Functionality & MVPs:

In Retro-Hoops, users will be able to:
- experience event-dependent sound effects (WIP)
- option to mute and un-mute background-music
- utilize timed-input-detection to structure user's shot-attempt
- utilize sprites for animation of player, ball, and net
- navigation links to select player, play game, reset game, and view high scores (WIP)

<!-- In addition, this project will include:

- An About modal describing the background and rules of the game
- A production README -->

Wireframe: 
![Wireframe](/images/js_wireframe.png )

- Nav Links to have my info (Github, LinkedIn)
- Game Nav to have Play, stop, reset, toggle sound
- Instructions on right of Game Board
- User/Player info to have image of NBA Player selected along implemented real stats



Technologies, Libraries, APIs:
- Canvas API to render game board
- Webpack and Babel to bundle and transpile the source JavaScript code 
- npm to manage project dependencies

Implementation Timeline:

Friday Afternoon & Weekend: 
* Setup project, including getting webpack up and running. 
* Get canvas to show up on the screen, and spend time getting comfortable with the Canvas API. 
* Create Game, Player, Ball, and Hoop/Net classes. 
* Make basic shapes of contents of game (player, ball, hoop) to render on canvas
* Think of a fun title for game, get sprites, and select sound effects/music ready for Monday

Monday: 
* Dedicate this day toward implementing the underlying logic of Free-throws (how user will be able to 'shoot', keep track of high score, and how user will select 'player'). 
* Ensure that I can set up for in-game events.
* Implement Nav links including toggle for sound

Tuesday: 
* Make sure everything is correctly rendered to the canvas. 
* Focus on user controls and navigation: play, stop, and reset.

Wednesday: 
* Finish implementing user controls, and focus on styling
* If time, start adding fun facts/ misc data on NBA player.
* Make sure above is rendering properly for proper player.

Thursday Morning: 
* Test drive for bugs.
* Deploy to GitHub pages. If time, rewrite this proposal as a production README.

After Thursday:
* Add audio and visual events? (Made/miss/highscore)
* Make positions for images dynamic
* Make a function to do all animations/changes for me (clean up setTimeouts DRY)
* Clean up code, get rid of console.logs, make it presentable to recruiters
* Update readme’s
* Make it mobile friendly
