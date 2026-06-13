"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Chapter10Invitation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="join"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #173A2A 0%, #2d5a3d 50%, #111714 100%)" }}
        />
        <Image
          src="/images/farming.jpg"
          alt="People working together in a field, building a future"
          fill
          className="object-cover object-center mix-blend-overlay opacity-40"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(17,23,20,0.6) 0%, rgba(17,23,20,0.75) 100%)",
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 text-center px-6 max-w-3xl mx-auto py-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-sans text-xs tracking-[0.35em] uppercase mb-8"
          style={{ color: "rgba(201,216,164,0.7)" }}
        >
          The Invitation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-12"
          style={{ color: "#F8F7F2" }}
        >
          The future is something we build together.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-base md:text-lg font-light leading-loose mb-14 max-w-xl mx-auto"
          style={{ color: "rgba(248,247,242,0.65)" }}
        >
          <p>You do not have to be an engineer.</p>
          <p>You do not have to be an investor.</p>
          <p>You do not have to agree with every idea.</p>
          <p className="mt-4 text-white/80">
            You only have to believe that a better future is possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            className="px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 font-medium"
            style={{ background: "#C9D8A4", color: "#173A2A" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#b8cb8e";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#C9D8A4";
            }}
          >
            Join the Journey
          </button>
          <button
            className="px-8 py-4 rounded-full border text-sm tracking-widest uppercase transition-all duration-300"
            style={{ borderColor: "rgba(248,247,242,0.3)", color: "#F8F7F2" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(248,247,242,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            Build With Us
          </button>
          <button
            className="px-8 py-4 rounded-full border text-sm tracking-widest uppercase transition-all duration-300"
            style={{ borderColor: "rgba(248,247,242,0.3)", color: "#F8F7F2" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(248,247,242,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            Partner With Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
