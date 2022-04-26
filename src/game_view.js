import { Player } from "./player";
import { Hoop, Net } from "./net";
import { Ball } from "./ball";
import {lineSpeed} from "./event_listeners";
import { Court } from "./court";

// const Player = require("./player");
// const Ball = require("./ball");
// const Hoop = require("./hoop");

// TODO have separate class for drawing lines, can't do multiple canvas
class Game {
    constructor(c){
        this.c = c;
        this.movingLineXPos = {x: 200, y: 200}
        this.player = new Player();
        this.hoop = new Hoop();
        this.net = new Net();
        this.ball = new Ball();
        this.court = new Court();
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
        let canvasWidth = 1024;
        let canvasHeight = 576;
        this.c.fillRect(0, 0, canvasWidth, canvasHeight);
        // this.c.drawImage("./images/sprites/halfcourt.png", 0, 0);
        this.court.draw(this.c);
        this.player.draw(this.c);
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