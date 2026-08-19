"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Privacy", href: "#privacy" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          id="logo"
          className="flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
        >
          <Logo className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]" />
          <span className="font-medium text-[17px] md:text-[19px] lg:text-[22px] tracking-tight">
            context
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            id="nav-cta"
            className="text-[13px] px-3.5 py-1.5 bg-foreground text-accent-foreground rounded-md hover:bg-accent-muted transition-colors"
          >
            Join waitlist
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-background z-40 animate-fade-in">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="text-base text-foreground font-medium mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Join waitlist →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
