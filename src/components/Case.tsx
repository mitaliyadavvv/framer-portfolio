import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Img, Vid } from "./Media";
import styles from "./Case.module.css";

/* ---------- Navigation ---------- */

export function CaseNav({ back = "/", next, nextLabel = "Next Project", bottom }: { back?: string; next?: string; nextLabel?: string; bottom?: boolean }) {
  return (
    <nav className={`container ${styles.nav} ${bottom ? styles.navBottom : ""}`} aria-label="Project navigation">
      <Link href={back} className="pill">
        {back === "/" ? "Go Back" : "Go Back"}
      </Link>
      {next && (
        <Link href={next} className={`pill ${bottom ? "pill-dark" : ""}`}>
          {nextLabel}
        </Link>
      )}
    </nav>
  );
}

/* ---------- Hero ---------- */

export function CaseHero({
  title,
  subtitle,
  meta,
  logo,
  banner,
  bannerAlt = "",
  bannerHeight,
}: {
  title: string;
  subtitle: string;
  meta: [string, string][];
  logo?: string;
  banner?: string;
  bannerAlt?: string;
  /** desktop banner height in px; banner is cropped (object-fit: cover) */
  bannerHeight?: number;
}) {
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.metaRow}>
          <dl className={styles.meta}>
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          {logo && (
            <div className={styles.logo}>
              <Img file={logo} alt="" sizes="96px" />
            </div>
          )}
        </div>
      </div>
      {banner && (
        <div className={styles.banner} style={bannerHeight ? ({ "--bh": `${bannerHeight}px` } as CSSProperties) : undefined}>
          <Img file={banner} alt={bannerAlt} fill sizes="100vw" priority style={{ objectFit: "cover" }} />
        </div>
      )}
    </header>
  );
}

/* ---------- Sections ---------- */

export function Section({
  eyebrow,
  title,
  children,
  small,
  className,
  id,
  wideTitle,
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  /** 24px row title instead of the 40px section title */
  small?: boolean;
  className?: string;
  id?: string;
  /** let the title column take the full width (no body column) */
  wideTitle?: boolean;
}) {
  return (
    <section id={id} className={`container ${styles.section} ${small ? styles.sectionSmall : ""} ${className ?? ""}`}>
      <div className={styles.head}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        {title && <h2 className={small ? styles.rowTitle : styles.sectionTitle}>{title}</h2>}
      </div>
      {!wideTitle && <div className={styles.body}>{children}</div>}
    </section>
  );
}

export function Divider({ className }: { className?: string }) {
  return <hr className={`container ${styles.divider} ${className ?? ""}`} />;
}

export function Space({ h = 80 }: { h?: number }) {
  return <div className={styles.space} style={{ "--h": `${h}px` } as CSSProperties} aria-hidden />;
}

/* ---------- TL;DR table ---------- */

export function TLDR({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <section className={`container ${styles.tldr}`}>
      <h2 className={styles.sectionTitle}>TL;DR</h2>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k} className={styles.tldrRow}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ---------- Media panels ---------- */

export function Panel({
  children,
  chip,
  tone = "grey",
  className,
  style,
  pad,
  caption,
}: {
  children: ReactNode;
  chip?: "VID" | "GIF";
  tone?: "grey" | "peach" | "none";
  className?: string;
  style?: CSSProperties;
  /** inner padding in px (desktop) */
  pad?: number;
  caption?: ReactNode;
}) {
  return (
    <figure className={`container ${styles.figure} ${className ?? ""}`}>
      <div
        className={`${styles.panel} ${styles[`tone_${tone}`]}`}
        style={{ ...(pad !== undefined ? ({ "--pad": `${pad}px` } as CSSProperties) : null), ...style }}
      >
        {children}
        {chip && <span className={`chip ${chip === "GIF" ? "chip-grey" : ""}`}>{chip}</span>}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

/** A full-width captured diagram/visual from the original design. */
export function Figure({ file, alt, caption, className, maxWidth }: { file: string; alt: string; caption?: ReactNode; className?: string; maxWidth?: number }) {
  return (
    <figure className={`container ${styles.figure} ${className ?? ""}`}>
      <div style={maxWidth ? { maxWidth, marginInline: "auto" } : undefined}>
        <Img file={file} alt={alt} />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

export { Img, Vid };

/** Screen recording inside the shared phone-frame artwork (314×586 in the original). */
export function PhoneVideo({ file, label, width = 314 }: { file: string; label: string; width?: number }) {
  return (
    <div className={styles.phone} style={{ width }}>
      <div className={styles.phoneScreen}>
        <Vid file={file} label={label} style={{ height: "100%", objectFit: "cover" }} />
      </div>
      <Img file="AwdtVNYacE4K0pnG6090ltGRo.png" alt="" className={styles.phoneFrame} sizes="320px" />
    </div>
  );
}

/* ---------- Small cards ---------- */

export function CardRow({ items, cols = 4, className }: { items: { title: ReactNode; body: ReactNode; icon?: ReactNode }[]; cols?: number; className?: string }) {
  return (
    <ul className={`container ${styles.cardRow} ${className ?? ""}`} style={{ "--cols": cols } as CSSProperties}>
      {items.map((it, i) => (
        <li key={i}>
          {it.icon}
          <h3>{it.title}</h3>
          <p>{it.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function P({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <p className={`${styles.p} ${className ?? ""}`} style={style}>
      {children}
    </p>
  );
}

export function Quote({ eyebrow = "Dont trust me?", title, quote, by }: { eyebrow?: string; title: ReactNode; quote: ReactNode; by: string }) {
  return (
    <section className={`container ${styles.section} ${styles.quote}`}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <blockquote className={styles.body}>
        <p className={styles.quoteText}>{quote}</p>
        <footer className={styles.quoteBy}>{by}</footer>
      </blockquote>
    </section>
  );
}
