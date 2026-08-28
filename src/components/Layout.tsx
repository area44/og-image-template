import React from "react";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TemplateId } from "@/template/config";

interface LayoutProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTemplate: TemplateId;
  onTemplateSelect: (id: TemplateId) => void;
  activePanel: "code" | "preview";
  setActivePanel: React.Dispatch<React.SetStateAction<"code" | "preview">>;
  children: React.ReactNode;
}

export function Layout({
  isSidebarOpen,
  setIsSidebarOpen,
  selectedTemplate,
  onTemplateSelect,
  activePanel,
  setActivePanel,
  children,
}: LayoutProps) {
  return (
    <div className="selection:text-coral-200 flex h-dvh flex-col overflow-hidden bg-background text-foreground selection:bg-coral-500/30">
      {/* Decorative top ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[200px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(251,113,133,0.15),transparent_50%)]" />

      {/* Header component */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Workspace below header */}
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row lg:overflow-hidden">
        {/* Mobile Sidebar Backdrop Overlay */}
        {isSidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 top-14 z-30 cursor-default bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        )}

        {/* Sidebar Component */}
        <Sidebar
          selectedTemplate={selectedTemplate}
          onTemplateSelect={onTemplateSelect}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Mobile Tab Switcher */}
        <div className="flex w-full shrink-0 border-b border-border bg-zinc-950 p-2 select-none lg:hidden">
          <Tabs
            value={activePanel}
            onValueChange={(val) => setActivePanel(val as "code" | "preview")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="code">Editor</TabsTrigger>
              <TabsTrigger value="preview">Live Preview & Config</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Responsive Workspace Main Content */}
        <div className="flex min-h-0 flex-1 flex-col lg:flex-row lg:overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
