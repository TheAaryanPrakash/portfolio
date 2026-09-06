import { useState } from "react";
import { motion } from "motion/react";
import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import { StaggerGroup } from "./Reveal";
import { staggerItem } from "../lib/motion";
import { ProjectModal } from "./ProjectModal";
import { ProjectLinkIcon } from "./ProjectLinkIcon";
import { projects, hostedProjectSlugs, type Project } from "../data/content";

const RESEARCH_PROJECTS = projects.filter((p) => !hostedProjectSlugs.includes(p.slug));

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-bg py-20 text-ink sm:py-28">
      <div className="container-page mb-10 flex items-center gap-3 sm:mb-14">
        <span className="font-mono text-xs font-semibold tabular-nums text-accent">02</span>
        <h2 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">
          Projects
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>

      <p className="container-page -mt-4 mb-8 text-sm text-ink-dim sm:mb-10">
        Click a card for the full case study.
      </p>

      <div className="container-page">
        <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {RESEARCH_PROJECTS.map((project) => (
            <motion.article
              key={project.slug}
              variants={staggerItem}
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
              className="group flex cursor-pointer flex-col rounded-2xl border border-border bg-surface p-7 transition-colors duration-200 hover:border-border-hover"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-dim">
                  {project.period}
                </p>
                <div className="flex items-center gap-2">
                  {project.status === "ongoing" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                      In progress
                    </span>
                  )}
                  {project.githubUrl !== undefined && (
                    <ProjectLinkIcon
                      href={project.githubUrl || undefined}
                      label="View on GitHub"
                      stopPropagation
                    >
                      <GithubLogo size={16} />
                    </ProjectLinkIcon>
                  )}
                </div>
              </div>

              <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-ink-dim">
                {project.category}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-accent">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

              <ul className="mt-4 space-y-2">
                {project.approach.slice(0, 3).map((line, idx) => (
                  <li key={idx} className="flex gap-2 text-xs leading-relaxed text-ink-dim">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent">
                View case study
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
