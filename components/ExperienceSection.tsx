const experiences = [
  {
    company: "CoRover.ai",
    role: "Software Engineer Trainee",
    duration: "June 2025 – Sept 2025",
    location: "Bengaluru, India",
    stack: ["Python", "FastAPI", "Redis", "Celery", "Docker", "GitHub Actions", "pytest"],
    bullets: [
      "Built document retrieval pipeline for BharatGPT processing 5,000+ documents/day. Replaced keyword search with semantic retrieval — significantly improved accuracy.",
      "Cut API response time by 50% (1.4s → 700ms) via Redis caching, connection pooling, and async request handling.",
      "Containerized services with Docker, automated CI/CD via GitHub Actions, 85%+ test coverage with pytest.",
      "Implemented Celery + Redis async task processing with retry logic and failure handling ensuring zero data loss under peak load.",
    ],
  },
  {
    company: "MNIT Jaipur (NIT)",
    role: "Software Engineering Intern",
    duration: "June 2024 – Aug 2024",
    location: "Jaipur, India",
    stack: ["Python", "PostgreSQL", "JWT", "REST APIs", "RBAC"],
    bullets: [
      "Designed RESTful APIs for a platform serving 300+ active users. Reduced slow-query response times via PostgreSQL indexes and query refactoring.",
      "Implemented JWT-based authentication with role-based access control, request rate limiting, and structured logging.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-divider py-16 lg:py-24">
      <div className="container-shell">
        <p className="section-label">Experience</p>
        <h2 className="mt-4 font-heading text-[56px] font-bold text-[#f0f0f0]">
          Where I&apos;ve Worked
        </h2>

        <div className="relative mt-12 pl-8 before:absolute before:left-1 before:top-0 before:h-full before:w-px before:bg-[#1c1c1c]">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="relative mb-8 border-l-2 border-transparent bg-[#121212] p-8 transition duration-300 ease-out hover:border-l-[#c8dd28]"
            >
              <span className="absolute -left-[35px] top-10 h-3 w-3 rounded-full border border-[#222222] bg-[#0a0a0a]" />
              <div className="font-mono text-xs text-[#d9eb4c]">{experience.duration}</div>
              <h3 className="mt-3 font-heading text-2xl font-bold text-[#f0f0f0]">
                {experience.company}
              </h3>
              <p className="mt-2 text-base text-[#9b9b9b]">
                {experience.role} · {experience.location}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-[#262626] bg-[#141414] px-3 py-1 font-mono text-[11px] text-[#ededed]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-4">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-7 text-[#919191]">
                    <span className="mr-2 text-[#d9eb4c]">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
