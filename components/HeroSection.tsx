import { Code2, Github, Linkedin, Trophy } from "lucide-react";

const marqueeItems =
  "Python · Django · FastAPI · Redis · Celery · Docker · PostgreSQL · AWS · GitHub Actions · React · Next.js · ";

const socialLinks = [
  {
    href: "https://linkedin.com/in/shxshankgupta",
    label: "linkedin.com/in/shxshankgupta",
    icon: Linkedin,
  },
  {
    href: "https://github.com/shxshankgupta",
    label: "github.com/shxshankgupta",
    icon: Github,
  },
  {
    href: "https://leetcode.com/u/shxshank/",
    label: "LeetCode — 1,745 rating",
    icon: Trophy,
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,#1a1a00_0%,transparent_60%)]" />

      <div className="container-shell relative flex min-h-screen items-center py-20">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#e8ff00]">
            Backend Engineer
          </p>
          <h1 className="mt-6 font-heading text-[clamp(64px,10vw,120px)] font-bold leading-[0.9] text-[#f0f0f0]">
            Shashank
            <br />
            Gupta
          </h1>
          <p className="mt-6 max-w-[480px] text-lg leading-8 text-[#9b9b9b]">
            Building high-throughput backends, real-time pipelines &amp; AI systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="hoverable inline-flex items-center justify-center bg-[#e8ff00] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.08em] text-[#0a0a0a] transition duration-200 ease-out hover:scale-105 hover:bg-white"
            >
              View Projects
            </a>
            <a
              href="/ShashankGupta-Resume.pdf"
              className="hoverable inline-flex items-center justify-center border border-[#333333] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.08em] text-[#f0f0f0] transition duration-300 ease-out hover:border-[#e8ff00] hover:text-[#e8ff00]"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="hoverable inline-flex items-center gap-3 text-[13px] text-[#747474] transition-colors duration-300 ease-out hover:text-[#e8ff00]"
              >
                <Icon size={15} />
                <span>{label}</span>
              </a>
            ))}
            <a
              href="mailto:shxshankgupta@gmail.com"
              className="hoverable inline-flex items-center gap-3 text-[13px] text-[#747474] transition-colors duration-300 ease-out hover:text-[#e8ff00]"
            >
              <Code2 size={15} />
              <span>shxshankgupta@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 font-heading text-[300px] font-bold leading-none text-white/5 xl:block">
          01
        </div>
      </div>

      <div className="relative border-t border-[#1c1c1c] py-4">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee inline-flex min-w-max font-mono text-xs text-[#444444]">
            <span className="pr-10">{marqueeItems}</span>
            <span>{marqueeItems}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
