"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PROJECTS, GROWTHZ } from "@/lib/data";
import Reveal, { SectionHead } from "./Reveal";

const ease = [0.22, 0.61, 0.36, 1] as const;

type Project = (typeof PROJECTS)[number];

function Row({ project, open, onToggle }: { project: Project; open: boolean; onToggle: () => void }) {
  const panelId = `panel-${project.id}`;

  return (
    <div>
      <button
        className="work-row"
        data-open={open}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="mono">{project.index}</span>

        <span>
          <span className="work-title display">{project.name}</span>
          <span className="work-tagline" style={{ display: "block" }}>
            {project.tagline}
          </span>
        </span>

        <span className="mono work-period">{project.role}</span>
        <span className="work-mark">+</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="work-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease },
              opacity: { duration: 0.3, ease },
            }}
          >
            <span />
            <div className="work-panel-inner">
              <p className="prose" style={{ fontSize: "1rem" }}>
                {project.description}
              </p>
              <p
                className="prose"
                style={{ fontSize: "1rem", marginTop: "1rem", color: "var(--ink-3)" }}
              >
                {project.detail}
              </p>

              <div className="tags">
                {project.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link mono"
                  style={{ marginTop: "1.75rem", display: "inline-block", color: "var(--ink)" }}
                >
                  Visit {project.name} ↗
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Work() {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0].id);

  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHead index="01 / Work" title="Selected work" />

        {/* Growthz is the roof over all five rows, stated once so the list
            below doesn't read as unrelated side projects. */}
        <Reveal>
          <div className="work-context">
            <div>
              <a
                href={GROWTHZ.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link display"
                style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}
              >
                {GROWTHZ.name} ↗
              </a>
              <p className="mono" style={{ marginTop: "0.6rem" }}>
                {GROWTHZ.role} · since {GROWTHZ.since}
              </p>
            </div>
            <p className="prose" style={{ fontSize: "1rem" }}>
              {GROWTHZ.blurb}
            </p>
          </div>
        </Reveal>

        <div className="work-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05} y={10}>
              <Row
                project={p}
                open={openId === p.id}
                onToggle={() => setOpenId(openId === p.id ? null : p.id)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
