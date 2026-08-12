export const NAV_LINKS = ["Work", "About", "Stack"] as const;

export const PROFILE = {
  name: "Prakhar Bansal",
  role: "Senior Software Engineer",
  company: "Growthz",
  email: "prakharb56@gmail.com",
  github: "https://github.com/prakhar-commits",
  linkedin: "https://www.linkedin.com/in/prakhar-bansal-dev/",
  resume: "/resume.pdf",
};

/**
 * Everything in PROJECTS lives under this one roof. Growthz is the company,
 * not a peer of the work inside it, so the section is framed that way and the
 * page never reads as five unrelated side projects.
 */
export const GROWTHZ = {
  name: "growthz.ai",
  url: "https://www.growthz.ai/",
  role: "Senior Software Engineer",
  since: "Jan 2025",
  blurb:
    "Growthz builds marketing automation: URL scraping, AI creative generation, campaign management and analytics across Meta, Reddit, LinkedIn, ASA, Google Ads, DV360 and AppsFlyer. Everything below is work I own or co-own there.",
};

/** Numbers worth stating plainly. Each one is a claim from the resume. */
export const METRICS = [
  { value: "40k", label: "lines shipped solo on Thrive" },
  { value: "7", label: "ad platforms integrated end to end" },
  { value: "~1,000", label: "videos/day through the ad pipeline" },
  { value: "30%", label: "AWS spend removed, at 99% uptime" },
] as const;

export const PROJECTS = [
  {
    id: "rightcontent",
    index: "01",
    name: "rightcontent.ai",
    tagline: "A Growthz product I took full ownership of, end to end.",
    description:
      "The one I own outright. Every layer was mine: user research, product vision, UI/UX, frontend, backend, the AI pipelines, cloud deployment, and the post launch loop, with real users, testimonials and feedback folded straight back into the roadmap.",
    detail:
      "Give it a URL and keywords; it returns platform native content for six channels (Reddit, Instagram, Amazon A+, LinkedIn, Twitter and blogs) with one click publish. Not one draft reformatted six ways: each channel gets copy written to how that channel actually reads.",
    stack: ["Next.js", "Python", "LLMs", "AWS", "UI/UX", "User Research"],
    role: "Sole engineer & designer",
    period: "2025 to now",
    url: "https://rightcontent.ai/",
  },
  {
    id: "thrive",
    index: "02",
    name: "Thrive",
    tagline: "A CPA-optimization decision engine, built solo.",
    description:
      "A ~40k line decision engine in Python and FastAPI, with async SQLAlchemy, a DuckDB/Parquet feature store, and adapter pattern data sources. Seven independently testable rule families feed a cross lever conflict resolver, with time based recommendation expiry and a full audit trail behind every call it makes.",
    detail:
      "On top of the rules sits an ML and LP layer: a per client LightGBM CVR predictor feeding a PuLP linear program that maximizes predicted conversions under net zero and per campaign constraints. When training data is thin it degrades cleanly back to deterministic rules. Gemini writes the analyst voice narrative for each recommendation.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "DuckDB", "LightGBM", "PuLP", "Gemini"],
    role: "Sole engineer",
    period: "2025 to now",
    url: null,
  },
  {
    id: "wildcard",
    index: "03",
    name: "Wildcard",
    tagline: "Seven ad platforms, joined into one funnel.",
    description:
      "Second largest contributor on a nine person, ~39k line repo (139 of 790 commits). Integrated Apple Search Ads, Amazon, Reddit, Snapchat, LinkedIn, Meta breakdowns and Bing end to end, including ASA dual auth across JWT and OAuth.",
    detail:
      "Built Hawkeye, a full funnel service that joins ASA, AppsFlyer and SKAN into idempotent daily aggregates, so a re-run never double counts and the funnel reconciles across three sources that disagree by design.",
    stack: ["Python", "FastAPI", "Postgres", "OAuth", "SKAN"],
    role: "2nd largest contributor",
    period: "2025 to now",
    url: null,
  },
  {
    id: "platform",
    index: "04",
    name: "Platform & Clients",
    tagline: "The GCP and AWS estate everything above runs on, plus the accounts it runs for.",
    description:
      "I own the Growthz cloud estate across both providers. On GCP: Cloud Run, Cloud Tasks and Cloud SQL, with Cloudflare R2 for object storage. On AWS: Pulumi provisioned ECS Fargate, RDS, S3, SQS, Lambda and EC2. I cut AWS spend roughly 30% with an EC2 based in house NAT, overnight staging shutdowns and rightsizing, without giving up 99% uptime.",
    detail:
      "The other half is client side: scoping, onboarding and running accounts directly with the people paying for them. Being the person who both provisions the infrastructure and sits on the client call changes what you choose to build, because you hear the cost of a bad abstraction twice.",
    stack: ["GCP", "Cloud Run", "Cloud Tasks", "AWS", "Pulumi", "Docker", "Client Management"],
    role: "Infra & accounts",
    period: "2025 to now",
    url: null,
  },
  {
    id: "video-pipeline",
    index: "05",
    name: "Video Ad Pipeline",
    tagline: "A thousand videos a day, against Meta's rate limits.",
    description:
      "A serverless video ad automation pipeline for a client running Meta ads at nine figure USD annual spend. Roughly 1,000 videos a day, each 800MB to 1.5GB, across 10 Business Managers and 60 ad accounts.",
    detail:
      "TypeScript, NestJS and React on GCP Cloud Run and Cloudflare R2, with per BM Cloud Tasks queues and header driven Meta quota backpressure. The pipeline reads Meta's own rate limit headers and throttles itself rather than retrying into a ban.",
    stack: ["TypeScript", "NestJS", "React", "GCP Cloud Run", "Cloud Tasks", "R2"],
    role: "Designed & built",
    period: "2025",
    url: null,
  },
] as const;

export const EXPERIENCE = [
  {
    company: "Growthz",
    role: "Senior Software Engineer",
    period: "Jan 2025 to Present",
    desc: "Own Thrive end to end and sit second on Wildcard's commit list. Designed the video ad pipeline, and own the GCP and AWS infrastructure: Cloud Run, Cloud Tasks and Cloud SQL alongside Pulumi provisioned ECS Fargate, RDS and S3. Cut AWS spend roughly 30% at 99% uptime. Also client side, scoping and running accounts directly.",
    current: true,
  },
  {
    company: "Mindcase",
    role: "AI Full Stack Developer Intern",
    period: "Aug 2024 to Nov 2024",
    desc: "Migrated the Supabase backend to Microsoft Azure with Prisma, and contributed to a GenAI document generation feature that put LLM pipelines into the product workflow.",
    current: false,
  },
  {
    company: "Avanti Fellows",
    role: "Software Developer Intern",
    period: "Oct 2023 to Mar 2024",
    desc: "Built a quiz creator and college predictor in Next.js and Tailwind, with secure paginated CRUD endpoints behind them.",
    current: false,
  },
  {
    company: "JdeRobot",
    role: "Google Summer of Code",
    period: "May 2023 to Aug 2023",
    desc: "Built a cross platform Electron.js desktop app and containerised the backend in Docker for Windows and Linux.",
    current: false,
  },
] as const;

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "HTML/CSS"],
  },
  {
    group: "Backend & Frontend",
    items: [
      "FastAPI",
      "NestJS",
      "Node.js",
      "Express",
      "SQLAlchemy",
      "Prisma",
      "Next.js",
      "React",
      "React Native",
      "Tailwind CSS",
      "Redux",
      "GraphQL",
      "Electron.js",
    ],
  },
  {
    group: "Data & AI/ML",
    items: [
      "Postgres",
      "DuckDB",
      "Parquet",
      "pandas",
      "LLMs",
      "Prompt Engineering",
      "GenAI Pipelines",
      "LightGBM",
      "PuLP / OR-Tools",
    ],
  },
  {
    group: "GCP",
    items: ["Cloud Run", "Cloud Tasks", "Cloud SQL", "Cloudflare R2"],
  },
  {
    group: "AWS",
    items: ["ECS Fargate", "RDS", "S3", "SQS", "Lambda", "EC2"],
  },
  {
    group: "Infra & Tooling",
    items: ["Pulumi", "Docker", "GitHub Actions", "TurboRepo", "Azure"],
  },
];

export const EDUCATION = {
  school: "SRM Institute of Science and Technology",
  degree: "B.Tech, Computer Science and Engineering",
  period: "Sept 2020 to Jun 2024",
  note: "8.5 CGPA",
};

export const ACHIEVEMENTS = [
  { label: "Smart India Hackathon, Winner", note: "AICTE, Sept 2023" },
  { label: "Solving for India Hackathon, Winner", note: "Google Cloud × AMD × GFG, Apr 2023" },
  { label: "Google Summer of Code", note: "JdeRobot, 2023" },
  { label: "Code 4 GovTech", note: "Cohort member, 2023" },
] as const;
