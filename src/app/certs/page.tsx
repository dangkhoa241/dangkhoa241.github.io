import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon } from "@/components/icons";
import { getAllCerts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Certifications",
};

export default function CertsPage() {
  const certs = getAllCerts();

  return (
    <Container>
      <Reveal>
        <p className="font-mono text-sm text-accent">02.</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Certifications</h1>
      </Reveal>
      <ul className="mt-8 space-y-4">
        {certs.map((cert, i) => (
          <Reveal key={cert.slug} delay={i * 60}>
            <li className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40">
              <div>
                <h3 className="font-medium text-foreground">{cert.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {cert.issuer} · {new Date(cert.date).toLocaleDateString(undefined, { year: "numeric", month: "long" })}
                </p>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-accent transition-colors hover:opacity-80"
                >
                  view credential <ArrowUpRightIcon className="size-3.5" />
                </a>
              )}
            </li>
          </Reveal>
        ))}
        {certs.length === 0 && (
          <p className="font-mono text-sm text-muted">
            No certifications yet. Add a Markdown file to content/certs.
          </p>
        )}
      </ul>
    </Container>
  );
}
