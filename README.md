# 0RA1N

A retro-inspired binary rain typing game with CRT shader effects.

<div align="center">
  
[![0RA1N Gameplay](https://img.youtube.com/vi/9m4KIFAMTbk/maxresdefault.jpg)](https://www.youtube.com/watch?v=9m4KIFAMTbk)

*Click to watch gameplay demo*
</div>

## Play Now

**Web Version:** [Play on GitHub Pages](https://maddestlabs.github.io/0RA1N/)

**Desktop Downloads:**
- [Windows (64-bit)](https://github.com/yourusername/0rain/releases/latest)
- [macOS (Apple Silicon)](https://github.com/yourusername/0rain/releases/latest)
- [macOS (Intel)](https://github.com/yourusername/0rain/releases/latest)
- [Linux (AppImage)](https://github.com/yourusername/0rain/releases/latest)

## How to Play

Binary digits fall from the top of the screen in "strains" - sequences you must type to destroy them.

**Controls:**
- Press `1` or `0` keys to match the highlighted digit in each strain
- **Mobile:** Tap left side of screen for `0`, right side for `1`
- Type the entire sequence from bottom to top to destroy a strain
- Don't let any strain reach the bottom!

**Keyboard Shortcuts:**
- `S` - Start new game (generates random seed)
- `R` - Restart with current seed (game over screen)
- `F11` - Toggle fullscreen
- Tap seed number to manually enter a seed

## Features

- **Seeded Gameplay** - Share specific challenges via URL seeds
- **CRT Shader Effects** - Authentic retro monitor aesthetic with scanlines, RGB distortion, and dynamic lighting
- **Responsive Design** - Plays on desktop, tablet, and mobile devices
- **Progressive Web App** - Install to home screen on mobile devices
- **Atmospheric Audio** - Rain ambience and sound effects (with seamless looping)
- **Score Tracking** - Earn points for each destroyed strain

## 🎯 Seed System

Each game is generated from a seed number (0-999999). Same seed = same game!

**Share a challenge:**
```
https://yourusername.github.io/0rain?seed=42069
```

## Technical Details

**Built with:**
- Pure JavaScript (no frameworks, no dependencies)
- WebGL CRT shader effect
- Web Audio API for seamless audio looping
- Canvas 2D rendering
- Seeded random number generation
- Progressive Web App (PWA) manifest

## Install as PWA

**Mobile (iOS/Android):**
1. Open the game in your mobile browser
2. Tap the Share button
3. Select "Add to Home Screen"
4. Launch from your home screen like a native app

**Desktop (Chrome/Edge):**
1. Click the install icon in the address bar
2. Click "Install" in the popup
3. Launch from your apps menu or desktop

## 🎨 Customization

CRT shader parameters can be adjusted in the fragment shader section.

## Audio Files

The game requires these audio files in the root directory:
- `01-dreams-of-her.ogg` - Background music
- `fx-rain.ogg` - Rain ambience loop
- `fx-splish.ogg` - Correct keystroke sound
- `fx-explosion.ogg` - Strain destruction sound
- `fx-huh.ogg` - Game over sound

## Development

**Run locally:**
```bash
# Clone the repository
git clone https://github.com/yourusername/0rain.git
cd 0rain

# Serve with any static file server
python -m http.server 8000
# or
npx serve
```

Visit `http://localhost:8000` in your browser.

**Build Tauri desktop apps:**
```bash
# Install Tauri CLI
cargo install tauri-cli

# Development
cargo tauri dev

# Build release
cargo tauri build
```

## Credits

- Font: AnomalyMono
- Music: [Dreams of Her](https://www.tunee.ai/music/-P7utc8J80wg2mX5S) remixed in Tunee.ai.
- Inspired long ago by [cmatrix](https://github.com/abishekvashok/cmatrix).

## Known Issues

- iOS may have audio playback restrictions on first launch (tap to enable)
- Some older mobile devices may experience performance issues with CRT shader
- Fullscreen may require user interaction on some browsers

## Contributing

Contributions welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Made with 💚 by [MaddestLabs](https://maddestlabs.com)