import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Magnetic } from "./Magnetic";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#live-projects", label: "Live" },
  { href: "#writing", label: "Writing" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#photography", label: "Photography" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-white/10 bg-bg/95 pl-5 pr-2 shadow-[0_8px_30px_rgb(0,0,0,0.35)] backdrop-blur-md sm:h-16 sm:pr-2.5">
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-tight text-ink"
          aria-label="Aaryan Prakash — home"
        >
          AP<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Magnetic className="hidden lg:inline-block" strength={10}>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-on-accent"
          >
            Let's talk
          </a>
        </Magnetic>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <List size={18} />}
        </button>
      </div>

      {open && (
        <nav
          className="mx-auto mt-3 max-w-4xl rounded-3xl border border-white/10 bg-bg px-6 py-6 shadow-[0_8px_30px_rgb(0,0,0,0.35)] lg:hidden"
          aria-label="Primary mobile"
        >
          <div className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit rounded-full bg-accent px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-on-accent"
            >
              Let's talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
