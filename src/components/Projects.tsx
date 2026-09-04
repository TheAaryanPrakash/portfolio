import { ProjectGallery } from "./ProjectGallery";
import { projects, hostedProjectSlugs } from "../data/content";

const RESEARCH_PROJECTS = projects.filter((p) => !hostedProjectSlugs.includes(p.slug));

export function Projects() {
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
        Scroll through, then click a card for the full case study.
      </p>

      <ProjectGallery projects={RESEARCH_PROJECTS} ghostText="Selected Work" />
    </section>
  );
}
