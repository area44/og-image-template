# @area44/og-images-coral (OG Images Coral)

An interactive Open Graph (OG) image playground and library built on a cutting-edge frontend stack. This project renders, previews, and exports custom social media preview images (1200 × 630 pixels) directly in the browser using React, Satori, and Tailwind CSS.

## Features

- **In-Browser OG Rendering**: Generate and preview high-performance SVG graphics dynamically in the browser. No serverless functions or backends required.
- **Vite 8 & Rolldown**: Ultra-fast build toolchain using the next-generation VoidZero stack.
- **Tailwind CSS v4**: Built using the modern, CSS-first Tailwind CSS v4 compiler.
- **React 19 & TypeScript 7**: Leverages React 19 concurrent features and Native Go compiled TypeScript 7 typing/speed.
- **OXC Toolchain**: Linting and formatting powered by ultra-fast Rust-based `oxlint` and `oxfmt` (Prettier-compatible).
- **Vercel Deployment**: Out-of-the-box configuration for instant global CDN hosting on Vercel.

---

## Directory Structure

All main source code and template components live under the `src/` directory for simplified maintenance and organization:

```
├── .github/
│   └── workflows/
│       └── lint-format.yml      # CI workflow for linting & formatting (autofix.ci)
├── src/
│   ├── template/                # Open Graph templates
│   │   ├── blog.tsx             # Blog post layout
│   │   ├── minimal.tsx          # Clean minimalist layout
│   │   └── portfolio.tsx        # Professional portfolio layout
│   ├── App.tsx                  # Interactive playground interface
│   ├── index.css                # Global styles with Tailwind CSS v4 imports
│   ├── main.tsx                 # Application entry point
│   ├── satori.d.ts              # Ambient type declarations for Satori (e.g. tw prop)
│   └── globals.d.ts             # Wildcard CSS declaration for side-effect imports
├── index.html                   # HTML entry point
├── package.json                 # Project configuration and script commands
├── vercel.json                  # Vercel deployment configuration
└── tsconfig.json                # Strict TypeScript configuration
```

---

## Getting Started

### Prerequisites

- pnpm v11 (specified in `package.json` under `"packageManager"`)
- Node.js (LTS or newer)

### Installation

Clone the repository and install dependencies using pnpm v11:

```bash
pnpm install
```

### Development Scripts

- **Start Dev Server**: Run the development server locally:
  ```bash
  pnpm run dev
  ```

- **Build**: Typecheck with TypeScript 7 and build production-ready files with Vite 8:
  ```bash
  pnpm run build
  ```

- **Preview Build**: Preview the built production app locally:
  ```bash
  pnpm run preview
  ```

- **Lint**: Run high-speed linter using `oxlint`:
  ```bash
  pnpm run lint
  ```

- **Format**: Format the codebase with `oxfmt`:
  ```bash
  pnpm run format
  ```

- **Check**: Run both linting and formatting verification in one command:
  ```bash
  pnpm run check
  ```

---

## Templates

You can customize titles, descriptions, and other elements inside each of the beautiful preset layouts in `src/template/`.

Standard dimensions for generated images are 1200 × 630 pixels, optimal for:
- Open Graph metadata (`og:image`)
- Twitter Cards (`twitter:image`)
- Social preview embeds

---

## Deployment to Vercel

The playground is fully configured for deployment to Vercel with the included `vercel.json` settings:

```json
{
  "installCommand": "pnpm install",
  "buildCommand": "pnpm run build",
  "outputDirectory": "dist",
  "github": {
    "silent": true
  },
  "cleanUrls": true
}
```

Simply connect this repository to your Vercel account, and it will deploy automatically on every push!

---

## License

MIT © AREA44.
