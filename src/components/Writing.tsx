import { Section } from "./Section";
import { StaggerGroup } from "./Reveal";
import { staggerItem } from "../lib/motion";
import { motion } from "motion/react";
import { writing } from "../data/content";

export function Writing() {
  return (
    <Section id="writing" index="04" label="Writing">
      <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {writing.map((entry) => (
          <motion.article
            key={entry.role + entry.org}
            variants={staggerItem}
            className="flex flex-col rounded-2xl border border-border bg-surface p-7 transition-colors duration-200 hover:border-border-hover"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-dim">
              {entry.period}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold text-accent">{entry.role}</h3>
            <p className="mt-1 font-mono text-sm text-ink-muted">{entry.org}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{entry.description}</p>
          </motion.article>
        ))}
      </StaggerGroup>
    </Section>
  );
}
