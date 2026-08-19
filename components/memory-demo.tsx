"use client";

import { useState, useCallback } from "react";
import { Check, Brain, User, Code, Settings, Target } from "lucide-react";
import { useScrollAnimation } from "./use-scroll-animation";

type AIModel = "ChatGPT" | "Claude" | "Gemini";

const memoryCategories = [
  { id: "profile", label: "Profile", icon: User },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Brain },
  { id: "preferences", label: "Preferences", icon: Settings },
  { id: "goals", label: "Goals", icon: Target },
];

const memoryChips = ["Startup", "Background", "Skills", "Preferences"];

const aiResponses: Record<AIModel, { message: string }> = {
  ChatGPT: {
    message:
      "Since you're exploring a unified AI-memory layer, let's think about the MVP, user problem, and how you could validate it. Based on your React and Python stack, I'd suggest starting with a browser extension that intercepts context from different AI chat interfaces.",
  },
  Claude: {
    message:
      "Building on what you've already explored, I'd focus first on a browser extension that creates one user-owned context layer across AI assistants. Given your preference for practical approaches, here's a concrete architecture you could prototype this weekend.",
  },
  Gemini: {
    message:
      "Given your interest in AI and startups, the strongest first step is validating whether users want their context to follow them between AI tools. I'd recommend a quick landing page and waitlist before building, using your React skills to create a compelling demo.",
  },
};

export default function MemoryDemo() {
  const [activeModel, setActiveModel] = useState<AIModel>("ChatGPT");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [synced, setSynced] = useState(true);
  const [ref, isVisible] = useScrollAnimation<HTMLElement>(0.08);

  const switchModel = useCallback(
    (model: AIModel) => {
      if (model === activeModel) return;
      setIsTransitioning(true);
      setSynced(false);

      setTimeout(() => {
        setActiveModel(model);
        setIsTransitioning(false);
        setTimeout(() => setSynced(true), 350);
      }, 200);
    },
    [activeModel]
  );

  const models: AIModel[] = ["ChatGPT", "Claude", "Gemini"];

  return (
    <section ref={ref} id="product" className="py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2
          className={`text-[clamp(22px,3vw,30px)] font-medium tracking-tight text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          See what it feels like when AI remembers you.
        </h2>

        <div
          className={`mt-8 ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          {/* Demo container */}
          <div className="border border-border rounded-xl overflow-hidden bg-surface shadow-sm">
            <div className="flex flex-col lg:flex-row">
              {/* Sidebar — Memory */}
              <div className="lg:w-56 border-b lg:border-b-0 lg:border-r border-border-light">
                <div className="px-4 py-3 border-b border-border-light">
                  <div className="flex items-center gap-2">
                    <Brain size={13} className="text-foreground" />
                    <span className="text-[12px] font-semibold text-foreground tracking-tight">
                      Your Memory
                    </span>
                  </div>
                </div>

                {/* Mobile: horizontal scroll / Desktop: vertical list */}
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible py-1 lg:py-1.5">
                  {memoryCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        id={`memory-${cat.id}`}
                        className="flex items-center gap-2.5 px-4 py-2 text-[12px] text-muted hover:text-foreground hover:bg-surface-hover/60 transition-colors whitespace-nowrap lg:w-full"
                      >
                        <Icon size={13} className="shrink-0 opacity-60" />
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main area */}
              <div className="flex-1 min-w-0">
                {/* AI model tabs */}
                <div className="flex border-b border-border-light">
                  {models.map((model) => (
                    <button
                      key={model}
                      id={`tab-${model.toLowerCase()}`}
                      onClick={() => switchModel(model)}
                      className={`flex-1 sm:flex-none px-5 py-2.5 text-[12px] font-medium transition-colors relative ${
                        activeModel === model
                          ? "text-foreground"
                          : "text-muted-light hover:text-muted"
                      }`}
                    >
                      {model}
                      {activeModel === model && (
                        <div className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-foreground rounded-full" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Context loaded indicator */}
                <div className="px-4 py-2 border-b border-border-light">
                  <div className="flex flex-wrap items-center gap-2">
                    <div
                      className={`flex items-center gap-1.5 transition-all duration-300 ${
                        synced ? "text-success" : "text-muted-light"
                      }`}
                    >
                      <Check
                        size={11}
                        className={
                          synced
                            ? "text-success"
                            : "text-muted-light animate-pulse"
                        }
                      />
                      <span className="text-[10px] font-medium">
                        {synced ? "Context synced" : "Syncing context…"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 ml-1">
                      {memoryChips.map((chip) => (
                        <span
                          key={chip}
                          className="px-1.5 py-0.5 text-[9px] font-medium text-muted bg-surface-hover border border-border-light rounded"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chat area */}
                <div className="p-5 md:p-6 min-h-[260px]">
                  {/* User message */}
                  <div className="flex gap-3 mb-5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-foreground text-accent-foreground flex items-center justify-center text-[9px] font-semibold shrink-0">
                      Y
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-muted">
                        You
                      </span>
                      <p className="mt-0.5 text-[14px] leading-relaxed text-foreground/85">
                        Help me continue my startup idea.
                      </p>
                    </div>
                  </div>

                  {/* AI response */}
                  <div
                    className={`flex gap-3 transition-all duration-200 ${
                      isTransitioning
                        ? "opacity-0 translate-y-0.5"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-surface-hover border border-border-light text-muted flex items-center justify-center text-[9px] font-semibold shrink-0">
                      {activeModel[0]}
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-muted">
                        {activeModel}
                      </span>
                      <p className="mt-0.5 text-[14px] leading-relaxed text-foreground/85">
                        {aiResponses[activeModel].message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-5 text-center text-[14px] text-muted font-medium">
            <span className="text-foreground">
              The AI changes.
            </span>{" "}
            Your context doesn&apos;t.
          </p>
        </div>
      </div>
    </section>
  );
}
