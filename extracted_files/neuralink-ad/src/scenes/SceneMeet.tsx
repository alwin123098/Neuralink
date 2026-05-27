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

export const SceneMeet: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame: frame - 5, fps, config: { damping: 60, stiffness: 100 } });
  const titleOpacity = interpolate(frame, [20, 45], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [20, 45], [50, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" });
  const glowPulse = interpolate(Math.sin(frame * 0.06), [-1, 1], [0.1, 0.3]);

  return (
    <AbsoluteFill
      style={{
        background: "black",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Particles />

      {/* Pulsing Synaptic Rings */}
      <div style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 300 + i * 120,
              height: 300 + i * 120,
              borderRadius: "50%",
              border: `1px solid rgba(0, 240, 255, ${0.2 / i})`,
              transform: `scale(${1 + Math.sin(frame * 0.04 + i) * 0.05})`,
            }}
          />
        ))}
      </div>

      <div style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(0, 240, 255, ${glowPulse}) 0%, transparent 65%)`,
        opacity: 0.5,
      }} />

      <div style={{ transform: `scale(${logoScale})`, marginBottom: 50 }}>
        <NeuralinkLogo size={180} />
      </div>

      <div style={{ transform: `translateY(${titleY}px)`, opacity: titleOpacity, textAlign: "center" }}>
        <div style={{ fontSize: 80, fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontWeight: 700, letterSpacing: 4 }}>
          The Link
        </div>
      </div>

      <div style={{ opacity: subtitleOpacity, textAlign: "center", marginTop: 20 }}>
        <div style={{ fontSize: 32, fontFamily: "'Space Grotesk', sans-serif", color: "#00F0FF", fontWeight: 300, letterSpacing: 5 }}>
          Digital Telepathy is Here
        </div>
      </div>
    </AbsoluteFill>
  );
};
