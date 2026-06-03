"use client";

import { useEffect, useState } from "react";

interface Heading {
  text: string;
  id: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúñ\s]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function TableOfContents({ contentHtml }: { contentHtml: string }) {
  const [activeId, setActiveId] = useState("");
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const h3Matches = contentHtml.match(/<h3[^>]*>(.*?)<\/h3>/g) || [];
    const parsed = h3Matches.map((h) => {
      const text = h.replace(/<[^>]+>/g, "");
      const idMatch = h.match(/id="([^"]+)"/);
      const id = idMatch ? idMatch[1] : slugify(text);
      return { text, id, level: 3 };
    });
    setHeadings(parsed);
  }, [contentHtml]);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block">
      <div className="sticky top-32">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
          En este artículo
        </p>
        <ul className="space-y-2 border-l pl-4" style={{ borderColor: "var(--border)" }}>
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className="toc-link block text-sm leading-snug border-l-2 -ml-[17px] pl-4 transition-colors"
                style={{
                  color: activeId === h.id ? "var(--accent-light)" : "var(--muted)",
                  borderLeftColor: activeId === h.id ? "var(--accent)" : "transparent",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
