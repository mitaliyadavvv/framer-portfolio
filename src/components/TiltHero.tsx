"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Magnetic 3D tilt, matching the Framer hero: the collage turns a few degrees toward the cursor
 * (rotateY with horizontal position, rotateX with vertical) and settles back when the mouse leaves.
 */
export default function TiltHero({ children, className, max = 5 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
        const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
        el.style.transform = `perspective(1200px) rotateX(${(-ny * max).toFixed(2)}deg) rotateY(${(nx * max).toFixed(2)}deg)`;
      });
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    };
    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", reset);
    };
  }, [max]);

  return (
    <div ref={ref} className={className} style={{ transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)", willChange: "transform" }}>
      {children}
    </div>
  );
}
