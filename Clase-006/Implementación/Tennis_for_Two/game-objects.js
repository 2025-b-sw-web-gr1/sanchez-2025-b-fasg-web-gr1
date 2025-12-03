// Game objects for Tennis for Two
export class Ball {
    constructor(x, y, size = 10) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.vx = 0;
        this.vy = 0;
        this.speed = 5;
        this.maxSpeed = 15;
        this.acceleration = 1.1;
    }
    
    reset(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
    }
    
    launch(direction) {
        this.vx = this.speed * direction;
        this.vy = (Math.random() - 0.5) * this.speed * 0.5;
    }
    
    update(canvasHeight) {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off top and bottom walls
        if (this.y - this.size / 2 <= 0 || this.y + this.size / 2 >= canvasHeight) {
            this.vy = -this.vy;
            this.y = Math.max(this.size / 2, Math.min(canvasHeight - this.size / 2, this.y));
            return 'wall';
        }
        
        return null;
    }
    
    accelerate() {
        const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const newSpeed = Math.min(currentSpeed * this.acceleration, this.maxSpeed);
        const ratio = newSpeed / currentSpeed;
        
        this.vx *= ratio;
        this.vy *= ratio;
    }
    
    render(renderer, color = [1, 1, 1, 1]) {
        renderer.drawRect(
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.size,
            this.size,
            color
        );
    }
    
    getBounds() {
        return {
            left: this.x - this.size / 2,
            right: this.x + this.size / 2,
            top: this.y - this.size / 2,
            bottom: this.y + this.size / 2
        };
    }
}

export class Paddle {
    constructor(x, y, width = 15, height = 80) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 8;
        this.targetY = y;
    }
    
    moveUp() {
        this.targetY -= this.speed;
    }
    
    moveDown() {
        this.targetY += this.speed;
    }
    
    update(canvasHeight) {
        // Smooth movement towards target
        const diff = this.targetY - this.y;
        this.y += diff * 0.3;
        
        // Keep paddle within bounds
        this.y = Math.max(this.height / 2, Math.min(canvasHeight - this.height / 2, this.y));
    }
    
    render(renderer, color = [1, 1, 1, 1]) {
        renderer.drawRect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height,
            color
        );
    }
    
    getBounds() {
        return {
            left: this.x - this.width / 2,
            right: this.x + this.width / 2,
            top: this.y - this.height / 2,
            bottom: this.y + this.height / 2
        };
    }
}

export class Court {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.netWidth = 4;
        this.dashLength = 20;
        this.dashGap = 10;
    }
    
    render(renderer) {
        const netX = this.width / 2 - this.netWidth / 2;
        
        // Draw dashed net
        let y = 0;
        while (y < this.height) {
            renderer.drawRect(
                netX,
                y,
                this.netWidth,
                Math.min(this.dashLength, this.height - y),
                [1, 1, 1, 1]
            );
            y += this.dashLength + this.dashGap;
        }
        
        // Draw boundary lines
        const lineWidth = 2;
        
        // Top line
        renderer.drawRect(0, 0, this.width, lineWidth, [1, 1, 1, 1]);
        
        // Bottom line
        renderer.drawRect(0, this.height - lineWidth, this.width, lineWidth, [1, 1, 1, 1]);
    }
}