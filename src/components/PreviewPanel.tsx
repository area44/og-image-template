import { AlertCircle, RefreshCw } from "lucide-react";
import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PreviewPanelProps {
  width: number | "";
  height: number | "";
  renderType: "svg" | "png" | "html";
  setRenderType: React.Dispatch<React.SetStateAction<"svg" | "png" | "html">>;
  rendering: boolean;
  fontsLoading: boolean;
  fontsError: string | null;
  compileError: string | null;
  renderError: string | null;
  svgContent: string;
  pngUrl: string | null;
  renderTime: number;
  handleIframeRef: (iframe: HTMLIFrameElement | null) => void;
}

export function PreviewPanel({
  width,
  height,
  renderType,
  setRenderType,
  rendering,
  fontsLoading,
  fontsError,
  compileError,
  renderError,
  svgContent,
  pngUrl,
  renderTime,
  handleIframeRef,
}: PreviewPanelProps) {
  const resolvedWidth = typeof width === "number" ? Math.max(100, width) : 1200;
  const resolvedHeight = typeof height === "number" ? Math.max(100, height) : 630;

  return (
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
                renderType === type ? "bg-zinc-800 text-zinc-100 shadow-sm" : "hover:text-zinc-200"
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
            <p className="text-sm font-medium text-zinc-400">Fetching font files for Satori...</p>
          </div>
        ) : fontsError ? (
          <Alert
            variant="destructive"
            className="flex max-w-md flex-col items-center gap-3 bg-red-950/20 p-6 text-center"
          >
            <AlertCircle className="h-10 w-10 text-destructive" />
            <AlertTitle className="font-semibold text-destructive">Failed to Load Fonts</AlertTitle>
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
              maxWidth: `${resolvedWidth}px`,
              aspectRatio: `${resolvedWidth} / ${resolvedHeight}`,
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
  );
}
