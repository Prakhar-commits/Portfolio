"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Work from "@/components/Work";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const SECTIONS = ["work", "about", "stack", "contact"];

export default function Home() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav active={active} />
      <main>
        <Hero />
        <Metrics />
        <Work />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
