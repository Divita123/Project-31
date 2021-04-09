class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.image = loadImage("division.png");
        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,200)
        pop();
    }
};