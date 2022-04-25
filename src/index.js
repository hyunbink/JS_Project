import { Ball } from "./ball";
import Game from "./game";
import { Hoop, Net } from "./hoop";
import { Player } from "./player";

let scoreCounter = 0
let speed = 1
let scoreIncrement = 5
export const lineSpeed = function (){
    // if (scoreCounter % scoreIncrement !== 0 && (scoreCounter !== 0)){
    //     return speed;
    // } else if (scoreCounter % scoreIncrement === 0 && (scoreCounter !== 0)) {
    //     let newSpeed = speed + 3;  // need to figoure out how to concat speed
    // without it constnatly concatinating
    // } else {return speed}
    // return speed += 1
    // TODO make these conditionals simple
    if (scoreCounter < 3) {
        return speed;
    } else if (scoreCounter < 6) {
        return speed + 3;
    } else if (scoreCounter < 9) {
        return speed + 6;
    } else if (scoreCounter < 12) {
        return speed + 9;
    } else if (scoreCounter < 15) {
        return speed + 12;
    } else if (scoreCounter < 18) {
        return speed + 15;
    } else if (scoreCounter < 21) {
        return speed + 18;
    } else {
        return speed + 21;
    }
}

// TODO Change index.js to more semantic name (event listener?)
document.addEventListener("DOMContentLoaded", function () {
    const myCanvas = document.getElementsByTagName("canvas")[0];
    myCanvas.width = 1024;
    myCanvas.height = 576;
    const c = myCanvas.getContext("2d");
    c.fillStyle = 'blue'
    c.fillRect(0, 0, myCanvas.width, myCanvas.height)
    console.log('DOM fully loaded and parsed');
    // TODO add "CLICK TO PLAY " or some shit here
    const player = new Player();
    player.draw(c);

    const ball = new Ball();
    ball.draw(c);

    const hoop = new Hoop();
    hoop.draw(c);

    const net = new Net();
    net.draw(c)

    const newGame = new Game(c);
    let count = 200
    let stopCount = false
    let highScore = 0
    function animate(){
        if (stopCount) return count
        requestAnimationFrame(animate)
        // c.clearRect(0,0, 1024, 576);
        if (count < 500){
            newGame.updateX();
            count += lineSpeed();
        } else if (count >= 500){
            newGame.updateXLeft();
            count += lineSpeed();
        } if (count >= 800){
            count = 200;
        } 
        // userXAttempt = newGame.movingLineXPos();
        // console.log(newGame.xMakeArr());
        newGame.movingXLine();    // only rendering second line ???
    }
    let userXAttempt = 0;
    
    function stopAnimate(){
        stopCount = true;
        userXAttempt = newGame.movingLineXPos.x;
    }

    
    
let userClick = 0
    document.addEventListener("keydown", function(event){
        if (event.key !== ' ') {
            console.log('PRESS SPACE TO PLAY')
            return
        }; 
        userClick += 1;
        if (userClick % 2 === 0){
            // console.log(count)
            stopAnimate();
            if (newGame.xMakeArr().includes(userXAttempt)) {
                // TODO make made shot animation/value;
                scoreCounter += 1;
                if (scoreCounter > highScore){
                    highScore = scoreCounter;

                } // make this a separate function, then have it render new game;
                console.log(userXAttempt);
                console.log(scoreCounter);
                // console.log(highScore);
                // return true;
            } else {
                console.log(userXAttempt);
                console.log(scoreCounter);
                console.log(highScore);
                scoreCounter = 0;
                console.log("BRICK")
                // return false;
                // TODO set up new game instance
            }
        }   else {
            stopCount = false; //if I want to render animate again
            animate();
        }
    });
});






