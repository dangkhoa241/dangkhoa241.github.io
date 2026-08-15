import { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-4xl px-6 print:max-w-none print:px-0 ${className}`}>{children}</div>;
}
