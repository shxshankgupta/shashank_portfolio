const projects = [
  {
    title: "AI Document Assistant",
    label: "RAG-based Q&A System",
    accent: "bg-[#00ff99]",
    hoverBorder: "hover:border-[#00ff99]",
    stack: "Python · FastAPI · FAISS · PostgreSQL · Redis · JWT · Docker · Next.js",
    points: [
      "Developed a production-ready document Q&A app achieving ~700ms end-to-end response time with streaming output; designed an asynchronous ingestion pipeline (upload → parse → embed → index) to support concurrent uploads.",
      "Implemented semantic search using FAISS vector embeddings, enhancing retrieval accuracy beyond traditional keyword search; secured the API with JWT authentication.",
      "Executed full-stack Docker containerization for one-command deployment; integrated a CI/CD pipeline via GitHub Actions.",
    ],
    live: "https://rag-assistant-ruddy.vercel.app",
    github: "https://github.com/shxshankgupta/rag-assistant",
  },
  {
    title: "StreamForge",
    label: "Real-Time Event Processing System",
    accent: "bg-[#e8ff00]",
    hoverBorder: "hover:border-[#e8ff00]",
    stack: "Python · FastAPI · Redis · Celery · PostgreSQL · Docker · pytest · SSE",
    points: [
      "Designed a backend system processing 1,000+ events/second with retry logic and duplicate prevention, ensuring zero data loss under sustained load.",
      "Built async task queue with Celery + Redis including dead-letter queuing and failure handling; achieved 90%+ test coverage with pytest and load-tested 20,000 events resolving connection leaks under stress.",
      "Live analytics dashboard refreshes in under 200ms via Server-Sent Events; deployed as a multi-container stack via Docker Compose.",
    ],
    live: "https://stream-forge-kohl.vercel.app",
    github: "https://github.com/shxshankgupta/streamforge",
  },
  {
    title: "StockPilot",
    label: "Inventory Management System",
    accent: "bg-[#ff6b00]",
    hoverBorder: "hover:border-[#ff6b00]",
    stack: "Next.js · MongoDB · JWT · Tailwind CSS · Role-Based Access Control",
    points: [
      "Built transaction-safe purchase flow using atomic MongoDB operations to prevent overselling under concurrent requests; sub-200ms auth response times via JWT middleware.",
      "Implemented role-based access control (Admin/User) with analytics dashboard tracking revenue, stock levels, and transaction history.",
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
