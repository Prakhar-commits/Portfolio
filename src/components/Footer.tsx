"use client";

import { motion } from "motion/react";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { label: "Email", value: PROFILE.email, url: `mailto:${PROFILE.email}` },
  { label: "GitHub", value: "prakhar-commits", url: PROFILE.github },
  { label: "LinkedIn", value: "prakhar-bansal-dev", url: PROFILE.linkedin },
  { label: "Résumé", value: "PDF ↓", url: PROFILE.resume },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <motion.h2
              className="display h-lg"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ marginBottom: "1.5rem" }}
            >
              Got something
              <br />
              <em style={{ color: "rgba(250,249,247,0.55)" }}>
                hard to build?
              </em>
            </motion.h2>

            <a
              href={`mailto:${PROFILE.email}`}
              className="link"
              style={{ textDecoration: "none", fontSize: "1.0625rem" }}
            >
              {PROFILE.email}
            </a>
          </div>

          <div>
            <p className="mono" style={{ marginBottom: "1.25rem" }}>
              Elsewhere
            </p>
            <div className="footer-links">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target={l.url.startsWith("http") ? "_blank" : undefined}
                  rel={l.url.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span>{l.label}</span>
                  <span style={{ color: "rgba(250,249,247,0.35)" }}>{l.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-base">
          <span className="mono">© 2026 Prakhar Bansal</span>
          <span className="mono">Instrument Serif · Geist · Geist Mono</span>
        </div>
      </div>
    </footer>
  );
}
