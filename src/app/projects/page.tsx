import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <Container>
      <Reveal>
        <p className="font-mono text-sm text-accent">01.</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Projects</h1>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
        {projects.length === 0 && (
          <p className="font-mono text-sm text-muted">
            No projects yet. Add a Markdown file to content/projects.
          </p>
        )}
      </div>
    </Container>
  );
}
