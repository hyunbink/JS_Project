// need conditionals for when player is passing and idle

export class extraPlayer {
    constructor(status) {
        this.status = status;
        this.position = [135, 270];
        this.width = 30;
        this.height = 200;
        this.image = new Image();
        this.image.src = "images/sprites/Player B/Player B Stand Shoot (with ball)/rebounder_passer.png"
    }
    draw(c) {
        let sx = 50
        if (this.status === 'idle') {
            sx = 50
        } 
        if (this.status === 'rebound' ) {
            sx = 28
        } 
        if (this.status === 'pass') {
            sx = 0
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