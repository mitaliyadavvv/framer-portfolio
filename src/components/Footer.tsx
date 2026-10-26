import Image from "next/image";
import styles from "./Footer.module.css";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mitaliyadavvv", src: "/media/QQYJ6EZQwnmbFI40ScS7m1sTk.png" },
  { label: "Instagram", href: "https://www.instagram.com/mitaliyadavvv", src: "/media/hNXfOUgnAVvpCmY0PPcwoXB2VBc.png" },
  { label: "Letterboxd", href: "https://boxd.it/8S1fx", src: "/media/fmmlB7QFG0ozzggIH0xJUn0KU.png" },
  { label: "Duolingo", href: "https://invite.duolingo.com/profile-share/mitaliyadavvv?via=share_profile_qr", src: "/media/N2NP0gjZswamuwhdqqkjOAIfyPE.png" },
  { label: "Strava", href: "https://www.strava.com/athletes/138432327", src: "/media/p9Yy0hKQaZIAKTGuPVEdQzCgvI.png" },
  { label: "Substack", href: "https://substack.com/@mitaliyadavvv", src: "/media/QvWI1Ao8RxgfABC1HNC4BzZnEEo.png" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.band}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={styles.thanks}>Thank you :)</p>
            <p className={styles.note}>Always open to feedback, collaboration, conversations &amp; everything in between.</p>
          </div>
          <div className={styles.right}>
            <a href="tel:+917506045440">+91 7506045440</a>
            <a href="mailto:mitaliyadavvv@gmail.com">mitaliyadavvv@gmail.com</a>
            <p>@mitaliyadavvv across all social platforms</p>
            <ul className={styles.socials}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <Image src={s.src} alt="" width={43} height={43} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.photo}>
        <Image
          src="/media/41I0i4TQvW18GvUkTluf4jvZ4.png"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "50% 42%" }}
        />
      </div>
    </footer>
  );
}
