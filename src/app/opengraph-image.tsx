import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Innovatio-IT — Desarrollo de software, Ciberseguridad e IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#06080f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#141c2e 1px, transparent 1px), linear-gradient(90deg, #141c2e 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.5,
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(55,138,221,0.15)",
            filter: "blur(80px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect x="1" y="1" width="42" height="42" rx="10" stroke="#378ADD" strokeWidth="2"/>
              <circle cx="22" cy="11" r="3.5" fill="#378ADD"/>
              <line x1="22" y1="17" x2="22" y2="33" stroke="#378ADD" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="13" y1="17" x2="31" y2="17" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
              <line x1="13" y1="33" x2="31" y2="33" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: 28, fontWeight: 600, color: "#eaf2fb", letterSpacing: "-0.5px" }}>
              innovatio<span style={{ color: "#378ADD" }}>-it</span>
            </span>
          </div>

          {/* Headline */}
          <div style={{ fontSize: 56, fontWeight: 700, color: "#eaf2fb", textAlign: "center", lineHeight: 1.1, letterSpacing: "-2px", maxWidth: 800 }}>
            Tecnología que{" "}
            <span style={{ color: "#378ADD" }}>transforma</span>
            {" "}tu negocio
          </div>

          {/* Subtitle */}
          <div style={{ fontSize: 22, color: "#8a9ab5", marginTop: 24, textAlign: "center" }}>
            Desarrollo · Ciberseguridad · Inteligencia Artificial
          </div>

          {/* URL */}
          <div style={{ fontSize: 16, color: "#378ADD", marginTop: 48, background: "rgba(55,138,221,0.1)", padding: "8px 20px", borderRadius: 20 }}>
            innovatio-it.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
