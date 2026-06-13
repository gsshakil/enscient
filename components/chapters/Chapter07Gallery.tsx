"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const panels = [
  { src: "/images/gallery/commerce.jpg", label: "Commerce", subtitle: "The operating system for commerce." },
  { src: "/images/gallery/identity.jpg", label: "Identity", subtitle: "The operating system for trust." },
  { src: "/images/gallery/infrastructure.jpg", label: "Infrastructure", subtitle: "The operating system for intelligent environments." },
  { src: "/images/gallery/mobility.jpg", label: "Mobility", subtitle: "The operating system for movement." },
  { src: "/images/gallery/agriculture.jpg", label: "Agriculture", subtitle: "The operating system for restoration." },
  { src: "/images/gallery/machines.jpg", label: "Machines", subtitle: "The operating system for intelligent robotics." },
  { src: "/images/gallery/energy.jpg", label: "Energy", subtitle: "The operating system for sustainable power." },
  { src: "/images/gallery/health.jpg", label: "Health", subtitle: "The operating system for human wellbeing." },
  { src: "/images/gallery/ocean.jpg", label: "Ocean", subtitle: "The operating system for the blue planet." },
  { src: "/images/gallery/research.jpg", label: "Research", subtitle: "The operating system for tomorrow." },
];

// Placeholder gradient colors for each panel when images aren't present
const gradients = [
  "linear-gradient(135deg, #173A2A 0%, #2d5a3d 100%)",
  "linear-gradient(135deg, #1a3a2a 0%, #3a5f3a 100%)",
  "linear-gradient(135deg, #111714 0%, #2a3a2a 100%)",
  "linear-gradient(135deg, #2a3a1a 0%, #4a6030 100%)",
  "linear-gradient(135deg, #1e3a18 0%, #3a5a28 100%)",
  "linear-gradient(135deg, #1a2a1a 0%, #3a4a2a 100%)",
  "linear-gradient(135deg, #1a3020 0%, #2a5030 100%)",
  "linear-gradient(135deg, #203020 0%, #384a38 100%)",
  "linear-gradient(135deg, #102030 0%, #204050 100%)",
  "linear-gradient(135deg, #201020 0%, #402040 100%)",
];

function GalleryPanel({
  panel,
  index,
  gradient,
}: {
  panel: (typeof panels)[0];
  index: number;
  gradient: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className="relative w-full overflow-hidden"
      style={{ height: "85vh", minHeight: 480 }}
    >
      {/* Background — try image, fall back to gradient */}
      <div
        className="absolute inset-0"
        style={{ background: gradient }}
      >
        <Image
          src={panel.src}
          alt={panel.label}
          fill
          className="object-cover object-center"
          sizes="100vw"
          onError={() => {}}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(17,23,20,0.92) 0%, rgba(17,23,20,0.45) 60%, rgba(17,23,20,0.25) 100%)",
        }}
      />

      <div className="absolute inset-0 flex items-end p-8 md:p-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(201,216,164,0.7)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3
            className="font-serif text-4xl md:text-6xl mb-3"
            style={{ color: "#F8F7F2" }}
          >
            {panel.label}
          </h3>
          <p
            className="font-sans text-sm md:text-base font-light"
            style={{ color: "rgba(248,247,242,0.6)" }}
          >
            {panel.subtitle}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Chapter07Gallery() {
  return (
    <section className="w-full">
      <div className="py-24 text-center px-6" style={{ background: "#F8F7F2" }}>
        <p
          className="font-sans text-xs tracking-[0.35em] uppercase mb-4"
          style={{ color: "#718A4C" }}
        >
          The World We Imagine
        </p>
        <h2
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#173A2A" }}
        >
          Every domain. One vision.
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {panels.map((panel, i) => (
          <GalleryPanel key={i} panel={panel} index={i} gradient={gradients[i]} />
        ))}
      </div>
    </section>
  );
}
