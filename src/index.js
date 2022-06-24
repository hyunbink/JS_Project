// import { Ball } from "./ball";
import Game from "./game_view";
// import  Net  from "./net";
// import { Player } from "./player";

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
const tallyScore = function(scoreCounter, highScore){
    const score = document.getElementById("currentScore");
    const record = document.getElementById("highScore");
    score.innerHTML = scoreCounter;
    record.innerHTML = highScore;
}

const coverPage = function(bool = true){
    const coverPage = document.getElementById("coverPageDiv");
    // coverPage.parentNode.removeChild(coverPage);
    if (bool) coverPage.style.display = 'none';
    else coverPage.style.display = 'block';
}



document.addEventListener("DOMContentLoaded", function () {
    const myCanvas = document.getElementsByTagName("canvas")[0];
    myCanvas.width = 576; //'100%';
    myCanvas.height = 576;//'100%';
    // Make it visually fill the positioned parent
//   myCanvas.style.width ='100%';
//   myCanvas.style.height='100%';
//   // ...then set the internal size to match
//   myCanvas.width  = myCanvas.offsetWidth;
//   myCanvas.height = myCanvas.offsetHeight;
    const c = myCanvas.getContext("2d");    
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
    
let userClick = 0;
const ballShotAnimation = [1,2,3,4,5,6,7,8,9,10,11];
const ballMissAnimation = [1,2,3,4,5,6,7,8,9,10,11,12];
const ballPassAnimation = [1,2,3,4,5,6,7,8,9];
let gamePlay = false;
    document.addEventListener("keydown", function(event){
        if (event.key !== ' ') {
            return;
        }; 

        if (userClick === 0) {
            coverPage();
            gamePlay = true;
            userClick += 1;
        }

        if (userClick % 2 === 0 && gamePlay){
            gamePlay = false;
            stopAnimate();
            newGame.player.status = 'shooting';
            newGame.renderShot();
            setTimeout(function(){
                newGame.player.status = 'release';
                newGame.renderShot();
                if (newGame.xMakeArr().includes(userXAttempt)) {
                    scoreCounter += 1;

                    ballShotAnimation.forEach(i => {
                        setTimeout(()=>{
                            newGame.net.status = 'idle';
                            newGame.ball.status = `make${i}`; 
                            newGame.renderShot();
                        }, ((i * 80)))
                    })
                    
                    setTimeout(function(){
                        newGame.net.status = 'made1';
                        newGame.ball.status = "none";
                        newGame.renderShot();
                    }, 1100);
                    setTimeout( function(){
                        newGame.net.status = 'made2'
                        newGame.renderShot();
                    },1300);
                    setTimeout(function(){
                        newGame.net.status = 'made3'
                        newGame.renderShot();
                    },1500);
                    setTimeout(function(){
                        newGame.net.status = 'idle'
                        newGame.extraPlayer.status = 'rebound';
                        newGame.renderShot();
                        if (scoreCounter > highScore){
                            highScore = scoreCounter;
                        } 
                        tallyScore(scoreCounter, highScore);
                        if (scoreCounter >= 3 && scoreCounter < 6) {
                            console.log("Heating Up");
                            // TODO heating up here
                        } 
                        if (scoreCounter >= 6) {
                            console.log("He's on Fire!");
                            // TODO on fire here
                        }
                        if (scoreCounter < 3) {
                            // TODO remove heat here
                        }
                        newGame.renderShot();
                    },1600);
                    setTimeout(function(){
                        newGame.net.status = 'idle'
                        newGame.extraPlayer.status = 'pass';
                        newGame.renderShot();
                    },1900);
                    setTimeout(function(){
                        newGame.net.status = 'idle'
                        newGame.extraPlayer.status = 'idle';
                        ballPassAnimation.forEach(i => {
                            setTimeout(()=>{
                                newGame.net.status = 'idle';
                                newGame.ball.status = `pass${i}`; 
                                newGame.renderShot();
                            }, ((i * 60) ))
                        })
                        newGame.renderShot();
                    },2200);
                    setTimeout(function(){
                        newGame.net.status = 'idle'
                        newGame.extraPlayer.status = 'idle';
                        newGame.player.status = 'idle';
                        newGame.renderShot();
                        gamePlay = true;
                        userClick = 1;  
                        console.log("space to play"); // TODO instruct here 
                    },2700);
                } else {
                    ballMissAnimation.forEach(i => {
                        setTimeout(()=>{
                            newGame.net.status = 'idle';
                            newGame.ball.status = `miss${i}`; 
                            newGame.renderShot();
                        }, ((i * 80)))
                    })
                        scoreCounter = 0;

                    setTimeout(function(){
                        newGame.renderShot();
                        tallyScore(scoreCounter, highScore);
                    },880);

                    setTimeout(function(){
                        newGame.net.status = 'idle'
                        newGame.extraPlayer.status = 'rebound';
                        newGame.renderShot();
                    },1000);

                    setTimeout(function(){
                        newGame.net.status = 'idle'
                        newGame.extraPlayer.status = 'idle';
                        ballPassAnimation.forEach(i => {
                            setTimeout(()=>{
                                newGame.net.status = 'idle';
                                newGame.ball.status = `pass${i}`; 
                                newGame.renderShot();
                            }, ((i * 70) ))
                        })
                        newGame.renderShot();
                    },1200);

                    setTimeout(function(){
                        newGame.net.status = 'idle'
                        newGame.extraPlayer.status = 'idle';
                        newGame.player.status = 'idle';
                        newGame.ball.status = 'idle';
                        newGame.renderShot();
                        gamePlay = true;
                        userClick = 1;
                        console.log("space to play") // TODO instruct here
                        if (highScore === scoreCounter && scoreCounter !== 0) {
                            // TODO new HIGH SCORE animation;
                            console.log("NEW HIGH SCORE");
                        } 
                    },1800);
                }
            }, 300)
        }   else if (gamePlay) {
            console.log("remove instruction"); // TODO remove instructions here
            count = 200;
            newGame.movingLineXPos.x = 200;
            stopCount = false;
            newGame.player.status = 'idle';
            animate();
            userClick += 1;
        }
    });
});






