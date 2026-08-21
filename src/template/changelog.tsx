interface OGImageProps {
  title?: string;
  category?: string;
  date?: string;
}

export default function OGImage({
  title = "Optimized CDN caching and deploying of immutable static assets",
  category = "CHANGELOG",
  date = "JUL 17, 2026",
}: OGImageProps = {}) {
  // Dot matrix map definition (50 cols x 26 rows)
  const mapGrid = [
    "                                                   ",
    "                                     ..            ",
    "                                    ....   .       ",
    "                .                 ...............  ",
    "              .....    ..   .    ................. ",
    "   ..       ........  .......... ..................",
    " .......   ......... ..............................",
    ".........  ......... ..............................",
    ".........   .......  ..............................",
    ".........    .....    ............................ ",
    " .......              ............................ ",
    "  .....                ..........................  ",
    "   ...                  ........................   ",
    "    .                    ......................    ",
    "                          ....................     ",
    "                            ................       ",
    "                             ..............        ",
    "               ..              ..........          ",
    "              ....               ......            ",
    "             ......               ....             ",
    "             ......              ......            ",
    "              ....              ........           ",
    "               ..                ......            ",
    "                                   ..              ",
    "                                                   ",
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
      {/* Background Dotted World Map Grid */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "650px",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.8,
        }}
      >
        <svg width="600" height="520" viewBox="0 0 600 520" fill="none">
          {mapGrid.flatMap((row, rIdx) =>
            row.split("").map((char, cIdx) => {
              if (char !== ".") return null;
              const x = 20 + cIdx * 11;
              const y = 30 + rIdx * 18;
              return (
                <rect
                  key={`${rIdx}-${cIdx}`}
                  x={x}
                  y={y}
                  width="4.5"
                  height="4.5"
                  fill="#333333"
                  rx="1"
                />
              );
            }),
          )}
        </svg>
      </div>

      {/* Top Section: Vercel Triangle & Optional Metadata */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg width="46" height="40" viewBox="0 0 75 65" fill="#ffffff">
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
