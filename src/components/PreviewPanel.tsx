import { AlertCircle, RefreshCw } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PreviewPanelProps {
  width: number | "";
  height: number | "";
  rendering: boolean;
  fontsLoading: boolean;
  fontsError: string | null;
  compileError: string | null;
  renderError: string | null;
  svgContent: string;
  renderTime: number;
}

export function PreviewPanel({
  width,
  height,
  rendering,
  fontsLoading,
  fontsError,
  compileError,
  renderError,
  svgContent,
  renderTime,
}: PreviewPanelProps) {
  const resolvedWidth = typeof width === "number" ? Math.max(100, width) : 1200;
  const resolvedHeight = typeof height === "number" ? Math.max(100, height) : 630;

  return (
    <div className="relative flex flex-col p-6 lg:p-8">
      {/* Background grid accents */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e11d4803_1px,transparent_1px),linear-gradient(to_bottom,#e11d4803_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Rendering Core Display */}
      <div className="relative flex min-h-[300px] w-full flex-col items-center justify-center">
        <Card
          className="relative overflow-hidden rounded-2xl border-zinc-900 bg-background shadow-2xl shadow-black/80 transition-all duration-300"
          style={{
            width: "100%",
            maxWidth: `${resolvedWidth}px`,
            aspectRatio: `${resolvedWidth} / ${resolvedHeight}`,
          }}
        >
          <CardContent className="flex h-full w-full items-center justify-center overflow-hidden p-0">
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
                className="flex max-w-md flex-col items-center gap-3 border-0 bg-red-950/20 p-6 text-center shadow-none"
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
                className="flex h-full w-full flex-col items-start gap-3 overflow-y-auto rounded-none border-0 bg-amber-950/20 p-6 text-left"
              >
                <div className="flex shrink-0 items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <AlertTitle className="font-semibold text-amber-400">
                    {compileError ? "Compilation / Code Error" : "Satori Rendering Error"}
                  </AlertTitle>
                </div>
                <AlertDescription className="w-full font-mono text-xs leading-relaxed whitespace-pre-wrap text-amber-200/80">
                  {compileError || renderError}
                </AlertDescription>
              </Alert>
            ) : (
              svgContent && (
                <div
                  className="flex h-full w-full items-center justify-center select-none"
                  dangerouslySetInnerHTML={{ __html: svgContent }}
                />
              )
            )}
          </CardContent>
        </Card>
      </div>

      {/* Rendering Performance Footer */}
      <div className="mt-4 flex items-center justify-between px-1 text-xs text-zinc-500 select-none">
        <span className="flex items-center gap-2 font-mono">
          {rendering && <RefreshCw className="h-3 w-3 animate-spin text-coral-400" />}
          Preview Rendered in {renderTime.toFixed(1)}ms
        </span>
        <span className="font-mono">
          {width || 1200} × {height || 630} px
        </span>
      </div>
    </div>
  );
}
