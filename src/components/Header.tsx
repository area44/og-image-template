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
          <svg
            className="h-full w-full"
            viewBox="0 0 48 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#863bff"
              d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
            />
            <mask
              id="header-a"
              width="48"
              height="46"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
            >
              <path
                fill="#000"
                d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z"
              />
            </mask>
            <g mask="url(#header-a)">
              <g filter="url(#hdr-b)">
                <ellipse
                  cx="5.508"
                  cy="14.704"
                  fill="#ede6ff"
                  rx="5.508"
                  ry="14.704"
                  transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"
                />
              </g>
              <g filter="url(#hdr-c)">
                <ellipse
                  cx="10.399"
                  cy="29.851"
                  fill="#ede6ff"
                  rx="10.399"
                  ry="29.851"
                  transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"
                />
              </g>
              <g filter="url(#hdr-d)">
                <ellipse
                  cx="5.508"
                  cy="30.487"
                  fill="#7e14ff"
                  rx="5.508"
                  ry="30.487"
                  transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"
                />
              </g>
              <g filter="url(#hdr-e)">
                <ellipse
                  cx="5.508"
                  cy="30.599"
                  fill="#7e14ff"
                  rx="5.508"
                  ry="30.599"
                  transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"
                />
              </g>
              <g filter="url(#hdr-f)">
                <ellipse
                  cx="5.508"
                  cy="30.599"
                  fill="#7e14ff"
                  rx="5.508"
                  ry="30.599"
                  transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"
                />
              </g>
              <g filter="url(#hdr-g)">
                <ellipse
                  cx="14.072"
                  cy="22.078"
                  fill="#ede6ff"
                  rx="14.072"
                  ry="22.078"
                  transform="rotate(93.35 24.506 48.493)scale(-1 1)"
                />
              </g>
              <g filter="url(#hdr-h)">
                <ellipse
                  cx="3.47"
                  cy="21.501"
                  fill="#7e14ff"
                  rx="3.47"
                  ry="21.501"
                  transform="rotate(89.009 28.708 47.59)scale(-1 1)"
                />
              </g>
              <g filter="url(#hdr-i)">
                <ellipse
                  cx="3.47"
                  cy="21.501"
                  fill="#7e14ff"
                  rx="3.47"
                  ry="21.501"
                  transform="rotate(89.009 28.708 47.59)scale(-1 1)"
                />
              </g>
              <g filter="url(#hdr-j)">
                <ellipse
                  cx=".387"
                  cy="8.972"
                  fill="#7e14ff"
                  rx="4.407"
                  ry="29.108"
                  transform="rotate(39.51 .387 8.972)"
                />
              </g>
              <g filter="url(#hdr-k)">
                <ellipse
                  cx="47.523"
                  cy="-6.092"
                  fill="#7e14ff"
                  rx="4.407"
                  ry="29.108"
                  transform="rotate(37.892 47.523 -6.092)"
                />
              </g>
              <g filter="url(#hdr-l)">
                <ellipse
                  cx="41.412"
                  cy="6.333"
                  fill="#47bfff"
                  rx="5.971"
                  ry="9.665"
                  transform="rotate(37.892 41.412 6.333)"
                />
              </g>
              <g filter="url(#hdr-m)">
                <ellipse
                  cx="-1.879"
                  cy="38.332"
                  fill="#7e14ff"
                  rx="4.407"
                  ry="29.108"
                  transform="rotate(37.892 -1.88 38.332)"
                />
              </g>
              <g filter="url(#hdr-n)">
                <ellipse
                  cx="-1.879"
                  cy="38.332"
                  fill="#7e14ff"
                  rx="4.407"
                  ry="29.108"
                  transform="rotate(37.892 -1.88 38.332)"
                />
              </g>
              <g filter="url(#hdr-o)">
                <ellipse
                  cx="35.651"
                  cy="29.907"
                  fill="#7e14ff"
                  rx="4.407"
                  ry="29.108"
                  transform="rotate(37.892 35.651 29.907)"
                />
              </g>
              <g filter="url(#hdr-p)">
                <ellipse
                  cx="38.418"
                  cy="32.4"
                  fill="#47bfff"
                  rx="5.971"
                  ry="15.297"
                  transform="rotate(37.892 38.418 32.4)"
                />
              </g>
            </g>
            <defs>
              <filter
                id="hdr-b"
                width="60.045"
                height="41.654"
                x="-19.77"
                y="16.149"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659" />
              </filter>
              <filter
                id="hdr-c"
                width="90.34"
                height="51.437"
                x="-54.613"
                y="-7.533"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659" />
              </filter>
              <filter
                id="hdr-d"
                width="79.355"
                height="29.4"
                x="-49.64"
                y="2.03"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-e"
                width="79.579"
                height="29.4"
                x="-45.045"
                y="20.029"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-f"
                width="79.579"
                height="29.4"
                x="-43.513"
                y="21.178"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-g"
                width="74.749"
                height="58.852"
                x="15.756"
                y="-17.901"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659" />
              </filter>
              <filter
                id="hdr-h"
                width="61.377"
                height="25.362"
                x="23.548"
                y="2.284"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-i"
                width="61.377"
                height="25.362"
                x="23.548"
                y="2.284"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-j"
                width="56.045"
                height="63.649"
                x="-27.636"
                y="-22.853"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-k"
                width="54.814"
                height="64.646"
                x="20.116"
                y="-38.415"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-l"
                width="33.541"
                height="35.313"
                x="24.641"
                y="-11.323"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-m"
                width="54.814"
                height="64.646"
                x="-29.286"
                y="6.009"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-n"
                width="54.814"
                height="64.646"
                x="-29.286"
                y="6.009"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-o"
                width="54.814"
                height="64.646"
                x="8.244"
                y="-2.416"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
              <filter
                id="hdr-p"
                width="39.409"
                height="43.623"
                x="18.713"
                y="10.588"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596" />
              </filter>
            </defs>
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
