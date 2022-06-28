<p align="center">
  <img width="300px" alt="Retro-Hoops-logo" height="auto" src="https://github.com/hyunbink/Retro-Hoops/blob/main/images/title_header.png">
</p>

[Retro-Hoops](https://hyunbink.github.io/Retro-Hoops/) is a retro-style 2D game based on shooting basketball free-throws. The game will involve user timing/precision to reach the highest score possible. Difficulty to make a free-throw will depend on the current score (increasing in difficulty as score increases). Users will be able to:
- experience event-dependent visuals (score-streaks/new-records/miss)
- option to mute and un-mute background-music (non-mobile)
- utilize timed-input-detection to structure user's shot-attempt
- utilize sprites for animation of player, ball, and net


<!-- Functionality & MVPs:

In Retro-Hoops, users will be able to: -->



<!-- Technologies, Libraries, APIs:
- Canvas API to render game board
- Webpack and Babel to bundle and transpile the source JavaScript code 
- npm to manage project dependencies -->

## Technologies Used

<p align="left">
  <img width="15" height="15" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"> Javascript
</p>
<p align="left">
  <img width="15" height="15" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"> HTML5: Canvas API
</p>
<p align="left">
  <img width="15" height="15" src="https://github.com/webpack/media/blob/master/logo/icon.svg"> Webpack
</p>
<p align="left">
  <img width="15" height="15" src="https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg"> Babel
</p>
<p align="left">
  <img width="15" height="15" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"> npm
</p>

## Gameplay

### Shot Attempt
<img width="100%"  alt='shooting gif' src='https://github.com/hyunbink/Retro-Hoops/blob/main/gifs/shot_attempt.gif'> 

### Score Streaks
<img width="100%"  alt='heating-up gif' src='https://github.com/hyunbink/Retro-Hoops/blob/main/gifs/score_streaks.gif'>

### Missing Animations
<img width="100%"  alt='brick gif' src="https://github.com/hyunbink/Retro-Hoops/blob/main/gifs/missing_animation.gif"> 

### Mobile Compatibility
<img width="50%" align="left"   alt='mobile gif' src="https://github.com/hyunbink/Retro-Hoops/blob/main/gifs/mobile_gameplay.gif"> 


## Looking Ahead

* Incorporating event-related sound effects
* Utilizing an online database to store user's records with usernames
* Implement 3-pointers for more points

<!-- Wireframe: 
*bang*[Wireframe](/images/js_wireframe.png )

- Nav Links to have my info (Github, LinkedIn)
- Instructions on right of Game Board
- User/Player info to have image of NBA Player selected along implemented real stats -->

<!-- 
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
* Make it mobile friendly -->
