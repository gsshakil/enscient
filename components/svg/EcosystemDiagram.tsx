"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: "DeepSuite", label: "DeepSuite", angle: 0 },
  { id: "DeepIdentity", label: "DeepIdentity", angle: 40 },
  { id: "DeepAEC", label: "DeepAEC", angle: 80 },
  { id: "DeepMobility", label: "DeepMobility", angle: 120 },
  { id: "DeepAgri", label: "DeepAgri", angle: 160 },
  { id: "DeepMachines", label: "DeepMachines", angle: 200 },
  { id: "DeepEnergy", label: "DeepEnergy", angle: 240 },
  { id: "DeepHealth", label: "DeepHealth", angle: 280 },
  { id: "DeepOcean", label: "DeepOcean", angle: 320 },
];

const subtitles: Record<string, string> = {
  DeepSuite: "The operating system for commerce",
  DeepIdentity: "The operating system for trust",
  DeepAEC: "The operating system for intelligent environments",
  DeepMobility: "The operating system for movement",
  DeepAgri: "The operating system for restoration",
  DeepMachines: "The operating system for intelligent robotics",
  DeepEnergy: "The operating system for sustainable power",
  DeepHealth: "The operating system for human wellbeing",
  DeepOcean: "The operating system for the blue planet",
};

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function EcosystemDiagram({ animate }: { animate: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const cx = 250;
  const cy = 250;
  const r = 165;
  const nodeR = 36;

  return (
    <div className="relative">
      <svg
        viewBox="0 0 500 500"
        className="w-full max-w-lg mx-auto"
        aria-label="Enscient Ecosystem Diagram"
      >
        {/* Connection lines */}
        {nodes.map((node, i) => {
          const pos = polarToCartesian(cx, cy, r, node.angle);
          return (
            <motion.line
              key={node.id + "-line"}
              x1={cx}
              y1={cy}
              x2={pos.x}
              y2={pos.y}
              stroke="#173A2A"
              strokeWidth="0.5"
              opacity="0.18"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={animate ? { pathLength: 1, opacity: 0.18 } : {}}
              transition={{ duration: 1, delay: 0.3 + i * 0.08 }}
            />
          );
        })}

        {/* Center node */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={46}
          fill="#173A2A"
          initial={{ scale: 0, opacity: 0 }}
          animate={animate ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        <motion.text
          x={cx}
          y={cy + 5}
          textAnchor="middle"
          fill="#F8F7F2"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 12, letterSpacing: "0.12em" }}
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          ENSCIENT
        </motion.text>

        {/* Outer nodes */}
        {nodes.map((node, i) => {
          const pos = polarToCartesian(cx, cy, r, node.angle);
          const isHovered = hovered === node.id;
          const labelPos = polarToCartesian(cx, cy, r + nodeR + 18, node.angle);

          return (
            <g
              key={node.id}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={nodeR}
                fill={isHovered ? "#173A2A" : "#F8F7F2"}
                stroke="#173A2A"
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                animate={animate ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                style={{ transformOrigin: `${pos.x}px ${pos.y}px`, transition: "fill 0.3s ease" }}
              />
              <motion.text
                x={pos.x}
                y={pos.y + 4}
                textAnchor="middle"
                fill={isHovered ? "#F8F7F2" : "#173A2A"}
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 7,
                  letterSpacing: "0.06em",
                  transition: "fill 0.3s ease",
                  pointerEvents: "none",
                }}
                initial={{ opacity: 0 }}
                animate={animate ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                {node.label}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* Hover subtitle */}
      <div className="h-12 flex items-center justify-center mt-2">
        {hovered && (
          <motion.p
            key={hovered}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="font-sans text-sm text-center"
            style={{ color: "#718A4C" }}
          >
            {subtitles[hovered]}
          </motion.p>
        )}
      </div>
    </div>
  );
}
