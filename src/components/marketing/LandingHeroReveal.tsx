"use client";

import gsap from "gsap";
import { type ReactNode, useLayoutEffect, useRef } from "react";

export function LandingHeroReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-hero-reveal]");
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: 22,
        duration: 0.52,
        stagger: 0.07,
        ease: "power2.out",
        delay: 0.05,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
