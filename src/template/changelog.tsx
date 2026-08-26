interface OGImageProps {
  title?: string;
  category?: string;
}

export default function OGImage({
  title = "Optimized CDN caching and deploying of immutable static assets",
  category = "CHANGELOG",
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
      {/* Subtle World Map Dotted Grid Pattern on the Right */}
      <div
        style={{
          position: "absolute",
          right: "-40px",
          top: "0px",
          bottom: "0px",
          width: "720px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.85,
        }}
      >
        <svg
          width={720}
          height={630}
          viewBox="0 0 720 630"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* World map dot matrix grid */}
          <g fill="#2e2e2e">
            {/* North America */}
            <rect x="120" y="80" width="8" height="8" rx="2" />
            <rect x="140" y="80" width="8" height="8" rx="2" />
            <rect x="160" y="80" width="8" height="8" rx="2" />
            <rect x="180" y="80" width="8" height="8" rx="2" />
            <rect x="200" y="80" width="8" height="8" rx="2" fill="#404040" />

            <rect x="100" y="100" width="8" height="8" rx="2" />
            <rect x="120" y="100" width="8" height="8" rx="2" />
            <rect x="140" y="100" width="8" height="8" rx="2" />
            <rect x="160" y="100" width="8" height="8" rx="2" />
            <rect x="180" y="100" width="8" height="8" rx="2" />
            <rect x="200" y="100" width="8" height="8" rx="2" />
            <rect x="220" y="100" width="8" height="8" rx="2" />

            <rect x="80" y="120" width="8" height="8" rx="2" />
            <rect x="100" y="120" width="8" height="8" rx="2" />
            <rect x="120" y="120" width="8" height="8" rx="2" fill="#404040" />
            <rect x="140" y="120" width="8" height="8" rx="2" fill="#525252" />
            <rect x="160" y="120" width="8" height="8" rx="2" fill="#404040" />
            <rect x="180" y="120" width="8" height="8" rx="2" />
            <rect x="200" y="120" width="8" height="8" rx="2" />
            <rect x="220" y="120" width="8" height="8" rx="2" />
            <rect x="240" y="120" width="8" height="8" rx="2" />

            <rect x="100" y="140" width="8" height="8" rx="2" />
            <rect x="120" y="140" width="8" height="8" rx="2" fill="#404040" />
            <rect x="140" y="140" width="8" height="8" rx="2" fill="#525252" />
            <rect x="160" y="140" width="8" height="8" rx="2" fill="#404040" />
            <rect x="180" y="140" width="8" height="8" rx="2" />
            <rect x="200" y="140" width="8" height="8" rx="2" />
            <rect x="220" y="140" width="8" height="8" rx="2" />

            <rect x="120" y="160" width="8" height="8" rx="2" />
            <rect x="140" y="160" width="8" height="8" rx="2" fill="#404040" />
            <rect x="160" y="160" width="8" height="8" rx="2" />
            <rect x="180" y="160" width="8" height="8" rx="2" />

            {/* South America */}
            <rect x="180" y="200" width="8" height="8" rx="2" />
            <rect x="200" y="200" width="8" height="8" rx="2" />
            <rect x="220" y="200" width="8" height="8" rx="2" />

            <rect x="180" y="220" width="8" height="8" rx="2" />
            <rect x="200" y="220" width="8" height="8" rx="2" fill="#404040" />
            <rect x="220" y="220" width="8" height="8" rx="2" fill="#404040" />
            <rect x="240" y="220" width="8" height="8" rx="2" />

            <rect x="200" y="240" width="8" height="8" rx="2" fill="#404040" />
            <rect x="220" y="240" width="8" height="8" rx="2" fill="#525252" />
            <rect x="240" y="240" width="8" height="8" rx="2" fill="#404040" />

            <rect x="200" y="260" width="8" height="8" rx="2" />
            <rect x="220" y="260" width="8" height="8" rx="2" fill="#404040" />
            <rect x="240" y="260" width="8" height="8" rx="2" />

            <rect x="220" y="280" width="8" height="8" rx="2" />
            <rect x="240" y="280" width="8" height="8" rx="2" />

            <rect x="220" y="300" width="8" height="8" rx="2" />

            {/* Europe */}
            <rect x="340" y="60" width="8" height="8" rx="2" />
            <rect x="360" y="60" width="8" height="8" rx="2" />
            <rect x="380" y="60" width="8" height="8" rx="2" />

            <rect x="320" y="80" width="8" height="8" rx="2" />
            <rect x="340" y="80" width="8" height="8" rx="2" fill="#404040" />
            <rect x="360" y="80" width="8" height="8" rx="2" fill="#525252" />
            <rect x="380" y="80" width="8" height="8" rx="2" fill="#404040" />
            <rect x="400" y="80" width="8" height="8" rx="2" />

            <rect x="320" y="100" width="8" height="8" rx="2" />
            <rect x="340" y="100" width="8" height="8" rx="2" fill="#404040" />
            <rect x="360" y="100" width="8" height="8" rx="2" fill="#525252" />
            <rect x="380" y="100" width="8" height="8" rx="2" fill="#404040" />
            <rect x="400" y="100" width="8" height="8" rx="2" />

            <rect x="340" y="120" width="8" height="8" rx="2" />
            <rect x="360" y="120" width="8" height="8" rx="2" fill="#404040" />
            <rect x="380" y="120" width="8" height="8" rx="2" />

            {/* Africa */}
            <rect x="340" y="160" width="8" height="8" rx="2" />
            <rect x="360" y="160" width="8" height="8" rx="2" fill="#404040" />
            <rect x="380" y="160" width="8" height="8" rx="2" fill="#404040" />
            <rect x="400" y="160" width="8" height="8" rx="2" />

            <rect x="320" y="180" width="8" height="8" rx="2" />
            <rect x="340" y="180" width="8" height="8" rx="2" fill="#404040" />
            <rect x="360" y="180" width="8" height="8" rx="2" fill="#525252" />
            <rect x="380" y="180" width="8" height="8" rx="2" fill="#525252" />
            <rect x="400" y="180" width="8" height="8" rx="2" fill="#404040" />
            <rect x="420" y="180" width="8" height="8" rx="2" />

            <rect x="340" y="200" width="8" height="8" rx="2" />
            <rect x="360" y="200" width="8" height="8" rx="2" fill="#404040" />
            <rect x="380" y="200" width="8" height="8" rx="2" fill="#525252" />
            <rect x="400" y="200" width="8" height="8" rx="2" fill="#404040" />

            <rect x="360" y="220" width="8" height="8" rx="2" fill="#404040" />
            <rect x="380" y="220" width="8" height="8" rx="2" fill="#404040" />
            <rect x="400" y="220" width="8" height="8" rx="2" />

            <rect x="380" y="240" width="8" height="8" rx="2" />
            <rect x="400" y="240" width="8" height="8" rx="2" />

            <rect x="380" y="260" width="8" height="8" rx="2" />

            {/* Asia */}
            <rect x="440" y="60" width="8" height="8" rx="2" />
            <rect x="460" y="60" width="8" height="8" rx="2" />
            <rect x="480" y="60" width="8" height="8" rx="2" />
            <rect x="500" y="60" width="8" height="8" rx="2" />
            <rect x="520" y="60" width="8" height="8" rx="2" />

            <rect x="420" y="80" width="8" height="8" rx="2" />
            <rect x="440" y="80" width="8" height="8" rx="2" fill="#404040" />
            <rect x="460" y="80" width="8" height="8" rx="2" fill="#525252" />
            <rect x="480" y="80" width="8" height="8" rx="2" fill="#525252" />
            <rect x="500" y="80" width="8" height="8" rx="2" fill="#404040" />
            <rect x="520" y="80" width="8" height="8" rx="2" fill="#404040" />
            <rect x="540" y="80" width="8" height="8" rx="2" />
            <rect x="560" y="80" width="8" height="8" rx="2" />

            <rect x="440" y="100" width="8" height="8" rx="2" />
            <rect x="460" y="100" width="8" height="8" rx="2" fill="#404040" />
            <rect x="480" y="100" width="8" height="8" rx="2" fill="#525252" />
            <rect x="500" y="100" width="8" height="8" rx="2" fill="#525252" />
            <rect x="520" y="100" width="8" height="8" rx="2" fill="#404040" />
            <rect x="540" y="100" width="8" height="8" rx="2" fill="#404040" />
            <rect x="560" y="100" width="8" height="8" rx="2" />
            <rect x="580" y="100" width="8" height="8" rx="2" />

            <rect x="460" y="120" width="8" height="8" rx="2" />
            <rect x="480" y="120" width="8" height="8" rx="2" fill="#404040" />
            <rect x="500" y="120" width="8" height="8" rx="2" fill="#525252" />
            <rect x="520" y="120" width="8" height="8" rx="2" fill="#404040" />
            <rect x="540" y="120" width="8" height="8" rx="2" />
            <rect x="560" y="120" width="8" height="8" rx="2" />

            <rect x="480" y="140" width="8" height="8" rx="2" />
            <rect x="500" y="140" width="8" height="8" rx="2" fill="#404040" />
            <rect x="520" y="140" width="8" height="8" rx="2" />
            <rect x="540" y="140" width="8" height="8" rx="2" />

            <rect x="500" y="160" width="8" height="8" rx="2" />
            <rect x="560" y="160" width="8" height="8" rx="2" />

            {/* Australia */}
            <rect x="560" y="220" width="8" height="8" rx="2" />
            <rect x="580" y="220" width="8" height="8" rx="2" />
            <rect x="600" y="220" width="8" height="8" rx="2" />

            <rect x="540" y="240" width="8" height="8" rx="2" />
            <rect x="560" y="240" width="8" height="8" rx="2" fill="#404040" />
            <rect x="580" y="240" width="8" height="8" rx="2" fill="#525252" />
            <rect x="600" y="240" width="8" height="8" rx="2" fill="#404040" />
            <rect x="620" y="240" width="8" height="8" rx="2" />

            <rect x="560" y="260" width="8" height="8" rx="2" />
            <rect x="580" y="260" width="8" height="8" rx="2" fill="#404040" />
            <rect x="600" y="260" width="8" height="8" rx="2" />
          </g>
        </svg>
      </div>

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
