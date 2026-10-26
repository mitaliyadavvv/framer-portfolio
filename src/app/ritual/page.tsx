import type { Metadata } from "next";
import { CaseHero, CaseNav, Divider, Img, PhoneVideo, Section, TLDR } from "@/components/Case";
import Footer from "@/components/Footer";
import styles from "./ritual.module.css";

export const metadata: Metadata = { title: "Ritual : Habit Tracker" };

const steps = [
  ["Product Vision", "Defined a clear, minimal feature set focused on habits, streaks, and focused work, prioritising simplicity over analytics."],
  ["AI Build", "Used Antigravity (v1) and then Claude Code (v2) to build the app and write its code."],
  ["Deployment", "Deployed the first working build using Android Launcher to test flows, navigation, and real-world usability early. Later used Firebase when I had to publish the application."],
  ["Iteration", "This was my first end-to-end project and it grows with me as I learn more every day about building with AI."],
];

const stack = [
  ["Antigravity", "mABfSB3uXuXZN6symCFRzqLzy1E.png", "#f9f9f9"],
  ["Claude Code", "Ya07SQ6EKrAdrvdly5aKpTcAkg4.png", "#e26b4a"],
  ["GitHub", "5iiU4HFtm4SBD5hrDAHMyvv2Ns.png", "#f9f9f9"],
  ["Android Studio", "ASeN1d1hMLQ8mOA2pqMw5opa55s.png", "#f9f9f9"],
  ["FireBase", "yk2K1XPyuOT8YNMkiug2AwP6aC8.png", "#f9f9f9"],
  ["Google Console", "Z20OSeUh60iYnw2eDtZPp5HaIWo.png", "#f9f9f9"],
];

const onboarding = [
  "luASXYInUtP2dHhEFHYZk3GoGQ.png",
  "dHmnsRAklHGaepTpj3DOw0Tcyc.png",
  "dhurPZSTUTXuqpokPaCaiTmG8Y.png",
  "D2jyj0clVpxGin7F0SvH4abgEh4.png",
  "iW2yEpzprwszeFmSvat3jP6GqI.png",
];

function Feature({ title, body, video, label, flip }: { title: string; body: string; video: string; label: string; flip?: boolean }) {
  return (
    <section className={`container ${styles.feature} ${flip ? styles.flip : ""}`}>
      <div className={styles.featurePanel}>
        <PhoneVideo file={video} label={label} width={260} />
        <span className="chip">VID</span>
      </div>
      <div className={styles.featureText}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}

export default function Ritual() {
  return (
    <>
      <CaseNav />
      <main>
        <CaseHero
          title="Ritual : Habit Tracker"
          subtitle="End to End App Building"
          meta={[
            ["My Role", "AI UX Designer"],
            ["Timeline", "1 week"],
            ["Available on", "Play Store"],
          ]}
          banner="k7uEmZCaxH5PEaXzwAdqrBp4.png"
          bannerAlt="Ritual app screens"
          bannerHeight={334}
        />

        <TLDR
          rows={[
            ["Why Ritual", "Built as a New Year’s resolution: I wanted to be more consistent and track my habits, so I figured rather than installing an app, let me just make one of my own."],
            ["How I Built it", "Version 1 was built on Antigravity in my 2nd year; later the APK was revamped using Claude Code. The backend is on Firebase and GitHub is in the loop. Tested on Android Studio. Used Google Console to release the app on the Play Store."],
            ["Features", "Ritual can track your habits, visualise them in a monthly layout, send you reminders, set timers and maintain streaks. With light and dark themes and haptic feedback. You can sign in with Google to not lose your data in case you delete the application."],
            ["Check it out", "Available on Play Store for early testers. Public launch on 4th Nov."],
          ]}
        />

        <Section title="Project Overview">
          <p>
            This is one of my earliest independent side projects, built to stay current with emerging AI-assisted workflows in product
            design and development. I use these as hands-on experiments to explore rapid prototyping, vibe-coding, UI iteration, and
            shipping functional apps end-to-end.
          </p>
          <p>The project is live and available on the Play Store to download :)</p>
        </Section>

        <Divider />

        <Section
          title={
            <>
              Ritual
              <br />
              Habit Tracker
            </>
          }
        >
          <p>
            Minimalist habit-tracking app designed to feel premium, calm, and frictionless. Built as a personal New Year’s project: I
            wanted a better way to track habits, so I decided to build it myself while exploring AI-assisted workflows with Antigravity
            (v1) and Claude (v2).
          </p>
        </Section>

        <Divider />

        <Section title="How I Built It">
          <p>This is one of my first projects where I’ve built an end-to-end application that you can install and sign up to.</p>
        </Section>
        <ul className={`container ${styles.steps}`}>
          {steps.map(([t, b]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ul>

        <Divider />

        <section className={`container ${styles.stack}`}>
          <h2>Build Stack</h2>
          <div>
            <p>All the tools I used from building the app to releasing it on the Play Store.</p>
            <ul>
              {stack.map(([name, file, bg]) => (
                <li key={name}>
                  <span style={{ background: bg }}>
                    <Img file={file} alt="" sizes="90px" />
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Divider />

        <Section title="Onboarding & Sign up" className={styles.h32}>
          <p>I’ve used Firebase for the user data and traffic, and created a simple onboarding to explain all the features.</p>
        </Section>
        <div className={`container ${styles.onboarding}`}>
          {onboarding.map((f, i) => (
            <Img key={f} file={f} alt={`Onboarding screen ${i + 1}`} sizes="(max-width: 809px) 40vw, 170px" />
          ))}
        </div>

        <Section title="Creating, Managing & Setting Reminders for a Habit" className={styles.h32}>
          <p>
            Add new habits easily and if needed set daily alerts to get notified every day to keep you on track and consistent. Edit,
            archive or delete habits as and when needed.
          </p>
        </Section>
        <div className={`container ${styles.twoPhones}`}>
          <PhoneVideo file="b1eeBLaaJNsix27hQhLnFazp3NI.mp4" label="Creating a habit" />
          <PhoneVideo file="B0OtGgXwvKMDSrCbg8CY2gyKc.mp4" label="Managing habits and reminders" />
          <span className="chip">VID</span>
        </div>

        <Feature
          title="Completing Habits and Tracking them"
          body="A simple checklist to mark your habits completed, plus a monthly and habit-wise view to visualise your consistency."
          video="iAJAgis3Z23wYd1wOwL2EfInqVE.mp4"
          label="Completing and tracking habits"
        />
        <Feature
          flip
          title="Focusing Better with Timers"
          body="In-app timers to choose a habit and focus on; once the timer completes, the habit is automatically marked as completed."
          video="8gQiGbboPsD7EU7CSaivvqZmXK4.mp4"
          label="Focus timer"
        />
        <Feature
          title="Light and Dark Themes and Haptic Feedback"
          body="Two classic themes to choose from, and the haptic feedback can be opted out of if needed."
          video="Pst04nbObehXoUc8btBM3AvQTsU.mp4"
          label="Theme and haptics settings"
        />

        <section className={`${styles.store}`}>
          <div className={styles.storeText}>
            <h2>Out on Play Store!</h2>
            <p>I took the “end-to-end” process a little too seriously and went ahead and published my app on the Play Store for everyone to use :))</p>
            <p className={styles.storeNote}>Currently available to early testers. Public launch estimated to be on 4 November.</p>
          </div>
          <Img file="xCj13LZILTLHmpLoJW4WkEizLo.png" alt="Ritual (Early Access) listing on Google Play" className={styles.storeImg} sizes="(max-width: 809px) 100vw, 460px" />
        </section>
      </main>
      <CaseNav next="/" nextLabel="Go Home" bottom />
      <Footer />
    </>
  );
}
