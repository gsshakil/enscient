"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import TripleCircle from "@/components/svg/TripleCircle";

export default function Chapter03Circles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="py-32 md:py-48 flex flex-col items-center justify-center px-6"
      style={{ background: "#F8F7F2" }}
    >
      <div className="max-w-xs w-full">
        <TripleCircle animate={inView} />
      </div>
      <p
        className="mt-12 font-sans text-xs tracking-[0.3em] uppercase text-center"
        style={{ color: "#718A4C" }}
      >
        The three pillars of everything we build
      </p>
    </section>
  );
}
