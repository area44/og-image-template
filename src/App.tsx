import * as Babel from "@babel/standalone";
import geistNormalUrl from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url";
import Editor from "@monaco-editor/react";
import { Copy, Check, Download, RefreshCw, Sliders, AlertCircle, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import satori from "satori";
import { woff2Decode } from "woff-lib/woff2/decode";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import BlogTemplate from "./template/blog";
import blogCode from "./template/blog.tsx?raw";
import MinimalTemplate from "./template/minimal";
import minimalCode from "./template/minimal.tsx?raw";
import PortfolioTemplate from "./template/portfolio";
import portfolioCode from "./template/portfolio.tsx?raw";

const TEMPLATE_CODES = {
  blog: blogCode,
  minimal: minimalCode,
  portfolio: portfolioCode,
};

// Definition of our templates
const TEMPLATES = {
  blog: {
    id: "blog",
    name: "Blog Template",
    component: BlogTemplate,
    features: ["Tailwind classes (tw)", "Absolute positioning", "Border accents"],
  },
  minimal: {
    id: "minimal",
    name: "Minimal Template",
    component: MinimalTemplate,
    features: ["Flexbox layout", "Centered texts", "Sans-serif styles"],
  },
  portfolio: {
    id: "portfolio",
    name: "Portfolio Template",
    component: PortfolioTemplate,
    features: ["Double borders", "Geist-inspired layout", "Highly professional font scales"],
  },
};

type TemplateId = keyof typeof TEMPLATES;

interface LoadedFonts {
  regular: ArrayBuffer;
  bold: ArrayBuffer;
}

function transpileAndEval(code: string): React.ComponentType<any> {
  const transformed = Babel.transform(code, {
    presets: [["react", { runtime: "classic" }], "typescript"],
    plugins: [["transform-modules-commonjs", { loose: true }]],
  });

  const compiledCode = transformed.code || "";

  const exports: { default?: any; [key: string]: any } = {};
  const mockRequire = (name: string) => {
    if (name === "react") {
      return React;
    }
    throw new Error(`Module "${name}" is not supported in playground.`);
  };

  const runCode = new Function("exports", "require", "React", compiledCode);
  runCode(exports, mockRequire, React);

  const component =
    exports.default || Object.values(exports).find((val) => typeof val === "function");
  if (!component) {
    throw new Error(
      "No default export or React component found. Ensure you have 'export default function OGImage' or similar.",
    );
  }

  return component;
}

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>("blog");
  const [width, setWidth] = useState<number | "">(1200);
  const [height, setHeight] = useState<number | "">(630);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<"code" | "preview">("code");

  const [fonts, setFonts] = useState<LoadedFonts | null>(null);
  const [fontsLoading, setFontsLoading] = useState(true);
  const [fontsError, setFontsError] = useState<string | null>(null);

  const [svgContent, setSvgContent] = useState<string>("");
  const [rendering, setRendering] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);

  const [copied, setCopied] = useState(false);
  const [downloadFormat, setDownloadFormat] = useState<"svg" | "png" | "jpeg" | "jpg">("svg");

  const [copiedCode, setCopiedCode] = useState(false);

  const [draftCodes, setDraftCodes] = useState<Record<TemplateId, string>>({
    blog: blogCode,
    minimal: minimalCode,
    portfolio: portfolioCode,
  });

  const [dynamicComponent, setDynamicComponent] = useState<React.ComponentType<any> | null>(null);
  const [compileError, setCompileError] = useState<string | null>(null);
  const [pngUrl, setPngUrl] = useState<string | null>(null);
  const [renderType, setRenderType] = useState<"svg" | "png" | "html">("svg");
  const [iframeDoc, setIframeDoc] = useState<Document | null>(null);
  const [renderTime, setRenderTime] = useState<number>(0);

  const [sharedCopied, setSharedCopied] = useState(false);

  useEffect(() => {
    const code = draftCodes[selectedTemplate];
    try {
      const comp = transpileAndEval(code);
      setDynamicComponent(() => comp);
      setCompileError(null);
    } catch (err: any) {
      console.error("Transpilation/Eval error:", err);
      setCompileError(err.message || "Failed to compile TSX code");
      setDynamicComponent(null);
    }
  }, [selectedTemplate, draftCodes]);

  useEffect(() => {
    if (!svgContent) {
      setPngUrl(null);
      return;
    }

    const resolvedWidth = typeof width === "number" ? Math.max(100, width) : 1200;
    const resolvedHeight = typeof height === "number" ? Math.max(100, height) : 630;

    const img = new Image();
    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    let active = true;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = resolvedWidth;
      canvas.height = resolvedHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, resolvedWidth, resolvedHeight);
        try {
          canvas.toBlob((pngBlob) => {
            if (active && pngBlob) {
              const downloadUrl = URL.createObjectURL(pngBlob);
              setPngUrl((prev) => {
                if (prev) URL.revokeObjectURL(prev);
                return downloadUrl;
              });
            }
          }, "image/png");
        } catch (err) {
          console.error("Canvas toBlob error:", err);
        }
      }
      URL.revokeObjectURL(url);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
    };

    img.src = url;

    return () => {
      active = false;
    };
  }, [svgContent, width, height]);

  // Fetch fonts on mount
  useEffect(() => {
    function stripFvar(buffer: Uint8Array): ArrayBuffer {
      const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
      const numTables = view.getUint16(4);
      for (let i = 0; i < numTables; i++) {
        const offset = 12 + i * 16;
        const tag = String.fromCharCode(
          view.getUint8(offset),
          view.getUint8(offset + 1),
          view.getUint8(offset + 2),
          view.getUint8(offset + 3),
        );
        if (tag === "fvar") {
          view.setUint8(offset, "x".charCodeAt(0));
          view.setUint8(offset + 1, "x".charCodeAt(0));
          view.setUint8(offset + 2, "x".charCodeAt(0));
          view.setUint8(offset + 3, "x".charCodeAt(0));
          break;
        }
      }
      return buffer.buffer.slice(
        buffer.byteOffset,
        buffer.byteOffset + buffer.byteLength,
      ) as ArrayBuffer;
    }

    async function loadFonts() {
      try {
        setFontsLoading(true);
        setFontsError(null);

        const regularRes = await fetch(geistNormalUrl);

        if (!regularRes.ok) {
          throw new Error("Failed to fetch local variable font file");
        }

        const regularWoff2 = await regularRes.arrayBuffer();

        const regularTtf = await woff2Decode(new Uint8Array(regularWoff2));

        const regularData = stripFvar(regularTtf);

        setFonts({
          regular: regularData,
          bold: regularData,
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

  // Sync template when changes
  const handleTemplateChange = (id: TemplateId) => {
    setSelectedTemplate(id);
    setIsSidebarOpen(false);
  };

  // Run Satori core in browser to generate the SVG with the selected template
  useEffect(() => {
    if (!fonts || !dynamicComponent) return;
    const { regular, bold } = fonts;

    let isMounted = true;

    async function renderOG() {
      try {
        setRendering(true);
        setRenderError(null);

        const resolvedWidth = typeof width === "number" ? Math.max(100, width) : 1200;
        const resolvedHeight = typeof height === "number" ? Math.max(100, height) : 630;

        // Satori supports custom Tailwind configurations
        const options = {
          width: resolvedWidth,
          height: resolvedHeight,
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

        const comp = dynamicComponent;
        if (!comp) return;

        const start = performance.now();
        const element = React.createElement(comp, {});
        const svg = await satori(element, options);
        const elapsed = performance.now() - start;

        if (isMounted) {
          setSvgContent(svg);
          setRenderTime(elapsed);
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
    const timeout = setTimeout(renderOG, 250);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [selectedTemplate, width, height, fonts, dynamicComponent]);

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

    const resolvedWidth = typeof width === "number" ? Math.max(100, width) : 1200;
    const resolvedHeight = typeof height === "number" ? Math.max(100, height) : 630;

    if (downloadFormat === "svg") {
      const blob = new Blob([svgContent], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `og-image-${selectedTemplate}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      const img = new Image();
      const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = resolvedWidth;
        canvas.height = resolvedHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          if (downloadFormat === "jpeg" || downloadFormat === "jpg") {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, resolvedWidth, resolvedHeight);
          }
          ctx.drawImage(img, 0, 0, resolvedWidth, resolvedHeight);

          const mimeType = downloadFormat === "png" ? "image/png" : "image/jpeg";
          try {
            canvas.toBlob(
              (blob) => {
                if (blob) {
                  const downloadUrl = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = downloadUrl;
                  a.download = `og-image-${selectedTemplate}.${downloadFormat}`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(downloadUrl);
                }
              },
              mimeType,
              0.95,
            );
          } catch (err) {
            console.error("Canvas toBlob error, falling back to toDataURL:", err);
            const dataUrl = canvas.toDataURL(mimeType, 0.95);
            const a = document.createElement("a");
            a.href = dataUrl;
            a.download = `og-image-${selectedTemplate}.${downloadFormat}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        }
        URL.revokeObjectURL(url);
      };
      img.onerror = (err) => {
        console.error("Failed to load SVG into Image for download:", err);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    }
  };

  const handleCodeCopy = async () => {
    const codeToDisplay = draftCodes[selectedTemplate];
    if (!codeToDisplay) return;
    try {
      await navigator.clipboard.writeText(codeToDisplay);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const handleCodeReset = () => {
    setDraftCodes((prev) => ({
      ...prev,
      [selectedTemplate]: TEMPLATE_CODES[selectedTemplate],
    }));
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shared = params.get("share");
    if (shared) {
      try {
        const decoded = decodeURIComponent(escape(atob(shared)));
        const parsed = JSON.parse(decoded);
        if (parsed.code) {
          setDraftCodes((prev) => ({
            ...prev,
            [selectedTemplate]: parsed.code,
          }));
        }
        if (typeof parsed.width === "number") setWidth(parsed.width);
        if (typeof parsed.height === "number") setHeight(parsed.height);
        if (
          typeof parsed.renderType === "string" &&
          (parsed.renderType === "svg" ||
            parsed.renderType === "png" ||
            parsed.renderType === "html")
        ) {
          setRenderType(parsed.renderType);
        }
      } catch (err) {
        console.error("Failed to parse shared state from URL:", err);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShare = () => {
    try {
      const state = {
        code: draftCodes[selectedTemplate],
        width,
        height,
        renderType,
      };
      const stringified = JSON.stringify(state);
      const encoded = btoa(unescape(encodeURIComponent(stringified)));
      const url = `${window.location.origin}${window.location.pathname}?share=${encoded}`;
      navigator.clipboard.writeText(url);
      setSharedCopied(true);
      setTimeout(() => setSharedCopied(false), 2000);
    } catch (err) {
      console.error("Failed to generate share URL:", err);
    }
  };

  const handleIframeRef = (iframe: HTMLIFrameElement | null) => {
    if (iframe && iframe.contentDocument) {
      const doc = iframe.contentDocument;
      if (doc.head.childElementCount === 0) {
        // Base structure and background style
        const style = doc.createElement("style");
        style.innerHTML = `
          body {
            margin: 0;
            padding: 0;
            display: flex;
            width: 100%;
            height: 100%;
            background-color: #18181b;
            color: white;
            font-family: sans-serif;
          }
          body > div {
            display: flex;
            width: 100%;
            height: 100%;
          }
        `;
        doc.head.appendChild(style);

        // Load Tailwind CSS CDN
        const script = doc.createElement("script");
        script.src = "https://cdn.tailwindcss.com";
        doc.head.appendChild(script);

        // Configure theme
        const configScript = doc.createElement("script");
        configScript.innerHTML = `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: "#ff7f50",
                }
              }
            }
          }
        `;
        doc.head.appendChild(configScript);

        // Convert Satori `tw` attributes to HTML `class` in real-time
        const observerScript = doc.createElement("script");
        observerScript.innerHTML = `
          const convertTw = () => {
            document.querySelectorAll("[tw]").forEach((el) => {
              const tw = el.getAttribute("tw");
              if (tw) {
                el.setAttribute("class", tw);
                el.removeAttribute("tw");
              }
            });
          };
          const observer = new MutationObserver(convertTw);
          observer.observe(document.body, { childList: true, subtree: true });
          convertTw();
        `;
        doc.head.appendChild(observerScript);
      }
      setIframeDoc(doc);
    }
  };

  const handleEditorBeforeMount = (monaco: any) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.React,
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      esModuleInterop: true,
      allowNonTsExtensions: true,
    });
  };

  return (
    <div className="selection:text-coral-200 flex min-h-screen flex-col bg-background text-foreground selection:bg-coral-500/30 lg:h-screen lg:overflow-hidden">
      {/* Decorative top ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[200px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(251,113,133,0.15),transparent_50%)]" />

      {/* Global Top Header (Fumadocs style) */}
      <header className="sticky top-0 z-50 flex h-14 w-full shrink-0 items-center justify-between border-b border-zinc-900 bg-zinc-950/80 px-6 backdrop-blur-md select-none">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="mr-1 text-zinc-400 hover:text-zinc-200 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
          <div className="relative h-8 w-8 shrink-0">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="header-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ff7f50" />
                  <stop offset="100%" stop-color="#f43f5e" />
                </linearGradient>
                <linearGradient id="header-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3f3f46" />
                  <stop offset="100%" stop-color="#18181b" />
                </linearGradient>
              </defs>
              <rect
                x="18"
                y="22"
                width="56"
                height="38"
                rx="8"
                fill="url(#header-accent)"
                stroke="#27272a"
                stroke-width="2.5"
                transform="rotate(-6 50 50)"
                opacity="0.8"
              />
              <rect
                x="22"
                y="24"
                width="56"
                height="38"
                rx="8"
                fill="#09090b"
                stroke="url(#header-primary)"
                stroke-width="2.5"
              />
              <line
                x1="31"
                y1="32"
                x2="63"
                y2="32"
                stroke="#27272a"
                stroke-width="3"
                stroke-linecap="round"
              />
              <line
                x1="31"
                y1="40"
                x2="52"
                y2="40"
                stroke="#18181b"
                stroke-width="3"
                stroke-linecap="round"
              />
              <g transform="translate(52, 38)">
                <circle cx="16" cy="16" r="14" fill="url(#header-primary)" />
                <path
                  d="M16 9C16 9 18 13 18 15.8C18 18.6 15.4 20.6 12.8 20.6C10.2 20.6 8.4 18.6 8.4 15.8C8.4 13 12 9.8 12 9.8"
                  stroke="#ffffff"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  transform="translate(1, 0.2)"
                />
              </g>
            </svg>
          </div>
          <span className="hidden font-semibold text-zinc-200 sm:inline">OG Image Playground</span>
          <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400">
            satori v0.12.2
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={handleShare}
            size="sm"
            variant="outline"
            className="h-8 gap-1.5 border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-zinc-100"
          >
            {sharedCopied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span>Copied Link!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Share</span>
              </>
            )}
          </Button>
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

      {/* Main Workspace below global header */}
      <div className="flex flex-1 flex-col lg:flex-row lg:overflow-hidden">
        {/* Mobile Sidebar Backdrop Overlay */}
        {isSidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 top-14 z-30 cursor-default bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        )}

        {/* Left Navigation Sidebar - Fumadocs Tree style */}
        <aside
          className={`fixed top-14 bottom-0 left-0 z-40 flex w-64 shrink-0 flex-col border-r border-zinc-900 bg-zinc-950 transition-transform duration-300 ease-in-out select-none lg:static lg:h-[calc(100vh-56px)] lg:w-64 lg:translate-x-0 lg:border-r lg:bg-zinc-950/30 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Content */}
          <div className="flex-1 space-y-6 overflow-y-auto px-4 py-4 pt-6">
            <div className="space-y-2">
              <h3 className="px-3 text-[10px] font-bold tracking-wider text-zinc-500 uppercase">
                Playground Templates
              </h3>
              <div className="space-y-1">
                {(Object.keys(TEMPLATES) as TemplateId[]).map((key) => {
                  const t = TEMPLATES[key];
                  const active = selectedTemplate === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleTemplateChange(key)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition-all ${
                        active
                          ? "border-l-2 border-coral-500 bg-coral-500/10 pl-2.5 text-coral-400"
                          : "border-l-2 border-transparent pl-2.5 text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200"
                      }`}
                    >
                      <span>{t.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="border-t border-zinc-900 p-4">
            <div className="flex items-center justify-between px-1 text-[11px] text-zinc-500">
              <span>By AREA44</span>
              <span>Renderer v0.12.1</span>
            </div>
          </div>
        </aside>

        {/* Mobile Tab Switcher (Visible only on mobile/tablet) */}
        <div className="flex shrink-0 border-b border-zinc-900 bg-zinc-950 p-2 select-none lg:hidden">
          <div className="grid w-full grid-cols-2 gap-1 rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-1">
            <button
              onClick={() => setActivePanel("code")}
              className={`rounded-md py-1.5 text-xs font-semibold transition-all ${
                activePanel === "code"
                  ? "bg-zinc-800 text-zinc-100 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              TSX Source Editor
            </button>
            <button
              onClick={() => setActivePanel("preview")}
              className={`rounded-md py-1.5 text-xs font-semibold transition-all ${
                activePanel === "preview"
                  ? "bg-zinc-800 text-zinc-100 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Live Preview & Configs
            </button>
          </div>
        </div>

        {/* Responsive Workspace Main Content */}
        <div className="flex min-h-0 flex-1 flex-col lg:flex-row lg:overflow-hidden">
          {/* Left/Upper Panel: TSX/TypeScript Code Editor */}
          <div
            className={`flex-1 flex-col border-b border-zinc-900 bg-zinc-950 lg:h-full lg:w-1/2 lg:border-r lg:border-b-0 ${activePanel === "code" ? "flex" : "hidden lg:flex"}`}
          >
            <div className="flex h-11 shrink-0 items-center justify-between border-b border-zinc-900 bg-zinc-950/50 px-4">
              <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                TSX Source Editor
              </span>
              <div className="flex items-center gap-1.5">
                <Button
                  onClick={handleCodeReset}
                  size="sm"
                  variant="outline"
                  className="h-7 gap-1 border-zinc-800 bg-zinc-900/40 px-2.5 text-zinc-400 hover:text-zinc-200"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span className="text-[11px]">Reset</span>
                </Button>
                <Button
                  onClick={handleCodeCopy}
                  size="sm"
                  variant="outline"
                  className="h-7 gap-1 border-zinc-800 bg-zinc-900/40 px-2.5 text-zinc-400 hover:text-zinc-200"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-500" />
                      <span className="text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="relative min-h-[450px] flex-1 overflow-hidden lg:h-[calc(100%-44px)] lg:min-h-0">
              <Editor
                height="100%"
                defaultLanguage="typescript"
                path={`file:///${selectedTemplate}.tsx`}
                beforeMount={handleEditorBeforeMount}
                value={draftCodes[selectedTemplate]}
                onChange={(val) => {
                  if (val !== undefined) {
                    setDraftCodes((prev) => ({
                      ...prev,
                      [selectedTemplate]: val,
                    }));
                  }
                }}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: "on",
                  wordWrap: "on",
                  automaticLayout: true,
                  theme: "vs-dark",
                  padding: { top: 12 },
                  tabSize: 2,
                }}
              />
            </div>
          </div>

          {/* Right/Lower Panel: Live Preview & Configurations Sidebar */}
          <div
            className={`flex-1 flex-col divide-y divide-zinc-900 overflow-y-auto bg-zinc-950 lg:h-full lg:w-1/2 ${activePanel === "preview" ? "flex" : "hidden lg:flex"}`}
          >
            {/* Live Preview Pane */}
            <div className="relative flex flex-col p-6 lg:p-8">
              {/* Background grid accents */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e11d4803_1px,transparent_1px),linear-gradient(to_bottom,#e11d4803_1px,transparent_1px)] bg-[size:32px_32px]" />

              {/* Tab Selector Header */}
              <div className="z-10 mb-6 flex items-center justify-between border-b border-zinc-900 pb-4 select-none">
                <div className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900/50 p-1 text-zinc-400">
                  {(["svg", "png", "html"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setRenderType(type)}
                      className={`inline-flex items-center justify-center rounded-md px-3.5 py-1 text-xs font-semibold whitespace-nowrap transition-all focus-visible:outline-none ${
                        renderType === type
                          ? "bg-zinc-800 text-zinc-100 shadow-sm"
                          : "hover:text-zinc-200"
                      }`}
                    >
                      {type.toUpperCase()}
                    </button>
                  ))}
                </div>
                {rendering && <RefreshCw className="h-3.5 w-3.5 animate-spin text-coral-400" />}
              </div>

              {/* Rendering Core Display */}
              <div className="relative flex min-h-[300px] w-full flex-col items-center justify-center">
                {fontsLoading ? (
                  <div className="flex flex-col items-center gap-3">
                    <RefreshCw className="h-8 w-8 animate-spin text-coral-500" />
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
                ) : compileError || renderError ? (
                  <Alert
                    variant="destructive"
                    className="flex max-w-2xl flex-col items-start gap-3 border-amber-900/50 bg-amber-950/20 p-6 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <AlertTitle className="font-semibold text-amber-400">
                        {compileError ? "Compilation / Code Error" : "Satori Rendering Error"}
                      </AlertTitle>
                    </div>
                    <AlertDescription className="max-h-60 w-full overflow-y-auto font-mono text-xs leading-relaxed whitespace-pre-wrap text-amber-200/80">
                      {compileError || renderError}
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Card
                    className="relative overflow-hidden rounded-2xl border-zinc-900 bg-background shadow-2xl shadow-black/80 transition-all duration-300"
                    style={{
                      width: "100%",
                      maxWidth: `${typeof width === "number" ? Math.max(100, width) : 1200}px`,
                      aspectRatio: `${typeof width === "number" ? Math.max(100, width) : 1200} / ${typeof height === "number" ? Math.max(100, height) : 630}`,
                    }}
                  >
                    <CardContent className="h-full w-full p-0">
                      {/* Checkerboard background */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.03]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #fff 10%, transparent 11%), radial-gradient(circle, #fff 10%, transparent 11%)",
                          backgroundSize: "20px 20px",
                          backgroundPosition: "0 0, 10px 10px",
                        }}
                      />

                      {/* Embed content based on render type */}
                      {renderType === "svg" && svgContent && (
                        <div
                          className="flex h-full w-full items-center justify-center select-none"
                          dangerouslySetInnerHTML={{ __html: svgContent }}
                        />
                      )}

                      {renderType === "png" && pngUrl && (
                        <img
                          src={pngUrl}
                          className="h-full w-full object-contain select-none"
                          alt="Live PNG Preview"
                        />
                      )}

                      {renderType === "html" && (
                        <iframe
                          title="HTML Live Preview"
                          ref={handleIframeRef}
                          className="h-full w-full border-0 bg-zinc-900"
                        />
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Rendering Performance Footer */}
              <div className="mt-4 flex items-center justify-between px-1 text-xs text-zinc-500 select-none">
                <span className="font-mono">
                  {renderType.toUpperCase()} Preview Rendered in {renderTime.toFixed(1)}ms
                </span>
                <span className="font-mono">
                  {width || 1200} × {height || 630} px
                </span>
              </div>
            </div>

            {/* Satori Playground Configurations Area */}
            <div className="space-y-6 p-6">
              {/* Dimensions Subsection */}
              <div>
                <div className="mb-4 flex items-center gap-2 select-none">
                  <Sliders className="h-4 w-4 text-coral-400" />
                  <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                    Container Configurations
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Aspect Ratio Preset Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setWidth(1200);
                        setHeight(630);
                      }}
                      className="min-w-[100px] flex-1 border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200"
                    >
                      1.9:1 (1200×630)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setWidth(1200);
                        setHeight(600);
                      }}
                      className="min-w-[100px] flex-1 border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200"
                    >
                      2:1 (1200×600)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setWidth(800);
                        setHeight(400);
                      }}
                      className="min-w-[100px] flex-1 border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200"
                    >
                      Reset (800×400)
                    </Button>
                  </div>

                  {/* Width slider & input */}
                  <div className="grid gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <label htmlFor="width-input">Width: {width || 1200}px</label>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="100"
                          max="1200"
                          value={width || 1200}
                          onChange={(e) => setWidth(parseInt(e.target.value, 10))}
                          className="h-1.5 flex-1 cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-coral-500"
                        />
                        <Input
                          id="width-input"
                          type="number"
                          value={width}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val === "") setWidth("");
                            else {
                              const parsed = parseInt(val, 10);
                              setWidth(isNaN(parsed) ? "" : parsed);
                            }
                          }}
                          onBlur={() => {
                            if (typeof width !== "number" || width < 100) {
                              setWidth(1200);
                            }
                          }}
                          className="h-8 w-20 border-zinc-800 bg-zinc-900/40 text-center text-xs text-zinc-200"
                        />
                      </div>
                    </div>

                    {/* Height slider & input */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <label htmlFor="height-input">Height: {height || 630}px</label>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="100"
                          max="1200"
                          value={height || 630}
                          onChange={(e) => setHeight(parseInt(e.target.value, 10))}
                          className="h-1.5 flex-1 cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-coral-500"
                        />
                        <Input
                          id="height-input"
                          type="number"
                          value={height}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val === "") setHeight("");
                            else {
                              const parsed = parseInt(val, 10);
                              setHeight(isNaN(parsed) ? "" : parsed);
                            }
                          }}
                          onBlur={() => {
                            if (typeof height !== "number" || height < 100) {
                              setHeight(630);
                            }
                          }}
                          className="h-8 w-20 border-zinc-800 bg-zinc-900/40 text-center text-xs text-zinc-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download and Export Controls Area */}
              <div className="space-y-3 border-t border-zinc-900 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-400">
                    Download Output Format
                  </span>
                  <div className="grid grid-cols-4 gap-1 rounded-lg border border-zinc-800 bg-zinc-900/40 p-0.5">
                    {(["svg", "png", "jpeg", "jpg"] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setDownloadFormat(fmt)}
                        className={`rounded px-2.5 py-1 text-[10px] font-bold uppercase transition-all ${
                          downloadFormat === fmt
                            ? "bg-zinc-800 text-coral-400 shadow-sm"
                            : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={handleCopy}
                    disabled={!svgContent || rendering}
                    variant={copied ? "default" : "secondary"}
                    className={`py-2 text-xs font-semibold transition-all ${
                      copied
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "border border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Copied SVG!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy SVG Code
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={handleDownload}
                    disabled={!svgContent || rendering}
                    className="bg-primary py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download {downloadFormat.toUpperCase()}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render portaled components into iframe element document body */}
      {iframeDoc &&
        dynamicComponent &&
        createPortal(React.createElement(dynamicComponent, {}), iframeDoc.body)}
    </div>
  );
}
