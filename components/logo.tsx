/**
 * Logo concepts for "context" brand.
 * Each represents: persistent context, continuity, one identity, memory between systems, a thread connecting systems.
 * All are monochrome, recognizable at 16-24px, and work as favicon/app icon.
 */

import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Concept A — "Thread"
 * A continuous curved line that passes through three dots,
 * representing one thread of context weaving through multiple AI systems.
 */
export function LogoConceptA({ size = 24, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 12C4 8 7 6 10 8C13 10 11 14 14 16C17 18 20 16 20 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="7" cy="9" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="17" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Concept B — "Convergence"
 * Three lines converging into a single point at center,
 * representing many AI systems accessing one unified memory.
 */
export function LogoConceptB({ size = 24, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <line x1="4" y1="5" x2="10.5" y2="10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="3" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="5" x2="13.5" y2="10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="19" x2="10.5" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="19" x2="13.5" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Concept C — "Loop"
 * An open continuous loop that doesn't close — representing
 * an ongoing, persistent thread of context that's always available.
 */
export function LogoConceptC({ size = 24, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17 7C19.2 9.2 19.2 14.8 17 17C14.8 19.2 9.2 19.2 7 17C4.8 14.8 4.8 9.2 7 7C8.5 5.5 11 5 13 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="13" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Concept D — "Echo"
 * Three nested arcs radiating outward from a single point,
 * representing context emanating from one source to many destinations.
 */
export function LogoConceptD({ size = 24, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="6" cy="12" r="2" fill="currentColor" />
      <path
        d="M10 7C13 7 16 9 16 12C16 15 13 17 10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 4.5C16.5 4.5 20 7.5 20 12C20 16.5 16.5 19.5 12 19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Concept E — "Link"
 * Two overlapping rounded rectangles sharing a common edge,
 * representing two systems joined by shared context.
 * Minimal, geometric, works great at small sizes.
 */
export function LogoConceptE({ size = 24, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="3"
        y="6"
        width="11"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="10"
        y="6"
        width="11"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Default export: whichever concept is selected for the brand.
// Change this single export to swap the logo everywhere.
export const Logo = LogoConceptD;
