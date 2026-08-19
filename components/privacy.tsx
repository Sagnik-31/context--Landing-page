"use client";

import { Shield, Eye, Trash2, Lock } from "lucide-react";
import { useScrollAnimation } from "./use-scroll-animation";

const controls = [
  {
    icon: Shield,
    title: "You control what is remembered",
    description: "Choose exactly what context gets saved to your memory.",
  },
  {
    icon: Eye,
    title: "You control which AI can access it",
    description: "Grant or revoke access per AI assistant at any time.",
  },
  {
    icon: Trash2,
    title: "Delete memories anytime",
    description: "Remove any piece of context whenever you want.",
  },
  {
    icon: Lock,
    title: "No selling personal data",
    description: "Your memory is yours. It will never be sold or shared.",
  },
];

export default function Privacy() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      id="privacy"
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2
          className={`text-[clamp(22px,3vw,30px)] font-medium tracking-tight text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Your memory. Your control.
        </h2>
        <p
          className={`mt-3 text-center text-[clamp(14px,2vw,16px)] text-muted max-w-lg mx-auto leading-relaxed ${
            isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}
        >
          Your context belongs to you. Decide what gets remembered, what each AI
          can access, and what gets deleted.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {controls.map((control, i) => {
            const Icon = control.icon;
            return (
              <div
                key={control.title}
                className={`p-5 border border-border-light rounded-xl bg-surface ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${(i + 1) * 100}ms` : undefined,
                }}
              >
                <Icon
                  size={18}
                  className="text-foreground mb-3"
                  strokeWidth={1.5}
                />
                <h3 className="text-[14px] md:text-[15px] font-medium text-foreground mb-1.5">
                  {control.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-muted leading-relaxed">
                  {control.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
