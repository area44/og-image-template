interface OGImageProps {
  title?: string;
  category?: string;
  date?: string;
}

export default function OGImage({
  title = "Optimized CDN caching and deploying of immutable static assets",
  category = "",
  date = "",
}: OGImageProps = {}) {
  // High-resolution dot-matrix world map grid matching original Vercel OG image
  const mapGrid = [
    "                                                                                                ",
    "                                                 ... .....                                      ",
    "                                                ............                ...  ...            ",
    "                                           .. ................        ........ .... ..          ",
    "                                         ......................       ................          ",
    "                               .     .. ........................     ..................     .   ",
    "                     ..      ....   ... .........................   ....................  ....  ",
    "                    ....    ......  .... ......................... ..................... ...... ",
    "                   ......  ......... .... .............................................. .......",
    "       ...        ....... ............... ..................................................... ",
    "     .......      ....... ..................................................................... ",
    "    .........   ......... ....................................................................  ",
    "   ...........  ......... ...................................................................   ",
    "  ............ .........   .................................................................    ",
    "  ............. ........    ...............................................................     ",
    "  ............. ........     .............................................................      ",
    "   ...........   ......       ...........................................................       ",
    "    .........     ....          ........................................................        ",
    "      .....        ..            ................................... .................          ",
    "        .                         .................................    ..............           ",
    "                                   ...............................       ...........            ",
    "                                    .............................         .........             ",
    "                                    ............................           .......              ",
    "                                     ..........................             .....               ",
    "                                     .........................                .        ...      ",
    "                                      .......................                         .....     ",
    "                                       .....................                         .......    ",
    "                                        ...................                         .........   ",
    "                                         .................                          .........   ",
    "                                          ...............                            .......    ",
    "                                           .............                              .....     ",
    "                                            ...........                                ...      ",
    "                                             .........                                  .       ",
    "                                              .......                                           ",
    "                                               .....                                            ",
    "                                                ...                                             ",
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
      {/* Background World Map Grid */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "820px",
          alignItems: "center",
          justifyContent: "flex-end",
          opacity: 0.85,
        }}
      >
        <svg width="800" height="600" viewBox="0 0 800 600" fill="none">
          {mapGrid.flatMap((row, rIdx) =>
            row.split("").map((char, cIdx) => {
              if (char !== ".") return null;
              const x = 10 + cIdx * 8.2;
              const y = 10 + rIdx * 15.5;
              return (
                <rect
                  key={`${rIdx}-${cIdx}`}
                  x={x}
                  y={y}
                  width="3.5"
                  height="3.5"
                  fill="#333333"
                  rx="0.8"
                />
              );
            }),
          )}
        </svg>
      </div>

      {/* Top Left Vercel Logo Triangle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        <svg width="60" height="52" viewBox="0 0 75 65" fill="#ffffff">
          <path d="M37.5 0L75 65H0z" />
        </svg>

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

      {/* Main Title - Sentenced cased, exact layout as original */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "760px",
          zIndex: 10,
          marginTop: "auto",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
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
