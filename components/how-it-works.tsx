"use client";

import { Link, RefreshCw, Zap } from "lucide-react";
import { useScrollAnimation } from "./use-scroll-animation";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Connect the AI tools you already use.",
    icon: Link,
  },
  {
    number: "02",
    title: "Remember",
    description: "Your important context becomes one unified memory.",
    icon: RefreshCw,
  },
  {
    number: "03",
    title: "Continue",
    description: "Switch between AI assistants without starting over.",
    icon: Zap,
  },
];

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>(0.15);

  return (
    <section ref={ref} id="how-it-works" className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2
          className={`text-[clamp(22px,3vw,30px)] font-medium tracking-tight text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          How it works
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`text-center md:text-left ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${(i + 1) * 150}ms` : undefined,
                }}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="text-[12px] text-muted-light font-mono">
                    {step.number}
                  </span>
                  <Icon
                    size={16}
                    className="text-foreground"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-base md:text-[17px] font-medium text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
