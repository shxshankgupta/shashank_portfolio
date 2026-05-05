const projects = [
  {
    title: "StreamForge",
    label: "Real-Time Event Processing System",
    accent: "bg-[#e8ff00]",
    hoverBorder: "hover:border-[#e8ff00]",
    stack: "Python · FastAPI · Redis · Celery · PostgreSQL · Docker · SSE",
    points: [
      "Processes 1,000+ events/second with retry logic and duplicate prevention",
      "90%+ test coverage with pytest, load-tested 20,000 events",
      "Live analytics dashboard <200ms via Server-Sent Events",
      "Multi-container Docker Compose deployment",
    ],
    live: "https://stream-forge-kohl.vercel.app",
    github: "https://github.com/shxshankgupta/streamforge",
  },
  {
    title: "AI Document Assistant",
    label: "RAG-based Q&A System",
    accent: "bg-[#00ff99]",
    hoverBorder: "hover:border-[#00ff99]",
    stack: "Python · FastAPI · FAISS · PostgreSQL · Redis · JWT · Docker · Next.js",
    points: [
      "~700ms end-to-end response with streaming output",
      "Async ingestion pipeline: upload → parse → embed → index",
      "Semantic search via FAISS — outperforms keyword search on accuracy",
      "Full-stack Docker + GitHub Actions CI/CD",
    ],
    live: "https://rag-assistant-ruddy.vercel.app",
    github: "https://github.com/shxshankgupta/rag-assistant",
  },
  {
    title: "StockPilot",
    label: "Inventory Management System",
    accent: "bg-[#ff6b00]",
    hoverBorder: "hover:border-[#ff6b00]",
    stack: "Next.js · MongoDB · JWT · Tailwind CSS · RBAC",
    points: [
      "Transaction-safe atomic MongoDB operations — prevents overselling",
      "Sub-200ms auth via JWT middleware",
      "Role-based access: Admin/User + analytics dashboard",
    ],
    live: "https://stockpilot-fawn.vercel.app",
    github: "https://github.com/shxshankgupta/stockpilot",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-divider py-16 lg:py-24">
      <div className="container-shell">
        <p className="section-label">Projects</p>
        <h2 className="mt-4 font-heading text-[56px] font-bold text-[#f0f0f0]">
          Things I&apos;ve Built
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`hoverable border border-[#1e1e1e] bg-[#121212] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.24)] ${project.hoverBorder}`}
            >
              <div className={`h-[3px] w-full ${project.accent}`} />
              <div className="p-8">
                <p className="font-mono text-xs text-[#8f8f8f]">{project.label}</p>
                <h3 className="mt-4 font-heading text-[32px] font-bold text-[#f0f0f0]">
                  {project.title}
                </h3>
                <p className="mt-4 font-mono text-[11px] leading-6 text-[#9a9a9a]">
                  {project.stack}
                </p>

                <ul className="mt-6 space-y-3.5 text-sm leading-7 text-[#919191]">
                  {project.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hoverable border border-[#333333] px-4 py-2 font-mono text-xs uppercase text-[#f0f0f0] transition duration-300 ease-out hover:border-[#c8dd28] hover:text-[#e8ff00]"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hoverable border border-[#333333] px-4 py-2 font-mono text-xs uppercase text-[#f0f0f0] transition duration-300 ease-out hover:border-[#c8dd28] hover:text-[#e8ff00]"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
