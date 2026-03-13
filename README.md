# @area44/og-image-template

A small collection of **Open Graph image templates** built with TSX. These templates are designed to be copied and pasted into [Vercel OG Image Playground](https://og-playground.vercel.app).

The goal of this repository is to provide simple, reusable layouts for generating social preview images.

## Usage

1. Open [Vercel OG Image Playground](https://og-playground.vercel.app).

2. Copy a template from this repository.

3. Paste it into the editor.

4. Render and export the image.

## Example Template

```tsx
export default function OGImage() {
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
      <h1 style={{ fontSize: 72 }}>AREA44</h1>
      <p style={{ fontSize: 36 }}>Hello, world!</p>
    </div>
  );
}
```

## Image Size

All templates target the standard Open Graph size:

```
1200 × 630
```

This size works well for:

- Social media previews.
- Link embeds.
- Open Graph metadata.
- Twitter cards.

## License

MIT © AREA44.
