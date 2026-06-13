"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const impacts = [
  { icon: "🌱", label: "Forest restoration" },
  { icon: "💧", label: "Clean water" },
  { icon: "🏘️", label: "Healthy communities" },
  { icon: "🏙️", label: "Resilient cities" },
  { icon: "☀️", label: "Clean energy" },
  { icon: "🌊", label: "Protected oceans" },
  { icon: "🔬", label: "Scientific discovery" },
];

// Use unicode-free SVG icons instead of emoji
const icons = [
  // Leaf
  <svg key="leaf" viewBox="0 0 32 32" fill="none" className="w-6 h-6"><path d="M26 6C26 6 14 6 8 16c-2 3-2 8 2 10s10 0 12-4c4-8 4-16 4-16z" stroke="currentColor" strokeWidth="1.2"/><path d="M8 24l8-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  // Water drop
  <svg key="water" viewBox="0 0 32 32" fill="none" className="w-6 h-6"><path d="M16 4C16 4 8 14 8 19a8 8 0 0 0 16 0C24 14 16 4 16 4z" stroke="currentColor" strokeWidth="1.2"/></svg>,
  // Community
  <svg key="comm" viewBox="0 0 32 32" fill="none" className="w-6 h-6"><circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="22" cy="11" r="3" stroke="currentColor" strokeWidth="1.2"/><path d="M4 24c0-4 3-6 6-6h12c3 0 6 2 6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  // City
  <svg key="city" viewBox="0 0 32 32" fill="none" className="w-6 h-6"><rect x="4" y="14" width="8" height="14" stroke="currentColor" strokeWidth="1.2"/><rect x="12" y="8" width="8" height="20" stroke="currentColor" strokeWidth="1.2"/><rect x="20" y="12" width="8" height="16" stroke="currentColor" strokeWidth="1.2"/></svg>,
  // Sun
  <svg key="sun" viewBox="0 0 32 32" fill="none" className="w-6 h-6"><circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2 2M22.5 22.5l2 2M7.5 24.5l2-2M22.5 9.5l2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  // Wave
  <svg key="wave" viewBox="0 0 32 32" fill="none" className="w-6 h-6"><path d="M4 18c2-4 4-4 6 0s4 4 6 0 4-4 6 0 4 4 6 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M4 24c2-4 4-4 6 0s4 4 6 0 4-4 6 0 4 4 6 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  // Microscope
  <svg key="micro" viewBox="0 0 32 32" fill="none" className="w-6 h-6"><circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M16 17v10M10 27h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M22 8l2-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
];

function ImpactItem({ label, icon, index }: { label: string; icon: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12 }}
      className="flex flex-col items-center gap-3 py-8"
    >
      <div style={{ color: "#173A2A", opacity: 0.5 }}>{icon}</div>
      <p
        className="font-sans text-xs tracking-[0.2em] uppercase"
        style={{ color: "#173A2A", opacity: 0.6 }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function Chapter08Impact() {
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-15% 0px" });

  return (
    <section className="py-32 md:py-48 px-6" style={{ background: "#F8F7F2" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="font-sans text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "#718A4C" }}
          >
            The Impact
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl"
            style={{ color: "#173A2A" }}
          >
            What we are working toward.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {impacts.map((item, i) => (
            <ImpactItem key={i} label={item.label} icon={icons[i]} index={i} />
          ))}
        </div>

        <motion.blockquote
          ref={quoteRef}
          initial={{ opacity: 0, y: 30 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <p
            className="font-serif text-2xl md:text-3xl italic leading-relaxed"
            style={{ color: "#173A2A" }}
          >
            "Every generation plants trees whose shade they may never sit under."
          </p>
          <div
            className="w-8 h-px mx-auto mt-8"
            style={{ background: "#718A4C" }}
          />
        </motion.blockquote>
      </div>
    </section>
  );
}
