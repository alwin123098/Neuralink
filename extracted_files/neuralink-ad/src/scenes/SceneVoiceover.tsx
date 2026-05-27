import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

interface VoiceoverProps {
  text: string;
  showFrom?: number;
  hideFrom?: number;
}

export const Voiceover: React.FC<VoiceoverProps> = ({ text, showFrom = 0, hideFrom = 999 }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [showFrom, showFrom + 15, hideFrom - 10, hideFrom],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", pointerEvents: "none" }}>
      <div
        style={{
          opacity,
          marginBottom: 56,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(8px)",
          padding: "16px 48px",
          borderRadius: 50,
          border: "1px solid rgba(204,120,92,0.25)",
          maxWidth: 1100,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontFamily: "'Georgia', serif",
            color: "rgba(255,255,255,0.88)",
            fontStyle: "italic",
            letterSpacing: 0.5,
            lineHeight: 1.5,
          }}
        >
          "{text}"
        </div>
      </div>
    </AbsoluteFill>
  );
};
