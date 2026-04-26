import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--fg3)",
            marginBottom: 12,
            fontWeight: 500,
          }}
        >
          Stack
        </p>
        <h2
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "3.5rem",
          }}
        >
          What I work with
        </h2>

        <div className="skills-grid">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div
              key={cat}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.75rem",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                {cat}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((item) => (
                  <span key={item} style={{ fontSize: 14, color: "var(--fg)", fontWeight: 400 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
