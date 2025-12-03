// WebGL rendering utilities for Tennis for Two
export class WebGLRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!this.gl) {
            throw new Error('WebGL not supported');
        }
        
        this.setupCanvas();
        this.createShaders();
        this.setupBuffers();
        this.setupUniforms();
    }
    
    setupCanvas() {
        const resizeCanvas = () => {
            const displayWidth = this.canvas.clientWidth;
            const displayHeight = this.canvas.clientHeight;
            
            if (this.canvas.width !== displayWidth || this.canvas.height !== displayHeight) {
                this.canvas.width = displayWidth;
                this.canvas.height = displayHeight;
                this.gl.viewport(0, 0, displayWidth, displayHeight);
            }
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
    }
    
    createShaders() {
        const vertexShaderSource = `
            attribute vec2 a_position;
            uniform vec2 u_resolution;
            uniform vec2 u_translation;
            uniform vec2 u_scale;
            
            void main() {
                vec2 position = (a_position * u_scale + u_translation) / u_resolution * 2.0 - 1.0;
                gl_Position = vec4(position * vec2(1, -1), 0, 1);
            }
        `;
        
        const fragmentShaderSource = `
            precision mediump float;
            uniform vec4 u_color;
            
            void main() {
                gl_FragColor = u_color;
            }
        `;
        
        this.program = this.createProgram(vertexShaderSource, fragmentShaderSource);
        this.gl.useProgram(this.program);
    }
    
    createProgram(vertexSource, fragmentSource) {
        const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexSource);
        const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentSource);
        
        const program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);
        
        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
            throw new Error('Program linking failed: ' + this.gl.getProgramInfoLog(program));
        }
        
        return program;
    }
    
    createShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            throw new Error('Shader compilation failed: ' + this.gl.getShaderInfoLog(shader));
        }
        
        return shader;
    }
    
    setupBuffers() {
        // Create a rectangle buffer (used for all game objects)
        this.rectangleBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.rectangleBuffer);
        
        // Rectangle vertices (centered at origin)
        const vertices = new Float32Array([
            -0.5, -0.5,
             0.5, -0.5,
            -0.5,  0.5,
             0.5,  0.5,
        ]);
        
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);
        
        // Get attribute location
        this.positionAttribute = this.gl.getAttribLocation(this.program, 'a_position');
        this.gl.enableVertexAttribArray(this.positionAttribute);
        this.gl.vertexAttribPointer(this.positionAttribute, 2, this.gl.FLOAT, false, 0, 0);
    }
    
    setupUniforms() {
        this.resolutionUniform = this.gl.getUniformLocation(this.program, 'u_resolution');
        this.translationUniform = this.gl.getUniformLocation(this.program, 'u_translation');
        this.scaleUniform = this.gl.getUniformLocation(this.program, 'u_scale');
        this.colorUniform = this.gl.getUniformLocation(this.program, 'u_color');
    }
    
    clear(r = 0, g = 0, b = 0, a = 1) {
        this.gl.clearColor(r, g, b, a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    
    drawRect(x, y, width, height, color = [1, 1, 1, 1]) {
        const resolution = [this.canvas.width, this.canvas.height];
        const translation = [x + width / 2, y + height / 2];
        const scale = [width, height];
        
        this.gl.uniform2fv(this.resolutionUniform, resolution);
        this.gl.uniform2fv(this.translationUniform, translation);
        this.gl.uniform2fv(this.scaleUniform, scale);
        this.gl.uniform4fv(this.colorUniform, color);
        
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
    }
    
    getCanvasSize() {
        return {
            width: this.canvas.width,
            height: this.canvas.height
        };
    }
}