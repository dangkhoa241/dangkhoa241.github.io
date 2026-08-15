import Link from "next/link";
import { Badge } from "./Badge";
import { ArrowUpRightIcon, FolderIcon } from "./icons";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_30px_-12px_var(--accent)]"
    >
      <div className="flex items-start justify-between">
        <FolderIcon className="size-6 text-accent" />
        <ArrowUpRightIcon className="size-4 text-muted-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
      <h3 className="mt-4 font-medium text-foreground transition-colors group-hover:text-accent">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      {project.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </Link>
  );
}
