import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { about } from "../data/content";

const INTERESTS = ["Artificial Intelligence","Machine Learning", "Deep Learning","Cybersecurity", "Natural Language Processing", "Federated Learning", "Computer Vision","Full Stack Web Development"];

export function About() {
  return (
    <Section id="about" index="01" label="About">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Reveal>
          <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-3">
            {INTERESTS.map((tag) => (
              <span
                key={tag}
                className="w-fit rounded-full border border-field-line-strong px-4 py-2 font-mono text-xs text-field-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={`max-w-[65ch] leading-relaxed ${
                  i === 0
                    ? "text-xl font-medium text-ink sm:text-2xl"
                    : "text-lg text-field-muted sm:text-xl"
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
