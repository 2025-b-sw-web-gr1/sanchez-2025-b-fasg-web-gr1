// Main game file for Tennis for Two
import { WebGLRenderer } from './webgl-utils.js';
import { GameLogic } from './game-logic.js';
import { InputHandler } from './input-handler.js';
import { AudioSystem } from './audio-system.js';

class TennisForTwo {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ui = {
            score: document.getElementById('score'),
            winner: document.getElementById('winner')
        };
        
        this.renderer = new WebGLRenderer(this.canvas);
        this.inputHandler = new InputHandler();
        this.audioSystem = new AudioSystem();
        
        const canvasSize = this.renderer.getCanvasSize();
        this.gameLogic = new GameLogic(canvasSize.width, canvasSize.height);
        
        this.gameState = this.gameLogic.getGameState();
        this.keys = {};
        this.lastTime = 0;
        
        this.setupEventListeners();
        this.gameLoop();
    }
    
    setupEventListeners() {
        // Space key for pause/restart
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                this.handleSpaceKey();
            }
        });
        
        // Resume audio context on first user interaction
        document.addEventListener('click', () => {
            this.audioSystem.resume();
        }, { once: true });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            const canvasSize = this.renderer.getCanvasSize();
            this.gameLogic.canvasWidth = canvasSize.width;
            this.gameLogic.canvasHeight = canvasSize.height;
        });
    }
    
    handleSpaceKey() {
        const gameState = this.gameLogic.getGameState();
        
        if (gameState.gameState === 'gameOver') {
            // Restart game
            this.gameLogic.reset();
            this.ui.winner.classList.add('hidden');
        } else {
            // Toggle pause
            this.gameLogic.togglePause();
        }
    }
    
    updateUI() {
        const gameState = this.gameLogic.getGameState();
        
        // Update score display
        this.ui.score.textContent = `Player 1: ${gameState.scores.left} | Player 2: ${gameState.scores.right}`;
        
        // Update winner display
        if (gameState.gameState === 'gameOver' && gameState.winner) {
            const winnerText = gameState.winner === 'left' ? 'Player 1 Wins!' : 'Player 2 Wins!';
            this.ui.winner.textContent = winnerText;
            this.ui.winner.classList.remove('hidden');
        }
    }
    
    gameLoop(currentTime = 0) {
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        // Get current input state
        this.keys = this.inputHandler.getKeys();
        
        // Update game logic
        const event = this.gameLogic.update(this.keys);
        
        // Handle game events with audio
        if (event) {
            this.handleGameEvent(event);
        }
        
        // Clear screen
        this.renderer.clear(0, 0, 0, 1);
        
        // Render game
        this.gameLogic.render(this.renderer);
        
        // Update UI
        this.updateUI();
        
        // Continue game loop
        requestAnimationFrame((time) => this.gameLoop(time));
    }
    
    handleGameEvent(event) {
        switch (event) {
            case 'paddle':
                // Calculate impact position for pitch variation
                const gameState = this.gameLogic.getGameState();
                const ballY = gameState.ball.y;
                const paddleY = gameState.ball.vx > 0 ? 
                    gameState.leftPaddle.y : gameState.rightPaddle.y;
                const impactPosition = (ballY - paddleY) / (gameState.leftPaddle.height / 2);
                this.audioSystem.playPaddleHit(impactPosition);
                break;
                
            case 'wall':
                this.audioSystem.playWallHit();
                break;
                
            case 'score':
                this.audioSystem.playScore();
                break;
                
            case 'win':
                this.audioSystem.playWin();
                break;
        }
    }
}

// Initialize game when page loads
window.addEventListener('DOMContentLoaded', () => {
    new TennisForTwo();
});