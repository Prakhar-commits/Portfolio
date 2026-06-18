"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 960,
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
      {/* Availability badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          padding: "5px 14px",
          borderRadius: 100,
          marginBottom: "2.5rem",
          width: "fit-content",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#4ade80",
            display: "block",
          }}
        />
      </div>

      <h1
        style={{
          fontFamily: "var(--font-head)",
          fontWeight: 700,
          fontSize: "clamp(3rem, 7vw, 6rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          color: "var(--fg)",
          marginBottom: "1.5rem",
        }}
      >
        Prakhar
        <br />
        <span style={{ color: "var(--fg3)", fontWeight: 300 }}>Bansal</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
          fontWeight: 400,
          color: "var(--fg2)",
          maxWidth: 560,
          lineHeight: 1.5,
          marginBottom: "3rem",
          letterSpacing: "-0.01em",
        }}
      >
        I&apos;m your{" "}
        <strong style={{ color: "var(--fg)", fontWeight: 600 }}>0→1 engineer</strong> —
        AI full-stack developer who takes ideas from raw concept to shipped product. 2
        years building, 2 years learning what shipping really means.
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#projects"
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
            padding: "12px 28px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
            transition: "opacity 0.2s",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.opacity = "1")}
        >
          View projects
        </a>

        <a
          href="/Prakhar_Bansal_Resume.docx"
          download
          style={{
            color: "var(--fg2)",
            padding: "12px 28px",
            fontSize: 14,
            textDecoration: "none",
            border: "1px solid var(--border)",
            borderRadius: 8,
            transition: "border-color 0.2s, color 0.2s",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLAnchorElement).style.borderColor = "var(--fg3)";
            (e.target as HTMLAnchorElement).style.color = "var(--fg)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLAnchorElement).style.borderColor = "var(--border)";
            (e.target as HTMLAnchorElement).style.color = "var(--fg2)";
          }}
        >
          Download resume ↓
        </a>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          className="scroll-line"
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, transparent, var(--fg3))",
          }}
        />
        <span
          style={{
            fontSize: 11,
            color: "var(--fg3)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
