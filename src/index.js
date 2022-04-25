import { Ball } from "./ball";
import Game from "./game";
import { Hoop, Net } from "./hoop";
import { Player } from "./player";

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
    function animate(){
        if (stopCount) return count
        requestAnimationFrame(animate)
        c.clearRect(0,0, 1024, 576);
        if (count < 500){
            newGame.updateX();
            count += 1
        } else if (count >= 500){
            newGame.updateXLeft();
            count +=1;
        } if (count === 800){
            count = 200;
        } 
        console.log(count)
        newGame.movingXLine();    // only rendering second line ???
    }

    function stopAnimate(){
        console.log("STOPPING ANIMATE")
        stopCount = true;

    }
let userClick = 0
    document.addEventListener("click", function(){
        userClick += 1
        if (userClick % 2 === 0){
            stopAnimate();
        }   else {
            // stopCount = false; if I want to render animate again
            animate();
        }
    });

});

