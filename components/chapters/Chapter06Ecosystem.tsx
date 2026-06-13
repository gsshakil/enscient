"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EcosystemDiagram from "@/components/svg/EcosystemDiagram";

export default function Chapter06Ecosystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="py-32 md:py-48 px-6"
      style={{ background: "#F8F7F2" }}
    >
      <div className="max-w-2xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-sans text-xs tracking-[0.35em] uppercase mb-4"
          style={{ color: "#718A4C" }}
        >
          The Ecosystem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#173A2A" }}
        >
          Different paths.<br />One purpose.
        </motion.h2>
      </div>

      <EcosystemDiagram animate={inView} />

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.4 }}
        className="text-center font-sans text-xs tracking-widest uppercase mt-8"
        style={{ color: "#173A2A", opacity: 0.35 }}
      >
        Hover to explore
      </motion.p>
    </section>
  );
}
