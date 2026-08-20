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
        <div className="relative h-7 w-7 shrink-0 text-coral-400">
          <svg
            className="h-full w-full"
            viewBox="0 0 44 45"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.00052 6.3584H16.3467V20.2046C16.3467 23.8864 13.3619 26.8712 9.68002 26.8712H6.50053V8.8584C6.50053 7.47769 7.61981 6.3584 9.00052 6.3584ZM35.32 17.8456C31.6381 17.8456 28.6533 20.8303 28.6533 24.5122V38.3584H35.9995C37.3802 38.3584 38.4995 37.2391 38.4995 35.8584V17.8456H35.32ZM24.654 16.2046C20.9721 16.2046 17.9873 13.2198 17.9873 9.53792V6.35844L36.0001 6.35844C37.3808 6.35844 38.5001 7.47772 38.5001 8.85844L38.5001 16.2046H24.654ZM6.5 35.8584C6.5 37.2391 7.61929 38.3584 9 38.3584H27.0128V35.1789C27.0128 31.497 24.0281 28.5122 20.3462 28.5122H6.5V35.8584Z"
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
