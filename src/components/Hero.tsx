import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowSquareOut } from "@phosphor-icons/react";
import { profile } from "../data/content";
import { Magnetic } from "./Magnetic";

const FOCUS_TAGS = ["Artificial Intelligence","Machine Learning", "Deep Learning","Cybersecurity", "Natural Language Processing", "Federated Learning", "Computer Vision","Full Stack Web Development"];

const EMPHASIZED_PHRASES = [
  "solves practical problems",
  "business and economic context",
  "real-world impact",
];

function TaglineText({ text }: { text: string }) {
  const pattern = new RegExp(`(${EMPHASIZED_PHRASES.join("|")})`, "g");
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        EMPHASIZED_PHRASES.includes(part) ? (
          <strong key={i} className="font-semibold text-field-ink">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-field pb-20 pt-36 text-field-ink sm:pb-28 sm:pt-44">
      <div className="container-page relative grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-bg px-4 py-2"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink">
              Open to Work & Research Collaborations
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 font-display text-balance text-6xl font-bold leading-[0.95] tracking-tight text-field-ink sm:text-7xl lg:text-[5.5rem]"
          >
            Aaryan
            <br />
            Prakash
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-field-muted sm:text-xl"
          >
            <TaglineText text={profile.tagline} />
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={12}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-transform duration-200 active:scale-[0.98]"
              >
                View Projects
                <ArrowUpRight size={15} weight="bold" />
              </a>
            </Magnetic>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-field-line-strong px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-field-ink transition-colors duration-200 hover:bg-bg hover:text-ink"
            >
              <ArrowSquareOut size={15} weight="bold" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-field-line-strong px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-field-ink transition-colors duration-200 hover:bg-bg hover:text-ink"
            >
              Get in Touch
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-10 flex items-center gap-4"
          >
            <SocialLink href={profile.github.url} label="GitHub">
              <GithubLogo size={19} />
            </SocialLink>
            <SocialLink href={profile.linkedin.url} label="LinkedIn">
              <LinkedinLogo size={19} />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <EnvelopeSimple size={19} />
            </SocialLink>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm rounded-3xl bg-bg p-8 sm:p-10 lg:ml-auto">
            <div className="flex h-full flex-col justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-dim">
                Focus areas
              </span>
              <div className="font-display text-8xl font-bold leading-none text-ink">
                A<span className="text-accent">P</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {FOCUS_TAGS.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-2.5 font-mono text-xs text-ink-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-field-line-strong text-field-ink transition-colors duration-200 hover:bg-bg hover:text-ink"
    >
      {children}
    </a>
  );
}
