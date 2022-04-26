export class Court {
    constructor() {
        this.position = [0,0];
        this.width = 1024;
        this.height = 576;
        this.image = new Image();
        this.image.src = "images/sprites/halfcourt.png";
    }
    
    draw(c){
        // c.beginPath();
        // c.fillRect();
        // c.fill();
        c.drawImage(this.image, 0, 0);
    }
}