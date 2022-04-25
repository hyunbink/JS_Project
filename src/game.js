import { Player } from "./player";
import { Hoop, Net } from "./hoop";
import { Ball } from "./ball";
import {lineSpeed} from "./index";
// const Player = require("./player");
// const Ball = require("./ball");
// const Hoop = require("./hoop");

// TODO have separet class for drawing lines, can't do multiple canvas
class Game {
    constructor(c){
        this.c = c;
        // console.log(this.c)
        // this.attemptXShot();
        // this.attemptYShot();
        this.movingLineXPos = {x: 200, y: 200}
        // this.movingLineYPos = {x: 400, y: 400}
        this.player = new Player();
        this.hoop = new Hoop();
        this.net = new Net();
        this.ball = new Ball();
    }

    drawXBar(){
        // console.log(this.movingLineXPos)
        this.c.fillStyle = 'purple'
        this.c.fillRect(200, 200, 305, 50)
    }
    drawXMakeBar(){
        this.c.fillStyle = 'yellow'
        this.c.fillRect(330, 200, 45, 50)
    }

    xMakeArr(){
        let arr = [];
        for (let i = 330; i <=  375; i++) {
            arr.push(i);
            
        }
        return arr;
    }

    
    drawBoard(){
        this.c.fillStyle = 'blue'
        let canvasWidth = 1024;
        let canvasHeight = 576;
        this.c.fillRect(0, 0, canvasWidth, canvasHeight);
        this.player.draw(this.c);
        this.hoop.draw(this.c);
        this.net.draw(this.c);
        this.ball.draw(this.c);
        this.drawXBar();
        this.drawXMakeBar();

    }



    updateX(){   // implement line going left-right here ???
        this.movingLineXPos.x += lineSpeed();
        // console.log(this.movingLineXPos.x);
        this.movingXLine();
        this.drawBoard();
        return this.movingLineXPos.x
    }
    updateXLeft(){   // implement line going left-right here ???
        this.movingLineXPos.x -= lineSpeed();
        this.movingXLine();
        this.drawBoard();
    }
    movingXLine(){
        this.c.fillStyle = 'red'
        // this.c.beginPath();
        // this.c.clearRect(0,0, 1024, 576)
        if (this.movingLineXPos.x > 500) {
            this.movingLineXPos.x = 500
        }
        if (this.movingLineXPos.x < 200){
            this.movingLineXPos.x = 200
        }
        // if (this.movingLineXPos)
        this.c.fillRect(this.movingLineXPos.x, this.movingLineXPos.y, 5, 50)
        // this.c.closePath();
        // return this.movingXLineXPos.x
    }
}



export default Game