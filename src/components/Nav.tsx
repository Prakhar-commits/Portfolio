"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Nav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background:
            scrolled || menuOpen ? "rgba(249,248,246,0.96)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid var(--border)"
              : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={closeMenu}
            style={{
              fontFamily: "var(--font-head)",
              fontWeight: 600,
              fontSize: 18,
              color: "var(--fg)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            PB<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 400,
                  color:
                    active === link.toLowerCase() ? "var(--fg)" : "var(--fg2)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  borderBottom:
                    active === link.toLowerCase()
                      ? "1px solid var(--fg)"
                      : "1px solid transparent",
                  paddingBottom: 1,
                }}
              >
                {link}
              </a>
            ))}
            <a
              href="mailto:prakharb56@gmail.com"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--accent)",
                textDecoration: "none",
                border: "1px solid var(--accent)",
                padding: "5px 14px",
                borderRadius: 6,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = "var(--accent)";
                (e.target as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = "transparent";
                (e.target as HTMLAnchorElement).style.color = "var(--accent)";
              }}
            >
              Say hello
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "var(--fg)",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: "var(--fg)",
                borderRadius: 2,
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: "var(--fg)",
                borderRadius: 2,
                transition: "opacity 0.25s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: "var(--fg)",
                borderRadius: 2,
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={closeMenu}
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "2rem",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: active === link.toLowerCase() ? "var(--accent)" : "var(--fg)",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="mailto:prakharb56@gmail.com"
            onClick={closeMenu}
            style={{
              marginTop: "1rem",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--accent)",
              textDecoration: "none",
              border: "1px solid var(--accent)",
              padding: "10px 28px",
              borderRadius: 8,
            }}
          >
            Say hello
          </a>
        </div>
      )}
    </>
  );
}
