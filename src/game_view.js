import { Player } from "./player";
import  Net  from "./net";
import { Ball } from "./ball";
import {lineSpeed} from ".";

// const Player = require("./player");
// const Ball = require("./ball");
// const Hoop = require("./hoop");

// TODO have separate class for drawing lines, can't do multiple canvas
class Game {
    constructor(c){
        this.c = c;
        this.movingLineXPos = {x: 200, y: 100}
        this.player = new Player();
        this.net = new Net();
        this.ball = new Ball();
    }

    drawXBar(){
        // console.log(this.movingLineXPos)
        this.c.fillStyle = 'purple'
        this.c.fillRect(200, 100, 305, 50)
    }
    drawXMakeBar(){
        this.c.fillStyle = 'yellow'
        this.c.fillRect(330, 100, 45, 50)
    }

    xMakeArr(){
        let arr = [];
        for (let i = 330; i <=  375; i++) {
            arr.push(i);
            
        }
        return arr;
    }

    
    drawBoard(){
        this.player.draw(this.c);
        this.net.draw(this.c);
        this.ball.draw(this.c);
        this.drawXBar();
        this.drawXMakeBar();

    }



    updateX(){   
        this.movingLineXPos.x += lineSpeed();
        // console.log(this.movingLineXPos.x);
        this.movingXLine();
        this.drawBoard();
        return this.movingLineXPos.x
    }
    updateXLeft(){  
        this.movingLineXPos.x -= lineSpeed();
        this.movingXLine();
        this.drawBoard();
    }
    movingXLine(){
        this.c.fillStyle = 'red'
        if (this.movingLineXPos.x > 500) {
            this.movingLineXPos.x = 500
        }
        if (this.movingLineXPos.x < 200){
            this.movingLineXPos.x = 200
        }
        this.c.fillRect(this.movingLineXPos.x, this.movingLineXPos.y, 5, 50)
    }
}



export default Game