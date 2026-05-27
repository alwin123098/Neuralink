// Easing helpers
export const easeInOut = (t: number): number =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

export const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);

export const easeIn = (t: number): number => t * t * t;

// Clamp utility
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);
