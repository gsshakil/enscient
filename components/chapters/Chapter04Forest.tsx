"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export default function Chapter04Forest() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-20% 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden flex items-end justify-center pb-24"
    >
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src="/images/forest.jpg"
          alt="Ancient forest with tall trees and light filtering through"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(17,23,20,0.55) 0%, rgba(17,23,20,0.35) 50%, rgba(17,23,20,0.85) 100%)",
          }}
        />
      </motion.div>

      <div ref={textRef} className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-2xl md:text-4xl italic leading-relaxed"
          style={{ color: "#F8F7F2" }}
        >
          We do not build to dominate nature.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-2xl md:text-4xl italic leading-relaxed mt-2"
          style={{ color: "#F8F7F2" }}
        >
          We build to become part of it again.
        </motion.p>
      </div>
    </section>
  );
}
