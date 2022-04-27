import { Ball } from "./ball";
import Game from "./game_view";
import  Net  from "./net";
import { Player } from "./player";

let scoreCounter = 0;
let speed = 1;
export const lineSpeed = function (){
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


document.addEventListener("DOMContentLoaded", function () {
    const myCanvas = document.getElementsByTagName("canvas")[0];
    myCanvas.width = 576;
    myCanvas.height = 576;
    const c = myCanvas.getContext("2d");

    console.log('DOM fully loaded and parsed');
    // TODO add title page?? 'press space to play'??
    const newGame = new Game(c);

    let count = 200;
    let stopCount = false;
    let highScore = 0;
    function animate(){
        if (stopCount) return count;
        requestAnimationFrame(animate);
        if (count < 500){
            newGame.updateX();
            count += lineSpeed();
        } else if (count >= 500){
            newGame.updateXLeft();
            count += lineSpeed();
        } if (count >= 800){
            count = 200;
        } 

        newGame.movingXLine();  
    }
    let userXAttempt = 0;
    
    function stopAnimate(){
        stopCount = true;
        userXAttempt = newGame.movingLineXPos.x;
    }

    
    
let userClick = 0
// TODO add cd to wait for animation to finish?
    document.addEventListener("keydown", function(event){
        if (event.key !== ' ') {
            console.log('PRESS SPACE TO PLAY');
            return;
        }; 
        // TODO Add events for when user gets on 'fire'??
        userClick += 1;
        if (userClick % 2 === 0){
            stopAnimate();
            newGame.player.status = 'shooting';
            console.log(newGame.player.status);
            newGame.renderShot();
            setTimeout(function(){
                newGame.player.status = 'release';
                newGame.renderShot();
                console.log(newGame.player.status);
                if (newGame.xMakeArr().includes(userXAttempt)) {
                    // TODO render made shot animation
                    setTimeout(function(){
                        newGame.net.status = 'made1'
                        newGame.renderShot();
                    }, 200);
                    setTimeout( function(){
                        newGame.net.status = 'made2'
                        newGame.renderShot();
                    },400);
                    setTimeout(function(){
                        newGame.net.status = 'made3'
                        newGame.renderShot();
                    },600);
                    setTimeout(function(){
                        newGame.net.status = 'idle'
                        newGame.renderShot();
                        scoreCounter += 1;
                        if (scoreCounter > highScore){
                            highScore = scoreCounter;
                        } 
                        console.log(scoreCounter);
                    },800);
                } else {
                    // TODO render missed shot animation
                    console.log(scoreCounter);
                    console.log(highScore);
                    if (highScore === scoreCounter && scoreCounter !== 0) {
                        console.log("NEW HIGH SCORE");
                    } else console.log("BRICK");
                    scoreCounter = 0;
                }
            }, 500)
        }   else {
            stopCount = false;
            newGame.player.status = 'idle';
            console.log(newGame.player.status);
            animate();
        }
    });
});






