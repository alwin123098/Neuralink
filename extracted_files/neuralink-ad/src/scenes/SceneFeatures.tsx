import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const FeatureCard: React.FC<{ title: string; desc: string; index: number; frame: number; fps: number }> = ({ title, desc, index, frame, fps }) => {
  const startFrame = index * 10;
  const opacity = interpolate(frame - startFrame, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const scale = spring({ frame: frame - startFrame, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div
      style={{
        width: 400,
        height: 250,
        background: "rgba(26, 25, 27, 0.8)",
        backdropFilter: "blur(12px)",
        borderRadius: 16,
        padding: 30,
        border: "1px solid rgba(0, 240, 255, 0.2)",
        opacity,
        transform: `scale(${scale})`,
        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ fontSize: 32, fontWeight: 700, color: "#00F0FF", marginBottom: 12, fontFamily: "'Space Grotesk'" }}>{title}</div>
      <div style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{desc}</div>
    </div>
  );
};

export const SceneFeatures: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: "#000000", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        <FeatureCard index={0} frame={frame} fps={fps} title="Telepathy" desc="Control devices with your mind." />
        <FeatureCard index={1} frame={frame} fps={fps} title="Memory" desc="Instant recall of digital knowledge." />
        <FeatureCard index={2} frame={frame} fps={fps} title="Vision" desc="Augment your visual reality." />
        <FeatureCard index={3} frame={frame} fps={fps} title="Healing" desc="Restore motor and neural function." />
      </div>
    </AbsoluteFill>
  );
};
