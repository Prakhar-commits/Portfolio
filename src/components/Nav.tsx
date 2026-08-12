"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { NAV_LINKS, PROFILE } from "@/lib/data";

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function Nav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="nav" data-scrolled={scrolled || open}>
        <div className="nav-inner">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="display"
            style={{ fontSize: "1.35rem", textDecoration: "none", letterSpacing: "-0.02em" }}
          >
            Prakhar Bansal
          </a>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link mono"
                data-active={active === link.toLowerCase()}
              >
                {link}
              </a>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="nav-link mono link"
              style={{ color: "var(--ink)" }}
            >
              Get in touch
            </a>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
          </button>
        </div>

        {/* Reading-progress hairline */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "left",
            height: 1,
            background: "var(--signal)",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 300ms",
          }}
        />
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            {[...NAV_LINKS, "Contact"].map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease }}
                style={{
                  color: active === link.toLowerCase() ? "var(--signal)" : "var(--ink)",
                }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
