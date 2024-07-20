import { animationStates } from "./AnimationStates";
import {
  AnimationStates,
  Frames,
  PlayerState,
  SpriteAnimations,
} from "./types";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

let playerState: PlayerState = "Idle";
const userSelectedPlayerState = document.getElementById("animations");
userSelectedPlayerState?.addEventListener("change", (event: Event) => {
  const selectElement = event.target as HTMLSelectElement;
  playerState = selectElement.value as PlayerState;
});

const playerImage = new Image();
playerImage.src = "../assets/shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;

let videoGameFrame = 0;
const staggerFrames = 5;

const spriteAnimations: SpriteAnimations = {};
animationStates.forEach((state: AnimationStates, index: number) => {
  let frames: Frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    frames.loc.push({
      x: j * spriteWidth,
      y: index * spriteHeight,
    });
  }
  spriteAnimations[state.name] = frames;
});

function animate() {
  context?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  const position = Math.floor(
    (videoGameFrame / staggerFrames) % spriteAnimations[playerState].loc.length
  );
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  context?.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  videoGameFrame++;
  requestAnimationFrame(animate);
}

animate();
