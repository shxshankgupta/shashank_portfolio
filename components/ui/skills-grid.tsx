import { motion } from "framer-motion";

import type { SkillGroup } from "@/data/site";

type SkillsGridProps = {
  groups: SkillGroup[];
};

export function SkillsGrid({ groups }: SkillsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map((group, index) => (
        <motion.section
          key={group.title}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[24px] border border-white/8 bg-card/88 p-5"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.46, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] uppercase tracking-ui text-muted">{group.title}</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/8 bg-black/20 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
