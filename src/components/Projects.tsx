import { PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
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
              Work
            </p>
            <h2
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              Things I&apos;ve built
            </h2>
          </div>
          <span style={{ fontSize: 13, color: "var(--fg3)" }}>Click a card to explore →</span>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
