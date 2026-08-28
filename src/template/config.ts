import React from "react";

import BlogTemplate from "./blog";
import blogCode from "./blog.tsx?raw";
import EarthTemplate from "./earth/earth";
import earthCode from "./earth/earth.tsx?raw";
import MinimalTemplate from "./minimal";
import minimalCode from "./minimal.tsx?raw";
import PortfolioTemplate from "./portfolio";
import portfolioCode from "./portfolio.tsx?raw";

export interface TemplateConfig {
  id: string;
  name: string;
  component: React.ComponentType<any>;
  code: string;
}

export const TEMPLATES = {
  blog: {
    id: "blog",
    name: "Blog Template",
    component: BlogTemplate,
    code: blogCode,
  },
  earth: {
    id: "earth",
    name: "Earth Template",
    component: EarthTemplate,
    code: earthCode,
  },
  minimal: {
    id: "minimal",
    name: "Minimal Template",
    component: MinimalTemplate,
    code: minimalCode,
  },
  portfolio: {
    id: "portfolio",
    name: "Portfolio Template",
    component: PortfolioTemplate,
    code: portfolioCode,
  },
} as const;

export type TemplateId = keyof typeof TEMPLATES;

export const TEMPLATE_CODES: Record<TemplateId, string> = {
  blog: blogCode,
  earth: earthCode,
  minimal: minimalCode,
  portfolio: portfolioCode,
};

export const DEFAULT_TEMPLATE_ID: TemplateId = "blog";
