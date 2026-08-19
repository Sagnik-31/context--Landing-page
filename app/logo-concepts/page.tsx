"use client";

import {
  LogoConceptA,
  LogoConceptB,
  LogoConceptC,
  LogoConceptD,
  LogoConceptE,
} from "@/components/logo";

const concepts = [
  {
    label: "Concept A",
    name: "Thread",
    description:
      "A continuous curved line passing through three dots — one thread of context weaving through multiple AI systems.",
    Component: LogoConceptA,
  },
  {
    label: "Concept B",
    name: "Convergence",
    description:
      "Five lines converging into a single center point — many AI systems accessing one unified memory.",
    Component: LogoConceptB,
  },
  {
    label: "Concept C",
    name: "Loop",
    description:
      "An open continuous loop that doesn't close — an ongoing, persistent thread of context that's always available.",
    Component: LogoConceptC,
  },
  {
    label: "Concept D",
    name: "Echo",
    description:
      "Nested arcs radiating outward from a single point — context emanating from one source to many destinations.",
    Component: LogoConceptD,
  },
  {
    label: "Concept E",
    name: "Link",
    description:
      "Two overlapping rounded rectangles sharing a common edge — two systems joined by shared context.",
    Component: LogoConceptE,
  },
];

export default function LogoConceptsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-2xl font-medium tracking-tight">Logo Concepts</h1>
        <p className="mt-2 text-[14px] text-muted leading-relaxed">
          Five minimal logo concepts for <strong>context</strong>. Each
          represents persistent context, continuity, and a thread connecting
          multiple systems. Pick one to use as the brand mark.
        </p>

        <div className="mt-12 space-y-10">
          {concepts.map(({ label, name, description, Component }) => (
            <div
              key={label}
              className="border border-border rounded-xl p-6 bg-surface"
            >
              <div className="flex items-start gap-6">
                {/* Sizes */}
                <div className="flex items-end gap-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <Component size={48} className="text-foreground" />
                    <span className="text-[10px] text-muted-light">48px</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <Component size={32} className="text-foreground" />
                    <span className="text-[10px] text-muted-light">32px</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <Component size={24} className="text-foreground" />
                    <span className="text-[10px] text-muted-light">24px</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <Component size={16} className="text-foreground" />
                    <span className="text-[10px] text-muted-light">16px</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[13px] font-medium">{label}</span>
                    <span className="text-[12px] text-muted">— {name}</span>
                  </div>
                  <p className="mt-1.5 text-[13px] text-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Wordmark usage */}
              <div className="mt-5 pt-5 border-t border-border-light flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Component size={18} className="text-foreground" />
                  <span className="text-[15px] font-medium tracking-tight">
                    context
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-foreground text-accent-foreground px-3 py-1.5 rounded-md">
                  <Component size={16} className="text-accent-foreground" />
                  <span className="text-[13px] font-medium tracking-tight">
                    context
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-5 border border-border-light rounded-xl bg-surface-hover/30">
          <p className="text-[13px] text-muted leading-relaxed">
            <strong className="text-foreground">To select a concept:</strong>{" "}
            Open{" "}
            <code className="px-1.5 py-0.5 bg-surface-hover rounded text-[12px]">
              components/logo.tsx
            </code>{" "}
            and change the last line to export the chosen concept. For example:{" "}
            <code className="px-1.5 py-0.5 bg-surface-hover rounded text-[12px]">
              export const Logo = LogoConceptC;
            </code>
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/"
            className="text-[13px] text-muted hover:text-foreground transition-colors"
          >
            ← Back to landing page
          </a>
        </div>
      </div>
    </div>
  );
}
