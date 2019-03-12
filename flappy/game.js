   var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');
ctx.font = 'bold 56px Comic Sans MS';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';

var sprites = document.getElementById('sprites');

function drawText(text, x, y) {
    ctx.fillStyle = 'white';
    ctx.fillText(text, x, y);
    ctx.strokeText(text, x, y);
}

function drawTint(x, y, w, h) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(x, y, w, h);
}

var score = 0; 
var pressed = false;
var isPaused = true; 
var isGameOver = false; 


var player = new Bird(32, 240, 80, 70);
var pipeTop = new Pipe(360, 0, 80, 300, 2);
var pipeBottom = new Pipe(360, 480, 80, 300, 2);
var background1 = new Background(0, 0, 360, 640, 2);
var background2 = new Background(360, 0, 360, 640, 2);

document.addEventListener('keydown', function(event) {
 
    if (event.keyCode === 32 && pressed === false) {
        player.moveUp(2); 
        pressed = true; 
    }

 
    if (event.keyCode === 13) {
        if (isGameOver) {
            window.location.reload();
        }
        if (isPaused) {
            isPaused = false;
        }
    }

    if (event.keyCode === 27 && !isPaused && !isGameOver) {
        isPaused = true;
    }
}, false);

document.addEventListener('keyup', function(event) {
    pressed = false;
}, false);

function gameLoop() {

    if (!isPaused && !isGameOver) {
        player.update();
        pipeTop.update();
        pipeBottom.update();
        background1.update();
        background2.update();
    }

    ctx.clearRect(0, 0, 360, 640);

    background1.draw();
    background2.draw();

    player.draw();
    pipeTop.draw();
    pipeBottom.draw();

    if (isPaused) {
        drawTint(0, 0, 360, 640);
        drawText('Hit "Enter"', 180, 310);
        drawText('to play!', 180, 380);
        if (score > 0) {
            drawText(score, 180, 52);
        }
    } else if (isGameOver) {
        drawTint(0, 0, 360, 640);
        drawText('Game Over', 180, 310);
        drawText('Score: ' + score, 180, 380);
    } else {
        drawTint(0, 0, 360, 64);
        drawText(score, 180, 52);
    }

    window.requestAnimationFrame(gameLoop);
}

gameLoop();