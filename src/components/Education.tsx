import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Certificate } from "@phosphor-icons/react";
import { education, certifications } from "../data/content";

export function Education() {
  return (
    <Section id="education" index="06" label="Education & Certifications">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-field-muted">
            Education
          </h3>
          <ul className="mt-6 space-y-6">
            {education.map((entry) => (
              <li
                key={entry.institution}
                className="border-b border-field-line pb-6 last:border-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-display text-lg font-semibold text-field-ink">
                    {entry.institution}
                  </p>
                  <span className="font-mono text-xs text-field-muted">{entry.period}</span>
                </div>
                {entry.detail && (
                  <p className="mt-1 text-sm text-field-muted">{entry.detail}</p>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-field-muted">
            Certifications
          </h3>
          <ul className="mt-6 space-y-4">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-3">
                <Certificate size={18} className="mt-0.5 shrink-0 text-field-ink" />
                <span className="text-sm leading-relaxed text-field-muted">{cert}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
