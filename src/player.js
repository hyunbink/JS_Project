// need conditionals for when player is shooting and idle

export class Player {
    constructor(status) {
        this.status = status;
        this.position = [308, 265]; //265
        this.width = 30;
        this.height = 200;
        this.image = new Image();
        this.image.src = "images/sprites/Player A/Player A Stand Shoot (with ball)/player_A_free-throw_left-75x75.png"
    }
    draw(c) {
        let sx = 0
        if (this.status === 'idle') {
            sx = 0
        } 
        if (this.status === 'shooting' ) {
            sx = 25
        } 
        if (this.status === 'release') {
            sx = 50
        }
        c.drawImage(this.image, sx, 0, 25, 75, this.position[0], this.position[1], 25, 75);
    }
}

// only need to increment sx

// context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// - sx is the horizontal offset into the source image
// - sy is the vertical offset into the source image
// - sWidth is the width of the source image
// - sHeight is the height of the source image
// - dx is the horizontal offset into the destination canvas
// - dy is the vertical offset into the destination canvas
// - dWidth is the width of the destination canvas
// - dHeight is the height of the destination canvas

// s for sprite
// d for canvas
// increment by sw 


