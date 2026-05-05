const statCards = [
  {
    value: "330+",
    label: "LeetCode Problems",
    meta: "149 Medium, 37 Hard",
  },
  {
    value: "1,745",
    label: "Contest Rating",
    meta: "Top 10.4% globally",
  },
  {
    value: "5,000+",
    label: "Documents/day",
    meta: "BharatGPT pipeline",
  },
  {
    value: "50%",
    label: "API Response Improvement",
    meta: "1.4s → 700ms",
  },
];

const highlightTags = [
  "AWS Certified Cloud Practitioner",
  "LeetCode Top 10.4%",
];

export function AboutSection() {
  return (
    <section id="about" className="section-divider py-16 lg:py-24">
      <div className="container-shell grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="section-label">About</p>
          <h2 className="mt-4 font-heading text-[42px] font-bold leading-tight text-[#f0f0f0]">
            Results-driven engineer
            <br />
            who writes scalable code.
          </h2>
          <p className="mt-5 max-w-[480px] text-base leading-8 text-[#9a9a9a]">
            B.Tech in Information Technology from Manipal University Jaipur (2022–2026).
            Hands-on production experience building high-throughput Python/Django and
            FastAPI services, real-time data pipelines, and AI-powered systems. AWS
            Certified. Passionate about clean, testable, and scalable backend
            architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlightTags.map((tag) => (
              <span
                key={tag}
                className="border border-[#2a2a2a] bg-[#141414] px-4 py-2 font-mono text-xs text-[#d8ec4a]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="hoverable border border-[#1e1e1e] bg-[#121212] p-8 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#c8dd28]"
            >
              <div className="font-heading text-5xl font-bold text-[#d9eb4c]">{stat.value}</div>
              <div className="mt-4 text-[13px] uppercase tracking-[0.08em] text-[#f0f0f0]">
                {stat.label}
              </div>
              <div className="mt-2 text-[13px] text-[#9a9a9a]">{stat.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
