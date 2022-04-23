// const Player = require("./player");
import { Player } from "./player";
import { Hoop, Net } from "./hoop";
import { Ball } from "./ball";
// const Ball = require("./ball");
// const Hoop = require("./hoop");

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
        console.log(this.c, "I'm in draw fnc")
        this.c.fillStyle = 'purple'
        this.c.fillRect(200, 200, 500, 50)
    }
    drawXMakeBar(){
        console.log(this.c, "I'm in draw fnc")
        this.c.fillStyle = 'yellow'
        this.c.fillRect(400, 200, 100, 50)
    }
    // drawYBar(){
    //     console.log(this.c, "I'm in draw fnc")
    //     this.c.fillStyle = 'purple'
    //     this.c.fillRect(800, 200, 50, 500)
    // }
    // drawYMakeBar(){
    //     console.log(this.c, "I'm in draw fnc")
    //     this.c.fillStyle = 'yellow'
    //     this.c.fillRect(800, 350, 50, 100)
    // }
    attemptXShot(){
        let that = this
        document.addEventListener("click", function(){
            that.drawXBar();
            that.drawXMakeBar();
            // that.movingXLine();
        });
    }
    // attemptYShot(){
    //     let that = this
    //     document.addEventListener("click", function(){
    //         that.drawYBar();
    //         that.drawYMakeBar();
    //     });
    // }
    drawBoard(){
        this.c.fillStyle = 'blue'
        let canvasWidth = 1024;
        let canvasHeight = 576;
        this.c.fillRect(0, 0, canvasWidth, canvasHeight);
        this.player.draw(this.c);
        this.hoop.draw(this.c);
        this.net.draw(this.c);
        this.ball.draw(this.c);
    }
    updateX(){
        this.movingLineXPos.x += 1;
        this.movingXLine();
        this.drawBoard();
        // this.c.clearRect(0,0, 1024, 576)
    }
    movingXLine(){
        this.c.fillStyle = 'red'
        this.c.beginPath();
        // this.c.clearRect(0,0, 1024, 576)
        this.c.fillRect(this.movingLineXPos.x, this.movingLineXPos.y, 5, 50)
        this.c.closePath();
        // animate();
    }
    // updateY(){
    //     this.movingLineYPos.y += 1;
    //     this.movingYLine();
    //     this.drawBoard();
    //     // this.c.clearRect(0,0, 1024, 576)
    // }
    // movingYLine(){
    //     this.c.fillStyle = 'red'
    //     this.c.beginPath();
    //     // this.c.clearRect(0,0, 1024, 576)
    //     this.c.fillRect(this.movingLineYPos.x, this.movingLineYPos.y, 5, 50)
    //     this.c.closePath();
    //     // animate();
    }
}



export default Game