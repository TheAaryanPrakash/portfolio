import { ProjectGallery } from "./ProjectGallery";
import { projects, hostedProjectSlugs } from "../data/content";

const LIVE_PROJECTS = projects.filter((p) => hostedProjectSlugs.includes(p.slug));

export function LiveProjects() {
  return (
    <section id="live-projects" className="bg-field py-20 text-field-ink sm:py-28">
      <div className="container-page mb-10 flex items-center gap-3 sm:mb-14">
        <span className="font-mono text-xs font-semibold tabular-nums text-field-ink">03</span>
        <h2 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-field-muted">
          Live Projects
        </h2>
        <span className="h-px flex-1 bg-field-line" />
      </div>

      <p className="container-page -mt-4 mb-8 text-sm text-field-muted sm:mb-10">
        These two are actually deployed — click through for how they're built and hosted.
      </p>

      <ProjectGallery projects={LIVE_PROJECTS} variant="light" ghostText="Live" />
    </section>
  );
}
