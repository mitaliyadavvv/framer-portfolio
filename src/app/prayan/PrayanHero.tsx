"use client";

import { useEffect, useRef, useState } from "react";
import { Img } from "@/components/Media";
import styles from "./prayan.module.css";

/**
 * Layered hero, positioned as on the 1180px Framer artboard:
 * text panel, the Prayan logo layer (slides out from behind the hand once in view),
 * then the hand + phone cut-out on top.
 */
export default function PrayanHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.heroArt} ${shown ? styles.heroShown : ""}`}>
      <Img file="cap/pr-hero-back.png" alt="" className={styles.heroBack} priority sizes="(max-width: 809px) 100vw, 1180px" />
      <div className={styles.heroLogo} aria-hidden>
        <Img file="doyXfiaWumObK6VSKs8YNhq6g5Q.png" alt="" sizes="(max-width: 809px) 63vw, 741px" />
      </div>
      <span className={styles.heroMask} aria-hidden />
      <div className={styles.heroHand}>
        <Img file="vo1fCMcByK3Ahwah7xfcYu3bdB8.png" alt="The Prayan app on a phone held in hand" sizes="(max-width: 809px) 63vw, 733px" />
      </div>
      <p className="sr-only">For when your family needs help the most. Support beyond sympathy.</p>
    </div>
  );
}
