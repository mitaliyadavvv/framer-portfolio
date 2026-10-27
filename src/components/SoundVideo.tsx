"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./SoundVideo.module.css";

/**
 * Looping video with a mute/unmute toggle. Starts muted (browsers block autoplay with sound),
 * plays only while on screen, and mutes itself again whenever `muteRoot` (or the video) leaves the screen.
 */
export default function SoundVideo({
  src,
  label,
  style,
  muteRootSelector,
}: {
  src: string;
  label: string;
  style?: CSSProperties;
  /** element whose visibility controls auto-mute; defaults to the video itself */
  muteRootSelector?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = (muteRootSelector && v.closest(muteRootSelector)) || v;

    const play = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!v.src) v.src = src;
          if (!reduce) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    const mute = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) {
        v.muted = true;
        setMuted(true);
      }
    });
    play.observe(v);
    mute.observe(root);
    return () => {
      play.disconnect();
      mute.disconnect();
    };
  }, [src, muteRootSelector]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) v.play().catch(() => {});
  };

  return (
    <div className={styles.wrap}>
      <video ref={ref} style={style} muted loop playsInline preload="none" aria-label={label} />
      <button
        type="button"
        className={styles.toggle}
        onClick={(e) => {
          // the video sits inside a link to the case study
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
        aria-label={muted ? "Unmute video" : "Mute video"}
        aria-pressed={!muted}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
            <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
            <path d="M16.5 9.5l5 5M21.5 9.5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
            <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
            <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          </svg>
        )}
      </button>
    </div>
  );
}
