// Game logic and collision detection for Tennis for Two
import { Ball, Paddle, Court } from './game-objects.js';

export class GameLogic {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.reset();
    }
    
    reset() {
        // Initialize game objects
        this.ball = new Ball(this.canvasWidth / 2, this.canvasHeight / 2);
        this.leftPaddle = new Paddle(50, this.canvasHeight / 2);
        this.rightPaddle = new Paddle(this.canvasWidth - 50, this.canvasHeight / 2);
        this.court = new Court(this.canvasWidth, this.canvasHeight);
        
        // Game state
        this.scores = { left: 0, right: 0 };
        this.gameState = 'waiting'; // waiting, playing, paused, gameOver
        this.winner = null;
        this.winningScore = 5;
        
        // Launch ball after a delay
        setTimeout(() => {
            if (this.gameState === 'waiting') {
                this.ball.launch(Math.random() > 0.5 ? 1 : -1);
                this.gameState = 'playing';
            }
        }, 1000);
    }
    
    update(keys) {
        if (this.gameState === 'paused' || this.gameState === 'gameOver') {
            return;
        }
        
        // Update paddles based on input
        this.updatePaddles(keys);
        
        // Update game objects
        this.leftPaddle.update(this.canvasHeight);
        this.rightPaddle.update(this.canvasHeight);
        
        // Update ball and check wall collisions
        const wallHit = this.ball.update(this.canvasHeight);
        if (wallHit === 'wall') {
            return 'wall';
        }
        
        // Check paddle collisions
        const paddleHit = this.checkPaddleCollisions();
        if (paddleHit) {
            return paddleHit;
        }
        
        // Check scoring
        const score = this.checkScoring();
        if (score) {
            return score;
        }
        
        return null;
    }
    
    updatePaddles(keys) {
        // Left paddle controls (W/S)
        if (keys['KeyW'] || keys['w']) {
            this.leftPaddle.moveUp();
        }
        if (keys['KeyS'] || keys['s']) {
            this.leftPaddle.moveDown();
        }
        
        // Right paddle controls (Arrow keys)
        if (keys['ArrowUp']) {
            this.rightPaddle.moveUp();
        }
        if (keys['ArrowDown']) {
            this.rightPaddle.moveDown();
        }
    }
    
    checkPaddleCollisions() {
        const ballBounds = this.ball.getBounds();
        
        // Check left paddle collision
        const leftPaddleBounds = this.leftPaddle.getBounds();
        if (this.isColliding(ballBounds, leftPaddleBounds) && this.ball.vx < 0) {
            this.handlePaddleCollision(this.leftPaddle, -1);
            return 'paddle';
        }
        
        // Check right paddle collision
        const rightPaddleBounds = this.rightPaddle.getBounds();
        if (this.isColliding(ballBounds, rightPaddleBounds) && this.ball.vx > 0) {
            this.handlePaddleCollision(this.rightPaddle, 1);
            return 'paddle';
        }
        
        return null;
    }
    
    isColliding(rect1, rect2) {
        return rect1.left < rect2.right &&
               rect1.right > rect2.left &&
               rect1.top < rect2.bottom &&
               rect1.bottom > rect2.top;
    }
    
    handlePaddleCollision(paddle, direction) {
        // Reverse ball direction
        this.ball.vx = -this.ball.vx;
        
        // Calculate impact position on paddle (-0.5 to 0.5)
        const ballCenterY = this.ball.y;
        const paddleCenterY = paddle.y;
        const impactPosition = (ballCenterY - paddleCenterY) / (paddle.height / 2);
        
        // Adjust ball angle based on impact position
        this.ball.vy = impactPosition * this.ball.speed * 0.8;
        
        // Accelerate ball
        this.ball.accelerate();
        
        // Move ball outside paddle to prevent sticking
        this.ball.x = paddle.x + (paddle.width / 2 + this.ball.size / 2 + 1) * direction;
    }
    
    checkScoring() {
        const ballBounds = this.ball.getBounds();
        
        // Left player scores
        if (ballBounds.right < 0) {
            this.scores.right++;
            this.resetBall();
            if (this.scores.right >= this.winningScore) {
                this.winner = 'right';
                this.gameState = 'gameOver';
                return 'win';
            }
            return 'score';
        }
        
        // Right player scores
        if (ballBounds.left > this.canvasWidth) {
            this.scores.left++;
            this.resetBall();
            if (this.scores.left >= this.winningScore) {
                this.winner = 'left';
                this.gameState = 'gameOver';
                return 'win';
            }
            return 'score';
        }
        
        return null;
    }
    
    resetBall() {
        this.ball.reset(this.canvasWidth / 2, this.canvasHeight / 2);
        
        // Launch ball after delay
        setTimeout(() => {
            if (this.gameState === 'playing') {
                this.ball.launch(Math.random() > 0.5 ? 1 : -1);
            }
        }, 1000);
    }
    
    togglePause() {
        if (this.gameState === 'playing') {
            this.gameState = 'paused';
        } else if (this.gameState === 'paused') {
            this.gameState = 'playing';
        }
    }
    
    getGameState() {
        return {
            ball: this.ball,
            leftPaddle: this.leftPaddle,
            rightPaddle: this.rightPaddle,
            court: this.court,
            scores: this.scores,
            gameState: this.gameState,
            winner: this.winner
        };
    }
    
    render(renderer) {
        // Render court
        this.court.render(renderer);
        
        // Render paddles
        this.leftPaddle.render(renderer, [0, 1, 0, 1]); // Green
        this.rightPaddle.render(renderer, [0, 1, 0, 1]); // Green
        
        // Render ball
        this.ball.render(renderer, [1, 1, 1, 1]); // White
    }
}