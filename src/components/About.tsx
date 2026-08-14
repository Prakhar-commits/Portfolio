"use client";

import { EXPERIENCE, EDUCATION, GROWTHZ, GROWTHZ_TIMELINE } from "@/lib/data";
import Reveal, { SectionHead } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHead index="02 / About" title="How I work" />

        <div className="about-grid">
          <Reveal>
            <div className="aside-block">
              <p className="mono" style={{ marginBottom: "0.75rem" }}>
                Education
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.5 }}>
                {EDUCATION.school}
              </p>
              <p className="prose" style={{ fontSize: "0.9375rem", marginTop: "0.5rem" }}>
                {EDUCATION.degree}
              </p>
              <p className="mono" style={{ marginTop: "0.75rem" }}>
                {EDUCATION.period} · {EDUCATION.note}
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="prose">
                I like the problems where the correct answer isn&apos;t obvious
                and being wrong is expensive. Thrive is the clearest example. A
                recommendation that moves someone&apos;s ad spend has to explain
                itself, expire on time, and never silently contradict another
                lever. So it carries an audit trail, a conflict resolver, and a{" "}
                <strong>deliberate path back to deterministic rules</strong>{" "}
                when the model doesn&apos;t have enough data to be trusted.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="prose" style={{ marginTop: "1.5rem" }}>
                The same instinct shows up in the infrastructure. Reading
                Meta&apos;s rate limit headers and applying backpressure instead
                of retrying into a ban. Idempotent daily aggregates so a re-run
                can&apos;t double count. Running the GCP and AWS estate side by
                side, and an in-house NAT that took{" "}
                <strong>30% off the AWS bill</strong> without touching uptime.
                None of it is clever for its own sake. It&apos;s what keeps the
                thing running when nobody&apos;s watching.
              </p>
            </Reveal>

            <div style={{ marginTop: "3.5rem" }}>
              <p className="mono" style={{ marginBottom: "0.5rem" }}>
                Experience
              </p>

              <Reveal y={10}>
                <div className="exp-row">
                  <div>
                    <div className="exp-company">{GROWTHZ.name}</div>
                    <div className="mono" style={{ marginTop: "0.4rem" }}>
                      {GROWTHZ.since} · {GROWTHZ.tenure}
                    </div>
                  </div>
                  <div>
                    <p
                      className="prose"
                      style={{ fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "1.75rem" }}
                    >
                      {GROWTHZ.desc}
                    </p>

                    <div className="timeline">
                      {GROWTHZ_TIMELINE.map((stage) => (
                        <div className="timeline-item" key={stage.role}>
                          <span
                            className="timeline-dot"
                            style={{
                              background: stage.current ? "var(--signal)" : "var(--rule-strong)",
                            }}
                          />
                          <div
                            style={{
                              fontSize: "0.9375rem",
                              fontWeight: 500,
                              color: stage.current ? "var(--signal)" : "var(--ink)",
                            }}
                          >
                            {stage.role}
                          </div>
                          <div className="mono" style={{ marginTop: "0.3rem" }}>
                            {stage.type} · {stage.period}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {EXPERIENCE.map((exp, i) => (
                <Reveal key={exp.company} delay={i * 0.05} y={10}>
                  <div className="exp-row">
                    <div>
                      <div className="exp-company">{exp.company}</div>
                      <div className="mono" style={{ marginTop: "0.4rem" }}>
                        {exp.period}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.9375rem",
                          fontWeight: 500,
                          marginBottom: "0.4rem",
                          color: exp.current ? "var(--signal)" : "var(--ink)",
                        }}
                      >
                        {exp.role}
                      </div>
                      <p
                        className="prose"
                        style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                      >
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
