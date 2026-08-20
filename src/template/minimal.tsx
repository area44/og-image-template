interface OGImageProps {
  title?: string;
  description?: string;
  badge?: string;
}

export default function OGImage({
  title = "Minimal Open Graph Title",
  description = "A clean, modern, and versatile social preview card template for your project.",
  badge = "VERSION 1.0",
}: OGImageProps = {}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#09090b",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "60px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "6px 16px",
          borderRadius: "9999px",
          backgroundColor: "#27272a",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "#a1a1aa",
          marginBottom: "28px",
        }}
      >
        {badge}
      </div>
      <h1
        style={{
          fontSize: "64px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          margin: 0,
          maxWidth: "900px",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "24px",
          color: "#a1a1aa",
          marginTop: "20px",
          maxWidth: "750px",
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </div>
  );
}
