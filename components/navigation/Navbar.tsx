"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Journey", href: "#journey" },
  { label: "Join", href: "#join" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [transparent, setTransparent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setTransparent(y < 80);
      if (y > lastY.current && y > 120) {
        setVisible(false);
        setMenuOpen(false);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-0 left-0 right-0 z-50"
          style={{
            background: transparent
              ? "transparent"
              : "rgba(248,247,242,0.92)",
            backdropFilter: transparent ? "none" : "blur(16px)",
            borderBottom: transparent
              ? "none"
              : "1px solid rgba(23,58,42,0.08)",
            transition: "background 0.4s ease, backdrop-filter 0.4s ease",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase"
              style={{ color: transparent ? "#F8F7F2" : "#173A2A" }}
            >
              ENSCIENT
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-sm tracking-widest uppercase transition-opacity duration-200 hover:opacity-60"
                  style={{ color: transparent ? "#F8F7F2" : "#173A2A" }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#join")}
                className="text-sm tracking-widest uppercase px-5 py-2 rounded-full border transition-all duration-300"
                style={{
                  color: transparent ? "#F8F7F2" : "#173A2A",
                  borderColor: transparent
                    ? "rgba(248,247,242,0.4)"
                    : "rgba(23,58,42,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#173A2A";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#F8F7F2";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#173A2A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    transparent ? "#F8F7F2" : "#173A2A";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    transparent
                      ? "rgba(248,247,242,0.4)"
                      : "rgba(23,58,42,0.3)";
                }}
              >
                Connect
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-6 h-px transition-all duration-300"
                  style={{
                    background: transparent ? "#F8F7F2" : "#173A2A",
                    transform:
                      menuOpen && i === 0
                        ? "translateY(8px) rotate(45deg)"
                        : menuOpen && i === 1
                        ? "scaleX(0)"
                        : menuOpen && i === 2
                        ? "translateY(-8px) rotate(-45deg)"
                        : "none",
                  }}
                />
              ))}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "rgba(248,247,242,0.97)",
                  backdropFilter: "blur(20px)",
                  borderColor: "rgba(23,58,42,0.1)",
                }}
                className="md:hidden border-t"
              >
                <div className="px-6 py-6 flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleNav(link.href)}
                      className="text-left text-sm tracking-widest uppercase"
                      style={{ color: "#173A2A" }}
                    >
                      {link.label}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNav("#join")}
                    className="text-sm tracking-widest uppercase px-5 py-3 rounded-full border text-center mt-2"
                    style={{ color: "#173A2A", borderColor: "rgba(23,58,42,0.3)" }}
                  >
                    Connect
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
