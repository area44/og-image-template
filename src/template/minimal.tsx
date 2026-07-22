export default function OGImage({
  title = "Long Nhat Nguyen",
  description = "Hello, world!",
}: { title?: string; description?: string } = {}) {
  return (
    <div
      style={{
        display: "flex",
        width: "1200px",
        height: "630px",
        backgroundColor: "#18181b",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: 72 }}>{title}</h1>
      <p style={{ fontSize: 36 }}>{description}</p>
    </div>
  );
}
