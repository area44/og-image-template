import earthBg from "./earth-bg.png";

interface OGImageProps {
  title?: string;
  category?: string;
  backgroundImage?: string;
}

export default function OGImage({
  title = "Global Network Infrastructure & Edge Operations",
  category = "CHANGELOG",
  backgroundImage = earthBg,
}: OGImageProps = {}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Geist Sans, sans-serif",
      }}
    >
      {/* Background Image */}
      {backgroundImage ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={backgroundImage}
            alt="Background"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Dark Overlay for Readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            }}
          />
        </div>
      ) : null}

      {/* Main Container Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          zIndex: 10,
        }}
      >
        {/* Top Header Section: Vercel Triangle & Category */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg
            width={48}
            height={42}
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
          </svg>
          {category && (
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#a1a1aa",
                textTransform: "uppercase",
                marginLeft: "8px",
              }}
            >
              {category}
            </span>
          )}
        </div>

        {/* Title Headline Section */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "780px" }}>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.12,
              color: "#ffffff",
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
