import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-field-line bg-field py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-field-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.github.url}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-field-muted transition-opacity hover:opacity-70"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-field-muted transition-opacity hover:opacity-70"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs text-field-muted transition-opacity hover:opacity-70"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
