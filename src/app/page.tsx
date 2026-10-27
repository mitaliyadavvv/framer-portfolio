import type { CSSProperties } from "react";
import Link from "next/link";
import { Img, Vid } from "@/components/Media";
import Footer from "@/components/Footer";
import SoundVideo from "@/components/SoundVideo";
import TiltHero from "@/components/TiltHero";
import { Star } from "@/components/Decor";
import styles from "./home.module.css";

const RESUME = "https://drive.google.com/file/d/1ljmrlNy2HD69Dl6fw6mr6iYbotU3IxJv/view?usp=sharing";

type Polaroid = { img: string; rot: number; title: string; sub?: string; overlay?: string };

const shelves: { title: string; logos: string; logosAlt: string; items: Polaroid[] }[] = [
  {
    title: "Previously At",
    logos: "cap/logos-previously.png",
    logosAlt: "Siemens, Godrej and ADI logos",
    items: [
      { img: "v4rTuvrMlzgulFsYalqLiBLFJ1o.png", rot: 5, title: "Intern @ Godrej 2025" },
      { img: "HQWBP3xq7vIWklyX92WqZBWXUE.jpg", rot: -7, title: "Intern @ Siemens 2026" },
      { img: "XKskmDWDUqs2fyvjorOjsZObEo.png", rot: 6, title: "President @ ADI" },
    ],
  },
  {
    title: "Positions of Responsibility",
    logos: "cap/logos-positions.png",
    logosAlt: "thefourthwall, Student Council and ADI logos",
    items: [
      { img: "y6F6XzAMg3eOQPWnMH2lwD9IQc.png", rot: -6, title: "Founding Member of thefourthwall", sub: "Film Club @ Uni" },
      { img: "wvzyx1cWaw0JN8U1Qph98KY.png", rot: 5, title: "President of Student Chapter", sub: "ADI Avantika" },
      { img: "RoJCGeDtxD5X93oWXNYJ6Vp3BLg.png", rot: -4, title: "Head of Cultural Affairs", sub: "Avantika University" },
      { img: "IleB48QWJJN87JgLX9ROXkIIjzQ.png", rot: 6, title: "Research Head", sub: "@ thefourthwall", overlay: "yKNEEmzhJV5BtyEisKnnUCIrUKY.png" },
    ],
  },
  {
    title: "Recognition",
    logos: "cap/logos-recognition.png",
    logosAlt: "UX India, Institute of Design and TwinMind logos",
    items: [
      { img: "7ycNBC01sVvehYmf5PbK05rDct0.png", rot: -3, title: "Best Student Innovation Award", sub: "UX India 2026" },
      { img: "QpmcP8A4NkUXTg33qqn0ABlyhfc.png", rot: 6, title: "Runner up Vibe Coding Hackathon", sub: "MIT ID" },
      { img: "XQGnTAkhq4rzZEKLYsIGVvGopgQ.png", rot: -7, title: "Speaker @ UX India", sub: "Srishti University" },
      { img: "U9WU5gQ6QLpx3fg20y6WbsiBkQ.png", rot: 3, title: "Top 7 out of 400 participants", sub: "TwinMind AI Hackathon" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <header className={styles.nav}>
        <Link href="/" className="pill pill-dark" aria-current="page">
          Work
        </Link>
        <Link href="/about-me-formal" className="pill">
          About Me
        </Link>
        <a href={RESUME} className="pill" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </header>

      <main>
        <h1 className="sr-only">Mitali Yadav — UX Designer, Product Strategist</h1>
        <div className={styles.hero}>
          <TiltHero>
            <Img
            file="webCwZss89seW7jkdjuZxGg7IaY.png"
            alt="ID card collage: Mitali Yadav, Final Year Student. Roles I've had: UX Designer, Product Strategist, UI Designer, Funniest Person on the Team."
            className={styles.heroDesktop}
            priority
          />
          </TiltHero>
          <Img file="Lm6gCMy35RsyFUI16v2LpcvcXw.png" alt="" className={styles.heroMobile} sizes="100vw" />
        </div>

        <aside className={styles.mobileNote}>
          <p>
            My portfolio includes diagrams and visuals that explain my design process in detail. For the best experience, I
            recommend viewing it on a desktop or laptop :))
          </p>
          <Img file="jOPpccXUNGtr3rhnoYiG0OkOqMA.png" alt="" className={styles.mobileNoteAvatar} sizes="80px" />
        </aside>

        {/* Project 1 — the shop. */}
        <section className={styles.shop} data-shop-section>
          <div className={styles.shopInner}>
            <Link href="/the-shop" className={styles.shopHead}>
              <div>
                <p className={styles.shopEyebrow}>Project 1 • Independent Project</p>
                <h2 className={styles.shopTitle}>the shop.</h2>
              </div>
              <p className={styles.shopDesc}>
                A live platform bringing independent fashion brands into one place, making discovering their latest
                collections effortless.
              </p>
            </Link>
            <Link href="/the-shop" className={styles.shopVideo} aria-label="the shop. demo">
              <SoundVideo src="/media/P8BuyIRhtEnVgunNikEMf49ep3M.mp4" label="the shop. product film" style={{ aspectRatio: "1920 / 1080" }} muteRootSelector="[data-shop-section]" />
              <span className="chip">VID</span>
            </Link>
            <div className={styles.shopMeta}>
              <dl>
                <div>
                  <dt>Built in</dt>
                  <dd>&gt;6hrs</dd>
                </div>
                <div>
                  <dt>Build Stack</dt>
                  <dd>Figma, Claude Code, Supabase, GitHub, Vercel</dd>
                </div>
              </dl>
              <div className={styles.btns}>
                <a href="https://theshop-mitaliyadavvv.vercel.app/" className="pill" target="_blank" rel="noopener noreferrer">
                  Visit the Site
                </a>
                <Link href="/the-shop" className="pill">
                  Explore the Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Project 2 — Siemens */}
        <section className={`${styles.row} ${styles.rowSiemens}`}>
          <Link href="/siemens" className={styles.visual}>
            <Img file="cap/home-siemens.png" alt="Glyph, the Siemens icons AI agent, running in Copilot on an iMac" fill sizes="(max-width: 809px) 100vw, 491px" style={{ objectFit: "cover" }} />
          </Link>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Project 2 • Internship</p>
            <h2 className={styles.title}>Siemens Icons AI Agent</h2>
            <ul className={styles.stats}>
              <li>81.5 on SUS Scoring</li>
              <li>4,000+ Icons discoverable through conversational AI</li>
            </ul>
            <p className={styles.desc}>
              How I identified an issue, found the solution, trained the AI Agent and integrated it in the company workflow
              that saved us time and money both.
            </p>
            <Link href="/siemens" className="pill">
              Explore the Project
            </Link>
          </div>
        </section>

        {/* Project 3 — Prayan */}
        <section className={`${styles.row} ${styles.rowPrayan}`}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Project 3 • Academic Project</p>
            <h2 className={styles.title}>Prayan : Post Loss Service</h2>
            <p className={styles.badge}>
              <span className={styles.badgeStripes} aria-hidden />
              <span className={styles.badgeText}>UX India 2026 Winner</span>
              <span className={styles.badgeShine} aria-hidden />
            </p>
            <ul className={styles.tags}>
              <li>Complex System Navigation</li>
              <li>Design Beyond Screens</li>
            </ul>
            <p className={styles.desc}>
              0-1 service to navigate documentation, formalities, and processes after the loss of a loved one from scratch.
            </p>
            <Link href="/prayan" className="pill">
              Explore the Project
            </Link>
          </div>
          <Link href="/prayan" className={styles.visual}>
            <Img file="cap/home-prayan.png" alt="Prayan companion app on a phone held in hand" fill sizes="(max-width: 809px) 100vw, 491px" style={{ objectFit: "cover" }} />
          </Link>
        </section>

        {/* Projects 4 & 5 */}
        <section className={styles.duo}>
          <article className={styles.duoItem}>
            <Link href="/godrej-crm" className={styles.phoneCard}>
              <Img file="QbRqL0E0TbLZSHusPbFy4JzjciM.svg" alt="" sizes="458px" />
              <div className={styles.gcClip}>
                <div className={styles.gcScreen}>
                  <Vid file="WFV7dGM4BVpf7R0rV30ElCtA.mp4" label="Godrej CRM app demo" className={styles.gcVideo} />
                </div>
              </div>
              <span className="chip" style={{ right: "4%", bottom: "11%" }}>
                VID
              </span>
            </Link>
            <p className={styles.eyebrow}>Project 4 • Internship</p>
            <h2 className={styles.title}>Godrej CRM App Revamp</h2>
            <ul className={styles.stats}>
              <li>Increased mobile adoption</li>
              <li>15hrs saved every month</li>
            </ul>
            <p className={styles.desc}>
              Revamped the CRM app for Godrej dealers to boost mobile adoption and cut down manual work. Saving the dealers 30
              - 45 minutes daily and increasing mobile adoption.
            </p>
            <Link href="/godrej-crm" className="pill">
              Explore the Project
            </Link>
          </article>

          <article className={`${styles.duoItem} ${styles.duoOffset}`}>
            <Link href="/ritual" className={styles.phoneCard}>
              <Img file="Y9uaugoEnEfTmRnZUD8pVLZZns.png" alt="" sizes="458px" />
              <div className={styles.phoneScreen} style={{ left: "24.3%", top: "9.9%", width: "50.7%", height: "78.2%", borderRadius: 26 }}>
                <Vid file="b1eeBLaaJNsix27hQhLnFazp3NI.mp4" label="Ritual habit tracker demo" style={{ height: "100%", objectFit: "cover" }} />
              </div>
              <span className="chip" style={{ right: "6%", bottom: "6%" }}>
                VID
              </span>
            </Link>
            <p className={styles.eyebrow}>Project 5 • Independent Project</p>
            <h2 className={styles.title}>Ritual : Habit Tracking App</h2>
            <ul className={styles.stats}>
              <li>Vibe Coded</li>
              <li>Available on Playstore</li>
            </ul>
            <p className={styles.desc}>
              A habit tracking app built for a New Year&rsquo;s resolution that eventually found its way to the Play Store.
              Built using Antigravity, Claude Code, Firebase and more.
            </p>
            <Link href="/ritual" className="pill">
              Explore the Project
            </Link>
          </article>
        </section>

        {/* Experience shelves */}
        <section className={styles.cream}>
          <Star className={styles.creamStarTop} size={119} />
          {shelves.map((shelf) => (
            <div key={shelf.title} className={styles.shelf}>
              <div className={styles.shelfHead}>
                <h2>{shelf.title}</h2>
                <Img file={shelf.logos} alt={shelf.logosAlt} className={styles.shelfLogos} sizes="232px" />
              </div>
              <ul className={styles.polaroids} data-count={shelf.items.length}>
                {shelf.items.map((p) => (
                  <li key={p.title} className={styles.polaroid} style={{ "--rot": `${p.rot}deg` } as CSSProperties}>
                    <div className={styles.polaroidImg}>
                      <Img file={p.img} alt="" fill sizes="(max-width: 809px) 45vw, 260px" style={{ objectFit: "cover" }} />
                      {p.overlay && (
                        <div className={styles.polaroidOverlay}>
                          <Img file={p.overlay} alt="" sizes="170px" />
                        </div>
                      )}
                    </div>
                    <p>
                      {p.title}
                      {p.sub && (
                        <>
                          <br />
                          {p.sub}
                        </>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Star className={styles.creamStarLeft} size={253} />
          <Star className={styles.creamStarRight} size={253} />
        </section>
      </main>

      <Footer />
    </>
  );
}
