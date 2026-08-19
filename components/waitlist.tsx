"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useScrollAnimation } from "./use-scroll-animation";

const aiOptions = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Grok",
  "Cursor",
  "Perplexity",
  "Other",
];

type SubmitState = "idle" | "loading" | "success" | "alreadyJoined" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [selectedAI, setSelectedAI] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [ref, isVisible] = useScrollAnimation<HTMLElement>(0.15);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || state === "loading") return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setState("error");
      return;
    }

    setState("loading");
    setErrorMsg("");

    try {
      // Google Apps Script requires text/plain to avoid CORS preflight OPTIONS requests,
      // which it does not support. We still send the JSON string.
      const res = await fetch("https://script.google.com/macros/s/AKfycbzwHHB1uvJIxQkxFcoGjW4Ll3U5F6w7Si7p0LcO5TP6dfggThqG8L9RsMMJNwoRfXdTOw/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          email,
          aiTool: selectedAI || "Not specified",
        }),
      });

      let data;
      try {
        const text = await res.text();
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        // If the script returns HTML (e.g. 404 or auth error), parsing fails
        console.error("Failed to parse JSON response from Apps Script.");
        setErrorMsg("Something went wrong. Please try again.");
        setState("error");
        return;
      }

      if (data.status === "alreadyJoined" || data.alreadyJoined || (data.message && String(data.message).toLowerCase().includes("already"))) {
        setState("alreadyJoined");
        return;
      }

      if (!res.ok || data.status === "error" || data.result === "error") {
        setErrorMsg(data.error || data.message || "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      setState("success");
    } catch (e) {
      console.error(e);
      setErrorMsg("Something went wrong. Please try again.");
      setState("error");
    }
  };

  return (
    <section ref={ref} id="waitlist" className="py-12 md:py-16">
      <div className="mx-auto max-w-lg px-6 text-center">
        <h2
          className={`text-[clamp(22px,3vw,30px)] font-medium tracking-tight ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Ready to stop repeating yourself?
        </h2>
        <p
          className={`mt-3 text-[clamp(14px,2vw,16px)] text-muted leading-relaxed max-w-sm mx-auto ${
            isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}
        >
          Join the early access list and be among the first to give your AI a
          memory that follows you.
        </p>

        <div
          className={`mt-8 ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          {state === "success" ? (
            <div className="flex flex-col items-center gap-2 py-4 animate-fade-in">
              <div className="flex items-center gap-2">
                <Check size={15} className="text-success" />
                <span className="text-[14px] text-foreground font-medium">
                  You&apos;re on the list.
                </span>
              </div>
              <span className="text-[12px] text-muted">
                We&apos;ll let you know when early access opens.
              </span>
            </div>
          ) : state === "alreadyJoined" ? (
            <div className="flex flex-col items-center gap-2 py-4 animate-fade-in">
              <div className="flex items-center gap-2">
                <Check size={15} className="text-foreground" />
                <span className="text-[14px] text-foreground font-medium">
                  You&apos;re already on the list.
                </span>
              </div>
              <span className="text-[12px] text-muted">
                We&apos;ll let you know when early access opens.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto">
              {/* Email */}
              <input
                id="waitlist-email"
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 text-[13px] bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all placeholder:text-muted-light"
              />

              {/* AI tool selector */}
              <div>
                <label className="block text-left text-[12px] text-muted mb-1.5">
                  Which AI do you use most?
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {aiOptions.map((ai) => (
                    <button
                      key={ai}
                      type="button"
                      id={`ai-option-${ai.toLowerCase()}`}
                      onClick={() =>
                        setSelectedAI(selectedAI === ai ? "" : ai)
                      }
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md border transition-colors ${
                        selectedAI === ai
                          ? "border-foreground bg-foreground text-accent-foreground"
                          : "border-border-light bg-surface text-muted hover:border-muted-light hover:text-foreground"
                      }`}
                    >
                      {ai}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                id="waitlist-submit"
                type="submit"
                disabled={state === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-foreground text-accent-foreground text-[13px] md:text-[14px] font-medium rounded-lg hover:bg-accent-muted transition-colors disabled:opacity-60"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    Joining…
                  </>
                ) : (
                  <>
                    Join the waitlist
                    <ArrowRight size={13} />
                  </>
                )}
              </button>

              {/* Error */}
              {state === "error" && errorMsg && (
                <p className="text-[12px] text-red-500 animate-fade-in">
                  {errorMsg}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
