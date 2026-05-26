import type { ReactNode } from "react";

export default function HeroPanel({ children }: { children: ReactNode }) {
  return <div className="landing-hero-panel">{children}</div>;
}
