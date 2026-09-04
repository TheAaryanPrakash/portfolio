import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skills } from "../data/content";

const ALL_SKILLS = skills.flatMap((group) => group.items);
const MID = Math.ceil(ALL_SKILLS.length / 2);
const ROW_1 = ALL_SKILLS.slice(0, MID);
const ROW_2 = ALL_SKILLS.slice(MID);

function Pill({ item, filled }: { item: string; filled?: boolean }) {
  return (
    <span
      className={
        filled
          ? "shrink-0 rounded-full bg-bg px-5 py-2.5 font-mono text-sm text-ink"
          : "shrink-0 rounded-full border border-field-line-strong px-5 py-2.5 font-mono text-sm text-field-ink"
      }
    >
      {item}
    </span>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="overflow-hidden py-16 sm:py-20">
      <Reveal>
        <span className="inline-flex items-center rounded-full border border-field-line-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-field-ink">
          Stack
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-field-ink sm:text-4xl">
          Tools and technologies
        </h2>
      </Reveal>

      <div className="marquee-fade mt-10 space-y-4 overflow-hidden border-y border-field-line py-8">
        <div className="marquee-track flex w-max gap-3">
          {[...ROW_1, ...ROW_1].map((item, i) => (
            <Pill key={`${item}-${i}`} item={item} filled />
          ))}
        </div>
        <div className="marquee-track-reverse flex w-max gap-3">
          {[...ROW_2, ...ROW_2].map((item, i) => (
            <Pill key={`${item}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
