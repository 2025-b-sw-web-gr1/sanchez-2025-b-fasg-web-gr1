// Web Audio API sound generation for Tennis for Two
export class AudioSystem {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.audioContext.createGain();
        this.masterGain.connect(this.audioContext.destination);
        this.masterGain.gain.value = 0.3;
    }
    
    // Generate paddle hit sound with pitch variation based on impact position
    playPaddleHit(impactPosition = 0) {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.masterGain);
        
        // Base frequency with variation based on impact position (-0.5 to 0.5)
        const baseFreq = 200;
        const freqVariation = impactPosition * 100;
        oscillator.frequency.setValueAtTime(baseFreq + freqVariation, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, this.audioContext.currentTime + 0.1);
        
        // 8-bit style with square wave
        oscillator.type = 'square';
        
        // Quick attack and decay
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.1);
    }
    
    // Generate wall/net hit sound with noise burst
    playWallHit() {
        const bufferSize = this.audioContext.sampleRate * 0.1;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const output = buffer.getChannelData(0);
        
        // Generate white noise
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        
        const source = this.audioContext.createBufferSource();
        const gainNode = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        source.buffer = buffer;
        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.masterGain);
        
        // High-pass filter for metallic sound
        filter.type = 'highpass';
        filter.frequency.value = 1000;
        
        // Quick decay
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        source.start(this.audioContext.currentTime);
        source.stop(this.audioContext.currentTime + 0.1);
    }
    
    // Generate score event sound (two-tone ascending sequence)
    playScore() {
        const notes = [220, 440]; // A3 to A4
        const duration = 0.15;
        
        notes.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.masterGain);
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime + index * duration);
            
            const startTime = this.audioContext.currentTime + index * duration;
            gainNode.gain.setValueAtTime(0, startTime);
            gainNode.gain.linearRampToValueAtTime(0.4, startTime + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration - 0.02);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + duration);
        });
    }
    
    // Generate win event sound (descending arpeggio)
    playWin() {
        const chord = [523.25, 659.25, 783.99, 1046.50]; // C major chord descending
        const duration = 0.3;
        
        chord.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.masterGain);
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime + index * 0.1);
            
            const startTime = this.audioContext.currentTime + index * 0.1;
            gainNode.gain.setValueAtTime(0, startTime);
            gainNode.gain.linearRampToValueAtTime(0.5, startTime + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + duration);
        });
    }
    
    // Resume audio context if suspended (required by browser autoplay policies)
    resume() {
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }
}