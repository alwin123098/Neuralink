import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { Particles } from "../Particles";
import { NeuralinkLogo } from "../NeuralinkLogo";

export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const circleScale = spring({ frame: frame - 10, fps, config: { damping: 80, stiffness: 120 } });
  const circleOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [40, 70], [60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const textOpacity = interpolate(frame, [40, 65], [0, 1], { extrapolateRight: "clamp" });
  const tagY = interpolate(frame, [60, 85], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tagOpacity = interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" });
  const lineWidth = interpolate(frame, [75, 105], [0, 440], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 50%, #0a0a0b 0%, #000000 100%)",
        opacity: bgOpacity,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Particles />

      {/* Neural Glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)",
          transform: `scale(${circleScale})`,
        }}
      />

      <div style={{ transform: `scale(${circleScale})`, opacity: circleOpacity, marginBottom: 44 }}>
        <NeuralinkLogo size={200} spinFrame={frame} />
      </div>

      <div style={{ transform: `translateY(${textY}px)`, opacity: textOpacity, textAlign: "center" }}>
        <div
          style={{
            fontSize: 120,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: 20,
            textTransform: "uppercase",
            textShadow: "0 0 50px rgba(0, 240, 255, 0.6)",
          }}
        >
          NEURALINK
        </div>
      </div>

      <div
        style={{
          width: lineWidth,
          height: 2,
          background: "linear-gradient(90deg, transparent, #00F0FF, #BC13FE, #00F0FF, transparent)",
          borderRadius: 2,
          marginTop: 10,
          marginBottom: 22,
          boxShadow: "0 0 20px rgba(0, 240, 255, 0.8)",
        }}
      />

      <div style={{ transform: `translateY(${tagY}px)`, opacity: tagOpacity, textAlign: "center" }}>
        <div
          style={{
            fontSize: 24,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            color: "rgba(0, 240, 255, 0.7)",
            letterSpacing: 12,
            textTransform: "uppercase",
          }}
        >
          Connecting Brain & Machine
        </div>
      </div>
    </AbsoluteFill>
  );
};
