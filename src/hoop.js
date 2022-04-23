export class Hoop {
    constructor() {

    }
    draw(c){
        c.fillStyle = 'black';
        c.fillRect(60, 290, 60, 390);
    }
}

export class Net {
    constructor() {

    }

    draw(c){
        c.fillStyle = 'white';
        c.fillRect(120, 350, 50, 40)
    }
}