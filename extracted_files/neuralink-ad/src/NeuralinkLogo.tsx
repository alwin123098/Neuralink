import React from "react";

interface NeuralinkLogoProps {
  size?: number;
  glowIntensity?: number;
  spinFrame?: number;
}

export const NeuralinkLogo: React.FC<NeuralinkLogoProps> = ({
  size = 160,
  glowIntensity = 0.8,
  spinFrame,
}) => {
  const rotate = spinFrame !== undefined ? (spinFrame * 0.2) % 360 : 0;
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.35;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        style={{ filter: `drop-shadow(0 0 ${size * 0.2}px rgba(0, 240, 255, ${glowIntensity}))` }}
      >
        <g transform={`rotate(${rotate}, ${cx}, ${cy})`}>
          {/* Outer ring */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="#00F0FF"
            strokeWidth={size * 0.05}
            strokeDasharray={`${size * 0.1} ${size * 0.05}`}
          />
          {/* Inner Chip / Core */}
          <rect
            x={cx - size * 0.15}
            y={cy - size * 0.15}
            width={size * 0.3}
            height={size * 0.3}
            fill="#00F0FF"
            rx={size * 0.02}
          />
          {/* Neural filaments radiating out */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = cx + Math.cos(rad) * (size * 0.15);
            const y1 = cy + Math.sin(rad) * (size * 0.15);
            const x2 = cx + Math.cos(rad) * (size * 0.45);
            const y2 = cy + Math.sin(rad) * (size * 0.45);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#BC13FE"
                strokeWidth={size * 0.02}
                strokeLinecap="round"
                opacity={0.8}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
