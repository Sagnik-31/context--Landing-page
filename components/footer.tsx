import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start gap-3">
          <Logo className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-foreground mt-0.5" />
          <div>
            <span className="text-[14px] md:text-[15px] font-medium text-foreground">
              context
            </span>
            <p className="mt-0.5 text-[12px] text-muted-light">
              Your AI should remember you.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#product"
            className="text-[12px] text-muted hover:text-foreground transition-colors"
          >
            Product
          </a>
          <a
            href="#how-it-works"
            className="text-[12px] text-muted hover:text-foreground transition-colors"
          >
            How it works
          </a>
          <a
            href="#privacy"
            className="text-[12px] text-muted hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-[12px] text-muted hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
