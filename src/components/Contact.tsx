import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  EnvelopeSimple,
  MapPin,
  GithubLogo,
  LinkedinLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { profile } from "../data/content";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact" index="08" label="Contact">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <h3 className="font-display text-3xl font-bold leading-tight text-field-ink sm:text-4xl">
            Let's talk about something worth building.
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-field-muted">
            Open to research collaborations, internships, and anything at the intersection of
            AI/ML and security. Reach out directly or use the form.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm font-medium text-field-ink transition-opacity hover:opacity-70"
              >
                <EnvelopeSimple size={18} />
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-field-muted">
              <MapPin size={18} />
              {profile.location}
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.github.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-field-line-strong px-4 py-2 font-mono text-xs text-field-ink transition-colors hover:bg-bg hover:text-ink"
            >
              <GithubLogo size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-field-line-strong px-4 py-2 font-mono text-xs text-field-ink transition-colors hover:bg-bg hover:text-ink"
            >
              <LinkedinLogo size={16} />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-field"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-field"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-field"
                placeholder="What's on your mind?"
              />
            </Field>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Send Message
              <ArrowUpRight size={15} weight="bold" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[11px] uppercase tracking-[0.15em] text-field-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
