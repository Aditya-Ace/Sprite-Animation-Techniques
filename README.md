# Shadow Dog Animation

This project is a simple JavaScript animation that displays different states of a sprite on an HTML canvas. Users can switch between animation states using a dropdown menu.

## Usage

1. Clone the repository and open `index.html` in your browser.
2. Ensure the project structure includes:
   - `assets/`: Contains `shadow_dog.png`.
   - `js/AnimationStates.js`: Contains animation states data.
   - `js/main.js`: Contains the animation logic.
   - `index.html`: Contains the canvas and dropdown menu.

## Summary

The animation logic in `main.js` draws different frames of a sprite based on the selected state from the dropdown menu. It uses an HTML canvas for rendering the frames and cycles through them to create the animation effect. The sprite's frames are defined in `AnimationStates.js`, and the animation updates are handled in a loop using `requestAnimationFrame`.
