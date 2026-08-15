import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container>
      <Reveal>
        <p className="font-mono text-sm text-accent">04.</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Get in touch</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          The easiest way to reach me is by email. I&apos;m also on GitHub and LinkedIn — feel free to say hi.
        </p>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-8 flex flex-col gap-3 sm:max-w-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
          >
            <MailIcon className="size-5 text-accent" />
            <span className="font-mono text-sm text-foreground">{siteConfig.email}</span>
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
          >
            <GithubIcon className="size-5 text-accent" />
            <span className="font-mono text-sm text-foreground">GitHub</span>
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
          >
            <LinkedinIcon className="size-5 text-accent" />
            <span className="font-mono text-sm text-foreground">LinkedIn</span>
          </a>
        </div>
      </Reveal>
    </Container>
  );
}
