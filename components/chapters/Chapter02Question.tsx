"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const questions = [
  "What if intelligence could heal?",
  "What if cities could grow like forests?",
  "What if machines restored ecosystems?",
  "What if technology gave more than it consumed?",
];

function QuestionLine({ text, index }: { text: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      className="flex items-center justify-center min-h-[40vh] px-6"
    >
      <h2
        className="font-serif text-3xl md:text-5xl lg:text-6xl text-center max-w-3xl leading-snug italic"
        style={{ color: "#173A2A" }}
      >
        {text}
      </h2>
    </motion.div>
  );
}

export default function Chapter02Question() {
  return (
    <section id="mission" className="py-24 md:py-32" style={{ background: "#F8F7F2" }}>
      <div className="max-w-5xl mx-auto">
        {questions.map((q, i) => (
          <QuestionLine key={i} text={q} index={i} />
        ))}
      </div>
    </section>
  );
}
