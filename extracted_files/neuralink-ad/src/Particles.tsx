import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  angle: number;
  delay: number;
}

const COLORS = [
  "#CC785C",
  "#D4956A",
  "#E8B89A",
  "#F0CDB8",
  "#8B6B5B",
  "#A0826D",
];

function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const particles: Particle[] = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: seededRandom(i * 7) * 1920,
  y: seededRandom(i * 13) * 1080,
  size: 2 + seededRandom(i * 3) * 6,
  speed: 0.3 + seededRandom(i * 5) * 0.7,
  opacity: 0.1 + seededRandom(i * 11) * 0.4,
  color: COLORS[Math.floor(seededRandom(i * 17) * COLORS.length)],
  angle: seededRandom(i * 19) * Math.PI * 2,
  delay: Math.floor(seededRandom(i * 23) * 30),
}));

export const Particles: React.FC<{ startFrame?: number }> = ({
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const elapsed = frame - startFrame;

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {particles.map((p) => {
        const localFrame = Math.max(0, elapsed - p.delay);
        const fadeIn = interpolate(localFrame, [0, 30], [0, 1], {
          extrapolateRight: "clamp",
        });
        const x =
          p.x + Math.cos(p.angle) * localFrame * p.speed * 0.5;
        const y = p.y - localFrame * p.speed * 0.3;
        const wrappedY = ((y % 1080) + 1080) % 1080;

        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: x % 1920,
              top: wrappedY,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.color,
              opacity: p.opacity * fadeIn,
            }}
          />
        );
      })}
    </div>
  );
};
