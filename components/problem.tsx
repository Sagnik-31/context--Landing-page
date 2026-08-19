"use client";

import { useScrollAnimation } from "./use-scroll-animation";

export default function Problem() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>(0.15);

  return (
    <section ref={ref} id="problem" className="py-12 md:py-16 bg-surface-hover/20">
      <div className="mx-auto max-w-2xl px-6">
        <h2
          className={`text-[clamp(22px,3vw,30px)] font-medium tracking-tight text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Stop introducing yourself to AI.
        </h2>

        <div
          className={`mt-8 space-y-4 ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          {/* First conversation */}
          <div className="border border-border rounded-xl overflow-hidden bg-surface">
            <div className="px-4 py-2 border-b border-border-light">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                <span className="text-[11px] text-muted font-medium">
                  ChatGPT
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <ChatBubble sender="You">
                I&apos;m a CS student learning ML. I&apos;m building a startup
                and I use React and Python. I prefer practical explanations over
                theory. My current project is a unified AI memory layer…
              </ChatBubble>
              <div className="flex items-center gap-2 py-0.5">
                <div className="h-px flex-1 bg-border-light" />
                <span className="text-[10px] text-muted-light px-2">
                  20 minutes of context
                </span>
                <div className="h-px flex-1 bg-border-light" />
              </div>
            </div>
          </div>

          {/* Second conversation */}
          <div className="border border-border rounded-xl overflow-hidden bg-surface">
            <div className="px-4 py-2 border-b border-border-light">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-light" />
                <span className="text-[11px] text-muted font-medium">
                  Claude
                </span>
              </div>
            </div>
            <div className="p-4">
              <ChatBubble sender="Claude" isAI>
                Before we begin, could you tell me about yourself, what
                you&apos;re working on, and any preferences you have for how I
                should respond?
              </ChatBubble>
            </div>
          </div>

          {/* Annotation */}
          <p
            className={`text-center text-[13px] text-muted pt-1 ${
              isVisible
                ? "animate-fade-in-up animation-delay-400"
                : "opacity-0"
            }`}
          >
            <span className="font-medium text-foreground">
              You&apos;ve already told another AI all of this.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({
  sender,
  isAI,
  children,
}: {
  sender: string;
  isAI?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div
        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-semibold shrink-0 ${
          isAI
            ? "bg-surface-hover border border-border-light text-muted"
            : "bg-foreground text-accent-foreground"
        }`}
      >
        {sender[0]}
      </div>
      <div>
        <span className="text-[11px] font-medium text-muted">{sender}</span>
        <p className="mt-0.5 text-[14px] md:text-[15px] leading-relaxed text-foreground/80">
          {children}
        </p>
      </div>
    </div>
  );
}
