import type { IconName } from "@/types/content";

type IconProps = {
  name: IconName;
  className?: string;
};

const common = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  if (name === "signal") {
    return <svg {...common} className={className}><path d="M4 16h2.5l2.3-8 3.4 12 2.4-8H20" /></svg>;
  }
  if (name === "layers") {
    return <svg {...common} className={className}><path d="m12 3 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4" /><path d="m4 17 8 4 8-4" /></svg>;
  }
  if (name === "validation") {
    return <svg {...common} className={className}><path d="M12 3 4.8 6v5.4c0 4.5 2.9 7.9 7.2 9.6 4.3-1.7 7.2-5.1 7.2-9.6V6L12 3Z" /><path d="m8.8 12 2 2 4.5-5" /></svg>;
  }
  if (name === "evidence") {
    return <svg {...common} className={className}><path d="M6 3h9l3 3v15H6V3Z" /><path d="M15 3v4h4" /><path d="M9 12h6M9 16h5M9 8h2" /></svg>;
  }
  if (name === "deployment") {
    return <svg {...common} className={className}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>;
  }
  if (name === "approval") {
    return <svg {...common} className={className}><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="m8 12 2.5 2.5L16 9" /></svg>;
  }
  return <svg {...common} className={className}><path d="M12 3 4.8 6v5.4c0 4.5 2.9 7.9 7.2 9.6 4.3-1.7 7.2-5.1 7.2-9.6V6L12 3Z" /><path d="M9 12h6" /></svg>;
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 10h12m-4-4 4 4-4 4" /></svg>;
}

export function MenuIcon() {
  return <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" d="M3 5h14M3 10h14M3 15h14" /></svg>;
}
