function Background(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
}

Background.prototype.draw = function() {
    ctx.drawImage(sprites, 0, 0, 360, 640, this.x, this.y, this.w, this.h);
}

Background.prototype.update = function() {
    this.x -= this.speed;
    if (this.x <= -360) {
        this.x = 360;
    }
}