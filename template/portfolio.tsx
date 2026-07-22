export default function OGImage({ title = "What's up, world!", description = "We are AREA44." }: { title?: string, description?: string } = {}) {
  return (
    <div
      style={{
        display: "flex",
        width: "1200px",
        height: "630px",
        backgroundColor: "#18181b",
        padding: "48px",
        fontFamily: "Geist Sans, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          border: "3px solid rgba(255,255,255,0.15)",
          borderRadius: "24px",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          padding: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            margin: 0,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "34px",
            marginTop: "24px",
            opacity: 0.9,
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
