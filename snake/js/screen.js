class Screen {
    constructor(game) {
        this.game = game;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = 0;
    }

    update() {
        this.top = this.game.snake.y - (SCREEN_HEIGHT / 2);
        this.right = this.game.snake.
    }
}