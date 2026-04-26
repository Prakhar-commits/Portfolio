"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "blog"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav active={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Footer />
    </>
  );
}
