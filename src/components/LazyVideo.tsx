"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/** Muted looping video that only loads/plays while on screen. */
export default function LazyVideo({
  src,
  className,
  style,
  label,
}: {
  src: string;
  className?: string;
  style?: CSSProperties;
  label?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.src) v.src = src;
          if (!reduce) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}
