import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X, GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import type { Project } from "../data/content";

function ModalLinkPill({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return (
      <span
        title={`${label} — coming soon`}
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border/50 px-4 py-2 font-mono text-xs text-ink-dim/40"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    lastFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      lastFocused.current?.focus();
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-bg/80 px-4 py-8 backdrop-blur-sm sm:py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-3xl rounded-3xl border border-border bg-surface p-8 sm:p-12"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <X size={18} />
            </button>

            <p className="pr-14 font-mono text-xs uppercase tracking-[0.1em] text-ink-dim">
              {project.category}
            </p>
            <p className="mt-1 font-mono text-xs text-ink-dim">{project.period}</p>
            {project.status === "ongoing" && (
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                In progress
              </span>
            )}

            <h3
              id="project-modal-title"
              className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
            >
              {project.title}
            </h3>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink-muted">
              {project.summary}
            </p>

            {(project.githubUrl !== undefined || project.liveUrl !== undefined) && (
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {project.githubUrl !== undefined && (
                  <ModalLinkPill href={project.githubUrl || undefined} label="View on GitHub">
                    <GithubLogo size={15} />
                    View on GitHub
                  </ModalLinkPill>
                )}
                {project.liveUrl !== undefined && (
                  <ModalLinkPill href={project.liveUrl || undefined} label="Visit live site">
                    <ArrowSquareOut size={15} />
                    Visit live site
                  </ModalLinkPill>
                )}
              </div>
            )}

            {project.problem ? (
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-dim">
                    Why I built it
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                    What I did
                  </p>
                  <ul className="mt-2 space-y-2">
                    {project.approach.map((line, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-dim" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <ul className="mt-8 space-y-2">
                {project.approach.map((line, idx) => (
                  <li key={idx} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-dim" />
                    {line}
                  </li>
                ))}
              </ul>
            )}

            {project.reflection && (
              <p className="mt-6 max-w-[65ch] border-l-2 border-accent/40 pl-4 text-sm italic leading-relaxed text-ink-muted">
                {project.reflection}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
