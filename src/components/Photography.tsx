import { motion } from "motion/react";
import { InstagramLogo, ArrowUpRight } from "@phosphor-icons/react";
import { Section } from "./Section";
import { StaggerGroup, Reveal } from "./Reveal";
import { staggerItem } from "../lib/motion";
import { photography, photographyProfileUrl } from "../data/content";

export function Photography() {
  return (
    <Section id="photography" index="07" label="Photography" tone="dark">
      <p className="-mt-4 mb-8 text-sm text-ink-dim sm:mb-10">
        A few frames from behind the camera — tap through to see them on Instagram.
      </p>

      <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {photography.map((photo, i) => (
          <motion.a
            key={photo.src}
            href={photo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            variants={staggerItem}
            aria-label="View this photo on Instagram"
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-hover"
          >
            <img
              src={photo.src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-bg/90 via-bg/0 to-bg/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink">
                <InstagramLogo size={14} weight="bold" />
                View post
              </span>
            </div>
            <span className="sr-only">{`Photo ${i + 1}`}</span>
          </motion.a>
        ))}
      </StaggerGroup>

      <Reveal delay={0.1}>
        <a
          href={photographyProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-accent transition-colors duration-200 hover:border-accent"
        >
          <InstagramLogo size={16} weight="bold" />
          View more on Instagram
          <ArrowUpRight size={14} weight="bold" />
        </a>
      </Reveal>
    </Section>
  );
}
