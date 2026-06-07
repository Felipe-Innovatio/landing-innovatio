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
    <nav className="sticky top-28">
      <p className="text-[13px] font-semibold mb-4" style={{ color: "var(--muted)" }}>
        En este artículo
      </p>
      <ul className="flex flex-col gap-2 pl-4" style={{ borderLeft: "2px solid var(--line)" }}>
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="block text-[13.5px] leading-snug transition-colors duration-200"
              style={{
                color: activeId === h.id ? "var(--accent)" : "var(--muted)",
                fontWeight: activeId === h.id ? 600 : 400,
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
    </nav>
  );
}
