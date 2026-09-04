import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experience } from "../data/content";

export function Experience() {
  return (
    <Section id="experience" index="05" label="Experience" tone="dark">
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]"
        />
        <ol className="space-y-14">
          {experience.map((role) => (
            <Reveal key={role.role + role.org} y={16}>
              <li className="relative pl-8 sm:pl-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-bg sm:h-5 sm:w-5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl font-semibold text-accent">
                    {role.role} <span className="text-ink-muted">· {role.org}</span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-dim">
                    {role.period}
                  </span>
                </div>

                <ul className="mt-4 max-w-3xl space-y-2.5">
                  {role.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-dim" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
