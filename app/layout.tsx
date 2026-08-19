import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "context — One memory. Every AI.",
  description:
    "Your preferences, projects, goals, and context — available wherever you use AI. Stop repeating yourself across ChatGPT, Claude, Gemini, and more.",
  keywords: [
    "AI memory",
    "AI context",
    "unified AI",
    "ChatGPT",
    "Claude",
    "Gemini",
  ],
  openGraph: {
    title: "context — One memory. Every AI.",
    description:
      "Your preferences, projects, goals, and context — available wherever you use AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
