function Pipe(x, y, w, h, speed) {
    // Physical properties
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
}

Pipe.prototype.draw = function () {
    ctx.drawImage(sprites, 360, 0, 80, 80, this.x, this.y, this.w, this.h);
}

Pipe.prototype.update = function () {
    this.x -= this.speed;
    if (this.x + this.w <= 0) {
        this.x = 360; 
        if (this.y <= 320) {
            this.y = -(Math.random() * (150 - 50) + 40); 
       
        } else {
            this.y = 320 + (Math.random() * (150 - 50) + 40);
        }
    }
}