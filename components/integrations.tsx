"use client";

import { useScrollAnimation } from "./use-scroll-animation";

const integrations = [
  { name: "ChatGPT" },
  { name: "Claude" },
  { name: "Gemini" },
  { name: "Grok" },
  { name: "Cursor" },
  { name: "Perplexity" },
];

export default function Integrations() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>(0.15);

  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2
          className={`text-[clamp(22px,3vw,30px)] font-medium tracking-tight text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          One memory. Wherever you use AI.
        </h2>

        <div
          className={`mt-8 flex flex-wrap justify-center gap-2.5 ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="px-4 py-2 border border-border rounded-lg bg-surface text-[12px] md:text-[13px] font-medium text-foreground hover:border-muted-light transition-colors"
            >
              {integration.name}
            </div>
          ))}
        </div>

        <p
          className={`mt-5 text-center text-[11px] text-muted-light ${
            isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          Coming soon
        </p>
      </div>
    </section>
  );
}
