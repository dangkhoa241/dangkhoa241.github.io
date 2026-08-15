import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/lib/config";

const links = [
  { href: "/projects", label: "projects" },
  { href: "/certs", label: "certifications" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md print:hidden">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight text-foreground">
          <span className="text-accent">~/</span>
          {siteConfig.name.split(" ")[0].toLowerCase()}
        </Link>
        <nav className="flex gap-6 font-mono text-xs text-muted">
          {links.map((link, i) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              <span className="text-accent/70">0{i + 1}.</span> {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
