import { Field } from "@base-ui/react/field";
import {
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
  Flame,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import satori from "satori";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
                  primary: "#ff7f50", // branded Coral color
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
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100 selection:bg-rose-500/30 selection:text-rose-200">
      {/* Decorative top ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[200px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(251,113,133,0.15),transparent_50%)]" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-900 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-tr from-coral-500 to-rose-500 p-2.5 shadow-lg shadow-rose-500/10">
            <Flame className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="bg-gradient-to-r from-coral-400 via-orange-400 to-rose-400 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
                OG Images Coral
              </h1>
              <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-rose-400 uppercase">
                v2.0
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-400">
              Beautiful in-browser Open Graph playgrounds
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-950/40 bg-rose-950/10 px-3 py-1 text-xs font-semibold text-rose-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400"></span>
            Base UI Activated
          </span>
          <a
            href="https://github.com/area44/og-image-template"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-zinc-400 transition hover:text-zinc-200 hover:underline"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex min-h-0 flex-1 flex-col lg:flex-row">
        {/* Left pane - Controls */}
        <div className="flex w-full flex-col divide-y divide-zinc-900 overflow-y-auto border-r border-zinc-900 bg-zinc-950 lg:w-[420px]">
          {/* Section: Templates Selection */}
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-rose-400" />
              <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                Choose Template
              </h2>
            </div>

            <div className="space-y-3">
              {(Object.keys(TEMPLATES) as TemplateId[]).map((key) => {
                const t = TEMPLATES[key];
                const active = selectedTemplate === key;
                return (
                  <Button
                    key={key}
                    onClick={() => handleTemplateChange(key)}
                    variant={active ? "secondary" : "outline"}
                    className={`flex h-auto w-full flex-col items-start justify-start rounded-xl border p-4 text-left transition-all ${
                      active
                        ? "border-rose-500/50 bg-rose-500/5 text-white shadow-md hover:bg-rose-500/10"
                        : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900/60"
                    }`}
                  >
                    <div className="mb-1 text-sm font-semibold text-zinc-200">{t.name}</div>
                    <div className="line-clamp-2 text-xs whitespace-normal text-zinc-500">
                      {t.features.join(" • ")}
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Section: Customize Fields */}
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Type className="h-4 w-4 text-rose-400" />
              <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                Customize Content
              </h2>
            </div>

            <div className="space-y-4">
              <Field.Root className="grid gap-1.5">
                <Label htmlFor="title-input" className="text-xs font-semibold text-zinc-400">
                  Title
                </Label>
                <Input
                  id="title-input"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter custom title..."
                  className="border-zinc-800 bg-zinc-900/40 text-zinc-200 transition focus-visible:ring-rose-500/50"
                />
              </Field.Root>

              <Field.Root className="grid gap-1.5">
                <Label htmlFor="description-input" className="text-xs font-semibold text-zinc-400">
                  Description
                </Label>
                <Textarea
                  id="description-input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter custom description..."
                  rows={3}
                  className="resize-none border-zinc-800 bg-zinc-900/40 text-zinc-200 transition focus-visible:ring-rose-500/50"
                />
              </Field.Root>
            </div>
          </div>

          {/* Section: Output Dimensions */}
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sliders className="h-4 w-4 text-rose-400" />
              <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                Dimensions
              </h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Field.Root className="grid gap-1">
                  <Label htmlFor="width-input" className="text-xs font-medium text-zinc-500">
                    Width (px)
                  </Label>
                  <Input
                    id="width-input"
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(Math.max(100, parseInt(e.target.value) || 0))}
                    className="h-9 border-zinc-800 bg-zinc-900/40 text-zinc-200 transition focus-visible:ring-rose-500/50"
                  />
                </Field.Root>
                <Field.Root className="grid gap-1">
                  <Label htmlFor="height-input" className="text-xs font-medium text-zinc-500">
                    Height (px)
                  </Label>
                  <Input
                    id="height-input"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Math.max(100, parseInt(e.target.value) || 0))}
                    className="h-9 border-zinc-800 bg-zinc-900/40 text-zinc-200 transition focus-visible:ring-rose-500/50"
                  />
                </Field.Root>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setWidth(1200);
                    setHeight(630);
                  }}
                  className="flex-1 border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200"
                >
                  Standard (1200×630)
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setWidth(800);
                    setHeight(400);
                  }}
                  className="flex-1 border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200"
                >
                  Compact (800×400)
                </Button>
              </div>
            </div>
          </div>

          {/* Section: Action Buttons */}
          <div className="mt-auto space-y-3 p-6">
            <Button
              onClick={handleCopy}
              disabled={!svgContent || rendering}
              variant={copied ? "default" : "secondary"}
              className={`w-full py-2.5 font-semibold transition-all ${
                copied
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/10 hover:bg-emerald-700"
                  : "border border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 hover:text-zinc-200"
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied SVG Code!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy SVG Code
                </>
              )}
            </Button>

            <Button
              onClick={handleDownload}
              disabled={!svgContent || rendering}
              className="w-full bg-gradient-to-r from-orange-500 to-rose-500 py-2.5 font-semibold text-white shadow-lg shadow-rose-500/10 hover:from-orange-600 hover:to-rose-600"
            >
              <Download className="h-4 w-4" />
              Download SVG File
            </Button>
          </div>
        </div>

        {/* Right pane - Interactive Live Preview */}
        <div className="relative flex flex-1 flex-col items-center justify-between overflow-hidden bg-zinc-950 p-6 lg:p-8">
          {/* Background grid accents */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e11d4803_1px,transparent_1px),linear-gradient(to_bottom,#e11d4803_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Top Preview Controls */}
          <div className="z-10 mb-4 flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-zinc-900/50 bg-zinc-900/50 px-2.5 py-1 font-mono text-xs text-zinc-400">
                Canvas: {width} × {height}
              </span>
              {rendering && <RefreshCw className="h-3.5 w-3.5 animate-spin text-rose-400" />}
            </div>

            <div className="flex rounded-lg border border-zinc-900 bg-zinc-950 p-0.5">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPreviewScale("fit")}
                className={`flex h-7 items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                  previewScale === "fit"
                    ? "bg-zinc-900 text-white hover:bg-zinc-900"
                    : "text-zinc-400 hover:bg-transparent hover:text-zinc-200"
                }`}
              >
                <Minimize2 className="h-3.5 w-3.5" />
                Fit View
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPreviewScale("full")}
                className={`flex h-7 items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                  previewScale === "full"
                    ? "bg-zinc-900 text-white hover:bg-zinc-900"
                    : "text-zinc-400 hover:bg-transparent hover:text-zinc-200"
                }`}
              >
                <Maximize2 className="h-3.5 w-3.5" />
                Actual Size
              </Button>
            </div>
          </div>

          {/* Interactive Viewer Frame */}
          <div className="relative flex min-h-[300px] w-full flex-1 items-center justify-center">
            {fontsLoading ? (
              <div className="flex flex-col items-center gap-3">
                <RefreshCw className="h-8 w-8 animate-spin text-rose-500" />
                <p className="text-sm font-medium text-zinc-400">
                  Fetching font files for Satori...
                </p>
              </div>
            ) : fontsError ? (
              <Alert
                variant="destructive"
                className="flex max-w-md flex-col items-center gap-3 bg-red-950/20 p-6 text-center"
              >
                <AlertCircle className="h-10 w-10 text-destructive" />
                <AlertTitle className="font-semibold text-destructive">
                  Failed to Load Fonts
                </AlertTitle>
                <AlertDescription className="text-xs leading-relaxed text-destructive/80">
                  {fontsError}. Please check your internet connection or reload the page.
                </AlertDescription>
                <Button
                  onClick={() => window.location.reload()}
                  variant="destructive"
                  size="sm"
                  className="mt-2 font-medium text-white"
                >
                  Retry Loading
                </Button>
              </Alert>
            ) : renderError ? (
              <Alert
                variant="destructive"
                className="flex max-w-md flex-col items-center gap-3 border-amber-900/50 bg-amber-950/20 p-6 text-center"
              >
                <AlertCircle className="h-10 w-10 text-amber-500" />
                <AlertTitle className="font-semibold text-amber-400">Rendering Error</AlertTitle>
                <AlertDescription className="max-h-32 overflow-y-auto font-mono text-xs leading-relaxed text-amber-500/80">
                  {renderError}
                </AlertDescription>
              </Alert>
            ) : svgContent ? (
              <Card
                className="relative overflow-hidden rounded-2xl border-zinc-900 bg-zinc-950 shadow-2xl shadow-black/80 transition-all duration-300"
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
                <CardContent className="h-full w-full p-0">
                  {/* Checkerboard transparency background */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #fff 10%, transparent 11%), radial-gradient(circle, #fff 10%, transparent 11%)",
                      backgroundSize: "20px 20px",
                      backgroundPosition: "0 0, 10px 10px",
                    }}
                  />

                  {/* Embedded Live SVG */}
                  <div
                    className="flex h-full w-full items-center justify-center select-none"
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                  />
                </CardContent>
              </Card>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <RefreshCw className="h-6 w-6 animate-spin text-zinc-600" />
                <p className="text-xs text-zinc-500">Generating preview...</p>
              </div>
            )}
          </div>

          {/* Footer Info / Status bar */}
          <div className="z-10 mt-6 flex w-full flex-col justify-between border-t border-zinc-900 pt-4 text-xs text-zinc-500 sm:flex-row sm:items-center">
            <p>Designed to render beautiful Open Graph social share templates locally.</p>
            <p className="mt-1 font-mono text-zinc-400 sm:mt-0">Renderer: satori-core v0.12.1</p>
          </div>
        </div>
      </main>
    </div>
  );
}
