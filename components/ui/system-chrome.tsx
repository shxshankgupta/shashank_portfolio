"use client";

import { motion } from "framer-motion";

import { profile, sections, type SectionId } from "@/data/site";

type SystemChromeProps = {
  focusedSectionId: SectionId;
  onSelectSection: (sectionId: SectionId) => void;
};

export function SystemChrome({
  focusedSectionId,
  onSelectSection,
}: SystemChromeProps) {
  return (
    <>
      <motion.header
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-none absolute left-0 right-0 top-0 flex items-start justify-between px-6 pb-4 pt-6 sm:px-10 lg:px-14"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[760px]">
          <p className="text-[10px] uppercase tracking-ui text-muted">
            {profile.kicker}
          </p>
          <h1 className="mt-4 max-w-2xl text-[1.95rem] font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-[2.6rem]">
            {profile.headline}
          </h1>
        </div>

        <div className="glass-panel hidden rounded-full border border-white/8 px-4 py-2 text-[10px] uppercase tracking-ui text-muted lg:block">
          {profile.location}
        </div>
      </motion.header>

      <motion.aside
        animate={{ opacity: 1, x: 0 }}
        className="glass-panel pointer-events-auto absolute left-6 top-1/2 hidden -translate-y-1/2 rounded-[28px] border border-white/8 p-3 lg:block"
        initial={{ opacity: 0, x: -16 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
      >
        <div className="grid gap-2">
          {sections.map((section) => {
            const active = section.id === focusedSectionId;

            return (
              <button
                key={section.id}
                className={[
                  "group flex min-w-[144px] items-center gap-3 rounded-[20px] border px-3 py-3 text-left transition-all duration-300 ease-precise",
                  active
                    ? "border-white/12 bg-card/90 text-foreground"
                    : "border-transparent text-muted hover:border-white/8 hover:bg-card/60 hover:text-foreground",
                ].join(" ")}
                onClick={() => onSelectSection(section.id)}
                type="button"
              >
                <span
                  className={[
                    "inline-flex h-2.5 w-2.5 rounded-full transition-colors duration-300",
                    active ? "bg-accent" : "bg-white/15 group-hover:bg-white/35",
                  ].join(" ")}
                />
                <span>
                  <span className="block text-[10px] uppercase tracking-ui text-muted">
                    {section.index}
                  </span>
                  <span className="mt-1 block text-sm">{section.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.aside>

      <motion.footer
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 pb-6 sm:px-10 lg:px-14"
        initial={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
      >
        <div className="glass-panel rounded-[24px] border border-white/8 px-4 py-3">
          <p className="text-[10px] uppercase tracking-ui text-muted">Controls</p>
          <p className="mt-2 text-[13px] leading-6 text-foreground">
            Click objects. Use arrow keys. Press Enter to open. Press Esc to close.
          </p>
        </div>

        <div className="glass-panel hidden rounded-[24px] border border-white/8 px-4 py-3 text-right sm:block">
          <p className="text-[10px] uppercase tracking-ui text-muted">Current Focus</p>
          <p className="mt-2 text-[13px] text-foreground">
            {sections.find((section) => section.id === focusedSectionId)?.label}
          </p>
        </div>
      </motion.footer>
    </>
  );
}
