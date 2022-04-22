Background:

    Free-throws is an retro-style 2D game based on shooting basketball free-throws. The game will involve user timing/precision to reach the highest score possible. A user will select from the displayed NBA players with their career free-throw percentage. Difficulty to make a free-throw will depend on the player they choose (their career free-throw%) and current score (increasing in difficulty as score increases). The game will have background music/sound effects and visuals from free online sources.


Functionality & MVPs:

In Free-Throws, users will be able to:
- have option to mute and un-mute sound
- utilize timed-input-detection to structure user's shot-attempt
- utilize sprites for animation of player, ball, and net
- have dynamic data on selected NBA players
- event-dependent sound effects for flavor
- navigation links to select player, play game, reset game, and view high scores

<!-- In addition, this project will include:

- An About modal describing the background and rules of the game
- A production README -->

Wireframes: 
./js_wireframe.png 
- Nav Links to have my info (Github, LinkedIn)
- Game Nav to have Play, stop, reset, toggle sound
- Instructions on right of Game Board
- User/Player info to have image of NBA Player selected along implemented real stats



Technologies, Libraries, APIs:
- Canvas API to render game board
- Webpack 
- npm to manage project dependencies

Implementation Timeline:
- Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Get canvas to show up on the screen, and spend time getting comfortable with the Canvas API. Create Game, Player, Ball, and Hoop classes. Get a grid rendered to the canvas reflecting the initial state of the cells. 
* Think of a fun title for game, get sprites, sound effects/music ready for monday

- Monday: Dedicate this day toward implementing the underlying logic of Free-throws. Ensure that I can set up for in-game events. If time, make sure this is all rendered correctly on the canvas.

- Tuesday: If I didn't get to it already, get the cells correctly rendered to the canvas. Focus on user controls and navigation: play, stop, and reset.

- Wednesday: Finish implementing user controls, and focus on styling, as well as implementing the different color schemes and nav links. If time, start on bonuses.

- Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.