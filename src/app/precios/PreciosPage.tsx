import ScrollReveal from "@/components/ui/ScrollReveal";
import Pricing from "@/components/sections/Pricing";

export default function PreciosPage() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-4">
        <ScrollReveal>
          <h1
            className="display font-extrabold"
            style={{ fontSize: "clamp(42px, 7vw, 96px)", color: "var(--foreground)" }}
          >
            Precios<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
        </ScrollReveal>
      </section>
      <Pricing />
    </main>
  );
}
