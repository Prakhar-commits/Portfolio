"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: project.color,
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "2.5rem",
          cursor: "pointer",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 16px 40px rgba(0,0,0,0.07)"
            : "0 2px 8px rgba(0,0,0,0.03)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "var(--fg3)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {project.role}
          </span>
          <span
            style={{
              fontSize: 18,
              color: "var(--fg3)",
              transition: "transform 0.2s",
              transform: hovered ? "translate(2px, -2px)" : "none",
            }}
          >
            ↗
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-head)",
            fontWeight: 700,
            fontSize: "1.75rem",
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: "0.75rem",
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontSize: 15,
            color: "var(--fg2)",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          {project.tagline}
        </p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.stack.map((s) => (
            <span
              key={s}
              style={{
                fontSize: 11,
                fontWeight: 500,
                background: "rgba(255,255,255,0.7)",
                color: "var(--fg2)",
                padding: "4px 10px",
                borderRadius: 100,
                border: "1px solid var(--border)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(26,25,22,0.5)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "3rem",
              maxWidth: 560,
              width: "100%",
              boxShadow: "0 32px 80px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "var(--fg3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {project.role}
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: 16,
                  color: "var(--fg2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 700,
                fontSize: "2rem",
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                color: "var(--fg2)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontSize: 15,
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: "2rem",
              }}
            >
              {project.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    background: "var(--bg2)",
                    color: "var(--fg2)",
                    padding: "5px 12px",
                    borderRadius: 100,
                    border: "1px solid var(--border)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "var(--fg)",
                color: "var(--bg)",
                padding: "10px 24px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Visit site ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
