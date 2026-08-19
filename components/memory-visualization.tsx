"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useScrollAnimation } from "./use-scroll-animation";

const memoryData = [
  {
    id: "background",
    label: "Background",
    items: [
      "Computer Science student, 3rd year",
      "Self-taught in ML and deep learning",
      "Based in San Francisco",
    ],
  },
  {
    id: "preferences",
    label: "Preferences",
    items: [
      "Practical explanations over theory",
      "Code examples in Python and TypeScript",
      "Concise responses with clear structure",
    ],
  },
  {
    id: "projects",
    label: "Projects",
    items: [
      "Building a unified AI memory layer",
      "React + Next.js frontend",
      "Python backend with FastAPI",
    ],
  },
  {
    id: "goals",
    label: "Goals",
    items: [
      "Launch MVP by end of quarter",
      "Apply to YC next batch",
      "Build a small beta user group",
    ],
  },
  {
    id: "skills",
    label: "Skills",
    items: [
      "React, TypeScript, Next.js",
      "Python, FastAPI, PostgreSQL",
      "Basic ML/NLP understanding",
    ],
  },
];

const aiTargets = ["ChatGPT", "Claude", "Gemini"];

export default function MemoryVisualization() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [ref, isVisible] = useScrollAnimation<HTMLElement>(0.1);

  return (
    <section ref={ref} className="py-12 md:py-16 bg-surface-hover/20">
      <div className="mx-auto max-w-md px-6">
        <h2
          className={`text-[clamp(22px,3vw,30px)] font-medium tracking-tight text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Your memory. Everywhere.
        </h2>

        <div
          className={`mt-10 ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          {/* You node */}
          <div className="flex justify-center">
            <div className="px-3 py-1.5 border border-border rounded-lg bg-surface text-[12px] font-medium">
              You
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="w-px h-6 bg-border" />
          </div>

          {/* Memory categories */}
          <div className="border border-border rounded-xl bg-surface overflow-hidden shadow-sm">
            <div className="px-3.5 py-2.5 border-b border-border-light">
              <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">
                Your Memory
              </span>
            </div>
            <div className="divide-y divide-border-light">
              {memoryData.map((category) => (
                <button
                  key={category.id}
                  id={`viz-memory-${category.id}`}
                  className="w-full text-left px-3.5 py-2.5 hover:bg-surface-hover/60 transition-colors"
                  onClick={() =>
                    setExpanded(
                      expanded === category.id ? null : category.id
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] md:text-[14px] font-medium text-foreground">
                      {category.label}
                    </span>
                    <ChevronRight
                      size={12}
                      className={`text-muted-light transition-transform duration-200 ${
                        expanded === category.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {expanded === category.id && (
                    <ul className="mt-1.5 space-y-0.5">
                      {category.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-[12px] md:text-[13px] text-muted pl-2.5 border-l border-border-light py-0.5 animate-fade-in"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="w-px h-6 bg-border" />
          </div>

          {/* AI targets */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-2">
              {aiTargets.map((ai) => (
                <div
                  key={ai}
                  className="px-2.5 py-1 border border-border-light rounded-md bg-surface text-[11px] text-muted font-medium"
                >
                  {ai}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
