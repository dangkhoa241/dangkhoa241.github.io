import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/Badge";
import { GraduationCapIcon } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { resume, type ResumeEntry } from "@/lib/resume";

function ExperienceRow({ entry }: { entry: ResumeEntry }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[160px_1fr]">
      <span className="font-mono text-xs text-muted-dim sm:pt-1">
        {entry.start} – {entry.end}
      </span>
      <div>
        <h3 className="font-semibold text-foreground">
          {entry.title} <span className="text-muted">–</span> {entry.org}
        </h3>
        {entry.bullets.length > 0 && (
          <p className="mt-3 leading-relaxed text-muted">{entry.bullets.join(" ")}</p>
        )}
        {entry.tags && entry.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function EducationCard({ entry }: { entry: ResumeEntry }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <div className="flex items-start gap-3">
          <GraduationCapIcon className="mt-0.5 size-5 shrink-0 text-accent" />
          <div>
            <h3 className="font-medium text-foreground">{entry.title}</h3>
            <p className="text-sm text-muted">
              {entry.org}
              {entry.location ? ` · ${entry.location}` : ""}
            </p>
          </div>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted-dim">
          {entry.start} – {entry.end}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 h-[420px]" />
        <Container className="relative flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:max-w-2xl">
            <Reveal>
              <p className="font-mono text-sm text-accent">hi, my name is</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
                {siteConfig.name}.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight text-muted sm:text-5xl">
                {siteConfig.title}.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted">{siteConfig.bio}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap gap-4 text-sm">
                <Link
                  href="/projects"
                  className="rounded-md border border-accent/40 bg-accent-soft px-5 py-3 font-mono font-medium text-accent transition-colors hover:bg-accent/15"
                >
                  View my work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-border px-5 py-3 font-mono font-medium text-foreground transition-colors hover:border-border-strong hover:bg-white/[0.03]"
                >
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="group relative shrink-0">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent/50 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
              <Image
                src="/avt.jpg"
                alt={siteConfig.name}
                width={260}
                height={260}
                priority
                className="relative rounded-2xl object-cover shadow-2xl shadow-black/40 grayscale-[15%] transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="mt-28">
        <Container>
          <Reveal>
            <h2 className="flex items-center gap-3 font-mono text-lg font-medium text-foreground sm:text-xl">
              Experience
              <span className="h-px flex-1 bg-border sm:w-32 sm:flex-none" />
            </h2>
          </Reveal>
          <div className="mt-8">
            {resume.experience.map((entry, i) => (
              <Reveal key={entry.org} delay={i * 80}>
                <ExperienceRow entry={entry} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28">
        <Container>
          <Reveal>
            <h2 className="flex items-center gap-3 font-mono text-lg font-medium text-foreground sm:text-xl">
              Education
              <span className="h-px flex-1 bg-border sm:w-32 sm:flex-none" />
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {resume.education.map((entry, i) => (
              <Reveal key={entry.org} delay={i * 80}>
                <EducationCard entry={entry} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28">
        <Container>
          <Reveal>
            <h2 className="flex items-center gap-3 font-mono text-lg font-medium text-foreground sm:text-xl">
              Tech Stack
              <span className="h-px flex-1 bg-border sm:w-32 sm:flex-none" />
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {resume.skills
              .filter((group) => ["Languages", "Frameworks", "Databases", "Tools"].includes(group.label))
              .map((group, i) => (
                <Reveal key={group.label} delay={i * 80}>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-dim">{group.label}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.value.split(",").map((tech) => (
                        <Badge key={tech}>{tech.trim()}</Badge>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
