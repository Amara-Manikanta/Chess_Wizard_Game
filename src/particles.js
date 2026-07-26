// HTML5 Canvas Particle System for Wizard Chess Magic & Spell Animations

class ParticleEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.ambientDust = [];
    this.animating = false;
  }

  init(canvasId = 'magic-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Initialize ambient golden magic dust
    this.initAmbientDust();

    this.animating = true;
    this.loop();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initAmbientDust() {
    this.ambientDust = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      this.ambientDust.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.5 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - 0.2, // slight upward drift
        alpha: Math.random() * 0.6 + 0.2,
        maxAlpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        color: Math.random() > 0.3 ? '#d4af37' : '#9d50bb'
      });
    }
  }

  // Create explosive spell capture burst (Incendio / Bombarda)
  createCaptureBurst(x, y) {
    const particleCount = 45;
    const colors = ['#ff4b2b', '#ff416c', '#d4af37', '#ffffff', '#9d50bb'];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1, // upward gravity bias
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        life: 1,
        decay: Math.random() * 0.03 + 0.015,
        isStoneFragment: Math.random() > 0.5,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2
      });
    }
  }

  // Create Lumos hint highlight sparkle beam
  createLumosBeam(x, y) {
    for (let i = 0; i < 25; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 4 - 1,
        size: Math.random() * 4 + 1.5,
        color: '#38ef7d',
        alpha: 1,
        life: 1,
        decay: 0.025,
        isStoneFragment: false,
        rotation: 0,
        vRot: 0
      });
    }
  }

  // Spell move trail particles
  createMoveTrail(startX, startY, endX, endY) {
    const steps = 15;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = startX + (endX - startX) * t;
      const y = startY + (endY - startY) * t;
      
      this.particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1,
        color: '#00d2ff',
        alpha: 0.8,
        life: 1,
        decay: 0.03 + i * 0.001,
        isStoneFragment: false,
        rotation: 0,
        vRot: 0
      });
    }
  }

  loop() {
    if (!this.ctx || !this.animating) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Render Ambient Magic Dust
    for (let p of this.ambientDust) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha += p.pulseSpeed;

      if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
        p.pulseSpeed = -p.pulseSpeed;
      }

      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = this.canvas.height;

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // Render Explosive / Spell Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15; // gravity for stone fragments
      p.alpha -= p.decay;
      p.rotation += p.vRot;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = p.color;

      if (p.isStoneFragment) {
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    requestAnimationFrame(() => this.loop());
  }
}

export const particleEngine = new ParticleEngine();
