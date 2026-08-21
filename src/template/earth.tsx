interface OGImageProps {
  title?: string;
  category?: string;
  date?: string;
}

export default function OGImage({
  title = "Optimized CDN Caching & Immutable Asset Deployment",
  category = "RELEASE",
  date = "OCT 24, 2026",
}: OGImageProps = {}) {
  // Detailed dot matrix map representation of Earth's continents
  const mapGrid = [
    "                                                                ",
    "                 .......                ...     ....            ",
    "     ...       ............            .....   ..............   ",
    "   .......    ..............          ....... ................  ",
    "  .........  ................        .......................... ",
    "  .......... ................       ........................... ",
    "   .........  ..............       ......................... .. ",
    "    .......    ............        ........................     ",
    "      ...       ..........          ......................      ",
    "       .         ........            ...................        ",
    "                  ......              .................         ",
    "                 ........              ...............          ",
    "                ..........              .............    ...    ",
    "                ..........               ...........   .......  ",
    "                 ........                 .........   ......... ",
    "                 .......                   .......    ......... ",
    "                  .....                      ...       .......  ",
    "                   ...                                   ... .  ",
    "                    .                                           ",
    "                                                                ",
  ];

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "80px",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Geist Sans, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background Dotted Earth World Map Grid */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "680px",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.85,
        }}
      >
        <svg width="650" height="520" viewBox="0 0 650 520" fill="none">
          {mapGrid.flatMap((row, rIdx) =>
            row.split("").map((char, cIdx) => {
              if (char !== ".") return null;
              const x = 15 + cIdx * 9.8;
              const y = 20 + rIdx * 19;
              return (
                <rect
                  key={`${rIdx}-${cIdx}`}
                  x={x}
                  y={y}
                  width="4"
                  height="4"
                  fill="#333333"
                  rx="1"
                />
              );
            }),
          )}
        </svg>
      </div>

      {/* Top Header Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg width="44" height="38" viewBox="0 0 75 65" fill="#ffffff">
            <path d="M37.5 0L75 65H0z" />
          </svg>
        </div>

        {(category || date) && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {category && (
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#a1a1aa",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </span>
            )}
            {category && date && <span style={{ fontSize: "14px", color: "#52525b" }}>•</span>}
            {date && (
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#71717a",
                  textTransform: "uppercase",
                }}
              >
                {date}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Main Title Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "820px",
          zIndex: 10,
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
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
  );
}
