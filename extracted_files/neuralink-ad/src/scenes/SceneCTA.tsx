import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { NeuralinkLogo } from "../NeuralinkLogo";

export const SceneCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const btnScale = spring({ frame: frame - 40, fps, config: { damping: 10, stiffness: 100 } });

  return (
    <AbsoluteFill style={{ background: "black", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
       <NeuralinkLogo size={150} />
       <div style={{ fontSize: 90, fontWeight: 700, color: "white", marginTop: 40, letterSpacing: 10 }}>NEURALINK</div>
       <div style={{ fontSize: 30, color: "rgba(255,255,255,0.5)", marginTop: 10 }}>THE FUTURE IS WITHIN</div>

       <div style={{ transform: `scale(${btnScale})`, marginTop: 60 }}>
          <div style={{ background: "linear-gradient(90deg, #00F0FF, #BC13FE)", padding: "24px 60px", borderRadius: 100, color: "white", fontSize: 32, fontWeight: 700, boxShadow: "0 0 30px rgba(0, 240, 255, 0.4)" }}>
             Join the Waitlist
          </div>
       </div>
    </AbsoluteFill>
  );
};
