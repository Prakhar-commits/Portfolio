"use client";

import { SKILLS, ACHIEVEMENTS } from "@/lib/data";
import Reveal, { SectionHead } from "./Reveal";

export default function Skills() {
  return (
    <section id="stack" className="section">
      <div className="shell">
        <SectionHead index="03 / Stack" title="What I reach for" />

        <div>
          {SKILLS.map((row, i) => (
            <Reveal key={row.group} delay={i * 0.06} y={10}>
              <div className="stack-row">
                <span className="mono">{row.group}</span>
                <div className="stack-items">
                  {row.items.map((item) => (
                    <span key={item} className="stack-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.2} y={10}>
            <div className="stack-row">
              <span className="mono">Recognition</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.label}>
                    <span style={{ fontSize: "0.9375rem" }}>{a.label}</span>{" "}
                    <span className="mono">{a.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
