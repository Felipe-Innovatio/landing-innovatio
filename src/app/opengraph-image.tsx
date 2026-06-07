import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Innovatio-IT — Estudio de software en Santiago de Chile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F4F1EA",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          padding: "56px 64px",
          position: "relative",
        }}
      >
        <svg
          width="380"
          height="380"
          viewBox="0 0 100 100"
          fill="none"
          style={{ position: "absolute", right: -60, bottom: -80 }}
        >
          <path
            d="M50 8v84M14 29l72 42M14 71l72-42"
            stroke="#1E3AFF"
            strokeWidth="11"
            strokeLinecap="round"
            opacity="0.16"
          />
        </svg>

        <div style={{ display: "flex", alignItems: "baseline", fontSize: 34, fontWeight: 800, color: "#161616" }}>
          innovatio<span style={{ color: "#1E3AFF" }}>*</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 800,
              color: "#161616",
              lineHeight: 1.02,
              letterSpacing: -4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Software con</span>
            <span style={{ display: "flex" }}>
              oficio<span style={{ color: "#1E3AFF" }}>.</span>
            </span>
          </div>
          <div style={{ fontSize: 26, color: "#57544C", marginTop: 28, display: "flex" }}>
            Desarrollo · Ciberseguridad · IA — Santiago de Chile
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            fontSize: 22,
            fontWeight: 700,
            color: "#FFFFFF",
            background: "#1E3AFF",
            padding: "14px 30px",
            borderRadius: 999,
          }}
        >
          innovatio-it.com
        </div>
      </div>
    ),
    { ...size }
  );
}
