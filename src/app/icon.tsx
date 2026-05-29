import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06080f",
          borderRadius: 7,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 44 44" fill="none">
          <rect x="1" y="1" width="42" height="42" rx="9" stroke="#378ADD" strokeWidth="2.5" fill="rgba(55,138,221,0.1)" />
          <circle cx="22" cy="11" r="3.5" fill="#378ADD" />
          <line x1="22" y1="17" x2="22" y2="33" stroke="#378ADD" strokeWidth="3" strokeLinecap="round" />
          <line x1="13" y1="17" x2="31" y2="17" stroke="#85B7EB" strokeWidth="2" strokeLinecap="round" />
          <line x1="13" y1="33" x2="31" y2="33" stroke="#85B7EB" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
