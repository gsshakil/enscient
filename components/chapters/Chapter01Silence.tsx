"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const lines = [
  "We inherited a beautiful world.",
  "But somewhere along the way...",
  "...we forgot how to care for it.",
];

export default function Chapter01Silence() {
  const [phase, setPhase] = useState(0);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase(1), 800));
    timers.push(setTimeout(() => setPhase(2), 2400));
    timers.push(setTimeout(() => setPhase(3), 4000));
    timers.push(setTimeout(() => setShowHero(true), 5400));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="silence"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mountain.png"
          alt="A person sitting on a mountain looking toward a valley"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(17,23,20,0.45) 0%, rgba(17,23,20,0.30) 40%, rgba(17,23,20,0.55) 100%)",
          }}
        />
      </div>

      {/* Intro text lines */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="mb-16 min-h-[4rem] flex flex-col items-center gap-3">
          {lines.map((line, i) => (
            <AnimatePresence key={i}>
              {phase > i && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="font-serif text-lg md:text-2xl text-white/80 italic"
                >
                  {line}
                </motion.p>
              )}
            </AnimatePresence>
          ))}
        </div>

        <AnimatePresence>
          {showHero && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <p
                className="font-serif text-[11px] tracking-[0.4em] uppercase text-white/50"
              >
                Building a better future. Restoring the Earth.
              </p>
              <h1
                className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-[0.08em] uppercase"
                style={{ color: "#F8F7F2" }}
              >
                ENSCIENT
              </h1>
              <p
                className="font-sans text-base md:text-lg text-white/70 max-w-xl leading-relaxed font-light mt-2"
              >
                We build advanced intelligence to restore the Earth and empower future civilizations.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex flex-col sm:flex-row gap-4 mt-4"
              >
                <button
                  onClick={() => {
                    document.querySelector("#philosophy")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3.5 rounded-full border border-white/30 text-white/90 text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
                >
                  Our Manifesto
                </button>
                <button
                  onClick={() => {
                    document.querySelector("#mission")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3.5 rounded-full text-sm tracking-widest uppercase transition-all duration-300"
                  style={{ background: "#C9D8A4", color: "#173A2A" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#b8cb8e";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#C9D8A4";
                  }}
                >
                  Begin the Journey
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
