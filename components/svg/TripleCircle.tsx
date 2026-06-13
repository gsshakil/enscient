"use client";

import { motion } from "framer-motion";

interface Props {
  animate: boolean;
}

export default function TripleCircle({ animate }: Props) {
  const size = 340;
  const r = 100;
  const offset = 65;

  const circles = [
    { cx: size / 2, cy: size / 2 - offset },
    { cx: size / 2 - offset * 0.86, cy: size / 2 + offset * 0.5 },
    { cx: size / 2 + offset * 0.86, cy: size / 2 + offset * 0.5 },
  ];

  const labels = [
    { x: size / 2, y: size / 2 - offset - r - 14, anchor: "middle" as const, text: "PEOPLE" },
    { x: size / 2 - offset * 0.86 - r - 14, y: size / 2 + offset * 0.5 + 5, anchor: "end" as const, text: "PLANET" },
    { x: size / 2 + offset * 0.86 + r + 14, y: size / 2 + offset * 0.5 + 5, anchor: "start" as const, text: "PROGRESS" },
  ];

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-sm mx-auto"
      aria-label="People, Planet, Progress diagram"
    >
      {circles.map((c, i) => (
        <motion.circle
          key={i}
          cx={c.cx}
          cy={c.cy}
          r={r}
          fill="none"
          stroke="#173A2A"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={animate ? { opacity: 0.55, scale: 1 } : { opacity: 0, scale: 0.7 }}
          transition={{ duration: 1.2, delay: i * 0.3, ease: "easeOut" }}
          style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
        />
      ))}

      {labels.map((l, i) => (
        <motion.text
          key={i}
          x={l.x}
          y={l.y}
          textAnchor={l.anchor}
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 13, fill: "#173A2A", letterSpacing: "0.08em" }}
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 + i * 0.2 }}
        >
          {l.text}
        </motion.text>
      ))}

      <motion.text
        x={size / 2}
        y={size / 2 + 6}
        textAnchor="middle"
        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 15, fill: "#173A2A", letterSpacing: "0.12em" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
      >
        HARMONY
      </motion.text>
    </svg>
  );
}
