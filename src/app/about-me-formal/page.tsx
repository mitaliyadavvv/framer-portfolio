import type { Metadata } from "next";
import About from "@/components/About";
import { ReasonThree } from "@/components/AboutExtras";
import { Img } from "@/components/Media";
import styles from "./formal.module.css";

export const metadata: Metadata = { title: "About me" };

export default function AboutFormal() {
  return (
    <About
      mode="formal"
      mobileHero={
        <div className={styles.hero}>
          <div>
            <p className={styles.hello}>
              Hello!
              <br />
              I’m Mitali ツ
            </p>
            <p className={styles.lead}>And here are</p>
            <p className={styles.lead}>
              <strong>3 reasons</strong> why I might be a good fit for your team!
            </p>
          </div>
          <Img file="cap/af-m-photo.png" alt="Mitali with a fake moustache" sizes="140px" />
        </div>
      }
      slices={[
        { desktop: "cap/af-d1.png", mobile: "cap/af-m1.png", alt: "" },
        { desktop: "cap/af-d2.png", mobile: "cap/af-m2-v3.png", alt: "" },
        {
          node: (
            <ReasonThree title="I’m drawn to new challenges">
              <p>especially when it means stepping into something completely new and learning from the ground up.</p>
            </ReasonThree>
          ),
        },
      ]}
      text={
        <>
          <h1>Hello! I’m Mitali. And here are 3 reasons why I might be a good fit for your team!</h1>
          <h2>Reason 1: I’ve led and been a part of multiple clubs</h2>
          <p>Good at understanding people &amp; collaborating effectively.</p>
          <ul>
            <li>Founding Member and Research Head @ thefourthwall (Film Club @ uni)</li>
            <li>Head of Cultural Affairs @ MIT ID (Avantika University)</li>
            <li>President of ADI Student Chapter @ Association of Designers of India</li>
          </ul>
          <h2>Reason 2: I communicate with clarity and precision.</h2>
          <p>(Clarity &gt;&gt;&gt; Complexity)</p>
          <h2>Reason 3: I’m drawn to new challenges</h2>
          <p>Especially when it means stepping into something completely new and learning from the ground up.</p>
        </>
      }
    />
  );
}
