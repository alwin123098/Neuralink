import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { NeuralinkLogo } from "../NeuralinkLogo";

export const SceneNeuralinkHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const mainTextScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const text1Opacity = interpolate(frame, [0, 5], [0, 1]);
  const text2Opacity = interpolate(frame, [15, 20], [0, 1]);
  const text3Opacity = interpolate(frame, [30, 35], [0, 1]);

  const flashOpacity = interpolate(
    Math.sin(frame * 0.5),
    [-1, 1],
    [0, 0.1]
  );

  return (
    <AbsoluteFill
      style={{
        background: "#000000",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#00F0FF",
          opacity: frame < 5 ? 0.3 : flashOpacity,
        }}
      />

      <div style={{ transform: `scale(${mainTextScale})`, textAlign: "center" }}>
        <div
          style={{
            opacity: text1Opacity,
            fontSize: 80,
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          The end of
        </div>

        <div
          style={{
            opacity: text2Opacity,
            fontSize: 160,
            fontWeight: 900,
            color: "#BC13FE",
            textTransform: "uppercase",
            marginTop: 10,
            textShadow: "0 0 40px rgba(188, 19, 254, 0.6)",
          }}
        >
          SPEAKING
        </div>

        <div
          style={{
            opacity: text3Opacity,
            fontSize: 80,
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
            marginTop: 10,
          }}
        >
          is here.
        </div>

        <div
          style={{
            opacity: interpolate(frame, [50, 60], [0, 1]),
            marginTop: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <NeuralinkLogo size={80} />
          <div style={{ fontSize: 40, color: "#00F0FF", fontWeight: 700 }}>NEURALINK</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
