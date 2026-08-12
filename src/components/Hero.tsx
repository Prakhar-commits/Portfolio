"use client";

import { motion } from "motion/react";
import { PROFILE } from "@/lib/data";

const ease = [0.22, 0.61, 0.36, 1] as const;

/** The name arrives one line at a time, masked from below. */
function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        style={{ display: "block", paddingBottom: "0.06em" }}
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* The facts that would otherwise need a subtitle, set as a spec sheet. */
const SPEC = [
  { term: "Now", value: "Senior Software Engineer, Growthz. Since Jan 2025." },
  { term: "Cloud", value: "AWS and GCP. Pulumi, Cloud Run, ECS Fargate." },
  { term: "Focus", value: "Decision engines, AI pipelines, ad platform data." },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero-inner">
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
        >
          <span className="mono">
            <span className="live-dot" />
            {PROFILE.role} at {PROFILE.company}
          </span>
          <span className="mono">GSoC &apos;23 · SIH Winner</span>
        </motion.div>

        <div className="hero-grid">
          <div>
            <h1 className="display h-xl" style={{ marginBottom: "2rem" }}>
              <Line delay={0.1}>Prakhar</Line>
              <Line delay={0.22}>
                <em>Bansal</em>
              </Line>
            </h1>

            <motion.p
              className="prose"
              style={{ maxWidth: "48ch" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              I take products from <strong>nothing to shipped</strong>: user
              research and UI through to the AI pipelines and the cloud they run
              on. A content platform I built alone end to end, a CPA-optimization
              decision engine that has to explain every call it makes, and the
              AWS and GCP estate underneath all of it.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62, ease }}
            >
              <a href="#work" className="btn">
                Selected work
              </a>
              <a href={PROFILE.resume} download className="btn btn-ghost">
                Résumé ↓
              </a>
            </motion.div>
          </div>

          <motion.dl
            className="hero-spec"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
          >
            {SPEC.map((s) => (
              <div key={s.term} className="hero-spec-row">
                <dt className="mono">{s.term}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <motion.div
        className="shell"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: 0,
          right: 0,
          zIndex: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <span className="mono">Scroll ↓</span>
      </motion.div>
    </section>
  );
}
