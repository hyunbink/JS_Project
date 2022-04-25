import { Player } from "./player";
import { Hoop, Net } from "./hoop";
import { Ball } from "./ball";
// const Player = require("./player");
// const Ball = require("./ball");
// const Hoop = require("./hoop");

class Game {
    constructor(c){
        this.c = c;
        // console.log(this.c)
        // this.attemptXShot();
        // this.attemptYShot();
        this.movingLineXPos = {x: 200, y: 200}
        this.movingLineYPos = {x: 400, y: 400}
        this.player = new Player();
        this.hoop = new Hoop();
        this.net = new Net();
        this.ball = new Ball();
    }

    // TODO separate canvas' to isolate moving line canvas and background;
    
    // drawXBar(){
    //     console.log(this.c, "I'm in draw fnc")
    //     this.c.fillStyle = 'purple'
    //     this.c.fillRect(200, 200, 500, 50)
    // }
    // drawXMakeBar(){
    //     console.log(this.c, "I'm in draw fnc")
    //     this.c.fillStyle = 'yellow'
    //     this.c.fillRect(400, 200, 100, 50)
    // }
    // attemptXShot(){
    //     let that = this
    //     document.addEventListener("click", function(){
    //         that.drawXBar();
    //         that.drawXMakeBar();
    //         // that.movingXLine();
    //     });
    // }
    drawBoard(){
        this.c.fillStyle = 'blue'
        let canvasWidth = 1024;
        let canvasHeight = 576;
        this.c.fillRect(0, 0, canvasWidth, canvasHeight);
        // this.player.draw(this.c);
        // this.hoop.draw(this.c);
        // this.net.draw(this.c);
        // this.ball.draw(this.c);
    }
    updateX(){   // implement line going left-right here ???
        this.movingLineXPos.x += 1;
        // console.log(this.movingLineXPos.x);
        this.movingXLine();
        this.drawBoard();
    }
    updateXLeft(){   // implement line going left-right here ???
        this.movingLineXPos.x -= 1;
        this.movingXLine();
        this.drawBoard();
    }
    movingXLine(){
        this.c.fillStyle = 'red'
        // this.c.beginPath();
        // this.c.clearRect(0,0, 1024, 576)
        this.c.fillRect(this.movingLineXPos.x, this.movingLineXPos.y, 5, 50)
        // this.c.closePath();
    }
}



export default Game