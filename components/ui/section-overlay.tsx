"use client";

import { motion } from "framer-motion";

import { ContactLinks } from "@/components/ui/contact-links";
import { ProjectCard } from "@/components/ui/project-card";
import { SkillsGrid } from "@/components/ui/skills-grid";
import {
  aboutMetrics,
  contactMethods,
  projects,
  sections,
  skillGroups,
  type SceneSection,
  type SectionId,
} from "@/data/site";

type SectionOverlayProps = {
  activeSection: SceneSection;
  focusedSectionId: SectionId;
  onClose: () => void;
  onSelectSection: (sectionId: SectionId) => void;
};

export function SectionOverlay({
  activeSection,
  focusedSectionId,
  onClose,
  onSelectSection,
}: SectionOverlayProps) {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        className="pointer-events-auto absolute inset-0 bg-black/24"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={onClose}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.aside
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        className="glass-panel pointer-events-auto absolute inset-x-4 bottom-4 top-[112px] overflow-hidden rounded-[32px] border border-white/8 sm:inset-x-auto sm:right-6 sm:top-24 sm:w-[560px] lg:right-14 lg:w-[660px]"
        exit={{ opacity: 0, x: 30, y: 12, scale: 0.985 }}
        initial={{ opacity: 0, x: 40, y: 24, scale: 0.985 }}
        transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/8" />

        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-6 border-b border-white/6 px-6 py-6 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-ui text-muted">
                {activeSection.index} / {activeSection.kicker}
              </p>
              <h2 className="mt-4 max-w-[14ch] text-[2rem] font-medium leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[2.35rem]">
                {activeSection.panelTitle}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
                {activeSection.panelDescription}
              </p>
            </div>

            <button
              aria-label="Close panel"
              className="selection-ring rounded-full border border-white/8 bg-card/80 px-4 py-2 text-[10px] uppercase tracking-ui text-muted transition-colors duration-300 ease-precise hover:border-white/12 hover:text-foreground"
              onClick={onClose}
              type="button"
            >
              Close
            </button>
          </div>

          <div className="border-b border-white/6 px-6 py-3 sm:px-8">
            <div className="flex gap-2 overflow-x-auto">
              {sections.map((section) => {
                const active = section.id === focusedSectionId;

                return (
                  <button
                    key={section.id}
                    className={[
                      "rounded-full border px-3 py-2 text-[10px] uppercase tracking-ui transition-all duration-300 ease-precise",
                      active
                        ? "border-white/12 bg-card/90 text-foreground"
                        : "border-transparent bg-transparent text-muted hover:border-white/10 hover:bg-card/60 hover:text-foreground",
                    ].join(" ")}
                    onClick={() => onSelectSection(section.id)}
                    type="button"
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="panel-scrollbar flex-1 overflow-y-auto px-6 py-6 sm:px-8">
            {activeSection.id === "about" ? (
              <div className="grid gap-4">
                <section className="rounded-[26px] border border-white/8 bg-card/86 p-6">
                  <p className="text-[15px] leading-8 text-muted">
                    Systems-focused engineer shipping production infrastructure across
                    retrieval, streaming, observability, and platform tooling. The
                    portfolio is framed like an environment because the work itself is
                    closer to designing operating surfaces than building pages.
                  </p>
                </section>

                <div className="grid gap-4 sm:grid-cols-3">
                  {aboutMetrics.map((metric) => (
                    <article
                      key={metric.label}
                      className="rounded-[24px] border border-white/8 bg-card/86 p-5"
                    >
                      <p className="text-[10px] uppercase tracking-ui text-muted">
                        {metric.label}
                      </p>
                      <p className="mt-4 text-[1.7rem] font-medium tracking-[-0.03em] text-foreground">
                        {metric.value}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted">{metric.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {activeSection.id === "projects" ? (
              <div className="grid gap-4">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} index={index} project={project} />
                ))}
              </div>
            ) : null}

            {activeSection.id === "skills" ? (
              <div className="grid gap-4">
                <section className="rounded-[26px] border border-white/8 bg-card/86 p-6">
                  <p className="text-[15px] leading-8 text-muted">
                    A systems-oriented stack spanning application surfaces, platform
                    internals, and operational tooling. Grouped by capability so the
                    panel reads like a deployment surface instead of a resume list.
                  </p>
                </section>
                <SkillsGrid groups={skillGroups} />
              </div>
            ) : null}

            {activeSection.id === "contact" ? (
              <div className="grid gap-4">
                <section className="rounded-[26px] border border-white/8 bg-card/86 p-6">
                  <p className="text-[15px] leading-8 text-muted">
                    Open to platform engineering, full-stack systems, and product
                    infrastructure roles. The cleanest path is direct outreach with a
                    problem statement, team context, and timeline.
                  </p>
                </section>
                <ContactLinks methods={contactMethods} />
              </div>
            ) : null}
          </div>
        </div>
      </motion.aside>
    </>
  );
}
