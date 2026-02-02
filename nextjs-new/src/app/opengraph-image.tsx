import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "CrosDev - Digital Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.5,
        }}
      />

      {/* Logo Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          style={{ filter: "drop-shadow(0 0 20px rgba(0, 150, 255, 0.5))" }}
        >
          <path
            d="M10.5 4.5L3 12L10.5 19.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 4.5L21 12L13.5 19.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 4L10 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.05em",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Cros<span style={{ color: "#3B82F6" }}>Dev</span>
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#9CA3AF",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Digital Solutions
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
