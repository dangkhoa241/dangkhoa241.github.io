import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown";
import type { Project, ProjectFrontmatter, Cert, CertFrontmatter } from "./types";

const projectsDir = path.join(process.cwd(), "content", "projects");
const certsDir = path.join(process.cwd(), "content", "certs");

function readMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
}

export function getAllProjectSlugs(): string[] {
  return readMarkdownFiles(projectsDir).map((file) => file.replace(/\.md$/, ""));
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const fullPath = path.join(projectsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = await markdownToHtml(content);

  return {
    ...(data as ProjectFrontmatter),
    slug,
    contentHtml,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = getAllProjectSlugs();
  const projects = await Promise.all(slugs.map((slug) => getProjectBySlug(slug)));
  return projects.sort((a, b) => {
    if (a.order != null && b.order != null) return a.order - b.order;
    if (a.order != null) return -1;
    if (b.order != null) return 1;
    return a.date < b.date ? 1 : -1;
  });
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((p) => p.featured);
}

export function getAllCerts(): Cert[] {
  const files = readMarkdownFiles(certsDir);
  const certs = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(certsDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { ...(data as CertFrontmatter), slug };
  });
  return certs.sort((a, b) => (a.date < b.date ? 1 : -1));
}
