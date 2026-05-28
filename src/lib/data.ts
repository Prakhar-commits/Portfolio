export const NAV_LINKS = ["About", "Projects", "Skills"] as const;

export const PROJECTS = [
  {
    id: 1,
    name: "Rightcontent.ai",
    tagline: "Drop a URL. Get citations, articles & multi-channel content.",
    description:
      "An AI-powered content engine that takes your website URL and auto-generates SEO-optimized, AI-citation-backed articles, plus platform-native content for LinkedIn, Reddit, Twitter, Amazon A+ pages, and blogs. Built for marketers who want to move fast without sacrificing quality.",
    stack: ["Next.js", "Tailwind CSS", "PostgreSQL", "GCP"],
    role: "Product Lead @ Growthz",
    color: "#eef3fb",
    accent: "oklch(48% 0.14 248)",
    url: "https://rightcontent.ai/",
  },
  {
    id: 2,
    name: "Growthz",
    tagline: "End-to-end AI marketing platform.",
    description:
      "A full-stack marketing platform that handles the entire marketing lifecycle — from audience research and campaign planning to content generation and performance analytics. Designed for growth teams who want AI as a co-pilot, not a gimmick.",
    stack: ["Python", "ML", "AWS", "PostgreSQL", "Mixpanel"],
    role: "Full Stack Developer",
    color: "#f0f9f0",
    accent: "oklch(48% 0.14 148)",
    url: "https://www.growthz.ai/",
  },
];

export const SKILLS: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  Frontend: ["Next.js", "React", "React Native", "Tailwind CSS", "Material UI"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
  "AI / ML": ["GenAI Pipelines", "RAG", "Prompt Engineering", "LLM Integration"],
  Tools: ["AWS", "Azure", "Docker", "Git", "GitHub Actions", "TurboRepo"],
};

export const EXPERIENCE = [
  {
    company: "Growthz",
    role: "AI Full Stack Developer",
    period: "Now",
    desc: "Building an end-to-end AI marketing platform — full ownership across the stack, from ML pipelines to product. Led the design and shipment of Rightcontent.ai, an AI content engine.",
    current: true,
  },
  {
    company: "Mindcase",
    role: "AI Full Stack Developer Intern",
    period: "Aug 2024 – Nov 2024",
    desc: "Migrated Supabase backend to Microsoft Azure with Prisma. Built a GenAI document generation application end-to-end.",
    current: false,
  },
  {
    company: "Avanti Fellows",
    role: "Software Developer Intern",
    period: "Oct 2023 – Mar 2024",
    desc: "Built a quiz creator and college predictor with Next.js & Tailwind. Created secure API endpoints and CRUD flows with pagination.",
    current: false,
  },
  {
    company: "Code4GovTech",
    role: "Open Source Developer Intern",
    period: "Jul 2023 – Aug 2023",
    desc: "Replaced a Google Sheets dependency with a full stakeholder UI in Next.js, improving operational efficiency for government-funded projects.",
    current: false,
  },
  {
    company: "Google Summer of Code",
    role: "Contributor · JdeRobot",
    period: "May 2023 – Aug 2023",
    desc: "Built a cross-platform desktop app in Electron.js, deployed backend in Docker, and expanded access across Windows and Linux.",
    current: false,
  },
];

export const BLOG_POSTS = [] as const;

