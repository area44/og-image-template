import { Check, Copy, Download, Image as ImageIcon, Sliders, Upload } from "lucide-react";
import React, { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface ConfigPanelProps {
  width: number | "";
  height: number | "";
  setWidth: React.Dispatch<React.SetStateAction<number | "">>;
  setHeight: React.Dispatch<React.SetStateAction<number | "">>;
  downloadFormat: "svg" | "png" | "jpeg" | "jpg";
  setDownloadFormat: React.Dispatch<React.SetStateAction<"svg" | "png" | "jpeg" | "jpg">>;
  onCopySvg: () => void;
  onDownload: () => void;
  onImageUpload?: (dataUrl: string) => void;
  svgContent: string;
  rendering: boolean;
  copied: boolean;
}

export function ConfigPanel({
  width,
  height,
  setWidth,
  setHeight,
  downloadFormat,
  setDownloadFormat,
  onCopySvg,
  onDownload,
  onImageUpload,
  svgContent,
  rendering,
  copied,
}: ConfigPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onImageUpload) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onImageUpload(dataUrl);
      }
    };
    reader.readAsDataURL(file);
    // Reset file input value so re-selecting same file triggers event
    e.target.value = "";
  };
  return (
    <div className="space-y-6 p-6">
      {/* Dimensions Subsection */}
      <div>
        <div className="mb-4 flex items-center gap-2 select-none">
          <Sliders className="h-4 w-4 text-coral-400" />
          <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Config</h2>
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
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <label htmlFor="width-input">Width: {width || 1200}px</label>
              </div>
              <div className="flex items-center gap-4">
                <Slider
                  min={100}
                  max={1500}
                  defaultValue={[1200]}
                  value={[typeof width === "number" ? width : 1200]}
                  onValueChange={(val) => {
                    const num = Array.isArray(val) ? val[0] : val;
                    setWidth(num);
                  }}
                  className="flex-1"
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
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <label htmlFor="height-input">Height: {height || 630}px</label>
              </div>
              <div className="flex items-center gap-4">
                <Slider
                  min={100}
                  max={1000}
                  defaultValue={[630]}
                  value={[typeof height === "number" ? height : 630]}
                  onValueChange={(val) => {
                    const num = Array.isArray(val) ? val[0] : val;
                    setHeight(num);
                  }}
                  className="flex-1"
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

            {/* Local Image Upload Subsection */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <label
                  htmlFor="local-image-upload"
                  className="flex cursor-pointer items-center gap-1.5 font-medium text-zinc-300"
                >
                  <ImageIcon className="h-3.5 w-3.5 text-coral-400" />
                  Local Image Upload
                </label>
              </div>
              <input
                id="local-image-upload"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="w-full justify-center gap-2 border-zinc-800 bg-zinc-900/40 text-xs text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
              >
                <Upload className="h-3.5 w-3.5 text-coral-400" />
                Upload Local Image
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Download and Export Controls Area */}
      <div className="space-y-3 border-t border-zinc-900 pt-6">
        <div className="flex items-center justify-end">
          <div className="grid grid-cols-4 gap-1 rounded-lg border border-zinc-800 bg-zinc-900/40 p-0.5">
            {(["svg", "png", "jpeg", "jpg"] as const).map((fmt) => (
              <Button
                key={fmt}
                type="button"
                variant="ghost"
                size="xs"
                onClick={() => setDownloadFormat(fmt)}
                className={`h-auto rounded px-2.5 py-1 text-[10px] font-bold uppercase transition-all ${
                  downloadFormat === fmt
                    ? "bg-zinc-800 text-coral-400 shadow-sm hover:bg-zinc-800 hover:text-coral-400"
                    : "text-zinc-500 hover:bg-transparent hover:text-zinc-300"
                }`}
              >
                {fmt}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={onCopySvg}
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
            onClick={onDownload}
            disabled={!svgContent || rendering}
            className="bg-primary py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
          >
            <Download className="h-3.5 w-3.5" />
            Download {downloadFormat.toUpperCase()}
          </Button>
        </div>
      </div>
    </div>
  );
}
