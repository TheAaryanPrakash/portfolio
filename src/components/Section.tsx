import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  index?: string;
  label?: string;
  tone?: "field" | "dark";
}

export function Section({
  id,
  children,
  className = "",
  index,
  label,
  tone = "field",
}: SectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 ${
        isDark ? "bg-bg text-ink" : "bg-field text-field-ink"
      } ${className}`}
    >
      <div className="container-page">
        {label && (
          <div className="mb-10 flex items-center gap-3 sm:mb-14">
            {index && (
              <span
                className={`font-mono text-xs font-semibold tabular-nums ${
                  isDark ? "text-accent" : "text-field-ink"
                }`}
              >
                {index}
              </span>
            )}
            <h2
              className={`font-display text-sm font-medium uppercase tracking-[0.2em] ${
                isDark ? "text-ink-muted" : "text-field-muted"
              }`}
            >
              {label}
            </h2>
            <span className={`h-px flex-1 ${isDark ? "bg-border" : "bg-field-line"}`} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
