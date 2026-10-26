import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "./Footer";
import { Img } from "./Media";
import styles from "./About.module.css";

/**
 * The About pages are scrapbook collages. Each section is a capture of the original
 * artboard at desktop (1200 wide) and phone (390 wide) layouts; the copy is repeated
 * as accessible text for screen readers and search.
 */
export type Slice = { desktop?: string; mobile?: string; alt: string };

export default function About({
  mode,
  slices,
  mobileHero,
  text,
}: {
  mode: "formal" | "fun";
  slices: Slice[];
  mobileHero?: ReactNode;
  text: ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav} aria-label="About">
        <Link href="/" className="pill">
          Back
        </Link>
        <div className={styles.toggle}>
          <Link href="/about-me-formal" className={`pill ${mode === "formal" ? "pill-dark" : ""}`} aria-current={mode === "formal" ? "page" : undefined}>
            Formal
          </Link>
          <Link href="/about-me-fun" className={`pill ${mode === "fun" ? "pill-dark" : ""}`} aria-current={mode === "fun" ? "page" : undefined}>
            Fun
          </Link>
        </div>
      </nav>
      <main className={styles.main}>
        <div className="sr-only">{text}</div>
        {mobileHero && <div className={styles.mobileHero}>{mobileHero}</div>}
        {slices.map((s, i) => (
          <div key={i} className={styles.slice} aria-hidden>
            {s.desktop && <Img file={s.desktop} alt="" className={styles.desktop} sizes="(max-width: 809px) 1px, 1440px" priority={i === 0} />}
            {s.mobile && <Img file={s.mobile} alt="" className={styles.mobile} sizes="(max-width: 809px) 100vw, 1px" priority={i === 0} />}
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
