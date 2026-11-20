/**
 * Eggspedition - Mystery Easter Egg Generator & Secret Hatchery
 * Pure JavaScript, Web Audio API, Canvas FX, and DevTools Easter Eggs
 */

(() => {
  'use strict';

  // ==========================================================================
  // Easter Egg Database (50 Handcrafted Secrets across 5 Categories)
  // ==========================================================================
  const EASTER_EGGS = [
    // --- Dev & Hacker ---
    {
      id: 1,
      category: 'dev',
      rarity: 'Common',
      emoji: '🦆',
      title: 'The Omniscient Rubber Duck',
      message: 'Explain your bug to the nearest inanimate object. If that fails, blame caching.',
      flavor: 'Rubber Duck Debugging: 90% psychology, 10% squeak.',
      theme: 'cyberpunk'
    },
    {
      id: 2,
      category: 'dev',
      rarity: 'Rare',
      emoji: '☕',
      title: 'HTTP Status 418',
      message: 'I am a teapot. The requested entity body is short and stout.',
      flavor: 'RFC 2324: The Hyper Text Coffee Pot Control Protocol.',
      theme: 'pixel'
    },
    {
      id: 3,
      category: 'dev',
      rarity: 'Common',
      emoji: '👾',
      title: 'The Off-By-One Curse',
      message: 'There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors.',
      flavor: 'Indexed at 0, suffering at 1.',
      theme: 'galaxy'
    },
    {
      id: 4,
      category: 'dev',
      rarity: 'Epic',
      emoji: '🧙‍♂️',
      title: 'The Phantom Semicolon',
      message: 'A Greek question mark (;) was found lurking in line 404 of your codebase.',
      flavor: 'Looks like a semicolon. Destroys builds like a meteor.',
      theme: 'dragon'
    },
    {
      id: 5,
      category: 'dev',
      rarity: 'Common',
      emoji: '🌿',
      title: 'Git Force With You',
      message: 'Commit message: "Minor tweaks to production (do not read before weekend)".',
      flavor: 'git push --force origin main --no-verify',
      theme: 'cyberpunk'
    },
    {
      id: 6,
      category: 'dev',
      rarity: 'Legendary',
      emoji: '⚡',
      title: 'Zero Warning Nirvana',
      message: 'You have compiled 10,000 lines of legacy code with 0 errors and 0 warnings.',
      flavor: 'A state of enlightenment witnessed only once every solar eclipse.',
      theme: 'gold'
    },
    {
      id: 7,
      category: 'dev',
      rarity: 'Rare',
      emoji: '💻',
      title: 'Base 3 Epiphany',
      message: 'There are 10 kinds of people in the world: those who understand binary, those who don’t, and those who didn’t realize this was base 3.',
      flavor: 'Radix matters more than feelings.',
      theme: 'pixel'
    },
    {
      id: 8,
      category: 'dev',
      rarity: 'Common',
      emoji: '🥪',
      title: 'Sudo Authority',
      message: 'User is not in the sudoers file. This incident will be reported to Santa.',
      flavor: 'sudo make me a sandwich -> [OK] With mustard.',
      theme: 'galaxy'
    },
    {
      id: 9,
      category: 'dev',
      rarity: 'Rare',
      emoji: '📦',
      title: 'node_modules Singularity',
      message: 'Your node_modules folder has attained sufficient mass to generate its own gravitational orbit.',
      flavor: 'Heavier than a neutron star, darker than black hole.',
      theme: 'galaxy'
    },
    {
      id: 10,
      category: 'dev',
      rarity: 'Epic',
      emoji: '🔍',
      title: 'Console Archaeologist',
      message: 'console.log("here 1"), console.log("here 2"), console.log("how did we get here???")',
      flavor: 'The timeless detective art of production debugging.',
      theme: 'cyberpunk'
    },

    // --- Gamer Lore & Cheats ---
    {
      id: 11,
      category: 'gaming',
      rarity: 'Common',
      emoji: '🎂',
      title: 'Aperture Science Confectionery',
      message: 'The cake was not a lie. It was merely delayed for scheduled quality assurance testing.',
      flavor: 'Please continue testing in chamber 17.',
      theme: 'pastel'
    },
    {
      id: 12,
      category: 'gaming',
      rarity: 'Rare',
      emoji: '🕹️',
      title: 'The Sacred 30 Lives',
      message: '↑ ↑ ↓ ↓ ← → ← → B A Start. You have been granted 30 extra attempts at parallel parking.',
      flavor: 'The Konami code of everyday existence.',
      theme: 'pixel'
    },
    {
      id: 13,
      category: 'gaming',
      rarity: 'Common',
      emoji: '🧚',
      title: 'Navi’s Urgent Dispatch',
      message: 'HEY! LISTEN! You are doing much better today than you give yourself credit for.',
      flavor: 'Annoying sprite, undeniably wholesome advice.',
      theme: 'pastel'
    },
    {
      id: 14,
      category: 'gaming',
      rarity: 'Epic',
      emoji: '🛡️',
      title: 'God Mode: IDDQD',
      message: 'Your eyes flash gold. You are temporarily invulnerable to passive-aggressive emails.',
      flavor: 'Original DOOM (1993) cheat protocol engaged.',
      theme: 'dragon'
    },
    {
      id: 15,
      category: 'gaming',
      rarity: 'Rare',
      emoji: '🏹',
      title: 'The Whiterun Guard',
      message: 'I used to be an adventurer like you, then I took a JavaScript framework update to the knee.',
      flavor: 'Let me guess: someone stole your sweetroll.',
      theme: 'gold'
    },
    {
      id: 16,
      category: 'gaming',
      rarity: 'Common',
      emoji: '🍄',
      title: 'Warp Zone 1-2',
      message: 'You broke through the ceiling of World 1-2 and found a pipe straight to the weekend.',
      flavor: 'Super Mario Bros. pipe frequency activated.',
      theme: 'pixel'
    },
    {
      id: 17,
      category: 'gaming',
      rarity: 'Epic',
      emoji: '⚔️',
      title: 'The Bonfire Restored',
      message: 'BONFIRE LIT. Estus flasks refilled. Your daily exhaustion is completely purged.',
      flavor: 'Praise the Sun! \\[T]/',
      theme: 'dragon'
    },
    {
      id: 18,
      category: 'gaming',
      rarity: 'Legendary',
      emoji: '👑',
      title: 'The Master Sword Awakens',
      message: 'It is dangerous to go alone! Take this: an unshakeable sense of inner confidence.',
      flavor: 'Pulled cleanly from the pedestal of destiny.',
      theme: 'gold'
    },
    {
      id: 19,
      category: 'gaming',
      rarity: 'Common',
      emoji: '📦',
      title: 'Tactical Cardboard Box',
      message: 'Sneak level 100: If you don’t move, deadlines cannot visually perceive you.',
      flavor: '! (Alert sound plays in your head)',
      theme: 'galaxy'
    },
    {
      id: 20,
      category: 'gaming',
      rarity: 'Rare',
      emoji: '🕳️',
      title: 'Stanley’s Parable',
      message: 'Stanley chose the right door. Stanley felt a strange sense of accomplishment.',
      flavor: 'The Narrator will remember this choice.',
      theme: 'pastel'
    },

    // --- Quirky Fortunes ---
    {
      id: 21,
      category: 'fortune',
      rarity: 'Common',
      emoji: '🥠',
      title: 'The Wi-Fi Augury',
      message: 'A stranger will soon offer you the correct Wi-Fi password without you even having to ask.',
      flavor: 'True harmony between 2.4GHz and 5GHz.',
      theme: 'pastel'
    },
    {
      id: 22,
      category: 'fortune',
      rarity: 'Rare',
      emoji: '🔮',
      title: 'The Lost Sock Prophecy',
      message: 'The missing left sock from 2021 has not been lost; it has ascended to a higher plane of consciousness.',
      flavor: 'It is warm and peaceful where it is now.',
      theme: 'galaxy'
    },
    {
      id: 23,
      category: 'fortune',
      rarity: 'Common',
      emoji: '🥑',
      title: 'The Avocado Window',
      message: 'Today between 2:14 PM and 2:18 PM, an avocado in your vicinity will be at peak ripeness.',
      flavor: 'Miss it, and it turns into dark matter.',
      theme: 'pastel'
    },
    {
      id: 24,
      category: 'fortune',
      rarity: 'Epic',
      emoji: '🌟',
      title: 'The Starlight Dividend',
      message: 'An ancient star exploded 4 billion years ago specifically so the atoms could form your favorite snack.',
      flavor: 'We are all cosmic starch and stardust.',
      theme: 'gold'
    },
    {
      id: 25,
      category: 'fortune',
      rarity: 'Common',
      emoji: '🐈',
      title: 'Feline Validation',
      message: 'A notoriously standoffish neighborhood cat will allow you exactly three chin scratches today.',
      flavor: 'A fourth scratch remains strictly punishable by claw.',
      theme: 'pastel'
    },
    {
      id: 26,
      category: 'fortune',
      rarity: 'Rare',
      emoji: '🔋',
      title: 'The Infinite 1%',
      message: 'Your phone battery will linger at 1% for 45 miraculous minutes just when you need it most.',
      flavor: 'Physics takes a break when emergencies strike.',
      theme: 'cyberpunk'
    },
    {
      id: 27,
      category: 'fortune',
      rarity: 'Legendary',
      emoji: '🌈',
      title: 'The Serendipity Jackpot',
      message: 'All green traffic lights will align in your favor on your next journey.',
      flavor: 'The highway deities smile upon your route.',
      theme: 'gold'
    },
    {
      id: 28,
      category: 'fortune',
      rarity: 'Common',
      emoji: '☕',
      title: 'The Perfect Temperature',
      message: 'Your next hot drink will neither burn your tongue nor get lukewarm before you finish it.',
      flavor: 'Thermally balanced perfection.',
      theme: 'dragon'
    },
    {
      id: 29,
      category: 'fortune',
      rarity: 'Epic',
      emoji: '🗝️',
      title: 'The Lost Key Synchronicity',
      message: 'The thing you stopped searching for three months ago is currently waiting in plain sight.',
      flavor: 'It hid from you because you were looking too hard.',
      theme: 'galaxy'
    },
    {
      id: 30,
      category: 'fortune',
      rarity: 'Common',
      emoji: '🪴',
      title: 'The Resilient Fern',
      message: 'That houseplant you forgot to water for 3 weeks has decided to sprout a tiny triumphant new leaf.',
      flavor: 'Pure stubborn photosynthetic joy.',
      theme: 'pastel'
    },

    // --- Cosmic & Absurd ---
    {
      id: 31,
      category: 'absurd',
      rarity: 'Common',
      emoji: '🪐',
      title: 'Schrödinger’s Breakfast',
      message: 'Inside this egg, the yolk was simultaneously sunny-side up, scrambled, and hard-boiled until you looked.',
      flavor: 'Quantum superposition in a calcium carbonate shell.',
      theme: 'galaxy'
    },
    {
      id: 32,
      category: 'absurd',
      rarity: 'Rare',
      emoji: '🛸',
      title: 'Galactic Broadcast Intercept',
      message: 'Aliens 200 light years away have just finished watching the premiere season of Friends.',
      flavor: 'They are currently debating whether Ross and Rachel were truly on a break.',
      theme: 'cyberpunk'
    },
    {
      id: 33,
      category: 'absurd',
      rarity: 'Common',
      emoji: '🐬',
      title: 'So Long and Thanks',
      message: '42. That is the answer. You are welcome to spend the next 7.5 million years searching for the question.',
      flavor: 'Don’t panic, and always know where your towel is.',
      theme: 'galaxy'
    },
    {
      id: 34,
      category: 'absurd',
      rarity: 'Epic',
      emoji: '⏳',
      title: 'Time Traveler’s Apology',
      message: 'Sorry for messing with the timeline in 2020. The temporal repair squad is working overtime.',
      flavor: 'Please refrain from stepping on prehistoric butterflies.',
      theme: 'cyberpunk'
    },
    {
      id: 35,
      category: 'absurd',
      rarity: 'Common',
      emoji: '🦆',
      title: 'Anatidaephobia Manifest',
      message: 'Somewhere in the universe, a mallard duck is silently observing you with quiet respect.',
      flavor: 'You are doing great, human.',
      theme: 'pastel'
    },
    {
      id: 36,
      category: 'absurd',
      rarity: 'Legendary',
      emoji: '🌌',
      title: 'The Simulation Admin Note',
      message: 'Simulation patch 2026.11: Increased user luck stat by +15%. Render distance set to maximum.',
      flavor: 'Graphics drivers updated. Reality running at stable 120 FPS.',
      theme: 'gold'
    },
    {
      id: 37,
      category: 'absurd',
      rarity: 'Rare',
      emoji: '🫖',
      title: 'Russell’s Cosmic Teapot',
      message: 'There is a porcelain teapot orbiting between Earth and Mars right now, cheering you on.',
      flavor: 'Cannot be disproven, highly comforting.',
      theme: 'galaxy'
    },
    {
      id: 38,
      category: 'absurd',
      rarity: 'Common',
      emoji: '🐿️',
      title: 'The Acorn Conspiracy',
      message: 'Squirrels plant thousands of trees each year simply by forgetting where they hid their snacks.',
      flavor: 'Your forgotten tasks are also secretly gardening the universe.',
      theme: 'pastel'
    },
    {
      id: 39,
      category: 'absurd',
      rarity: 'Epic',
      emoji: '🪞',
      title: 'The Parallel Universe Mirror',
      message: 'In dimension C-137, your alternate self just spilled coffee on their keyboard. Be grateful.',
      flavor: 'Multiverse empathy active.',
      theme: 'dragon'
    },
    {
      id: 40,
      category: 'absurd',
      rarity: 'Rare',
      emoji: '🍕',
      title: 'The Pizza Symmetry Theorem',
      message: 'A round pizza comes in a square box and is eaten in triangles. Chaos is the natural order.',
      flavor: 'Embrace geometry, enjoy crust.',
      theme: 'pixel'
    },

    // --- Classic Easter Bunny & Spring Lore ---
    {
      id: 41,
      category: 'classic',
      rarity: 'Common',
      emoji: '🐇',
      title: 'The Hare’s Confidential Dispatch',
      message: 'Official Bunny Memo: "Carrots are good, but I wouldn’t complain about a croissant once in a while."',
      flavor: 'Signed: Peter H. Cottontail, Chief Egg Distribution Officer.',
      theme: 'pastel'
    },
    {
      id: 42,
      category: 'classic',
      rarity: 'Mythic',
      emoji: '✨',
      title: 'The Prismatic Aurora Egg',
      message: 'You have hatched the mythical Prima Ovi! The equinox aligns and spring blooms in your heart.',
      flavor: 'One in a million celestial harmony.',
      theme: 'gold'
    },
    {
      id: 43,
      category: 'classic',
      rarity: 'Common',
      emoji: '🐣',
      title: 'Freshly Hatched Optimism',
      message: 'A newly hatched chick looks at you and chirps: "Big world! Let’s explore it together!"',
      flavor: '100% wholesome organic joy.',
      theme: 'pastel'
    },
    {
      id: 44,
      category: 'classic',
      rarity: 'Rare',
      emoji: '🍫',
      title: 'The Golden Wrapper',
      message: 'Hidden under the pastel shell is pure 70% Swiss dark chocolate with hazelnut crunch.',
      flavor: 'Calories do not count on holidays or weekends.',
      theme: 'gold'
    },
    {
      id: 45,
      category: 'classic',
      rarity: 'Epic',
      emoji: '🌷',
      title: 'The Spring Equinox Balance',
      message: 'Legends say that if you balance an egg on its end today, all your pending tasks will balance themselves.',
      flavor: 'Gravitational alignment meets spring magic.',
      theme: 'pastel'
    },
    {
      id: 46,
      category: 'classic',
      rarity: 'Common',
      emoji: '🧺',
      title: 'The Woven Basket of Miracles',
      message: 'Don’t put all your eggs in one basket, unless that basket has adequate padding and GPS tracking.',
      flavor: 'Prudent risk management since ancient times.',
      theme: 'pastel'
    },
    {
      id: 47,
      category: 'classic',
      rarity: 'Rare',
      emoji: '🎨',
      title: 'Fabergé’s Lost Blueprint',
      message: 'Every brush stroke on this shell took 300 hours of royal artisan dedication.',
      flavor: 'Fit for imperial display, ready for instant cracking.',
      theme: 'gold'
    },
    {
      id: 48,
      category: 'classic',
      rarity: 'Common',
      emoji: '🔔',
      title: 'The Spring Chime',
      message: 'Winter is officially evicted. Warmer breezes and longer golden hours have moved in.',
      flavor: 'Bask in the sunlight.',
      theme: 'pastel'
    },
    {
      id: 49,
      category: 'classic',
      rarity: 'Epic',
      emoji: '🪺',
      title: 'The Cozy Secret Nest',
      message: 'Deep in the mossy hollow of an ancient oak, a little bird left you this lucky token.',
      flavor: 'May your branches remain strong.',
      theme: 'dragon'
    },
    {
      id: 50,
      category: 'classic',
      rarity: 'Legendary',
      emoji: '👑',
      title: 'The Royal Golden Goose Egg',
      message: 'An authentic 24-karat solid golden egg. It grants the bearer eternal witty comebacks.',
      flavor: 'Never sell the goose, enjoy the dividends.',
      theme: 'gold'
    }
  ];

  // ==========================================================================
  // Web Audio Synthesizer (Procedural Sound FX Engine)
  // ==========================================================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    playCrack(level) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Pitch increases with crack stage
      const baseFreq = 220 + level * 160;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, now + 0.12);

      // Snappy envelope
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      // Noise burst for crunch texture
      const bufferSize = this.ctx.sampleRate * 0.05;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.value = 1000 + level * 500;

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      whiteNoise.start(now);
      osc.stop(now + 0.14);
      whiteNoise.stop(now + 0.09);
    }

    playHatch(rarity) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      
      // Different chord fanfares by rarity
      let notes = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
      let duration = 0.6;

      if (rarity === 'Epic') {
        notes = [440, 554.37, 659.25, 830.61, 1108.73]; // A Major 7th
        duration = 0.8;
      } else if (rarity === 'Legendary') {
        notes = [392, 523.25, 659.25, 783.99, 1046.5, 1318.51]; // Fanfare
        duration = 1.1;
      } else if (rarity === 'Mythic') {
        notes = [440, 523.25, 659.25, 783.99, 987.77, 1174.66, 1396.91, 1760]; // Cosmic chime
        duration = 1.4;
      }

      notes.forEach((freq, idx) => {
        const noteStart = now + idx * 0.08;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = rarity === 'Legendary' || rarity === 'Mythic' ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0, noteStart);
        gain.gain.linearRampToValueAtTime(0.25, noteStart + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + duration);
      });
    }

    playSecretChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const pitches = [587.33, 880, 1174.66, 1760]; // D, A, D, A retro power-up
      pitches.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.15, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.12);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.14);
      });
    }
  }

  // ==========================================================================
  // Particle & Confetti Canvas Physics
  // ==========================================================================
  class ParticleEngine {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.animId = null;

      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    explode(x, y, count = 70, colors = ['#8b5cf6', '#ec4899', '#f59e0b', '#06b6d4', '#10b981', '#ffffff']) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 12 + 4;
        this.particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - Math.random() * 5,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 15,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.01,
          shape: Math.random() > 0.4 ? 'rect' : 'circle'
        });
      }

      if (!this.animId) {
        this.animate();
      }
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.vx *= 0.98; // drag
        p.rotation += p.vRot;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          this.ctx.beginPath();
          this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          this.ctx.fill();
        }

        this.ctx.restore();
      }

      if (this.particles.length > 0) {
        this.animId = requestAnimationFrame(() => this.animate());
      } else {
        this.animId = null;
      }
    }
  }

  // ==========================================================================
  // Main Application Controller
  // ==========================================================================
  class EasterEggApp {
    constructor() {
      this.sound = new SoundEngine();
      this.particles = new ParticleEngine(document.getElementById('particleCanvas'));

      // State
      this.crackLevel = 0; // 0, 1, 2, 3 (hatched)
      this.currentCategory = 'all';
      this.currentShell = 'galaxy';
      this.currentHatchedEgg = null;
      this.eggdex = this.loadEggdex();
      this.isHatching = false;

      // Konami Code Tracker
      this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
      this.konamiIndex = 0;

      // Logo Secret Clicks
      this.logoClickCount = 0;
      this.logoClickTimer = null;

      // Mini-game timer
      this.huntTimerId = null;
      this.huntScore = 0;
      this.huntTimeLeft = 30;

      this.initDom();
      this.bindEvents();
      this.updateEggdexBadge();
      this.checkUrlForCustomEgg();
      this.setupDevToolsEasterEgg();
    }

    initDom() {
      // Containers & Buttons
      this.eggContainer = document.getElementById('eggContainer');
      this.eggShellBase = document.getElementById('eggShellBase');
      this.shellDecorations = document.getElementById('shellDecorations');
      this.eggAura = document.getElementById('eggAura');
      this.messageCard = document.getElementById('messageCard');
      this.crackMeter = document.getElementById('crackMeter');
      this.tapInstruction = document.getElementById('tapInstruction');
      this.quickHatchBtn = document.getElementById('quickHatchBtn');
      this.resetEggBtn = document.getElementById('resetEggBtn');
      this.hatchAnotherBtn = document.getElementById('hatchAnotherBtn');

      // Card Fields
      this.cardRarity = document.getElementById('cardRarity');
      this.cardCategory = document.getElementById('cardCategory');
      this.cardEggNumber = document.getElementById('cardEggNumber');
      this.messageEmoji = document.getElementById('messageEmoji');
      this.easterTitle = document.getElementById('easterTitle');
      this.easterText = document.getElementById('easterText');
      this.easterFlavor = document.getElementById('easterFlavor');
      this.copyMessageBtn = document.getElementById('copyMessageBtn');
      this.speakMessageBtn = document.getElementById('speakMessageBtn');
      this.shareEggBtn = document.getElementById('shareEggBtn');

      // Crack Layers
      this.crack1 = document.getElementById('crackLayer1');
      this.crack2 = document.getElementById('crackLayer2');
      this.crack3 = document.getElementById('crackLayer3');

      // Modals
      this.eggdexModal = document.getElementById('eggdexModal');
      this.customModal = document.getElementById('customModal');
      this.eggdexGrid = document.getElementById('eggdexGrid');
      this.eggdexCounter = document.getElementById('eggdexCounter');
      this.eggdexProgressFill = document.getElementById('eggdexProgressFill');
      this.eggdexStatsText = document.getElementById('eggdexStatsText');

      // Hunt Game
      this.huntOverlay = document.getElementById('huntOverlay');
      this.huntTimer = document.getElementById('huntTimer');
      this.huntScoreEl = document.getElementById('huntScore');
      this.huntPlayground = document.getElementById('huntPlayground');

      // Toast
      this.toastEl = document.getElementById('toast');
      this.toastMsg = document.getElementById('toastMsg');
      this.toastIcon = document.getElementById('toastIcon');
    }

    bindEvents() {
      // Tap on Egg
      this.eggContainer.addEventListener('click', (e) => this.handleEggTap(e));
      this.eggContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleEggTap();
        }
      });

      // Quick Hatch
      this.quickHatchBtn.addEventListener('click', () => this.instantHatch());
      this.hatchAnotherBtn.addEventListener('click', () => this.resetStage());
      this.resetEggBtn.addEventListener('click', () => this.resetStage());

      // Sound Toggle
      const soundBtn = document.getElementById('soundToggleBtn');
      const soundIcon = document.getElementById('soundIcon');
      soundBtn.addEventListener('click', () => {
        const enabled = this.sound.toggle();
        soundIcon.textContent = enabled ? '🔊' : '🔇';
        this.showToast(enabled ? 'Sound Effects Enabled' : 'Sound Muted', '🎵');
      });

      // Category filter buttons
      document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.cat-pill').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-checked', 'false');
          });
          e.currentTarget.classList.add('active');
          e.currentTarget.setAttribute('aria-checked', 'true');
          this.currentCategory = e.currentTarget.dataset.category;
          this.showToast(`Category: ${e.currentTarget.textContent}`, '🎯');
        });
      });

      // Shell selector buttons
      document.querySelectorAll('.shell-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.shell-btn').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.applyShellTheme(e.currentTarget.dataset.shell);
        });
      });

      // Card Action Buttons
      this.copyMessageBtn.addEventListener('click', () => this.copyToClipboard());
      this.speakMessageBtn.addEventListener('click', () => this.speakMessage());
      this.shareEggBtn.addEventListener('click', () => this.shareCurrentEgg());

      // Eggdex Modal Open/Close
      document.getElementById('openEggdexBtn').addEventListener('click', () => this.openEggdex());
      document.getElementById('closeEggdexBtn').addEventListener('click', () => this.closeEggdex());
      document.getElementById('resetCollectionBtn').addEventListener('click', () => this.resetCollection());

      // Eggdex Filter Tabs
      document.querySelectorAll('.modal-filters .filter-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
          document.querySelectorAll('.modal-filters .filter-chip').forEach(c => c.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.renderEggdexGrid(e.currentTarget.dataset.filter);
        });
      });

      // Custom Egg Modal
      document.getElementById('openCustomModalBtn').addEventListener('click', () => {
        this.customModal.classList.remove('hidden');
      });
      document.getElementById('closeCustomBtn').addEventListener('click', () => {
        this.customModal.classList.add('hidden');
      });
      document.getElementById('customEggForm').addEventListener('submit', (e) => this.handleCustomEggSubmit(e));
      document.getElementById('copyShareLinkBtn').addEventListener('click', () => {
        const linkInput = document.getElementById('customShareLink');
        navigator.clipboard.writeText(linkInput.value).then(() => {
          this.showToast('Secret link copied to clipboard!', '🔗');
        });
      });

      // Egg Hunt Mini-Game
      document.getElementById('startHuntBtn').addEventListener('click', () => this.startEggHunt());
      document.getElementById('quitHuntBtn').addEventListener('click', () => this.endEggHunt(false));

      // Close modal on backdrop click
      [this.eggdexModal, this.customModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.classList.add('hidden');
        });
      });

      // Close modal on ESC key
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.eggdexModal.classList.add('hidden');
          this.customModal.classList.add('hidden');
        }
        this.handleKonamiKey(e.key);
      });

      // Logo 5-click easter egg
      document.getElementById('logoSecretTrigger').addEventListener('click', () => {
        this.logoClickCount++;
        clearTimeout(this.logoClickTimer);
        this.logoClickTimer = setTimeout(() => { this.logoClickCount = 0; }, 1200);

        if (this.logoClickCount === 5) {
          this.triggerZeroGravitySecret();
          this.logoClickCount = 0;
        }
      });
    }

    // ========================================================================
    // Cracking & Hatching Logic
    // ========================================================================
    handleEggTap(event) {
      if (this.isHatching || this.crackLevel >= 3) return;

      this.crackLevel++;
      this.sound.playCrack(this.crackLevel);
      this.updateCrackVisuals();

      // Small tap sparkle at click location
      const rect = this.eggContainer.getBoundingClientRect();
      const x = event ? event.clientX : rect.left + rect.width / 2;
      const y = event ? event.clientY : rect.top + rect.height / 2;
      this.particles.explode(x, y, 10, ['#ffffff', '#ffd166']);

      if (this.crackLevel === 3) {
        this.hatchEgg();
      }
    }

    updateCrackVisuals() {
      // Reset wobbles
      this.eggContainer.classList.remove('wobble-1', 'wobble-2', 'wobble-3');
      void this.eggContainer.offsetWidth; // trigger reflow

      if (this.crackLevel === 1) {
        this.eggContainer.classList.add('wobble-1');
        this.crack1.setAttribute('opacity', '1');
        document.getElementById('node1').classList.add('filled');
        this.tapInstruction.innerHTML = '<span class="key-hint">Cracking!</span> Tap again! (2 taps left)';
      } else if (this.crackLevel === 2) {
        this.eggContainer.classList.add('wobble-2');
        this.crack2.setAttribute('opacity', '1');
        document.getElementById('node2').classList.add('filled');
        this.tapInstruction.innerHTML = '<span class="key-hint">Almost there!</span> One final tap!';
      }
    }

    instantHatch() {
      if (this.isHatching) return;
      this.crackLevel = 3;
      this.crack1.setAttribute('opacity', '1');
      this.crack2.setAttribute('opacity', '1');
      this.crack3.setAttribute('opacity', '1');
      document.getElementById('node1').classList.add('filled');
      document.getElementById('node2').classList.add('filled');
      document.getElementById('node3').classList.add('filled');
      this.hatchEgg();
    }

    hatchEgg(customData = null) {
      this.isHatching = true;
      document.getElementById('node3').classList.add('filled');
      this.crack3.setAttribute('opacity', '1');
      this.eggContainer.classList.add('wobble-3');

      // Pick an egg
      const egg = customData || this.pickRandomEgg();
      this.currentHatchedEgg = egg;

      // Confetti burst from egg center
      const rect = this.eggContainer.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;

      setTimeout(() => {
        this.sound.playHatch(egg.rarity);
        this.particles.explode(originX, originY, 80);

        // Hide egg stage & reveal message card
        this.displayHatchedCard(egg);

        // Record in Eggdex
        if (!egg.isCustom) {
          this.markEggdexDiscovered(egg.id);
        }

        this.isHatching = false;
      }, 500);
    }

    pickRandomEgg() {
      // Filter by category if not 'all'
      let pool = EASTER_EGGS;
      if (this.currentCategory !== 'all') {
        pool = EASTER_EGGS.filter(e => e.category === this.currentCategory);
        if (pool.length === 0) pool = EASTER_EGGS;
      }

      // Roll for rarity weighting:
      // Common: 55%, Rare: 25%, Epic: 12%, Legendary: 6%, Mythic: 2%
      const roll = Math.random() * 100;
      let targetRarity = 'Common';
      if (roll > 98) targetRarity = 'Mythic';
      else if (roll > 92) targetRarity = 'Legendary';
      else if (roll > 80) targetRarity = 'Epic';
      else if (roll > 55) targetRarity = 'Rare';

      const rarityPool = pool.filter(e => e.rarity === targetRarity);
      const finalPool = rarityPool.length > 0 ? rarityPool : pool;
      return finalPool[Math.floor(Math.random() * finalPool.length)];
    }

    displayHatchedCard(egg) {
      // Fill card elements
      this.cardRarity.textContent = `${egg.rarity.toUpperCase()}`;
      this.cardRarity.className = `rarity-badge rarity-${egg.rarity.toLowerCase()}`;
      this.cardCategory.textContent = egg.isCustom ? '✨ Custom Surprise' : this.formatCategoryName(egg.category);
      this.cardEggNumber.textContent = egg.isCustom ? '#CUSTOM' : `#${String(egg.id).padStart(2, '0')}`;
      this.messageEmoji.textContent = egg.emoji || '🎁';
      this.easterTitle.textContent = egg.title;
      this.easterText.textContent = `"${egg.message}"`;
      this.easterFlavor.textContent = egg.flavor || '';

      // Card entrance animation
      this.messageCard.classList.remove('hidden');
      this.quickHatchBtn.style.display = 'none';
      this.resetEggBtn.style.display = 'inline-block';

      // Live region announcement for screen readers
      this.announceA11y(`Hatched ${egg.rarity} Easter Egg: ${egg.title}. ${egg.message}`);
    }

    resetStage() {
      this.crackLevel = 0;
      this.currentHatchedEgg = null;
      this.isHatching = false;

      // Hide card
      this.messageCard.classList.add('hidden');
      this.quickHatchBtn.style.display = 'inline-block';
      this.resetEggBtn.style.display = 'none';

      // Reset cracks
      this.crack1.setAttribute('opacity', '0');
      this.crack2.setAttribute('opacity', '0');
      this.crack3.setAttribute('opacity', '0');
      this.eggContainer.classList.remove('wobble-1', 'wobble-2', 'wobble-3');

      // Reset meter
      document.querySelectorAll('.meter-node').forEach(n => n.classList.remove('filled'));
      this.tapInstruction.innerHTML = '<span class="key-hint">Click</span> or press <kbd>Space</kbd> to crack the egg!';

      // Subtle wobble back into view
      this.eggContainer.style.opacity = '1';
    }

    // ========================================================================
    // Shell Themes
    // ========================================================================
    applyShellTheme(themeName) {
      this.currentShell = themeName;
      this.eggContainer.className = `egg-container shell-${themeName}`;

      const gradients = {
        galaxy: 'url(#galaxyGrad)',
        cyberpunk: 'url(#cyberGrad)',
        gold: 'url(#goldGrad)',
        pixel: 'url(#pixelGrad)',
        dragon: 'url(#dragonGrad)',
        pastel: 'url(#pastelGrad)'
      };

      const auras = {
        galaxy: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 75%)',
        cyberpunk: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(236, 72, 153, 0.25) 50%, transparent 75%)',
        gold: 'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(251, 191, 36, 0.2) 50%, transparent 75%)',
        pixel: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(14, 165, 233, 0.2) 50%, transparent 75%)',
        dragon: 'radial-gradient(circle, rgba(239, 68, 68, 0.45) 0%, rgba(245, 158, 11, 0.25) 50%, transparent 75%)',
        pastel: 'radial-gradient(circle, rgba(244, 114, 182, 0.35) 0%, rgba(192, 132, 252, 0.2) 50%, transparent 75%)'
      };

      this.eggShellBase.setAttribute('fill', gradients[themeName] || gradients.galaxy);
      this.eggAura.style.background = auras[themeName] || auras.galaxy;

      // Update decorative overlay
      this.updateShellDecorations(themeName);
      this.sound.playCrack(1);
    }

    updateShellDecorations(theme) {
      if (theme === 'pixel') {
        this.shellDecorations.innerHTML = `
          <rect x="70" y="80" width="16" height="16" fill="#67e8f9" opacity="0.8" />
          <rect x="86" y="80" width="16" height="16" fill="#38bdf8" opacity="0.8" />
          <rect x="102" y="96" width="16" height="16" fill="#bae6fd" opacity="0.9" />
          <rect x="70" y="140" width="20" height="20" fill="#0284c7" opacity="0.7" />
          <rect x="110" y="140" width="20" height="20" fill="#38bdf8" opacity="0.7" />
        `;
      } else if (theme === 'dragon') {
        this.shellDecorations.innerHTML = `
          <path d="M 60,90 Q 80,65 100,90 Q 120,65 140,90" fill="none" stroke="#7f1d1d" stroke-width="4" opacity="0.6"/>
          <path d="M 50,140 Q 75,115 100,140 Q 125,115 150,140" fill="none" stroke="#7f1d1d" stroke-width="4" opacity="0.6"/>
          <circle cx="100" cy="115" r="5" fill="#fef08a" opacity="0.8" />
        `;
      } else if (theme === 'gold') {
        this.shellDecorations.innerHTML = `
          <circle cx="100" cy="130" r="30" fill="none" stroke="#fef08a" stroke-width="3" opacity="0.8" stroke-dasharray="4 4"/>
          <circle cx="100" cy="130" r="10" fill="#fef08a" opacity="0.9" />
          <path d="M 100,70 L 100,190" stroke="#fef08a" stroke-width="2" opacity="0.5" />
          <path d="M 40,130 L 160,130" stroke="#fef08a" stroke-width="2" opacity="0.5" />
        `;
      } else if (theme === 'cyberpunk') {
        this.shellDecorations.innerHTML = `
          <path d="M 40,100 L 90,100 L 120,130 L 160,130" fill="none" stroke="#00f5d4" stroke-width="2.5" opacity="0.9" />
          <circle cx="90" cy="100" r="4" fill="#f72585" />
          <circle cx="120" cy="130" r="4" fill="#00f5d4" />
          <path d="M 60,170 L 100,170 L 130,200" fill="none" stroke="#f72585" stroke-width="2.5" opacity="0.8" />
        `;
      } else if (theme === 'pastel') {
        this.shellDecorations.innerHTML = `
          <circle cx="70" cy="90" r="8" fill="#fbcfe8" opacity="0.9" />
          <circle cx="130" cy="95" r="9" fill="#fef08a" opacity="0.9" />
          <circle cx="100" cy="140" r="12" fill="#bfdbfe" opacity="0.9" />
          <circle cx="65" cy="175" r="7" fill="#bbf7d0" opacity="0.9" />
          <circle cx="135" cy="170" r="8" fill="#fbcfe8" opacity="0.9" />
        `;
      } else {
        // Galaxy default
        this.shellDecorations.innerHTML = `
          <circle cx="60" cy="80" r="2.5" fill="#ffffff" opacity="0.8" />
          <circle cx="130" cy="110" r="3" fill="#ffffff" opacity="0.9" />
          <circle cx="80" cy="170" r="2" fill="#ffd166" opacity="0.7" />
          <circle cx="150" cy="180" r="2.5" fill="#f72585" opacity="0.8" />
          <path d="M90 60 Q 110 80 130 65" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none" stroke-dasharray="3 3"/>
        `;
      }
    }

    // ========================================================================
    // Eggdex Collection Book (Persistence & Rendering)
    // ========================================================================
    loadEggdex() {
      try {
        const stored = localStorage.getItem('eggspedition_collection');
        return stored ? JSON.parse(stored) : [];
      } catch (err) {
        return [];
      }
    }

    saveEggdex() {
      try {
        localStorage.setItem('eggspedition_collection', JSON.stringify(this.eggdex));
      } catch (err) {
        console.warn('LocalStorage unavailable', err);
      }
    }

    markEggdexDiscovered(id) {
      if (!this.eggdex.includes(id)) {
        this.eggdex.push(id);
        this.saveEggdex();
        this.updateEggdexBadge();
        this.showToast(`New Secret Discovered! (${this.eggdex.length}/${EASTER_EGGS.length})`, '📖');
      }
    }

    updateEggdexBadge() {
      const count = this.eggdex.length;
      const total = EASTER_EGGS.length;
      const pct = Math.round((count / total) * 100);

      this.eggdexCounter.textContent = `${count}/${total}`;
      this.eggdexProgressFill.style.width = `${pct}%`;
      this.eggdexStatsText.textContent = `${count} of ${total} Discovered (${pct}%)`;
    }

    openEggdex() {
      this.updateEggdexBadge();
      this.renderEggdexGrid('all');
      this.eggdexModal.classList.remove('hidden');
    }

    closeEggdex() {
      this.eggdexModal.classList.add('hidden');
    }

    renderEggdexGrid(filter = 'all') {
      this.eggdexGrid.innerHTML = '';

      EASTER_EGGS.forEach(egg => {
        const isUnlocked = this.eggdex.includes(egg.id);

        if (filter === 'unlocked' && !isUnlocked) return;
        if (filter === 'locked' && isUnlocked) return;

        const card = document.createElement('div');
        card.className = `eggdex-item ${isUnlocked ? 'unlocked' : 'locked'}`;

        if (isUnlocked) {
          card.innerHTML = `
            <div class="egg-icon">${egg.emoji}</div>
            <div class="item-title">${egg.title}</div>
            <div class="item-rarity">${egg.rarity}</div>
          `;
          card.addEventListener('click', () => {
            this.closeEggdex();
            this.displayHatchedCard(egg);
          });
        } else {
          card.innerHTML = `
            <div class="egg-icon">🔒</div>
            <div class="item-title">#${String(egg.id).padStart(2, '0')} Hidden</div>
            <div class="item-rarity">${egg.rarity}</div>
          `;
        }

        this.eggdexGrid.appendChild(card);
      });
    }

    resetCollection() {
      if (confirm('Are you sure you want to reset your discovered Eggdex collection?')) {
        this.eggdex = [];
        this.saveEggdex();
        this.updateEggdexBadge();
        this.renderEggdexGrid('all');
        this.showToast('Eggdex collection has been reset.', '🧹');
      }
    }

    // ========================================================================
    // Custom Easter Egg Creator
    // ========================================================================
    handleCustomEggSubmit(e) {
      e.preventDefault();
      const title = document.getElementById('customTitleInput').value.trim();
      const message = document.getElementById('customMessageInput').value.trim();
      const flavor = document.getElementById('customFlavorInput').value.trim();
      const theme = document.getElementById('customThemeSelect').value;
      const rarity = document.getElementById('customRaritySelect').value;

      if (!title || !message) return;

      const customPayload = {
        title,
        message,
        flavor,
        theme,
        rarity,
        emoji: '🎁',
        isCustom: true
      };

      const encoded = btoa(encodeURIComponent(JSON.stringify(customPayload)));
      const shareUrl = `${window.location.origin}${window.location.pathname}#egg=${encoded}`;

      const resultArea = document.getElementById('customResultArea');
      const shareLinkInput = document.getElementById('customShareLink');

      shareLinkInput.value = shareUrl;
      resultArea.classList.remove('hidden');
      this.showToast('Custom Easter Egg Ready to Share!', '🎁');
    }

    checkUrlForCustomEgg() {
      if (window.location.hash.startsWith('#egg=')) {
        try {
          const encoded = window.location.hash.replace('#egg=', '');
          const jsonStr = decodeURIComponent(atob(encoded));
          const eggData = JSON.parse(jsonStr);

          if (eggData && eggData.message) {
            this.applyShellTheme(eggData.theme || 'galaxy');
            this.showToast('Received a Mystery Secret Egg from a friend!', '💌');
            // Auto setup custom egg
            setTimeout(() => {
              this.hatchEgg(eggData);
            }, 800);
          }
        } catch (err) {
          console.error('Invalid custom egg data in URL hash', err);
        }
      }
    }

    // ========================================================================
    // Egg Hunt Mini-Game
    // ========================================================================
    startEggHunt() {
      this.huntOverlay.classList.remove('hidden');
      this.huntOverlay.setAttribute('aria-hidden', 'false');
      this.huntScore = 0;
      this.huntTimeLeft = 30;
      this.huntScoreEl.textContent = '0';
      this.huntTimer.textContent = '30';
      this.huntPlayground.innerHTML = '';

      // Spawn 10 hidden eggs in random coordinates
      const emojis = ['🥚', '🥚', '🥚', '🥚', '🥚', '✨', '🐣', '🌸', '💎', '👑'];
      for (let i = 0; i < 10; i++) {
        const egg = document.createElement('div');
        egg.className = 'hunt-target-egg';
        egg.style.fontSize = '2.6rem';
        egg.textContent = emojis[i];
        egg.style.left = `${Math.random() * 85 + 5}%`;
        egg.style.top = `${Math.random() * 75 + 10}%`;
        egg.style.animationDelay = `${Math.random() * 2}s`;

        egg.addEventListener('click', (e) => {
          const rect = egg.getBoundingClientRect();
          this.particles.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
          this.sound.playCrack(2);
          egg.remove();
          this.huntScore++;
          this.huntScoreEl.textContent = this.huntScore;

          if (this.huntScore >= 10) {
            this.endEggHunt(true);
          }
        });

        this.huntPlayground.appendChild(egg);
      }

      // Start countdown
      clearInterval(this.huntTimerId);
      this.huntTimerId = setInterval(() => {
        this.huntTimeLeft--;
        this.huntTimer.textContent = this.huntTimeLeft;
        if (this.huntTimeLeft <= 0) {
          this.endEggHunt(false);
        }
      }, 1000);
    }

    endEggHunt(victory) {
      clearInterval(this.huntTimerId);
      this.huntOverlay.classList.add('hidden');
      this.huntOverlay.setAttribute('aria-hidden', 'true');

      if (victory) {
        this.sound.playSecretChime();
        this.particles.explode(window.innerWidth / 2, window.innerHeight / 2, 120);
        this.showToast('🎉 Master Hunter! You found all 10 Easter Eggs!', '🏆');
        // Unlock Mythic Egg 42
        this.markEggdexDiscovered(42);
      } else {
        this.showToast(`Hunt finished! Found ${this.huntScore}/10 eggs.`, '⏱️');
      }
    }

    // ========================================================================
    // Helper Utilities (Clipboard, Speech, Toast, Konami, DevTools)
    // ========================================================================
    copyToClipboard() {
      if (!this.currentHatchedEgg) return;
      const text = `🥚 Easter Egg Secret: "${this.currentHatchedEgg.message}" — ${this.currentHatchedEgg.title}`;
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('Copied to clipboard!', '📋');
      });
    }

    speakMessage() {
      if (!this.currentHatchedEgg || !('speechSynthesis' in window)) {
        this.showToast('Speech synthesis not supported on this browser', '⚠️');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(this.currentHatchedEgg.message);
      utterance.pitch = 1.1;
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
      this.showToast('Reading secret aloud...', '🔊');
    }

    shareCurrentEgg() {
      if (!this.currentHatchedEgg) return;
      if (navigator.share) {
        navigator.share({
          title: this.currentHatchedEgg.title,
          text: `I just cracked an Easter Egg: "${this.currentHatchedEgg.message}"`,
          url: window.location.href
        }).catch(() => {});
      } else {
        this.copyToClipboard();
      }
    }

    showToast(message, icon = '✨') {
      this.toastMsg.textContent = message;
      this.toastIcon.textContent = icon;
      this.toastEl.classList.remove('hidden');

      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toastEl.classList.add('hidden');
      }, 3000);
    }

    formatCategoryName(cat) {
      const map = {
        dev: '💻 Dev & Hacker',
        gaming: '🎮 Gamer Lore',
        fortune: '🔮 Quirky Fortune',
        absurd: '🛸 Cosmic Absurd',
        classic: '🐇 Easter Bunny'
      };
      return map[cat] || '🎲 Secret Surprise';
    }

    announceA11y(text) {
      const live = document.getElementById('messageCard');
      if (live) {
        live.setAttribute('aria-label', text);
      }
    }

    handleKonamiKey(key) {
      if (key.toLowerCase() === this.konamiCode[this.konamiIndex].toLowerCase()) {
        this.konamiIndex++;
        if (this.konamiIndex === this.konamiCode.length) {
          this.triggerKonamiPartyMode();
          this.konamiIndex = 0;
        }
      } else {
        this.konamiIndex = 0;
      }
    }

    triggerKonamiPartyMode() {
      this.sound.playSecretChime();
      this.showToast('👾 KONAMI CODE UNLOCKED: Disco Egg Party Mode Activated!', '🎉');
      this.particles.explode(window.innerWidth / 2, window.innerHeight / 2, 150);

      // Disco cycle
      const shells = ['galaxy', 'cyberpunk', 'gold', 'pixel', 'dragon', 'pastel'];
      let idx = 0;
      const interval = setInterval(() => {
        this.applyShellTheme(shells[idx % shells.length]);
        idx++;
        if (idx > 12) clearInterval(interval);
      }, 150);
    }

    triggerZeroGravitySecret() {
      this.sound.playSecretChime();
      this.showToast('🚀 Gravity Malfunction! Floating eggs detected!', '🌌');
      const eggSvg = document.getElementById('eggSvg');
      eggSvg.style.transition = 'transform 3s cubic-bezier(0.19, 1, 0.22, 1)';
      eggSvg.style.transform = 'translateY(-60px) rotate(360deg) scale(1.1)';
      setTimeout(() => {
        eggSvg.style.transform = 'translateY(0) rotate(0deg) scale(1)';
      }, 3500);
    }

    // ========================================================================
    // DevTools Console Easter Eggs & Cheats
    // ========================================================================
    setupDevToolsEasterEgg() {
      // Stylized Console Banner for Chrome DevTools
      console.log(
        '%c🥚 Welcome to Eggspedition: The DevTools Hatchery! 🐰',
        'color: #ffd166; background: #240046; font-size: 16px; font-weight: bold; padding: 10px 14px; border-radius: 8px; border: 2px solid #a855f7;'
      );
      console.log(
        '%cLooks like you are an inspector of high taste! Try typing these secret commands in the console:\n' +
        '  👉 window.cheatCode()   - Hatch a secret Mythic egg immediately!\n' +
        '  👉 window.hatchAll()    - Unlock all 50 eggs in your Eggdex\n' +
        '  👉 window.eggFacts()    - Print trivia about real software Easter eggs\n',
        'color: #38bdf8; font-family: monospace; font-size: 12px; line-height: 1.6;'
      );

      // Expose console commands
      window.cheatCode = () => {
        console.log('%c🌟 Mythic Cheat Engaged!', 'color: #f59e0b; font-weight: bold;');
        this.hatchEgg(EASTER_EGGS.find(e => e.id === 42) || EASTER_EGGS[0]);
        return 'Enjoy your Mythic Prismatic Egg!';
      };

      window.hatchAll = () => {
        this.eggdex = EASTER_EGGS.map(e => e.id);
        this.saveEggdex();
        this.updateEggdexBadge();
        console.log('%c📖 Eggdex fully unlocked! 50/50 discovered.', 'color: #10b981; font-weight: bold;');
        this.showToast('Developer cheat: Eggdex 100% unlocked!', '👑');
        return 'Eggdex fully discovered!';
      };

      window.eggFacts = () => {
        const facts = [
          'Fact: The first known video game Easter egg was placed in Atari 2600\'s Adventure (1980) by Warren Robinett to credit his name.',
          'Fact: Excel 97 contained a hidden 3D flight simulator inside cell X97:L97.',
          'Fact: The Konami Code (↑↑↓↓←→←→BA) was created by Kazuhisa Hashimoto while porting Gradius to the NES because the game was too difficult to playtest.',
          'Fact: Typing "do a barrel roll" in Google Search makes the entire page spin 360 degrees.'
        ];
        facts.forEach(f => console.log(`%c💡 ${f}`, 'color: #c084fc; font-style: italic;'));
        return 'Happy Easter Egg hunting!';
      };
    }
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new EasterEggApp());
  } else {
    new EasterEggApp();
  }
})();
