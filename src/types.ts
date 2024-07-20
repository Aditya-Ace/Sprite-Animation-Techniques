type Location = {
  x: number;
  y: number;
};

export type Frames = {
  loc: Location[];
};

export type AnimationStates = {
  name: string;
  frames: number;
};

export type SpriteAnimations = {
  [key: string]: Frames;
};

export type PlayerState =
  | "Run"
  | "Idle"
  | "Jump"
  | "Fall"
  | "Confused"
  | "Sit"
  | "Roll"
  | "Bite"
  | "KO"
  | "GetHit";
