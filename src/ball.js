// export class Ball {
//     constructor() {

//     }

//     draw(c){
//         // c.fill() = 'orange';
//         // c.fillStyle() = 'orange'
//         c.beginPath();
//         c.arc(293, 300, 15, 0, 2 * Math.PI);
//         // c.stroke();
//         c.fill();
//         // c.fillRect(700, 475, 15, 15);
//     }
// }

// do something with if player.status === release


export class Ball {
    // make condition for make, miss, shot attempt;
    constructor(status) {
        if (!status) status = 'mia'
        this.status = status
        this.position = [140, 260];
        this.width = 50;
        this.height = 40;
        this.image = new Image();
        this.image.src = "../images/sprites/net.png"
    }

    draw(c){
        // let sy = 0;
        // if (this.status === 'made1'){
        //     sy = 33;
        // } else if (this.status === 'made2') {
        //     sy = 66;
        // }
    // c.drawImage(this.image, 85, 80, 30, 33, 140, 260, 30, 33);
    }
}