// Every claim on the site lives here. Each one must match the verified facts behind
// the resume (Obsidian vault: Satyam/Profile/Identity and Facts.md). UI copy must not
// use em or en dashes.

export type Highlight = { value: string; label: string };

export type ClientWork = { client: string; bullets: string[] };

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  clients: ClientWork[];
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  githubUrl: string;
};

export type Hackathon = { event: string; project: string; result: string; url?: string };

export type SkillGroup = { name: string; skills: string[] };

export type Link = { name: string; handle: string; url: string };

export const profile = {
  firstName: "Satyam",
  lastName: "Sharma",
  title: "Founding AI Engineer at técrave",
  tagline: "I build real-time AI systems that hold up in production.",
  location: "Mumbai, India",
  availability: "Open to AI engineering and backend roles",
  email: "sharmasatyam1603@gmail.com",
  siteUrl: "https://satyamdev803.github.io",
};

export const highlights: Highlight[] = [
  { value: "99.8%", label: "of started interviews complete" },
  { value: "74% → 99%", label: "of interviews with a stored recording" },
  { value: "20+", label: "enterprise clients on the platform" },
];

export const experience: Role[] = [
  {
    company: "técrave",
    title: "Founding AI Engineer",
    period: "Jan 2026 to Present",
    location: "Mumbai, India (Remote)",
    summary: "Building production systems for two clients.",
    clients: [
      {
        client: "aperture (AI interview platform)",
        bullets: [
          "Core engineer on the production platform (15,000+ candidates, 20+ enterprise clients): FastAPI/WebSocket backend, Next.js frontend, designed for 100 concurrent interviews per server.",
          "Designed the real-time voice session layer on Gemini Live: VAD tuning, session rotation and a recovery-ladder state machine (10s re-nudge, 40s fresh session, 120s fail-out); 99.8% of started interviews completed.",
          "Replaced keyword matching with 4 LLM tool calls for interview control; built a two-pass evaluation engine (evidence, then STAR scoring), 28 guardrail patterns and per-modality token costing.",
          "Engineered a dual-path audio pipeline (noise-suppressed AudioWorklet stream to the model, crash-resilient IndexedDB and resumable S3 multipart recording); stored recordings rose from 74% to 99% of interviews.",
          "Built an S3, Lambda, FFmpeg transcode pipeline with idempotent retries and a 5-minute reconciliation sweep; fixed a silent recording-loss incident by replacing an HTTP callback with an S3 handoff.",
          "Shipped the candidate practice product, Ashby ATS write-back and SSRF-safe job import; migrated MySQL to PostgreSQL with drain-aware zero-downtime deploys.",
          "Co-built identity verification (KYC) and owned its policy layer.",
        ],
      },
      {
        client: "Krishna Studio",
        bullets: [
          "Co-built a Django/DRF, PostgreSQL and Next.js platform with a billing ledger and 2,600+ backend tests.",
          "Built the booking engine (Postgres exclusion constraint), Razorpay-webhook deposits, a WhatsApp job queue, LLM consultation summaries with prompt-injection fencing, and passwordless OTP auth.",
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "meridian",
    tagline: "Market maker for BTCUSD perpetuals",
    description:
      "Market maker for BTCUSD perpetuals on Delta Exchange testnet, with inventory-aware post-only quoting and 12 live risk checks. Built for the Fingrad Algo Trading Hackathon.",
    tech: ["Python", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/SatyamDev803/meridian",
  },
  {
    title: "risklayer",
    tagline: "Risk check for AI agents that move money",
    description:
      "The check an AI agent runs before it moves money on HSK Chain, paid agent to agent through HSP.",
    tech: ["TypeScript"],
    githubUrl: "https://github.com/SatyamDev803/risklayer",
  },
  {
    title: "RedeemNow",
    tagline: "Instant liquidity for tokenized real-world assets",
    description:
      "Instant USDC liquidity for tokenized real-world assets, priced by risk. 5th place at Monad Blitz Mumbai V4.",
    tech: ["TypeScript", "Solidity"],
    githubUrl: "https://github.com/SatyamDev803/RedeemNow",
  },
  {
    title: "TalentAI",
    tagline: "AI recruitment platform",
    description:
      "Five FastAPI microservices with a LangGraph RAG pipeline over ChromaDB semantic matching, Ray scoring and an XGBoost ranking ensemble.",
    tech: ["FastAPI", "LangGraph", "ChromaDB", "Ray", "Redis", "XGBoost"],
    githubUrl: "https://github.com/SatyamDev803/TalentAI",
  },
  {
    title: "CryptexAI",
    tagline: "Cryptocurrency forecasting",
    description:
      "LSTM, GRU and an attention Transformer tuned with Optuna, served through FastAPI and a React dashboard.",
    tech: ["TensorFlow", "FastAPI", "React", "Optuna"],
    githubUrl: "https://github.com/SatyamDev803/CryptexAI",
  },
];

export const hackathons: Hackathon[] = [
  {
    event: "ETHGlobal Mumbai 2026",
    project: "Earlyout (team of three)",
    result: "Arc prize: Best DeFi / Onchain Finance App",
    url: "https://github.com/EarlyOut/earlyout",
  },
  {
    event: "Monad Blitz Mumbai V4",
    project: "RedeemNow",
    result: "5th place",
    url: "https://github.com/SatyamDev803/RedeemNow",
  },
  { event: "Monad Blitz Mumbai V2", project: "monad-id", result: "4th place" },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Guru Nanak Khalsa College (Autonomous), University of Mumbai",
  period: "Jun 2021 to May 2024",
  grade: "CGPI 8.78/10 (WES GPA 3.57/4.00)",
  // A-grade courses only. Never list Distributed Systems (not on the transcript)
  // or the C-grade courses (Operating Systems, Data Structures, Linear Algebra).
  coursework: [
    "Artificial Intelligence",
    "Data Science",
    "Algorithms",
    "Database Systems",
    "Computer Networks",
    "Cloud Computing",
    "Network Security",
    "Statistical Methods",
  ],
};

export const skillGroups: SkillGroup[] = [
  { name: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
  {
    name: "AI/ML and LLM",
    skills: ["Gemini Live", "OpenAI API", "LangGraph/LangChain", "RAG", "Tool calling", "PyTorch", "TensorFlow/Keras", "scikit-learn", "Ray"],
  },
  {
    name: "Backend and Data",
    skills: ["FastAPI", "Django/DRF", "Next.js", "React", "PostgreSQL", "Redis", "ChromaDB", "SQLAlchemy", "pytest"],
  },
  {
    name: "Cloud and Infra",
    skills: ["AWS (EC2, Lambda, S3, SSM)", "Terraform", "Docker", "Nginx", "HashiCorp Vault", "GitHub Actions", "Linux"],
  },
  {
    name: "Real-time and Observability",
    skills: ["WebSockets", "Web Audio API / AudioWorklet", "FFmpeg", "Prometheus", "Grafana", "Loki"],
  },
];

export const links: Link[] = [
  { name: "GitHub", handle: "@SatyamDev803", url: "https://github.com/SatyamDev803" },
  { name: "LinkedIn", handle: "Satyam Sharma", url: "https://www.linkedin.com/in/satyam-sharma16/" },
];
