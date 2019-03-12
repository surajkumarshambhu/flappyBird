// Function constructor - It creates a template that you can create objects from.
function Bird(x, y, w, h) {
    // Physical properties
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fallSpeed = 0;
    this.ySpeed = 0;
    this.scored = false;
    this.frame = 0; 
}

Bird.prototype.draw = function () {
    ctx.drawImage(sprites, 360, 81 + (this.frame * 70), 80, 70, this.x, this.y, this.w, this.h);
}

Bird.prototype.update = function () {
    this.fallSpeed += 0.1; 
    this.y += this.fallSpeed + this.ySpeed; 
    if (this.x + this.w >= pipeTop.x && this.x <= pipeTop.x + pipeTop.w) {
        if (this.y + this.h >= pipeBottom.y || this.y <= pipeTop.y + pipeTop.h) {
            isGameOver = true;
        } else {
            if (!this.scored) {
                score++;
                this.scored = true;
            }
        }
    }
    if (this.y >= 560) {
        isGameOver = true;
    }

    if (pipeTop.x >= 360) {
        this.scored = false;
    }

    if (this.fallSpeed <= 1) {
        this.frame = 1;
    } else {
        this.frame = 0;
    }
}

Bird.prototype.moveUp = function (speed) {
    this.fallSpeed = 0;
    this.ySpeed = -speed;
}
