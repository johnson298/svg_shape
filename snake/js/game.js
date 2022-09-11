class Game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = SCREEN_WIDTH;
        this.canvas.height = SCREEN_HEIGHT;
        this.ctx.strokeStyle = '#ccc';
        this.ctx.stroke();
        document.body.appendChild(this.canvas);

        this.snake = new  Snake(this);

        this.loop();
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 20);
    }

    update() {
        this.snake.update();
    }

    clearScreen() {
        this.ctx.fillStyle = '#f2f2f2';
        this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    }

    draw() {
        this.clearScreen();
        this.snake.draw();
    }
}

const game = new Game();