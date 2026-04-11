export type SectionId = "about" | "projects" | "skills" | "contact";

export type SceneSection = {
  id: SectionId;
  index: string;
  label: string;
  kicker: string;
  panelTitle: string;
  panelDescription: string;
  shape: "sphere" | "box" | "octahedron" | "torus-knot";
  position: [number, number, number];
  cameraPosition: [number, number, number];
  cameraFov: number;
  lookAt: [number, number, number];
  float: {
    speed: number;
    rotationIntensity: number;
    floatIntensity: number;
  };
};

export type ProjectItem = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  featured: boolean;
  status: string;
  githubUrl: string;
  liveUrl: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export const profile = {
  kicker: "Developer Universe / Minimal Black Edition",
  headline: "Production-grade systems engineering presented as a navigable environment.",
  location: "India / Remote-ready",
};

export const sections: SceneSection[] = [
  {
    id: "about",
    index: "01",
    label: "About",
    kicker: "Core Profile",
    panelTitle: "Systems-first engineering with product-level execution.",
    panelDescription:
      "I build infrastructure and application surfaces that hold up under real traffic, ambiguity, and iteration speed.",
    shape: "sphere",
    position: [-2.55, 0.9, -0.8],
    cameraPosition: [-1.1, 0.8, 3.95],
    cameraFov: 30,
    lookAt: [-2.2, 0.7, -0.4],
    float: {
      speed: 1.15,
      rotationIntensity: 0.22,
      floatIntensity: 0.58,
    },
  },
  {
    id: "projects",
    index: "02",
    label: "Projects",
    kicker: "Product Surface",
    panelTitle: "Selected systems and product infrastructure work.",
    panelDescription:
      "Project cards are framed as operating surfaces: clear outcomes, tight scope, and execution details recruiters can parse quickly.",
    shape: "box",
    position: [0, 1.25, 0],
    cameraPosition: [0.12, 1.04, 3.35],
    cameraFov: 27,
    lookAt: [0, 1, 0],
    float: {
      speed: 1.05,
      rotationIntensity: 0.18,
      floatIntensity: 0.46,
    },
  },
  {
    id: "skills",
    index: "03",
    label: "Skills",
    kicker: "Capability Grid",
    panelTitle: "A modern stack shaped around throughput, reliability, and clarity.",
    panelDescription:
      "Structured by operational domains instead of dumping tool names. The goal is to show execution range without noise.",
    shape: "octahedron",
    position: [2.6, 0.55, -0.55],
    cameraPosition: [1.28, 0.7, 3.9],
    cameraFov: 29,
    lookAt: [2.15, 0.45, -0.25],
    float: {
      speed: 1.25,
      rotationIntensity: 0.28,
      floatIntensity: 0.55,
    },
  },
  {
    id: "contact",
    index: "04",
    label: "Contact",
    kicker: "Signal Path",
    panelTitle: "Direct channel for teams building serious products.",
    panelDescription:
      "Minimal by design. Clear links, fast response path, and no form friction unless a team specifically wants one.",
    shape: "torus-knot",
    position: [0.8, -1.15, 1.2],
    cameraPosition: [0.62, -0.28, 3.3],
    cameraFov: 28,
    lookAt: [0.9, -0.8, 1.1],
    float: {
      speed: 1.35,
      rotationIntensity: 0.34,
      floatIntensity: 0.62,
    },
  },
];

export const defaultSectionId: SectionId = "projects";

export const aboutMetrics = [
  {
    label: "Focus",
    value: "Systems",
    detail: "RAG, data flow, distributed services, product infrastructure.",
  },
  {
    label: "Mode",
    value: "Shipping",
    detail: "Fast iteration with production constraints always visible.",
  },
  {
    label: "Bias",
    value: "Clarity",
    detail: "Minimal interfaces, robust internals, measurable outcomes.",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "ai-rag-assistant",
    title: "AI RAG Assistant",
    problem:
      "Teams need answers from large document sets without hallucinations, slow retrieval, or brittle ingestion flows. The challenge is turning uploaded PDFs into grounded responses fast enough for real interactive use.",
    solution:
      "Built an end-to-end RAG system with async document ingestion, FAISS semantic retrieval, and Groq-powered SSE streaming. The pipeline handles 50+ concurrent uploads, reaches ~700ms end-to-end latency, and delivered 95%+ recall@5 on internal validation against a TF-IDF baseline. Deployed across Render and Vercel with health checks, structured logging, and production monitoring.",
    techStack: ["FastAPI", "Next.js", "FAISS", "Groq", "Docker", "Redis"],
    featured: true,
    status: "Live Demo Available",
    githubUrl: "https://github.com/shxshankgupta/rag-assistant",
    liveUrl: "https://rag-assistant-ruddy.vercel.app",
  },
  {
    id: "streamforge",
    title: "StreamForge: Real-Time Event Processing",
    problem:
      "Real-time platforms need to process high event volume without duplicates, silent failures, or laggy visibility into system health. That means throughput, delivery guarantees, and observability all have to work together.",
    solution:
      "Designed an event-driven pipeline ingesting 1K+ events per second with idempotency keys, exponential backoff retries, and exactly-once processing semantics. Added Celery and Redis workers with dead-letter handling and alerting to push data loss risk below 0.1%, then exposed live analytics over SSE with sub-200ms dashboard updates. Load-tested 20K events and drove test coverage past 90% while fixing connection leaks and tightening cache behavior.",
    techStack: ["FastAPI", "Redis", "Celery", "PostgreSQL", "Next.js", "Docker"],
    featured: true,
    status: "Live Demo Available",
    githubUrl: "https://github.com/shxshankgupta/streamforge",
    liveUrl: "https://stream-forge-kohl.vercel.app",
  },
  {
    id: "stockpilot",
    title: "StockPilot: Transaction-Safe Inventory System",
    problem:
      "Inventory systems break down when concurrent purchases create overselling, stale stock counts, and weak access control. The core problem is preserving accuracy while keeping checkout and admin workflows fast.",
    solution:
      "Built a transaction-safe inventory workflow with atomic MongoDB updates across a pending-to-success or failed purchase lifecycle. The system handles around 50 concurrent purchase requests, removes race conditions, and maintained 99.9% inventory accuracy under load testing. Added JWT-based role access plus an analytics dashboard for revenue, transaction tracking, and low-stock alerts that helped reduce stockout incidents by about 40%.",
    techStack: ["Next.js", "MongoDB", "JWT", "Tailwind CSS"],
    featured: true,
    status: "Live Demo Available",
    githubUrl: "https://github.com/shxshankgupta/stockpilot",
    liveUrl: "https://stockpilot-fawn.vercel.app",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Systems",
    items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "R3F"],
  },
  {
    title: "Backend & Runtime",
    items: ["Node.js", "Python", "FastAPI", "Go", "REST", "WebSockets"],
  },
  {
    title: "Data & Retrieval",
    items: ["Postgres", "Redis", "Kafka", "ClickHouse", "Qdrant", "pgvector"],
  },
  {
    title: "Ops & Delivery",
    items: ["Docker", "CI/CD", "Grafana", "OpenTelemetry", "Vercel", "Linux"],
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "shashank.engineering@proton.me",
    href: "mailto:shashank.engineering@proton.me",
  },
  {
    label: "GitHub",
    value: "github.com/shashank",
    href: "https://github.com/shashank",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shashank",
    href: "https://www.linkedin.com/in/shashank/",
  },
  {
    label: "X / Notes",
    value: "x.com/shashankbuilds",
    href: "https://x.com/shashankbuilds",
  },
];

export function getSectionIndex(sectionId: SectionId) {
  return sections.findIndex((section) => section.id === sectionId);
}
