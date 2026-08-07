import Editor from "@monaco-editor/react";
import { Copy, Check, RefreshCw } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface EditorPanelProps {
  selectedTemplate: string;
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
  activePanel: "code" | "preview";
  beforeMount: (monaco: any) => void;
}

export function EditorPanel({
  selectedTemplate,
  value,
  onChange,
  onReset,
  activePanel,
  beforeMount,
}: EditorPanelProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCodeCopy = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div
      className={`min-h-0 flex-1 flex-col border-b border-zinc-900 bg-zinc-950 lg:h-full lg:w-1/2 lg:border-r lg:border-b-0 ${
        activePanel === "code" ? "flex" : "hidden lg:flex"
      }`}
    >
      <div className="flex h-11 shrink-0 items-center justify-end border-b border-zinc-900 bg-zinc-950/50 px-4">
        <div className="flex items-center gap-1.5">
          <Button
            onClick={onReset}
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
      <div className="min-h-0 w-full flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="typescript"
          path={`file:///${selectedTemplate}.tsx`}
          beforeMount={beforeMount}
          value={value}
          onChange={(val) => {
            if (val !== undefined) {
              onChange(val);
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
  );
}
