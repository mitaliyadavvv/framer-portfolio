import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = { title: "About me (the fun version)" };

export default function AboutFun() {
  return (
    <About
      mode="fun"
      slices={[
        { desktop: "cap/ab-d1.png", mobile: "cap/ab-m1.png", alt: "" },
        { desktop: "cap/ab-d2.png", mobile: "cap/ab-m2.png", alt: "" },
        { desktop: "cap/ab-d3.png", alt: "" },
      ]}
      text={
        <>
          <h1>Hello! I’m Mitali. And here are 3 reasons why I am (somewhat) fun!</h1>
          <p>Mitali Yadav, Final Year Student. Pros: mildly funny, information hoarder. Cons: will hand you a frog. Down for pretty much any plans.</p>
          <h2>Reason 1: I give AMAZING movie recs!</h2>
          <p>I’m also the founder member of the Film Club @ my university.</p>
          <p>My credentials: 293 days passed in the year so far (as of 21st Oct), 118 movies I’ve watched this year, and 147 movies in 2025 (I promise I get work done).</p>
          <p>For any other film nerd on my profile, here are my top 4 films.</p>
          <h2>Reason 2: I’ll pet anything and everything</h2>
          <p>And I especially nerd out on bugs :P</p>
          <h2>Reason 3: Main hobby: acquiring new hobbies</h2>
          <p>Being the hobby hoarder I am, I’m always in for any sport or activity (as long as I can afford it lol).</p>
        </>
      }
    />
  );
}
