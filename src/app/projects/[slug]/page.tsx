import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";
import { ArrowUpRightIcon } from "@/components/icons";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getAllProjectSlugs().includes(slug)) return {};
  const project = await getProjectBySlug(slug);
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getAllProjectSlugs().includes(slug)) {
    notFound();
  }

  const project = await getProjectBySlug(slug);

  return (
    <Container>
      <Link href="/projects" className="font-mono text-xs text-muted transition-colors hover:text-accent">
        ← all projects
      </Link>

      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{project.title}</h1>
      <p className="mt-2 text-muted">{project.summary}</p>

      {project.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}

      <div className="mt-5 flex gap-5 font-mono text-sm">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
          >
            source <ArrowUpRightIcon className="size-3.5" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
          >
            live site <ArrowUpRightIcon className="size-3.5" />
          </a>
        )}
        {project.reportUrlEn && (
          <a
            href={project.reportUrlEn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
          >
            report (EN) <ArrowUpRightIcon className="size-3.5" />
          </a>
        )}
        {project.reportUrlVn && (
          <a
            href={project.reportUrlVn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
          >
            report (VN) <ArrowUpRightIcon className="size-3.5" />
          </a>
        )}
      </div>

      {project.reportNote && <p className="mt-2 font-mono text-xs text-muted-dim">{project.reportNote}</p>}

      {project.coverImage && (
        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border border-border">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            priority
            className="object-cover object-top"
          />
        </div>
      )}

      <article
        className="prose prose-invert mt-10 max-w-none border-t border-border pt-10"
        dangerouslySetInnerHTML={{ __html: project.contentHtml }}
      />
    </Container>
  );
}
