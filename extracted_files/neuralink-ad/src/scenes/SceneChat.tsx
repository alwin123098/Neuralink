import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const SceneChat: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0e0e0f", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: 1000, height: 600, background: "#1a191b", borderRadius: 20, padding: 40, border: "2px solid #262627", overflow: "hidden", position: "relative" }}>
        <div style={{ color: "#00F0FF", fontSize: 24, marginBottom: 30, opacity: 0.5 }}>Neural Interface Connected...</div>

        <div style={{ color: "white", fontSize: 36, marginBottom: 20, opacity: interpolate(frame, [20, 30], [0, 1]) }}>
          [ Thought Identified: ]
        </div>
        <div style={{ color: "#BC13FE", fontSize: 48, fontWeight: 700, opacity: interpolate(frame, [40, 60], [0, 1]) }}>
          "Search for the history of neuroscience"
        </div>

        <div style={{ marginTop: 40, color: "rgba(255,255,255,0.6)", fontSize: 24, fontStyle: "italic", opacity: interpolate(frame, [80, 100], [0, 1]) }}>
          Executing command via Link...
        </div>

        {/* Animated Synaptic Waves */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 150, overflow: "hidden", display: "flex", alignItems: "flex-end", gap: 10, padding: "0 20px" }}>
           {Array.from({ length: 40 }).map((_, i) => {
             const height = interpolate(Math.sin(frame * 0.2 + i), [-1, 1], [20, 120]);
             return (
               <div key={i} style={{ flex: 1, background: "linear-gradient(to top, #00F0FF, transparent)", height, borderRadius: "5px 5px 0 0", opacity: 0.4 }} />
             );
           })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
