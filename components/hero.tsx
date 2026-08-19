"use client";

import { useScrollAnimation } from "./use-scroll-animation";

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative pt-24 pb-6 md:pt-32 md:pb-8"
    >
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1
          className={`text-[clamp(36px,5vw,52px)] font-medium leading-[1.08] tracking-[-0.02em] text-foreground ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Every AI should
          <br />
          know you.
        </h1>

        <p
          className={`mt-4 text-[clamp(18px,2.5vw,22px)] text-foreground/80 font-medium tracking-tight ${
            isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}
        >
          One memory. Every AI.
        </p>

        <p
          className={`mt-3 text-[clamp(16px,2vw,19px)] text-muted leading-relaxed max-w-lg mx-auto ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          Your preferences, projects, goals, and context — available wherever
          you use AI.
        </p>

        <div
          className={`mt-6 flex flex-col items-center gap-2.5 ${
            isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          <a
            href="#waitlist"
            id="hero-cta"
            className="inline-flex items-center px-5 py-2.5 bg-foreground text-accent-foreground text-[14px] font-medium rounded-lg hover:bg-accent-muted transition-colors"
          >
            Join the waitlist
            <span className="ml-1.5">→</span>
          </a>
          <span className="text-[12px] text-muted-light">
            Free during early access.
          </span>
        </div>
      </div>

      {/* Hero visual: memory → AI flow */}
      <div
        className={`mt-10 md:mt-12 mx-auto max-w-lg px-6 ${
          isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
        }`}
      >
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const aiModels = [
    { name: "ChatGPT" },
    { name: "Claude" },
    { name: "Gemini" },
  ];

  return (
    <div className="relative flex flex-col items-center">
      {/* Central memory node */}
      <div className="relative z-10 flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-surface">
        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
        <span className="text-[12px] font-medium text-foreground tracking-tight">
          Your Memory
        </span>
      </div>

      {/* Vertical connector */}
      <div className="w-px h-8 bg-border" />

      {/* Horizontal rail */}
      <div className="relative w-full max-w-xs">
        <div className="absolute top-0 left-[12%] right-[12%] h-px bg-border" />

        {/* AI model nodes */}
        <div className="flex justify-between px-[12%]">
          {aiModels.map((model) => (
            <div key={model.name} className="flex flex-col items-center">
              <div className="w-px h-5 bg-border" />
              <div className="mt-0.5 px-2.5 py-1 rounded-md border border-border-light bg-surface text-[11px] text-muted font-medium whitespace-nowrap">
                {model.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="mt-6 text-[11px] text-muted-light tracking-widest uppercase">
        One person · One memory · Every AI
      </p>
    </div>
  );
}
