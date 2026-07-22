import {
  Sparkles,
  Copy,
  Check,
  Download,
  RefreshCw,
  Maximize2,
  Minimize2,
  Sliders,
  Type,
  Image as ImageIcon,
  AlertCircle,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import satori from "satori";

import BlogTemplate from "./template/blog";
import MinimalTemplate from "./template/minimal";
import PortfolioTemplate from "./template/portfolio";

// Definition of our templates
const TEMPLATES = {
  blog: {
    id: "blog",
    name: "Blog Template",
    component: BlogTemplate,
    defaultTitle: "Hello World!",
    defaultDescription: "We are AREA44.",
    features: ["Tailwind classes (tw)", "Absolute positioning", "Border accents"],
  },
  minimal: {
    id: "minimal",
    name: "Minimal Template",
    component: MinimalTemplate,
    defaultTitle: "Long Nhat Nguyen",
    defaultDescription: "Hello, world!",
    features: ["Flexbox layout", "Centered texts", "Sans-serif styles"],
  },
  portfolio: {
    id: "portfolio",
    name: "Portfolio Template",
    component: PortfolioTemplate,
    defaultTitle: "What's up, world!",
    defaultDescription: "We are AREA44.",
    features: ["Double borders", "Geist-inspired layout", "Highly professional font scales"],
  },
};

type TemplateId = keyof typeof TEMPLATES;

interface LoadedFonts {
  regular: ArrayBuffer;
  bold: ArrayBuffer;
}

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>("blog");
  const [title, setTitle] = useState(TEMPLATES.blog.defaultTitle);
  const [description, setDescription] = useState(TEMPLATES.blog.defaultDescription);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(630);

  const [fonts, setFonts] = useState<LoadedFonts | null>(null);
  const [fontsLoading, setFontsLoading] = useState(true);
  const [fontsError, setFontsError] = useState<string | null>(null);

  const [svgContent, setSvgContent] = useState<string>("");
  const [rendering, setRendering] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);

  const [copied, setCopied] = useState(false);
  const [previewScale, setPreviewScale] = useState<"fit" | "full">("fit");

  // Fetch fonts on mount
  useEffect(() => {
    async function loadFonts() {
      try {
        setFontsLoading(true);
        setFontsError(null);

        const [regularRes, boldRes] = await Promise.all([
          fetch("https://cdn.jsdelivr.net/npm/@amar-ui-web/core@2.0.0/fonts/Roboto-Regular.ttf"),
          fetch("https://cdn.jsdelivr.net/npm/@amar-ui-web/core@2.0.0/fonts/Roboto-Bold.ttf"),
        ]);

        if (!regularRes.ok || !boldRes.ok) {
          throw new Error("Failed to fetch font files from CDN");
        }

        const [regularData, boldData] = await Promise.all([
          regularRes.arrayBuffer(),
          boldRes.arrayBuffer(),
        ]);

        setFonts({
          regular: regularData,
          bold: boldData,
        });
      } catch (err: any) {
        console.error("Error loading fonts:", err);
        setFontsError(err.message || "Unknown error occurred while loading fonts.");
      } finally {
        setFontsLoading(false);
      }
    }

    loadFonts();
  }, []);

  // Sync title & description when template changes
  const handleTemplateChange = (id: TemplateId) => {
    setSelectedTemplate(id);
    setTitle(TEMPLATES[id].defaultTitle);
    setDescription(TEMPLATES[id].defaultDescription);
  };

  // Run Satori core in browser to generate the SVG
  useEffect(() => {
    if (!fonts) return;
    const { regular, bold } = fonts;

    let isMounted = true;

    async function renderOG() {
      try {
        setRendering(true);
        setRenderError(null);

        const TemplateComponent = TEMPLATES[selectedTemplate].component as React.ComponentType<{
          title?: string;
          description?: string;
        }>;

        // Satori supports custom Tailwind configurations
        const options = {
          width,
          height,
          fonts: [
            {
              name: "sans-serif",
              data: regular,
              weight: 400 as const,
              style: "normal" as const,
            },
            {
              name: "sans-serif",
              data: bold,
              weight: 700 as const,
              style: "normal" as const,
            },
            {
              name: "Geist Sans",
              data: regular,
              weight: 400 as const,
              style: "normal" as const,
            },
            {
              name: "Geist Sans",
              data: bold,
              weight: 700 as const,
              style: "normal" as const,
            },
          ],
          tailwindConfig: {
            theme: {
              extend: {
                colors: {
                  primary: "#3b82f6",
                },
              },
            },
          },
        };

        const element = React.createElement(TemplateComponent, { title, description });
        const svg = await satori(element, options);

        if (isMounted) {
          setSvgContent(svg);
        }
      } catch (err: any) {
        console.error("Satori render error:", err);
        if (isMounted) {
          setRenderError(err.message || "Failed to render SVG using Satori");
        }
      } finally {
        if (isMounted) {
          setRendering(false);
        }
      }
    }

    // Debounce slightly for better performance when typing
    const timeout = setTimeout(renderOG, 100);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [selectedTemplate, title, description, width, height, fonts]);

  const handleCopy = async () => {
    if (!svgContent) return;
    try {
      await navigator.clipboard.writeText(svgContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy SVG:", err);
    }
  };

  const handleDownload = () => {
    if (!svgContent) return;
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `og-image-${selectedTemplate}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navbar */}
      <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              OG Image Playground
            </h1>
            <p className="text-xs text-zinc-500">Powered by Satori Core & React</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            In-Browser Compiler
          </span>
          <a
            href="https://github.com/area44/og-image-template"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-200 transition"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row min-h-0">
        {/* Left pane - Controls */}
        <div className="w-full lg:w-[420px] border-r border-zinc-800 flex flex-col bg-zinc-900/20 divide-y divide-zinc-800/80 overflow-y-auto">
          {/* Section: Templates Selection */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="w-4 h-4 text-indigo-400" />
              <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Choose Template
              </h2>
            </div>

            <div className="space-y-3">
              {(Object.keys(TEMPLATES) as TemplateId[]).map((key) => {
                const t = TEMPLATES[key];
                const active = selectedTemplate === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleTemplateChange(key)}
                    className={`w-full text-left p-4 rounded-xl transition-all border ${
                      active
                        ? "bg-indigo-600/10 border-indigo-500/50 text-white shadow-md"
                        : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 text-zinc-400"
                    }`}
                  >
                    <div className="font-medium text-sm text-zinc-200 mb-1">{t.name}</div>
                    <div className="text-xs text-zinc-500 line-clamp-2">
                      {t.features.join(" • ")}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section: Customize Fields */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Type className="w-4 h-4 text-indigo-400" />
              <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Customize Content
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter custom title..."
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter custom description..."
                  rows={3}
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 transition resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section: Output Dimensions */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sliders className="w-4 h-4 text-indigo-400" />
              <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Dimensions
              </h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-zinc-500 mb-1">Width (px)</label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(Math.max(100, parseInt(e.target.value) || 0))}
                    className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-1">Height (px)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Math.max(100, parseInt(e.target.value) || 0))}
                    className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setWidth(1200);
                    setHeight(630);
                  }}
                  className="flex-1 py-1 px-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-400 rounded transition"
                >
                  Standard (1200×630)
                </button>
                <button
                  onClick={() => {
                    setWidth(800);
                    setHeight(400);
                  }}
                  className="flex-1 py-1 px-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-400 rounded transition"
                >
                  Compact (800×400)
                </button>
              </div>
            </div>
          </div>

          {/* Section: Action Buttons */}
          <div className="p-6 space-y-3 mt-auto">
            <button
              onClick={handleCopy}
              disabled={!svgContent || rendering}
              className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition ${
                copied
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied SVG Code!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy SVG Code
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              disabled={!svgContent || rendering}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              Download SVG File
            </button>
          </div>
        </div>

        {/* Right pane - Interactive Live Preview */}
        <div className="flex-1 flex flex-col bg-zinc-950 p-6 lg:p-8 justify-between items-center relative overflow-hidden">
          {/* Background grid accents */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Top Preview Controls */}
          <div className="w-full flex items-center justify-between mb-4 z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 font-mono">
                Canvas: {width} × {height}
              </span>
              {rendering && <RefreshCw className="w-3.5 h-3.5 text-indigo-400 animate-spin" />}
            </div>

            <div className="flex bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
              <button
                onClick={() => setPreviewScale("fit")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition ${
                  previewScale === "fit"
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Minimize2 className="w-3.5 h-3.5" />
                Fit View
              </button>
              <button
                onClick={() => setPreviewScale("full")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition ${
                  previewScale === "full"
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Actual Size
              </button>
            </div>
          </div>

          {/* Interactive Viewer Frame */}
          <div className="flex-1 w-full flex items-center justify-center min-h-[300px] relative">
            {fontsLoading ? (
              <div className="flex flex-col items-center gap-3">
                <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin" />
                <p className="text-sm text-zinc-400 font-medium">
                  Fetching font files for Satori...
                </p>
              </div>
            ) : fontsError ? (
              <div className="max-w-md p-6 bg-red-950/20 border border-red-900/50 rounded-2xl flex flex-col items-center gap-3 text-center">
                <AlertCircle className="w-10 h-10 text-red-500" />
                <h3 className="font-semibold text-red-400">Failed to Load Fonts</h3>
                <p className="text-xs text-red-500/80 leading-relaxed">
                  {fontsError}. Please check your internet connection or reload the page.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-2 px-4 py-1.5 bg-red-900 hover:bg-red-800 text-white rounded-lg text-xs font-medium transition"
                >
                  Retry Loading
                </button>
              </div>
            ) : renderError ? (
              <div className="max-w-md p-6 bg-amber-950/20 border border-amber-900/50 rounded-2xl flex flex-col items-center gap-3 text-center">
                <AlertCircle className="w-10 h-10 text-amber-500" />
                <h3 className="font-semibold text-amber-400">Rendering Error</h3>
                <p className="text-xs text-amber-500/80 font-mono leading-relaxed max-h-32 overflow-y-auto">
                  {renderError}
                </p>
              </div>
            ) : svgContent ? (
              <div
                className="relative rounded-2xl shadow-2xl border border-zinc-800/80 overflow-hidden bg-zinc-900 transition-all duration-300"
                style={
                  previewScale === "fit"
                    ? {
                        width: "100%",
                        maxWidth: `${width}px`,
                        aspectRatio: `${width} / ${height}`,
                      }
                    : {
                        width: `${width}px`,
                        height: `${height}px`,
                        transform: "none",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        overflow: "auto",
                      }
                }
              >
                {/* Checkerboard transparency background */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 10%, transparent 11%), radial-gradient(circle, #fff 10%, transparent 11%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 10px 10px",
                  }}
                />

                {/* Embedded Live SVG */}
                <div
                  className="w-full h-full flex items-center justify-center select-none"
                  dangerouslySetInnerHTML={{ __html: svgContent }}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <RefreshCw className="w-6 h-6 text-zinc-600 animate-spin" />
                <p className="text-xs text-zinc-500">Generating preview...</p>
              </div>
            )}
          </div>

          {/* Footer Info / Status bar */}
          <div className="w-full mt-6 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-500 border-t border-zinc-900 pt-4 z-10">
            <p>Designed to render beautiful Open Graph social share templates locally.</p>
            <p className="font-mono mt-1 sm:mt-0">Renderer: satori-core v0.12.1</p>
          </div>
        </div>
      </main>
    </div>
  );
}
