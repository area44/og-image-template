import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import { Check, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface EditorPanelProps {
  selectedTemplate: string;
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
  activePanel: "code" | "preview";
}

export function EditorPanel({ value, onChange, onReset, activePanel }: EditorPanelProps) {
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
      <div className="min-h-0 w-full flex-1 overflow-auto text-xs [&_.cm-editor]:h-full [&_.cm-scroller]:overflow-auto">
        <CodeMirror
          value={value}
          height="100%"
          theme={oneDark}
          extensions={[javascript({ jsx: true, typescript: true })]}
          onChange={(val) => {
            onChange(val);
          }}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            foldGutter: true,
            dropCursor: true,
            allowMultipleSelections: true,
            indentOnInput: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            rectangularSelection: true,
            crosshairCursor: true,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            closeBracketsKeymap: true,
            defaultKeymap: true,
            searchKeymap: true,
            historyKeymap: true,
            foldKeymap: true,
            completionKeymap: true,
            lintKeymap: true,
          }}
        />
      </div>
    </div>
  );
}
