export class Ball {
    constructor() {

    }

    draw(c){
        // c.fill() = 'orange';
        // c.fillStyle() = 'orange'
        c.beginPath();
        c.arc(293, 300, 15, 0, 2 * Math.PI);
        // c.stroke();
        c.fill();
        // c.fillRect(700, 475, 15, 15);
    }
}