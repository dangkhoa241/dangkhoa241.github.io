export interface ProjectFrontmatter {
  title: string;
  slug: string;
  summary: string;
  date: string;
  tags: string[];
  featured?: boolean;
  order?: number;
  repoUrl?: string;
  liveUrl?: string;
  reportUrlEn?: string;
  reportUrlVn?: string;
  coverImage?: string;
}

export interface Project extends ProjectFrontmatter {
  contentHtml: string;
}

export interface CertFrontmatter {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  slug: string;
}

export type Cert = CertFrontmatter;
