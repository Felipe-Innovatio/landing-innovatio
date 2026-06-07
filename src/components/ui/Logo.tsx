import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  href?: string;
  /** invertido: para usar sobre fondos oscuros */
  inverted?: boolean;
}

export default function Logo({ size = "md", href = "/", inverted = false }: LogoProps) {
  const textSize = size === "sm" ? "text-[19px]" : size === "lg" ? "text-[26px]" : "text-[22px]";
  const ink = inverted ? "#F4F1EA" : "var(--foreground)";

  const content = (
    <span
      className={`display inline-flex items-baseline font-extrabold tracking-tight ${textSize}`}
      style={{ color: ink }}
    >
      innovatio
      <span aria-hidden="true" style={{ color: "var(--accent)" }}>
        *
      </span>
    </span>
  );

  return href ? (
    <Link href={href} aria-label="Innovatio — Inicio">
      {content}
    </Link>
  ) : (
    content
  );
}
