import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/config";
import { resume, type ResumeEntry } from "@/lib/resume";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Resume",
};

const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="border-b border-black/70 pb-1 text-lg font-semibold tracking-wide text-black"
      style={{ fontVariant: "small-caps" }}
    >
      {children}
    </h2>
  );
}

function EntryRow({ entry }: { entry: ResumeEntry }) {
  return (
    <div className="mt-3 break-inside-avoid first:mt-2">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <span className="font-bold text-black">{entry.org}</span>
        <span className="text-sm text-black">
          {entry.start} – {entry.end}
        </span>
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <span className="italic text-black/90">{entry.title}</span>
        {entry.location && <span className="text-sm italic text-black/90">{entry.location}</span>}
      </div>
      {entry.bullets.length > 0 && (
        <ul className="mt-1 ml-5 list-disc space-y-0.5 text-[0.93rem] leading-snug text-black/90">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ResumePage() {
  return (
    <Container className="max-w-5xl">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
          <div>
            <p className="font-mono text-sm text-accent">03.</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Resume</h1>
          </div>
          <a
            href={siteConfig.resumeUrl}
            download
            className="rounded-md border border-accent/40 bg-accent-soft px-5 py-2.5 font-mono text-sm font-medium text-accent transition-colors hover:bg-accent/15"
          >
            Download PDF
          </a>
        </div>
        <p className="mt-4 font-mono text-xs text-muted-dim print:hidden">
          Here is my resume — you can click the button above to download it as a PDF.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div
          className={`${serif.className} mx-auto mt-8 w-full max-w-[850px] rounded-xl bg-white px-8 py-10 text-black shadow-2xl shadow-black/40 sm:px-14 sm:py-12 print:mt-0 print:max-w-none print:rounded-none print:px-0 print:py-0 print:shadow-none`}
        >
          <header className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black">{siteConfig.name}</h1>
            <p className="mt-1 text-sm text-black/80">{siteConfig.location}</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-black/90">
              <span className="inline-flex items-center gap-1.5">
                <PhoneIcon className="size-3.5" />
                {resume.phone}
              </span>
              <span className="text-black/30">|</span>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 underline decoration-black/30 underline-offset-2">
                <MailIcon className="size-3.5" />
                {siteConfig.email}
              </a>
              <span className="text-black/30">|</span>
              <a
                href={siteConfig.social.linkedin}
                className="inline-flex items-center gap-1.5 underline decoration-black/30 underline-offset-2"
              >
                <LinkedinIcon className="size-3.5" />
                LinkedIn
              </a>
              <span className="text-black/30">|</span>
              <a
                href={siteConfig.social.github}
                className="inline-flex items-center gap-1.5 underline decoration-black/30 underline-offset-2"
              >
                <GithubIcon className="size-3.5" />
                {siteConfig.social.github.replace("https://", "")}
              </a>
            </div>
          </header>

          <p className="mt-4 text-center text-[0.93rem] italic leading-snug text-black/80">{resume.summary}</p>

          <section className="mt-6">
            <SectionHeading>Education</SectionHeading>
            {resume.education.map((entry) => (
              <EntryRow key={entry.org} entry={entry} />
            ))}
          </section>

          <section className="mt-6">
            <SectionHeading>Experience</SectionHeading>
            {resume.experience.map((entry) => (
              <EntryRow key={entry.org} entry={entry} />
            ))}
          </section>

          <section className="mt-6">
            <SectionHeading>Skills</SectionHeading>
            <div className="mt-2 space-y-1 text-[0.93rem] leading-snug">
              {resume.skills.map((skill) => (
                <p key={skill.label}>
                  <span className="font-bold">{skill.label}: </span>
                  <span className="text-black/90">{skill.value}</span>
                </p>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <SectionHeading>Projects</SectionHeading>
            {resume.projects.map((project) => (
              <div key={project.name} className="mt-3 break-inside-avoid first:mt-2">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span className="font-bold underline decoration-black/30">{project.name}</span>
                  <span className="text-sm italic text-black/90">{project.org}</span>
                </div>
                <ul className="mt-1 ml-5 list-disc space-y-0.5 text-[0.93rem] leading-snug text-black/90">
                  <li>
                    <span className="font-semibold">Description: </span>
                    {project.description}
                  </li>
                  <li>
                    <span className="font-semibold">Technologies: </span>
                    {project.tech}
                  </li>
                  {project.responsibilities && (
                    <li>
                      <span className="font-semibold">Responsibilities: </span>
                      {project.responsibilities}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </Reveal>
    </Container>
  );
}
