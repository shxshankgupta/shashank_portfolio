import { motion } from "framer-motion";

import type { ProjectItem } from "@/data/site";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-card/86 p-6 shadow-inset transition-all duration-500 ease-precise hover:border-white/12 hover:bg-card sm:p-7"
      initial={{ opacity: 0, y: 20, scale: 0.985 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-sheen absolute inset-x-0 top-0 h-px" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.035] to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            {project.featured ? (
              <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-ui text-accent">
                Featured Project
              </span>
            ) : null}
            <span className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1 text-[10px] uppercase tracking-ui text-muted">
              Product Showcase {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 text-[1.35rem] font-medium leading-tight text-foreground sm:text-[1.55rem]">
            {project.title}
          </h3>
        </div>

        <div className="w-fit rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-[10px] uppercase tracking-ui text-muted">
          {project.status}
        </div>
      </div>

      <div className="relative mt-6 grid gap-4">
        <section className="rounded-[22px] border border-white/6 bg-black/18 p-4">
          <p className="text-[10px] uppercase tracking-ui text-muted">Problem</p>
          <p className="mt-3 text-[14px] leading-6 text-muted sm:text-[15px] sm:leading-7">
            {project.problem}
          </p>
        </section>

        <section className="rounded-[22px] border border-white/6 bg-black/18 p-4">
          <p className="text-[10px] uppercase tracking-ui text-muted">Solution</p>
          <p className="mt-3 text-[14px] leading-6 text-muted sm:text-[15px] sm:leading-7">
            {project.solution}
          </p>
        </section>

        <section className="rounded-[22px] border border-white/6 bg-black/18 p-4">
          <p className="text-[10px] uppercase tracking-ui text-muted">Tech Stack I Used</p>

          <div className="mt-3 flex flex-wrap gap-2.5">
            {project.techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/8 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-muted transition-colors duration-300 ease-precise group-hover:border-white/12 group-hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="relative mt-7 flex flex-col gap-4 border-t border-white/6 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-[10px] uppercase tracking-ui text-muted">
          External Links
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            className="inline-flex min-w-[116px] items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-[11px] uppercase tracking-ui text-foreground transition-all duration-300 ease-precise hover:border-white/20 hover:bg-white/5"
            href={project.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="inline-flex min-w-[116px] items-center justify-center rounded-full border border-accent/25 bg-accent/10 px-4 py-2.5 text-[11px] uppercase tracking-ui text-foreground transition-all duration-300 ease-precise hover:border-accent/45 hover:bg-accent/16"
            href={project.liveUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
