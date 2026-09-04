import { Section } from "./Section";
import { StaggerGroup, staggerItem } from "./Reveal";
import { motion } from "motion/react";
import { projects, writing, certifications, skills } from "../data/content";

const TECH_COUNT = skills.flatMap((group) => group.items).length;

const STATS = [
  { value: String(projects.length).padStart(2, "0"), label: "Projects shipped" },
  { value: String(TECH_COUNT), label: "Technologies & tools" },
  { value: String(certifications.length).padStart(2, "0"), label: "Certifications earned" },
  { value: String(writing.length).padStart(2, "0"), label: "Published writing pieces" },
];

export function Stats() {
  return (
    <Section id="stats" className="py-14 sm:py-16">
      <StaggerGroup className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-field-line pt-10 lg:grid-cols-4">
        {STATS.map((stat) => (
          <motion.div key={stat.label} variants={staggerItem}>
            <p className="font-display text-5xl font-bold leading-none text-field-ink sm:text-6xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm text-field-muted">{stat.label}</p>
          </motion.div>
        ))}
      </StaggerGroup>
    </Section>
  );
}
