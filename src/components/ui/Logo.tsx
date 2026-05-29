import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Logo({ size = "md", href = "/" }: LogoProps) {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 44 : 34;

  const mark = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="42" height="42" rx="9" stroke="#378ADD" strokeWidth="1.5" fill="rgba(55,138,221,0.06)"/>
      <circle cx="22" cy="11" r="3" fill="#378ADD"/>
      <line x1="22" y1="16.5" x2="22" y2="32.5" stroke="#378ADD" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="13" y1="16.5" x2="31" y2="16.5" stroke="#85B7EB" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="32.5" x2="31" y2="32.5" stroke="#85B7EB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const textSize =
    size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";

  const content = (
    <span className={`flex items-center gap-2.5 font-semibold ${textSize} tracking-tight`}>
      {mark}
      <span style={{ color: "var(--foreground)" }}>
        innovatio<span style={{ color: "var(--accent)" }}>-it</span>
      </span>
    </span>
  );

  return href ? (
    <Link href={href} aria-label="Innovatio-IT — Inicio">
      {content}
    </Link>
  ) : (
    content
  );
}
