import type { ReactNode, MouseEvent } from "react";

interface ProjectLinkIconProps {
  href?: string;
  label: string;
  children: ReactNode;
  stopPropagation?: boolean;
}

export function ProjectLinkIcon({ href, label, children, stopPropagation }: ProjectLinkIconProps) {
  if (!href) {
    return (
      <span
        aria-hidden
        title={`${label} — coming soon`}
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border/50 text-ink-dim/40"
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
      aria-label={label}
      onClick={stopPropagation ? (e: MouseEvent) => e.stopPropagation() : undefined}
      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-ink-dim transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}

interface ProjectLinkTextProps {
  href?: string;
  label: string;
  children: ReactNode;
  stopPropagation?: boolean;
}

export function ProjectLinkText({ href, label, children, stopPropagation }: ProjectLinkTextProps) {
  if (!href) {
    return (
      <span
        title={`${label} — coming soon`}
        className="inline-flex cursor-not-allowed items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-dim/40"
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
      aria-label={label}
      onClick={stopPropagation ? (e: MouseEvent) => e.stopPropagation() : undefined}
      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
