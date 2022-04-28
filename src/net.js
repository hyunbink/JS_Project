export default class Net {
    // make condition for make, miss, shot attempt;
    constructor(status) {
        if (!status) status = 'idle'
        this.status = status
        this.position = [130, 233];
        this.width = 50;
        this.height = 40;
        this.image = new Image();
        this.image.src = "/test/sprites/NES_Basket_and_Ball_SpriteSheet-100x100.png"
    }


    draw(c){
        let sy = 0;
        if (this.status === 'made1'){
            sy = 33;
        } else if (this.status === 'made2') {
            sy = 66;
        } else if (this.status === 'made3'){
            c.drawImage(this.image, 85, 80, 30, 33, 140, 255, 30, 33);
        } else if (this.status === 'miss'){
            c.drawImage(this.image, 85, 80, 30, 33, 150, 255, 30, 33);
        }
    c.drawImage(this.image, 0, sy, 30, 33, this.position[0], this.position[1], 30, 33);
    }
}

// pos of net will always be [130, 233];