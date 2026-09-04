import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight, GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import type { Project } from "../data/content";
import { ProjectModal } from "./ProjectModal";
import { ProjectLinkIcon, ProjectLinkText } from "./ProjectLinkIcon";

gsap.registerPlugin(ScrollTrigger);

interface ProjectGalleryProps {
  projects: Project[];
  variant?: "dark" | "light";
  ghostText?: string;
}

export function ProjectGallery({
  projects,
  variant = "dark",
  ghostText = "Selected Work",
}: ProjectGalleryProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Project | null>(null);
  const onField = variant === "light";

  useEffect(() => {
    if (reduce || !wrapRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const distance = trackRef.current!.scrollWidth - window.innerWidth;
        if (distance <= 0) return;

        gsap.to(trackRef.current, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: () => `+=${distance}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      }, wrapRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [reduce]);

  return (
    <div className={`relative overflow-hidden ${onField ? "bg-field" : "bg-bg"}`} ref={wrapRef}>
      <span
        aria-hidden
        className={`pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold uppercase leading-none ${
          onField ? "text-bg/10" : "text-accent/10"
        }`}
      >
        {ghostText} {ghostText}
      </span>

      <div
        ref={trackRef}
        className="relative flex h-[100dvh] items-center gap-6 overflow-x-auto pl-6 snap-x snap-mandatory lg:h-[85dvh] lg:gap-8 lg:overflow-visible lg:pl-[max(1.5rem,calc((100vw-1240px)/2+1.5rem))] lg:snap-none"
      >
        {projects.map((project, i) => (
          <article
            key={project.slug}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            onClick={() => setActive(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(project);
              }
            }}
            className="group flex h-[70dvh] max-h-[560px] w-[85vw] max-w-[560px] shrink-0 cursor-pointer snap-start flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-transform duration-300 hover:-translate-y-2 hover:border-border-hover focus-visible:-translate-y-2 focus-visible:border-border-hover lg:h-[65vh]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-sm text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                {project.status === "ongoing" && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    In progress
                  </span>
                )}
                {project.githubUrl !== undefined && (
                  <ProjectLinkIcon href={project.githubUrl || undefined} label="View on GitHub" stopPropagation>
                    <GithubLogo size={16} />
                  </ProjectLinkIcon>
                )}
              </div>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.1em] text-ink-dim">
              {project.category}
            </p>
            <p className="mt-1 font-mono text-xs text-ink-dim">{project.period}</p>

            <h3 className="mt-4 line-clamp-3 font-display text-2xl font-semibold leading-tight text-ink">
              {project.title}
            </h3>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-muted">
              {project.summary}
            </p>

            <ul className="mt-auto min-h-0 space-y-2 overflow-hidden pt-6">
              {project.approach.slice(0, 2).map((line, idx) => (
                <li key={idx} className="flex gap-2 text-xs leading-relaxed text-ink-dim">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="line-clamp-2">{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent">
                View case study
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              {project.liveUrl !== undefined && (
                <ProjectLinkText href={project.liveUrl || undefined} label="Visit live site" stopPropagation>
                  Visit Website
                  <ArrowSquareOut size={14} weight="bold" />
                </ProjectLinkText>
              )}
            </div>
          </article>
        ))}

        <div className="hidden w-px shrink-0 lg:block" aria-hidden />
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
