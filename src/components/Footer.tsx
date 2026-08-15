import { Container } from "./Container";
import { siteConfig } from "@/lib/config";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border py-10 print:hidden">
      <Container className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-muted-dim">
          © {new Date().getFullYear()} {siteConfig.name} — built with Next.js
        </p>
        <div className="flex gap-5 text-muted">
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="transition-colors hover:text-accent">
            <MailIcon />
          </a>
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
            <GithubIcon />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
            <LinkedinIcon />
          </a>
        </div>
      </Container>
    </footer>
  );
}
