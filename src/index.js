// import { Ball } from "./ball";
import Game from "./game";
// import { Hoop, Net } from "./hoop";
// import { Player } from "./player";


document.addEventListener("DOMContentLoaded", function () {
    const myCanvas = document.getElementsByTagName("canvas")[0];
    myCanvas.width = 1024;
    myCanvas.height = 576;
    const c = myCanvas.getContext("2d");
    c.fillStyle = 'blue'
    c.fillRect(0, 0, myCanvas.width, myCanvas.height)
    console.log('DOM fully loaded and parsed');

    const newGame = new Game(c);
    // newGame.animate();
    function animate(){
        requestAnimationFrame(animate)
        c.clearRect(0,0, 1024, 576);
        newGame.updateX();
        newGame.movingXLine();
        // newGame.updateY();
        // newGame.movingYLine();
        // player.update();
        // platform.draw();
    }
    animate();

    // const player = new Player();
    // player.draw(c);

    // const ball = new Ball();
    // ball.draw(c);

    // const hoop = new Hoop();
    // hoop.draw(c);

    // const net = new Net();
    // net.draw(c)
});

