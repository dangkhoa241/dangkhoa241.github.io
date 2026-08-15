export function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-accent/25 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
      {children}
    </span>
  );
}
