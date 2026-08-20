interface OGImageProps {
  title?: string;
  description?: string;
  author?: string;
  role?: string;
}

export default function OGImage({
  title = "Design & Engineering Portfolio",
  description = "Showcasing projects, creative direction, and full-stack software development.",
  author = "Alex River",
  role = "Product Designer & Developer",
}: OGImageProps = {}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#09090b",
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
          border: "2px solid rgba(255,255,255,0.12)",
          borderRadius: "24px",
          justifyContent: "space-between",
          color: "#ffffff",
          padding: "56px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#ff7f50",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            {role}
          </span>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
        </div>

        <p
          style={{
            fontSize: "26px",
            color: "#a1a1aa",
            margin: 0,
            maxWidth: "850px",
            lineHeight: 1.4,
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#27272a",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            {author.charAt(0)}
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#f4f4f5",
            }}
          >
            {author}
          </span>
        </div>
      </div>
    </div>
  );
}
