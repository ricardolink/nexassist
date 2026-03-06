import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NexAssist — Your Personal Luxury Concierge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#080d18",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,169,98,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,98,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diamond logo mark */}
        <svg width="120" height="120" viewBox="0 0 36 36" fill="none">
          <polygon
            points="18,1.5 34.5,18 18,34.5 1.5,18"
            stroke="#C9A962"
            strokeWidth="0.9"
            strokeOpacity="0.85"
          />
          <polygon
            points="18,7 31,18 18,29 5,18"
            stroke="#C9A962"
            strokeWidth="0.45"
            strokeOpacity="0.35"
          />
          <path
            d="M12 24.5V11.5L24 24.5V11.5"
            stroke="#C9A962"
            strokeWidth="1.6"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            marginTop: 32,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#ffffff",
            display: "flex",
          }}
        >
          Nex
          <span style={{ color: "#C9A962" }}>Assist</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 16,
            fontSize: 22,
            letterSpacing: "0.45em",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
          }}
        >
          Personal Concierge
        </div>

        {/* Gold divider */}
        <div
          style={{
            marginTop: 40,
            width: 80,
            height: 1,
            background: "rgba(201,169,98,0.4)",
          }}
        />

        {/* Domain */}
        <div
          style={{
            marginTop: 24,
            fontSize: 18,
            letterSpacing: "0.25em",
            color: "rgba(201,169,98,0.6)",
          }}
        >
          usenexassist.com
        </div>
      </div>
    ),
    { ...size }
  );
}
