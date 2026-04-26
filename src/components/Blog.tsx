"use client";

import { BLOG_POSTS } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="section-pad">
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
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
              Writing
            </p>
            <h2
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              Thinking out loud
            </h2>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {BLOG_POSTS.map((post, i) => (
            <BlogRow key={i} post={post} />
          ))}
        </div>

        <p style={{ marginTop: "2rem", fontSize: 13, color: "var(--fg3)" }}>
          Writing in progress — come back soon.
        </p>
      </div>
    </section>
  );
}

function BlogRow({ post }: { post: (typeof BLOG_POSTS)[number] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gap: "2rem",
        padding: "1.75rem 0",
        borderBottom: "1px solid var(--border)",
        cursor: "pointer",
        transition: "all 0.15s",
      }}
      onMouseEnter={(e) => {
        const title = e.currentTarget.querySelector<HTMLParagraphElement>(".post-title");
        if (title) title.style.color = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        const title = e.currentTarget.querySelector<HTMLParagraphElement>(".post-title");
        if (title) title.style.color = "var(--fg)";
      }}
    >
      <div>
        <span
          style={{
            fontSize: 11,
            color: "var(--accent)",
            fontWeight: 500,
            display: "block",
            marginBottom: 6,
          }}
        >
          {post.tag}
        </span>
        <p
          className="post-title"
          style={{
            fontFamily: "var(--font-head)",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            transition: "color 0.2s",
            lineHeight: 1.4,
          }}
        >
          {post.title}
        </p>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <span style={{ fontSize: 12, color: "var(--fg3)" }}>{post.date}</span>
      </div>
    </div>
  );
}
