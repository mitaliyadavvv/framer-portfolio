import type { CSSProperties, ReactNode } from "react";
import { Star } from "./Decor";
import { Img } from "./Media";
import styles from "./About.module.css";

const HOBBIES = [
  "e5xESyHOFNWT9TnTVD8GeQCQnI.png",
  "mp3WcwDTJZYk94we7yfsRqcz9ro.png",
  "ydmKq4Oh03JfPco5gv36pU2qhVM.png",
  "jftTUzF1JmPtSONpNAzGDlKRHHs.png",
  "L4DzeIb8GKLABD3k5ZDoDGKSzM.png",
  "JqlkiUGGAD7MrsjQnMosD0zrwdI.png",
  "AvYH5fjaaDr9AIRAkGawbTu4E.png",
  "qoLcl7AcAcCYYgVNs5AQ1HZbdI.png",
  "mgisIufjiUSDM6D8bIe1Q2vVrpI.png",
  "8LBZJX0UrZK3dloVfdgmIriChok.png",
];

/** Photos on a slowly turning ring. Pauses on hover; still under reduced motion. */
export function PhotoRing() {
  const n = HOBBIES.length;
  return (
    <div className={styles.ringStage} aria-hidden>
      <div className={styles.ring}>
        {HOBBIES.map((f, i) => (
          <div key={f} className={styles.ringCard} style={{ "--a": `${(360 / n) * i}deg` } as CSSProperties}>
            <div className={styles.ringFace}>
              <Img file={f} alt="" fill sizes="240px" style={{ objectFit: "cover" }} />
            </div>
            <div className={`${styles.ringFace} ${styles.ringBack}`}>
              <Img file={f} alt="" fill sizes="240px" style={{ objectFit: "cover" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReasonThree({ title, children, star }: { title: string; children: ReactNode; star?: boolean }) {
  return (
    <section className={styles.reason}>
      <div className={styles.reasonText}>
        <p className={styles.reasonLabel}>Reason 3</p>
        <h2>{title}</h2>
        <div className={styles.reasonSub}>{children}</div>
        {star && <Star className={styles.reasonStar} size={150} color="#fcefb5" />}
      </div>
      <PhotoRing />
    </section>
  );
}

/* Top four films: poster sits behind the frame's open centre. Offsets from the Framer artboard. */
const FILMS: [string, string, number, number, number, number][] = [
  ["3gTTbQZQHYsIeAX5fkF5yeF82U.png", "The Secret Life of Walter Mitty", 63, 35, 148, 222],
  ["OONMKEBcDDxHRZpUDyEkGLAnH4.png", "Shrek", 61, 43, 152, 212],
  ["GFgn9KMDDYZ8MBCm5xUlXQxlis.png", "Past Lives", 65, 36, 145, 205],
  ["l7v0HfYIKgTLa2Viopzokd3NXuw.png", "Perfect Blue", 62, 21, 151, 213],
];

export function TopFilms() {
  const pct = (v: number, of: number) => `${(v / of) * 100}%`;
  return (
    <section className={styles.films}>
      <ul>
        {FILMS.map(([f, name, x, y, w, h]) => (
          <li key={f}>
            <span className={styles.poster} style={{ left: pct(x, 275), top: pct(y, 278), width: pct(w, 275), height: pct(h, 278) }}>
              <Img file={f} alt={name} fill sizes="180px" style={{ objectFit: "cover" }} />
            </span>
            <Img file="cLwYps62KPieOqVpYlPMAUNLKPU.png" alt="" className={styles.frame} sizes="280px" />
          </li>
        ))}
      </ul>
      <p>
        For any other film nerd on my profile
        <br />
        Here are my top 4 films
      </p>
    </section>
  );
}
