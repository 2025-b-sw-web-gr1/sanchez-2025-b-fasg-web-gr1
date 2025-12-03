// Input handling for Tennis for Two
export class InputHandler {
    constructor() {
        this.keys = {};
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Keyboard events
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            this.keys[e.key] = true;
            
            // Prevent default for game keys
            if (['ArrowUp', 'ArrowDown', 'KeyW', 'KeyS', 'Space'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
            this.keys[e.key] = false;
        });
        
        // Prevent context menu on canvas
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        
        // Handle visibility change (pause when tab is hidden)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.keys = {}; // Clear all keys when tab is hidden
            }
        });
    }
    
    getKeys() {
        return this.keys;
    }
    
    isKeyPressed(key) {
        return this.keys[key] || false;
    }
}