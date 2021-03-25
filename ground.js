class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            friction: 1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    display() {
        fill("blue");
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}