# OG Images Coral

An interactive Open Graph (OG) image playground and library built on a cutting-edge frontend stack.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Open Graph Image Generation:** [Satori](https://github.com/vercel/satori)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Linting/Formatting**: [oxlint](https://oxc.rs/docs/guide/usage/linter.html) and [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)

## Directory Structure

All main source code and template components live under the `src/` directory:

```
├── .github/
│   └── workflows/
├── src/
│   ├── template/                # Open Graph templates
│   ├── App.tsx                  # Interactive playground interface
│   ├── index.css                # Global styles
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML entry point
└── package.json                 # Project configuration and script commands
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### Development Scripts

| Command        | Action                                                  |
| :------------- | :------------------------------------------------------ |
| `pnpm dev`     | Starts the development server at `localhost:5173`       |
| `pnpm build`   | Builds the production                   |
| `pnpm preview` | Previews the production build locally                   |
| `pnpm fmt`     | Formats the codebase                      |
| `pnpm lint`    | Runs linter |
| `pnpm check`   | Runs linting and formatting |

## Templates

You can customize titles, descriptions, and other elements inside each of the beautiful preset layouts in `src/template/`.

Standard dimensions for generated images are 1200 × 630 pixels, optimal for:

- Open Graph metadata (`og:image`)
- Twitter Cards (`twitter:image`)
- Social preview embeds

## License

MIT © AREA44.
