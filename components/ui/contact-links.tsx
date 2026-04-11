import { motion } from "framer-motion";

import type { ContactMethod } from "@/data/site";

type ContactLinksProps = {
  methods: ContactMethod[];
};

export function ContactLinks({ methods }: ContactLinksProps) {
  return (
    <div className="grid gap-3.5">
      {methods.map((method, index) => (
        <motion.a
          key={method.label}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center justify-between rounded-[24px] border border-white/8 bg-card/88 px-5 py-4 transition-colors duration-300 ease-precise hover:border-white/12"
          href={method.href}
          initial={{ opacity: 0, x: 20 }}
          rel="noreferrer"
          target={method.href.startsWith("mailto:") ? "_self" : "_blank"}
          transition={{ duration: 0.38, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-[10px] uppercase tracking-ui text-muted">{method.label}</p>
            <p className="mt-2 text-[15px] text-foreground">{method.value}</p>
          </div>
          <span className="text-[11px] uppercase tracking-ui text-muted transition-colors duration-300 group-hover:text-foreground">
            Open
          </span>
        </motion.a>
      ))}
    </div>
  );
}
