# 🥚 Eggspedition — Mystery Easter Egg Generator

A delightful, interactive web application that randomly generates and hatches Easter egg messages, gaming cheats, developer insider lore, quirky fortunes, and cosmic secrets with procedural sound synthesis, particle confetti physics, and an interactive collection book.

---

## ✨ Features

- **Interactive Cracking Physics**: Tap or click the egg 3 times to crack it open with tactile wobbles, sound effects, and explosive particle confetti.
- **50+ Easter Egg Messages & Lore**: Curated across 5 unique categories:
  - 💻 **Dev & Hacker Secrets**: Semicolons, HTTP 418 Teapot, sudo sandwich, rubber ducks, git force pushes.
  - 🎮 **Gamer Lore & Cheats**: Konami code, DOOM IDDQD God Mode, Portal's cake, Zelda's Navi, Skyrim guards.
  - 🔮 **Quirky Fortunes**: Avocado ripeness windows, infinite 1% battery anomalies, Wi-Fi auguries.
  - 🛸 **Cosmic & Absurd**: Schrödinger's egg, interstellar broadcasts, hitchhiker's 42, simulation patch notes.
  - 🐇 **Classic Easter & Spring Lore**: Peter Cottontail's dispatches, golden eggs, chocolate secrets.
- **Rarity Tier System**: Common (🟢), Rare (🔵), Epic (🟣), Legendary (🟡), and Mythic (🌈).
- **Procedural Web Audio Engine**: Zero external MP3 files needed! Generates realistic eggshell cracks, synth chords, arpeggios, and 8-bit retro power-up sound effects directly in the browser.
- **The Secret Eggdex (Collection Book)**: Tracks every unlocked egg in `localStorage` with discovery percentages and mystery silhouettes.
- **Custom Easter Egg Creator**: Write your own secret message, pick a theme and rarity, and generate an encoded URL link to surprise friends!
- **Egg Hunt Mini-Game Mode**: 30-second reflex challenge to locate 10 hidden eggs scattered across the screen.
- **Chrome DevTools Easter Eggs & Developer Cheats**:
  - Open Chrome DevTools Console (<kbd>F12</kbd>) to view the custom ASCII banner!
  - Console command `window.cheatCode()` unlocks the Mythic Prismatic Egg.
  - Console command `window.hatchAll()` unlocks all 50 eggs in your Eggdex.
  - Console command `window.eggFacts()` displays historical software Easter egg trivia.
- **Konami Code Support**: Press <kbd>↑</kbd> <kbd>↑</kbd> <kbd>↓</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> <kbd>←</kbd> <kbd>→</kbd> <kbd>B</kbd> <kbd>A</kbd> anywhere on the page for a rainbow disco party mode!
- **Accessibility & Performance**: Keyboard operable (<kbd>Space</kbd>/<kbd>Enter</kbd> to crack), ARIA live regions, zero external dependencies.

---

## 🚀 How to Run

### Option 1: Direct File
Simply double-click or open `index.html` in Chrome or your favorite browser!

### Option 2: Local HTTP Server (Python / Node)
From the project folder:
```bash
# Using Python
python -m http.server 8080

# Or using npx serve
npx serve .
```
Then navigate to: `http://localhost:8080`
