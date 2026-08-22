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
        <div className="relative h-5 w-[33px] shrink-0">
          <svg
            viewBox="0 0 23 14"
            fill="none"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7482 0H18.8887C21.641 3.93959 21.6571 10.0462 18.8887 14H20.7482C23.516 10.0462 23.4999 3.93959 20.7482 0Z"
              fill="white"
            />
            <path
              d="M2.07027 3.05176e-05C-0.682028 3.93963 -0.698142 10.0463 2.07027 14H3.92985C1.16208 10.0463 1.1782 3.93963 3.92985 3.05176e-05H2.07027Z"
              fill="white"
            />
            <path
              d="M12.0135 13.6771C11.815 13.9297 11.4089 13.7892 11.4089 13.4682V10.3853C11.4089 10.0114 11.106 9.70846 10.7321 9.70846H7.32818C7.05295 9.70846 6.89245 9.39713 7.05295 9.17347L9.29089 6.04023C9.61124 5.59225 9.29089 4.9696 8.73979 4.9696H4.62036C4.34513 4.9696 4.18463 4.65828 4.34512 4.43461L7.24632 0.372548C7.31013 0.283598 7.41262 0.230743 7.52155 0.230743H16.1671C16.4424 0.230743 16.6029 0.542069 16.4424 0.765734L14.2044 3.89897C13.8841 4.34695 14.2044 4.9696 14.7555 4.9696H18.1595C18.4418 4.9696 18.6004 5.29511 18.4257 5.51748L12.0142 13.6777L12.0135 13.6771Z"
              fill="#863BFF"
            />
            <mask
              id="v8-mask"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="15"
              height="14"
            >
              <path
                d="M11.9823 13.677C11.7838 13.9296 11.3777 13.7891 11.3777 13.4681V10.3852C11.3777 10.0113 11.0747 9.70837 10.7009 9.70837H7.29693C7.0217 9.70837 6.8612 9.39704 7.0217 9.17338L9.25964 6.04014C9.57999 5.59216 9.25964 4.96951 8.70854 4.96951H4.58911C4.31388 4.96951 4.15338 4.65818 4.31387 4.43452L7.21507 0.372457C7.27888 0.283506 7.38137 0.230652 7.4903 0.230652H16.1359C16.4111 0.230652 16.5716 0.541978 16.4111 0.765643L14.1732 3.89888C13.8528 4.34686 14.1732 4.96951 14.7243 4.96951H18.1282C18.4106 4.96951 18.5691 5.29502 18.3944 5.51739L11.9829 13.6776L11.9823 13.677Z"
                fill="black"
              />
            </mask>
            <g mask="url(#v8-mask)">
              <g filter="url(#v8-f0)">
                <ellipse
                  cx="1.6481"
                  cy="4.39979"
                  rx="1.6481"
                  ry="4.39979"
                  transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 2.91309 9.66077)"
                  fill="#EDE6FF"
                />
              </g>
              <g filter="url(#v8-f1)">
                <ellipse
                  cx="3.11172"
                  cy="8.9321"
                  rx="3.11172"
                  ry="8.9321"
                  transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -7.51758 2.58936)"
                  fill="#EDE6FF"
                />
              </g>
              <g filter="url(#v8-f2)">
                <ellipse
                  cx="1.6481"
                  cy="9.12221"
                  rx="1.6481"
                  ry="9.12221"
                  transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -7.8584 3.61816)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f3)">
                <ellipse
                  cx="1.6481"
                  cy="9.15566"
                  rx="1.6481"
                  ry="9.15566"
                  transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -6.4834 9.00391)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f4)">
                <ellipse
                  cx="1.6481"
                  cy="9.15566"
                  rx="1.6481"
                  ry="9.15566"
                  transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -6.02441 9.34766)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f5)">
                <ellipse
                  cx="4.21045"
                  cy="6.60625"
                  rx="4.21045"
                  ry="6.60625"
                  transform="matrix(0.0584509 -0.99829 -0.99829 -0.0584509 26.4971 8.26871)"
                  fill="#EDE6FF"
                />
              </g>
              <g filter="url(#v8-f6)">
                <ellipse
                  cx="1.03839"
                  cy="6.43346"
                  rx="1.03839"
                  ry="6.43346"
                  transform="matrix(-0.0172986 -0.99985 -0.99985 0.0172986 26.9297 5.63535)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f7)">
                <ellipse
                  cx="1.03839"
                  cy="6.43346"
                  rx="1.03839"
                  ry="6.43346"
                  transform="matrix(-0.0172986 -0.99985 -0.99985 0.0172986 26.9297 5.63535)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f8)">
                <ellipse
                  cx="4.36576"
                  cy="2.91514"
                  rx="1.31855"
                  ry="8.70955"
                  transform="rotate(39.5103 4.36576 2.91514)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f9)">
                <ellipse
                  cx="18.4697"
                  cy="-1.59207"
                  rx="1.31855"
                  ry="8.70955"
                  transform="rotate(37.8923 18.4697 -1.59207)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f10)">
                <ellipse
                  cx="16.6417"
                  cy="2.12577"
                  rx="1.78679"
                  ry="2.89199"
                  transform="rotate(37.8923 16.6417 2.12577)"
                  fill="#47BFFF"
                />
              </g>
              <g filter="url(#v8-f11)">
                <ellipse
                  cx="3.68841"
                  cy="11.7003"
                  rx="1.31855"
                  ry="8.70955"
                  transform="rotate(37.8923 3.68841 11.7003)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f12)">
                <ellipse
                  cx="3.68841"
                  cy="11.7003"
                  rx="1.31855"
                  ry="8.70955"
                  transform="rotate(37.8923 3.68841 11.7003)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f13)">
                <ellipse
                  cx="14.9179"
                  cy="9.17936"
                  rx="1.31855"
                  ry="8.70955"
                  transform="rotate(37.8923 14.9179 9.17936)"
                  fill="#7E14FF"
                />
              </g>
              <g filter="url(#v8-f14)">
                <ellipse
                  cx="15.7453"
                  cy="9.92533"
                  rx="1.78679"
                  ry="4.57726"
                  transform="rotate(37.8923 15.7453 9.92533)"
                  fill="#47BFFF"
                />
              </g>
            </g>
            <defs>
              <filter
                id="v8-f0"
                x="-1.66562"
                y="5.06287"
                width="17.967"
                height="12.4635"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2.29179" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f1"
                x="-12.0914"
                y="-2.02332"
                width="27.0314"
                height="15.3908"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2.29179" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f2"
                x="-10.6037"
                y="0.838165"
                width="23.7454"
                height="8.79703"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f3"
                x="-9.22867"
                y="6.22382"
                width="23.8118"
                height="8.79703"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f4"
                x="-8.76968"
                y="6.56757"
                width="23.8118"
                height="8.79703"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f5"
                x="8.96524"
                y="-5.12549"
                width="22.3664"
                height="17.6096"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2.29179" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f6"
                x="11.2967"
                y="0.91397"
                width="18.3655"
                height="7.58884"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f7"
                x="11.2967"
                y="0.91397"
                width="18.3655"
                height="7.58884"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f8"
                x="-4.01871"
                y="-6.60739"
                width="16.7698"
                height="19.045"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f9"
                x="10.2694"
                y="-11.2637"
                width="16.4007"
                height="19.3433"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f10"
                x="11.6239"
                y="-3.15738"
                width="10.0355"
                height="10.5663"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f11"
                x="-4.51187"
                y="2.02869"
                width="16.4007"
                height="19.3433"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f12"
                x="-4.51187"
                y="2.02869"
                width="16.4007"
                height="19.3433"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f13"
                x="6.71762"
                y="-0.49228"
                width="16.4007"
                height="19.3433"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
              </filter>
              <filter
                id="v8-f14"
                x="9.84946"
                y="3.39893"
                width="11.7913"
                height="13.0528"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.37508" result="effect1_foregroundBlur_127_17274" />
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
