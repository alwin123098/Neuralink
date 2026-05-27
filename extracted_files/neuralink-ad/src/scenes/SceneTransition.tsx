import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const FadeTransition: React.FC<{ direction?: "in" | "out"; durationFrames?: number }> = ({
  direction = "in",
  durationFrames = 20,
}) => {
  const frame = useCurrentFrame();

  const opacity =
    direction === "in"
      ? interpolate(frame, [0, durationFrames], [1, 0], { extrapolateRight: "clamp" })
      : interpolate(frame, [0, durationFrames], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
        opacity,
        pointerEvents: "none",
        zIndex: 100,
      }}
    />
  );
};
