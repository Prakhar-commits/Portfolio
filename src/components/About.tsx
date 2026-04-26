import Image from "next/image";
import { EXPERIENCE } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="about-section-pad"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="about-grid">
        {/* Left */}
        <div>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--fg3)",
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            About
          </p>
          <h2
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "2.2rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            Builder,
            <br />
            not just coder.
          </h2>

          <div
            style={{
              width: "100%",
              maxWidth: 220,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Prakhar Bansal"
              width={220}
              height={280}
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right */}
        <div>
          <p style={{ fontSize: 16, color: "var(--fg2)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            I&apos;m an AI full-stack developer who has spent the past 2 years building
            real products from scratch — and 2 years before that learning what good
            software feels like through internships at Mindcase, Avanti Fellows,
            Code4GovTech, and Google Summer of Code.
          </p>
          <p style={{ fontSize: 16, color: "var(--fg2)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            I care about the whole thing: the architecture, the AI layer, the UX, and
            whether it actually ships. I&apos;ve built content engines, marketing platforms,
            edtech tools, and robotics software. The common thread is taking something
            from zero to something people use.
          </p>

          {/* Experience timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3px 1fr",
                  gap: "1.25rem",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: 3,
                    background: exp.current ? "var(--accent)" : "var(--border)",
                    borderRadius: 2,
                    marginTop: 4,
                    minHeight: 60,
                  }}
                />
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-head)",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--fg)",
                      }}
                    >
                      {exp.company}
                    </span>
                    <span style={{ fontSize: 11, color: "var(--fg3)" }}>{exp.period}</span>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--accent)",
                      fontWeight: 500,
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {exp.role}
                  </span>
                  <p style={{ fontSize: 13, color: "var(--fg2)", lineHeight: 1.6 }}>
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
