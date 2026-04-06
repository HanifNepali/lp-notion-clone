import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Portfolio Project - Notion Landing Page Rebuild";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#121212",
        padding: "80px",
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: "rgba(255,255,255,0.6)",
          marginBottom: 24,
        }}
      >
        Figma to Next.js
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.15,
          maxWidth: 900,
        }}
      >
        Portfolio Project: Notion Landing Page Rebuild
      </div>
    </div>,
    { ...size },
  );
}
