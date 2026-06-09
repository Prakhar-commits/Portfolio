"use client";

const LINKS = [
  { label: "GitHub", url: "https://github.com/prakhar-commits" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/prakhar-bansal-dev/" },
  { label: "Email", url: "mailto:prakharb56@gmail.com" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--fg)",
        color: "var(--bg)",
        padding: "5rem 2rem 3rem",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="footer-grid">
          <div>
            <h2
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
                color: "#f9f8f6",
              }}
            >
              Let&apos;s build
              <br />
              something real.
            </h2>
            <a
              href="mailto:prakharb56@gmail.com"
              style={{
                fontSize: 16,
                color: "#f9f8f6",
                textDecoration: "none",
                borderBottom: "1px solid rgba(249,248,246,0.3)",
                paddingBottom: 2,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.borderColor = "#f9f8f6")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.borderColor =
                  "rgba(249,248,246,0.3)")
              }
            >
              prakharb56@gmail.com
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: "1.5rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.url.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  style={{
                    color: "rgba(249,248,246,0.5)",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLAnchorElement).style.color = "#f9f8f6")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "rgba(249,248,246,0.5)")
                  }
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            borderTop: "1px solid rgba(249,248,246,0.1)",
            paddingTop: "1.5rem",
          }}
        >
          <span style={{ fontSize: 13, color: "rgba(249,248,246,0.35)" }}>
            © 2026 Prakhar Bansal
          </span>
          <span style={{ fontSize: 13, color: "rgba(249,248,246,0.35)" }}>
            AI Full Stack Developer · 0→1 Engineer
          </span>
        </div>
      </div>
    </footer>
  );
}
