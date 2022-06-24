export default class Ball {
    constructor(status) {
        if (!status) status = 'idle'
        this.status = status
        this.position = [130, 233]; 
        this.width = 50;
        this.height = 40;
        this.image = new Image();
        this.image.src = "images/sprites/net.png"
    }

    draw(c){
        if (this.status === 'make1'){
            c.drawImage(this.image, 85, 0, 30, 18, 300, 255, 30, 18);
        } else if (this.status === 'make2') {
            c.drawImage(this.image, 67, 0, 18, 18, 285, 242, 18, 18);
        } else if (this.status === 'make3') {
            c.drawImage(this.image, 85, 17, 18, 18, 272, 229, 18, 18);
        } else if (this.status === 'make4') {
            c.drawImage(this.image, 34, 0, 18, 18, 258, 217, 18, 18);
        } else if (this.status === 'make5') {
            c.drawImage(this.image, 51, 0, 17, 17, 240, 210, 17, 17);
        } else if (this.status === 'make6') {
            c.drawImage(this.image, 85, 0, 30, 18, 222, 206, 30, 18);
        } else if (this.status === 'make7') {
            c.drawImage(this.image, 67, 0, 18, 18, 202, 204, 18, 18); //peak
        } else if (this.status === 'make8') {
            c.drawImage(this.image, 85, 17, 18, 18, 185, 210, 18, 18);
        } else if (this.status === 'make9') {
            c.drawImage(this.image, 34, 0, 18, 18, 167, 216, 18, 18);
        } else if (this.status === 'make10') {
            c.drawImage(this.image, 51, 18, 17, 17, 150, 224, 17, 17);
        } else if (this.status === 'make11') {
            c.drawImage(this.image, 85, 80, 30, 33, 140, 228, 30, 33);
        } else if (this.status === 'make'){
            c.drawImage(this.image, 85, 80, 30, 33, 140, 228, 30, 33);
        } else if (this.status === 'miss'){
            c.drawImage(this.image, 85, 80, 30, 33, 150, 255, 30, 33);
        } else if (this.status === 'pass1') {
            c.drawImage(this.image, 34, 0, 18, 18, 167, 295, 18, 18);
        } else if (this.status === 'pass2') {
            c.drawImage(this.image, 85, 17, 18, 18, 185, 295, 18, 18);
        } else if (this.status === 'pass3') {
            c.drawImage(this.image, 67, 0, 18, 18, 202, 295, 18, 18);
        } else if (this.status === 'pass4') {
            c.drawImage(this.image, 85, 0, 30, 18, 222, 295, 30, 18);
        } else if (this.status === 'pass5') {
            c.drawImage(this.image, 51, 0, 17, 17, 240, 295, 17, 17);
        } else if (this.status === 'pass6') {
            c.drawImage(this.image, 34, 0, 18, 18, 258, 295, 18, 18);
        } else if (this.status === 'pass7') {
            c.drawImage(this.image, 85, 17, 18, 18, 272, 295, 18, 18);
        } else if (this.status === 'pass8') {
            c.drawImage(this.image, 67, 0, 18, 18, 285, 295, 18, 18);
        } else if (this.status === 'miss1'){
            c.drawImage(this.image, 85, 0, 30, 18, 300, 259, 30, 18);    ///
        } else if (this.status === 'miss2') {
            c.drawImage(this.image, 67, 0, 18, 18, 285, 255, 18, 18);
        } else if (this.status === 'miss3') {
            c.drawImage(this.image, 85, 17, 18, 18, 272, 245, 18, 18);
        } else if (this.status === 'miss4') {
            c.drawImage(this.image, 34, 0, 18, 18, 258, 234, 18, 18);
        } else if (this.status === 'miss5') {
            c.drawImage(this.image, 51, 0, 17, 17, 240, 227, 17, 17);
        } else if (this.status === 'miss6') {
            c.drawImage(this.image, 85, 0, 30, 18, 222, 223, 30, 18);
        } else if (this.status === 'miss7') {
            c.drawImage(this.image, 67, 0, 18, 18, 202, 221, 18, 18); //peak
        } else if (this.status === 'miss8') {
            c.drawImage(this.image, 85, 17, 18, 18, 185, 231, 18, 18);
        } else if (this.status === 'miss9') {
            c.drawImage(this.image, 34, 0, 18, 18, 167, 241, 18, 18);
        } else if (this.status === 'miss10') {
            c.drawImage(this.image, 51, 18, 17, 17, 150, 250, 17, 17);
        } else if (this.status === 'miss11') {
            c.drawImage(this.image, 85, 80, 30, 33, 145, 255, 30, 33);
        }
    }
}
