import { Menu, X } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-14 w-full shrink-0 items-center justify-between border-b border-zinc-900 bg-zinc-950/80 px-6 backdrop-blur-md select-none">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="mr-1 text-zinc-400 hover:text-zinc-200"
          aria-label="Toggle Menu"
        >
          {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
        <div className="relative h-6 w-6 shrink-0">
          <svg className="h-full w-full" viewBox="0 0 256 257" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="header-vite-grad-bg"
                x1="-0.828%"
                y1="57.636%"
                x2="57.626%"
                y2="-7.909%"
              >
                <stop offset="0%" stopColor="#41D1FF" />
                <stop offset="100%" stopColor="#BD34FE" />
              </linearGradient>
              <linearGradient
                id="header-vite-grad-bolt"
                x1="43.376%"
                y1="2.242%"
                x2="50.316%"
                y2="89.03%"
              >
                <stop offset="0%" stopColor="#FFEA83" />
                <stop offset="8.333%" stopColor="#FFDD35" />
                <stop offset="100%" stopColor="#FFA800" />
              </linearGradient>
            </defs>
            <path
              fill="url(#header-vite-grad-bg)"
              d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
            />
            <path
              fill="url(#header-vite-grad-bolt)"
              d="M185.432 13.808l-62.198 11.23a3.267 3.267 0 0 0-2.68 3.193l-.223 57.575a3.267 3.267 0 0 0 3.738 3.232l16.11-2.617a3.267 3.267 0 0 1 3.734 3.652l-3.328 22.022a3.267 3.267 0 0 0 3.82 3.715l16.638-2.702a3.267 3.267 0 0 1 3.733 3.653l-8.625 57.065c-.56 3.704 4.225 5.894 6.643 3.036l1.378-1.628 65.577-122.923c1.782-3.342-.998-7.327-4.743-6.648l-18.46 3.348a3.267 3.267 0 0 1-3.734-3.652l4.89-32.328a3.267 3.267 0 0 0-3.82-3.715l-16.59 2.694a3.267 3.267 0 0 1-3.733-3.653l3.056-20.218a3.267 3.267 0 0 0-4.13-3.682Z"
            />
          </svg>
        </div>
        <span className="hidden font-semibold text-zinc-200 sm:inline">OG Image Coral</span>
      </div>
      <div className="flex items-center gap-4">
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
