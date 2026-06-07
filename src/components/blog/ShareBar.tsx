"use client";

import { useState } from "react";

export default function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // sin acceso al portapapeles
    }
  };

  const shareText = encodeURIComponent(`${title} — Innovatio-IT`);

  const itemStyle = {
    background: "var(--surface)",
    border: "1px solid var(--line)",
    color: "var(--foreground)",
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="text-[13px] font-semibold mr-1" style={{ color: "var(--muted)" }}>
        Compartir
      </span>
      <button
        onClick={handleCopy}
        className="text-[13.5px] font-semibold px-4 py-2 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
        style={{ ...itemStyle, cursor: "pointer" }}
      >
        {copied ? "¡Copiado!" : "Copiar link"}
      </button>
      <a
        href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13.5px] font-semibold px-4 py-2 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
        style={itemStyle}
      >
        WhatsApp
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13.5px] font-semibold px-4 py-2 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
        style={itemStyle}
      >
        LinkedIn
      </a>
    </div>
  );
}
