"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function StarField() {
  const [stars, setStars] = useState<{ x: number; y: number; r: number; o: number }[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 120 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 1.2 + 0.3,
      o: Math.random() * 0.6 + 0.15,
    }));
    setStars(arr);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.r * 2,
            height: s.r * 2,
            background: "#F8F7F2",
            opacity: s.o,
          }}
          animate={{ opacity: [s.o, s.o * 0.3, s.o] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Chapter09Future() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section
      className="relative py-48 md:py-64 overflow-hidden"
      style={{ background: "#111714" }}
    >
      <StarField />

      <div ref={ref} className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="font-serif text-3xl md:text-5xl leading-relaxed"
          style={{ color: "#F8F7F2" }}
        >
          The future is not somewhere we are going.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
          className="font-serif text-3xl md:text-5xl leading-relaxed mt-4"
          style={{ color: "rgba(248,247,242,0.5)" }}
        >
          It is something we are building.
        </motion.p>
      </div>
    </section>
  );
}
