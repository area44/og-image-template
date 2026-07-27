import { Check, Copy, Menu, X } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onShare: () => void;
  sharedCopied: boolean;
}

export function Header({ isSidebarOpen, setIsSidebarOpen, onShare, sharedCopied }: HeaderProps) {
  return (
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
                <stop offset="0%" stopColor="#ff7f50" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
              <linearGradient id="header-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3f3f46" />
                <stop offset="100%" stopColor="#18181b" />
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
              strokeWidth="2.5"
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
              strokeWidth="2.5"
            />
            <line
              x1="31"
              y1="32"
              x2="63"
              y2="32"
              stroke="#27272a"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="31"
              y1="40"
              x2="52"
              y2="40"
              stroke="#18181b"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <g transform="translate(52, 38)">
              <circle cx="16" cy="16" r="14" fill="url(#header-primary)" />
              <path
                d="M16 9C16 9 18 13 18 15.8C18 18.6 15.4 20.6 12.8 20.6C10.2 20.6 8.4 18.6 8.4 15.8C8.4 13 12 9.8 12 9.8"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
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
          onClick={onShare}
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
  );
}
