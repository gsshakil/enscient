"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const words = ["Build.", "Restore.", "Nourish.", "Connect.", "Protect.", "Explore."];

export default function FinalScene() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      className="relative py-48 md:py-64 flex flex-col items-center justify-center"
      style={{ background: "#111714" }}
    >
      {/* Enscient symbol */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1.5 }}
        className="mb-16"
      >
        <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none">
          <circle cx="30" cy="30" r="24" stroke="#F8F7F2" strokeWidth="0.8" />
          <circle cx="30" cy="30" r="14" stroke="#F8F7F2" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="4" fill="#F8F7F2" opacity="0.6" />
          <line x1="30" y1="6" x2="30" y2="54" stroke="#F8F7F2" strokeWidth="0.4" opacity="0.4" />
          <line x1="6" y1="30" x2="54" y2="30" stroke="#F8F7F2" strokeWidth="0.4" opacity="0.4" />
        </svg>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-lg text-center px-6">
        {words.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 + i * 0.25 }}
            className="font-serif text-xl md:text-2xl tracking-wider"
            style={{ color: "rgba(248,247,242,0.45)" }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 2.2 }}
        className="mt-20"
      >
        <span
          className="font-serif text-xs tracking-[0.4em] uppercase"
          style={{ color: "rgba(248,247,242,0.15)" }}
        >
          ENSCIENT
        </span>
      </motion.div>
    </section>
  );
}
