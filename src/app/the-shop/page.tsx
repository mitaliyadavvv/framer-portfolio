import type { Metadata } from "next";
import { CaseHero, CaseNav, Divider, Img, Panel, Section, TLDR, Vid } from "@/components/Case";
import Footer from "@/components/Footer";
import styles from "./shop.module.css";

export const metadata: Metadata = { title: "the shop." };

const SITE = "https://theshop-mitaliyadavvv.vercel.app/";

const brands = [
  { handle: "@sundazed", img: "5vIviEDxnVN01vNTdUehmdX9xo.png", top: 18 },
  { handle: "@korakagaz", img: "ACdP5u3Sl4Jp2uqOanOhrW2bgo.png", top: 163 },
  { handle: "@basata", img: "LWgkqGAfcC2V6YYFCSQptCSf00.png", top: 0 },
  { handle: "@just pals", img: "BT7HB1ncKhuQNcwK9IRHMN4jk.png", top: 33 },
];

const problems = [
  ["Discovery was scattered.", "Brands lived across Instagram feeds, stories, saved posts, and my own increasingly unreliable memory."],
  ["Constant website-hopping.", "Every brand had its own store, collection pages, navigation, and way of presenting products. There was no single place to browse across them."],
  ["New drops were easy to miss.", "Unless I actively visited a brand's website or caught its Instagram announcement, I could easily miss something new."],
  ["Finding the right piece was a task", "Sometimes I knew the kind of clothing or colour I wanted, but I didn't know which brand had it. Searching brand by brand wasn't an ideal way to shop."],
];

const stack = [
  { title: "Setting up Supabase", body: "Used as I needed to support user accounts, store product and brand information, and make personal collections persist beyond a local session.", icon: "aQjs9QfYCL5B6hR0h9F9ITxYk.png", rot: -10, round: true },
  { title: "Git in the loop", body: "I used Git and GitHub to manage the codebase and keep the project version-controlled.", icon: "eHcR7l0svPxHJngqh5iW8UeKYc.png", rot: 11 },
  { title: "Vercel and deploying", body: "Connected the GitHub repository to Vercel, which builds and hosts the application so it can be accessed through a public URL.", icon: "OQLj8uxCuu1w8o3Qkj805jlqOiM.png", rot: 32 },
  { title: "Live website!", body: "Made sure the application could communicate with its backend outside my local development environment." },
];

export default function TheShop() {
  return (
    <>
      <CaseNav next="/siemens" />
      <main>
        <CaseHero
          title="the shop."
          subtitle="Designed, built & shipped"
          meta={[
            ["My Role", "AI UX Designer"],
            ["Timeline", "6 hours"],
          ]}
          logo="xDqI29PralMmcQS5GZBPzg2w4PU.png"
          banner="OOITG913msrWiz2iXWRQMgtbUw.png"
          bannerAlt="the shop. home page: Your brands. Their latest."
          bannerHeight={422}
        />

        <TLDR
          rows={[
            ["Problem Identified", "Discovering independent Indian fashion brands on Instagram is easy. Shopping across dozens of their individual websites, keeping track of new drops, and finding that one piece you saved somewhere three weeks ago? Not so much."],
            ["Solution Built", "I built the shop., a personal shopping and discovery platform that brings independent fashion brands together in one place. Users can add brands to their own collection, browse products, explore new drops, save favourites, and discover pieces through a visual colour explorer."],
            ["The experiment", "I started with a rough idea, explored the visual direction in Figma, and used Claude Code to turn it into a working full-stack website. Supabase, GitHub, and Vercel helped take it from a local experiment to a live product."],
            [
              "See for yourself :)",
              <a key="l" href={SITE} target="_blank" rel="noopener noreferrer">
                {SITE}
              </a>,
            ],
          ]}
        />

        <Section eyebrow="Setting Context" title="The Problem">
          <p>Instagram is a brilliant place to discover independent fashion. It&rsquo;s also a terrible place to organise everything you discover.</p>
          <p>
            I follow thousands of accounts, and somewhere in that mix are the independent brands I genuinely love shopping from.
            Finding their new collections, remembering their names, and visiting each website individually turns a fun activity into
            a repetitive one.
          </p>
        </Section>

        <ul className={`container ${styles.brands}`}>
          {brands.map((b) => (
            <li key={b.handle} style={{ marginTop: b.top }}>
              <span>{b.handle}</span>
              <Img file={b.img} alt={`Product from ${b.handle}`} sizes="(max-width: 809px) 45vw, 280px" />
            </li>
          ))}
        </ul>

        <ul className={`container ${styles.problems}`}>
          {problems.map(([t, b]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ul>

        <Divider />

        <Section eyebrow="Setting Context" title="The Opportunity">
          <p>
            What if I could bring the brands I already loved into one place, see their products together, and discover something new
            without starting the search from scratch every time?
          </p>
        </Section>

        <Divider />

        <Section eyebrow="As a non tech designer" title="The Build">
          <p>
            The entire project was <strong>built in under 6 hours overnight</strong> and now I&rsquo;m going to take you through those
            very fun 6 hours of mine.
          </p>
        </Section>

        <Section eyebrow="Starts at" title="12:30 AM" className={styles.time}>
          <p>
            I started mapping out what would make the experience worth returning to: a personal brand collection, a way to discover new
            drops, saved favourites, and a more visual way to browse products.
          </p>
        </Section>

        {/* Mood board collage */}
        <div className={styles.collageWrap}>
          {/* phone-only copy of the paragraph; the desktop one sits inside the artboard (display:none hides the other) */}
          <div className={styles.cText}>
            <p>
              I wanted a clean, editorial aesthetic with colour and personality; minimal without feeling sterile, playful without
              feeling cluttered, and fashion-forward without competing with the products.
            </p>
            <p>
              I explored typography, colour, spacing, and layouts to create a consistent visual language with generous whitespace and
              clear hierarchy, letting each brand retain its identity while making discovery feel effortless.
            </p>
          </div>
        <div className={styles.collage}>
          <div className={styles.c1}>
            <Img file="p3RjiGZCgS8DacbzMAowA9VTcc.png" alt="Mood board: product grid" sizes="300px" />
          </div>
          <div className={styles.cText}>
            <p>
              I wanted a clean, editorial aesthetic with colour and personality; minimal without feeling sterile, playful without
              feeling cluttered, and fashion-forward without competing with the products.
            </p>
            <p>
              I explored typography, colour, spacing, and layouts to create a consistent visual language with generous whitespace and
              clear hierarchy, letting each brand retain its identity while making discovery feel effortless.
            </p>
          </div>
          <div className={styles.c2}>
            <Img file="ocKVl12CFpa12CT5fhQNCZbMqg.png" alt="Mood board: real recommendations by real people" sizes="420px" />
          </div>
          <div className={styles.c3}>
            <Img file="WlgUJ2grjkZED0W2E1s2ta7gOd4.png" alt="Mood board: playful collage layout" sizes="420px" />
          </div>
          <div className={styles.c4}>
            <Img file="Vs4ltBmQ9iTWk6AwXQhvzYiwqg.png" alt="Mood board: editorial product grid" sizes="400px" />
          </div>
          <div className={styles.c5}>
            <Img file="0hPBp3DtKfMoRNS6ZCPlarF2s.png" alt="Mood board: discover the latest drops" sizes="430px" />
          </div>
        </div>
        </div>

        <Section eyebrow="(I feel like the narrator in big boss)" title="1:30 AM" className={styles.time}>
          <p>With the idea and visual direction taking shape, I moved into Claude Code.</p>
          <p>
            I had explored the layouts and overall aesthetic in Figma, but I didn&rsquo;t have a fully documented technical
            specification or a complete system architecture ready to go. I had a sense of what I wanted to build, and I used that as
            my starting point.
          </p>
          <p>
            I began translating the concept into a working website, using Claude Code to help write the code, build the interface, and
            connect the different parts of the experience.
          </p>
          <p>
            My approach was iterative: describe what I wanted, see what came back, test it, and keep refining. I wasn&rsquo;t waiting
            for every detail to be figured out before moving forward. I was making decisions as the product took shape.
          </p>
        </Section>

        <Section eyebrow="From 1:30 to" title="3:30 AM" className={styles.time}>
          <p>
            This was where the idea became a product. I spent two hours refining layouts, experimenting with features, and figuring out
            what worked and what didn&rsquo;t.
          </p>
          <p>
            From brand collections and new drops to Shades, I iterated on both the interface and functionality, using Claude Code to
            bring ideas to life while making the product decisions myself.
          </p>
        </Section>

        <Section eyebrow="From 3:30 to" title="4:30 AM" className={styles.time}>
          <p>And then Claude Code hit its usage limit :&rsquo;)</p>
          <p>So naturally, I switched to YouTube for an hour or so while waiting for it to reset. Much needed break.</p>
        </Section>

        <Section eyebrow="From 4:30 to" title="6:00 AM" className={styles.time}>
          <p>Supabase, Vercel, and getting it live</p>
          <p>
            Building the website locally was one thing. Making it accessible to other people, with data that could persist between
            sessions, was another.
          </p>
          <p>This hour and a half was about connecting the pieces that would turn the prototype into a live web application.</p>
        </Section>

        <ul className={`container ${styles.stack}`}>
          {stack.map((s) => (
            <li key={s.title}>
              {s.icon && (
                <span className={styles.stackIcon} style={{ transform: `rotate(${s.rot}deg)`, borderRadius: s.round ? "50%" : 8 }}>
                  <Img file={s.icon} alt="" sizes="72px" />
                </span>
              )}
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>

        <Section eyebrow="Introducing" title="the shop.">
          <p>
            Your personal shopping site for your favourite brands &amp; labels. Keep all your labels in one place, catch new drops, and
            make it your own. Less hunting, more finding things you love.
          </p>
          <p>The experience is built around a few key ideas.</p>
        </Section>

        <Section small title="Your brands, your space">
          <p>Users can add brands to their personal collection and create a shopping space around their own tastes.</p>
          <p>The intention is to make the website feel like your shopping space, not another marketplace showing everyone the same thing.</p>
        </Section>
        <Panel chip="VID" style={{ padding: "6.3% 0 0" }}>
          <div className={styles.stageVideo} style={{ width: "78%" }}>
            <Vid file="uhH5QSnQPx0LeBxfrtkiqhU8.mp4" label="Adding a brand to your collection" />
          </div>
        </Panel>

        <Section small title="Browse across brands">
          <p>
            Products from supported sources are brought into a shared browsing experience, making it possible to explore items from
            different brands without visiting every store individually.
          </p>
          <p>This keeps discovery centralised while allowing each independent brand to retain its own store and identity.</p>
        </Section>
        <Panel chip="VID" style={{ padding: "5.1% 0 0" }}>
          <div className={styles.stageVideo} style={{ width: "82.7%" }}>
            <Vid file="HNkkzrnxwTqk803wAmwcm8AM1zQ.mp4" label="Browsing products across brands" />
          </div>
        </Panel>

        <div className={`container ${styles.pair}`}>
          <div>
            <h3>Discover the latest drops</h3>
            <p>The new-drops experience helps users find recently released products from their collection.</p>
            <div className={styles.pairPanel}>
              <Vid file="wlwyxahICdWoS4o0slySOVc0NA.mp4" label="New drops page" />
              <span className="chip" style={{ top: 16, bottom: "auto" }}>
                VID
              </span>
            </div>
          </div>
          <div>
            <h3>Save your favourites</h3>
            <p>
              When something catches your eye, you can save it to your favourites instead of relying on an Instagram save, an open
              browser tab, or your memory.
            </p>
            <div className={styles.pairPanel}>
              <Vid file="yhC2Jl0epdbPsnvomUmcEW2cnkM.mp4" label="Saving favourites" />
              <span className="chip" style={{ top: 16, bottom: "auto" }}>
                VID
              </span>
            </div>
          </div>
        </div>

        <Section small title="Shades; a different way to discover clothes">
          <p>One of my favourite experiments was the Shades section.</p>
          <p>Instead of using colour as just another filter in a sidebar, I wanted to turn it into a visual browsing experience.</p>
          <p>
            Products are arranged on a two-dimensional colour spectrum, creating a visual field of clothing that can be explored by shade
            and brightness. Lighter and darker pieces sit at different positions, while colours spread across the spectrum.
          </p>
        </Section>
        <Panel chip="VID" style={{ padding: "4.4% 0 0" }}>
          <div className={styles.stageVideo} style={{ width: "83.3%" }}>
            <Vid file="IcCfoOdBjbl6j6jVg95RDonIIU.mp4" label="Shades colour explorer" />
          </div>
        </Panel>
        <Panel chip="VID" style={{ padding: "3.4% 0 0" }}>
          <div className={styles.stageVideo} style={{ width: "83.3%" }}>
            <Vid file="tqLKSDx7KeUt0szW770G3OOd8.mp4" label="Hovering products in Shades" />
          </div>
        </Panel>

        <Section eyebrow="Don’t trust me?" title="Check it out yourself :)" className={styles.soft}>
          <p>Sign up, add your brands, find cute stuff and happy shopping!</p>
          <p>Try it out and let me know your thoughts :)</p>
          <p>
            <a href={SITE} target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)" }}>
              {SITE}
            </a>
          </p>
          <p className={styles.note}>The website is responsive, you can check it out on your phone as well :P</p>
        </Section>

        <Divider />

        <Section eyebrow="WIP" title="Future Prospects">
          <p>
            The current shop. focuses on discovery: bringing brands together, making products easier to browse, and helping people find
            things they love.
          </p>
          <p>But the longer-term idea goes further.</p>
        </Section>
        <Section small title="A cross-brand cart" className={styles.soft}>
          <p>
            Imagine adding a top from one independent label, trousers from another, and accessories from a third, all to one cart
            inside the shop.
          </p>
        </Section>
        <Section small title="A unified checkout" className={styles.soft}>
          <p>Instead of being redirected to multiple websites to complete separate purchases, users could eventually check out through one interface.</p>
        </Section>
      </main>
      <CaseNav next="/siemens" bottom />
      <Footer />
    </>
  );
}
