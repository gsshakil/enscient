"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Build Intelligently",
    body: "Technology should solve real problems.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1" />
        <path d="M14 20h12M20 14v12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Restore Nature",
    body: "A civilization should leave the Earth healthier.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 34C20 34 8 26 8 16a12 12 0 0 1 24 0c0 10-12 18-12 18z" stroke="currentColor" strokeWidth="1" />
        <path d="M20 20v14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Nourish Humanity",
    body: "Opportunity should belong to everyone.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="14" cy="15" r="5" stroke="currentColor" strokeWidth="1" />
        <circle cx="26" cy="15" r="5" stroke="currentColor" strokeWidth="1" />
        <path d="M8 30c0-5 3-8 6-8h12c3 0 6 3 6 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Connect Everything",
    body: "Communities thrive when systems work together.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1" />
        <circle cx="10" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
        <circle cx="30" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
        <circle cx="10" cy="28" r="3" stroke="currentColor" strokeWidth="1" />
        <circle cx="30" cy="28" r="3" stroke="currentColor" strokeWidth="1" />
        <path d="M13 14l5 5M27 14l-5 5M13 26l5-5M27 26l-5-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Protect the Future",
    body: "Resilience is the highest form of innovation.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 8l10 4v8c0 6-4 11-10 13C14 31 10 26 10 20v-8l10-4z" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Explore Beyond",
    body: "Curiosity built every civilization.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1" />
        <path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
];

function PrincipleBlock({ p, index }: { p: typeof principles[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 py-20 md:py-28 border-b"
      style={{ borderColor: "rgba(23,58,42,0.08)" }}
    >
      <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-3 md:w-48">
        <span
          className="font-serif text-xs tracking-[0.25em] uppercase"
          style={{ color: "#718A4C" }}
        >
          {p.number}
        </span>
        <div style={{ color: "#173A2A", opacity: 0.5 }}>{p.icon}</div>
      </div>
      <div className="text-center md:text-left">
        <h3
          className="font-serif text-4xl md:text-5xl mb-4 leading-tight"
          style={{ color: "#173A2A" }}
        >
          {p.title}
        </h3>
        <p
          className="font-sans text-base md:text-lg font-light leading-relaxed max-w-md"
          style={{ color: "#173A2A", opacity: 0.6 }}
        >
          {p.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function Chapter05Principles() {
  return (
    <section
      id="journey"
      className="px-6 md:px-12 max-w-4xl mx-auto"
      style={{ background: "#F8F7F2" }}
    >
      <div className="pt-24 pb-4 text-center">
        <p
          className="font-sans text-xs tracking-[0.35em] uppercase mb-4"
          style={{ color: "#718A4C" }}
        >
          The Six Principles
        </p>
        <h2
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#173A2A" }}
        >
          How we think about building.
        </h2>
      </div>
      <div>
        {principles.map((p, i) => (
          <PrincipleBlock key={i} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
