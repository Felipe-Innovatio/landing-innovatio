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
          background: "#F4F1EA",
          borderRadius: 8,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 8v84M14 29l72 42M14 71l72-42"
            stroke="#1E3AFF"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
