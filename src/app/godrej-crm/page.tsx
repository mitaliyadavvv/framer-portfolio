import type { Metadata } from "next";
import { CaseHero, CaseNav, Divider, Img, Quote, Section, TLDR, Vid } from "@/components/Case";
import Footer from "@/components/Footer";
import styles from "./godrej.module.css";

export const metadata: Metadata = { title: "Godrej CRM" };

const flows = [
  ["Create a Lead", "Every person who walks into the showroom with an enquiry is logged into the CRM. This ensures no potential customer is missed, and dealers can follow up later."],
  ["Book Orders", "Once an enquiry converts into a purchase, the dealer records it as an order. This closes the customer journey and updates inventory/sales data."],
  ["Track Walk-Ins", "Dealers record the total number of showroom visitors daily. This helps measure showroom performance and footfall trends, even if the visitor doesn’t immediately purchase."],
];

const problems = [
  ["Overloaded Leads Form", "Quick lead creation required excessive details, forcing salesmen to slow down or postpone entry during live conversations."],
  ["Not Built For the Floor", "The mobile UX was clunky and unintuitive, making it hard to use quickly while standing, walking, or talking to customers."],
  ["Friction in Product Entry", "Manual entry of long product codes was slow, error-prone, and disruptive during customer interactions."],
  ["High Learning Curve", "The app was overly technical, making onboarding difficult for new salesmen and frustrating even experienced users during daily tasks."],
];

const tags: [string, boolean][] = [
  ["Inconsistent UI", false],
  ["Slow Product Entry", true],
  ["Lengthy Lead Entry", true],
  ["High Learning Curve", false],
  ["Cognitive Overload", false],
  ["Duplicate Leads", false],
  ["Poor Navigation", false],
];

const learnings = [
  ["Engineering Collaboration", "Worked with developers to ensure designs were feasible and deployable."],
  ["Designing for New Domains", "Gained experience quickly understanding and designing for domains and software I was previously unfamiliar with."],
  ["80/20 Rule", "Focused on the small set of high-frequency tasks that caused the majority of friction, solving key pain points to deliver maximum impact with minimal effort."],
  ["Consistency & Scalable UI", "I redesigned the CRM using familiar UI patterns so sales teams could adopt it easily, while keeping the solution consistent and scalable for future modules."],
];

function Solution({
  eyebrow,
  title,
  points,
  video,
  label,
  stat,
  statColor,
  statPoints,
}: {
  eyebrow: string;
  title: string;
  points: string[];
  video: string;
  label: string;
  stat?: string;
  statColor?: string;
  statPoints?: string[];
}) {
  return (
    <section className={styles.solution}>
      <div className={styles.solText}>
        <p className={styles.blue}>{eyebrow}</p>
        <h3>{title}</h3>
        {points.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className={styles.solPhone}>
        <Vid file={video} label={label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "45% 50%" }} />
      </div>
      {stat && (
        <div className={styles.solStat}>
          <strong style={{ color: statColor }}>{stat}</strong>
          {statPoints?.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      )}
      <span className="chip" style={{ top: 20, bottom: "auto" }}>
        VID
      </span>
    </section>
  );
}

export default function Godrej() {
  return (
    <>
      <CaseNav next="/ritual" />
      <main>
        <CaseHero
          title="Godrej CRM"
          subtitle="Revamp for CRM User Flows"
          meta={[
            ["My Role", "UX Design Intern"],
            ["Timeline", "2 months"],
            ["Company", "Godrej & Boyce"],
          ]}
          banner="bKkhWP87p1xTeoAY2FJs2zThl6E.png"
          bannerAlt="Godrej Interio showroom"
          bannerHeight={335}
        />

        <TLDR
          rows={[
            ["Task Assigned", "I was assigned to increase mobile adoption of the internal CRM platform among the sales team."],
            ["Problem Identified", "The product wasn’t built for the floor: sales representatives weren’t comfortable using the app in front of customers, as it was cluttered and had a lengthy lead entry."],
            ["Solution Found", "Lead creation was reduced from 14 taps to 7 taps and manual product entry was replaced by QR code entries."],
            ["Impact", "15 hours saved every month and an increase in mobile adoption."],
          ]}
        />

        <Section title="Project Overview">
          <p>
            Revamped the CRM app for Godrej dealers to boost mobile adoption and cut down manual work. I led the end-to-end design
            process, creating an intuitive mobile experience that saved dealers 30 - 45 minutes daily and streamlined showroom
            operations.
          </p>
        </Section>

        <section className={`container ${styles.hook}`}>
          <div>
            <p>A small UX change and</p>
            <h2>15hr saved every month</h2>
            <p className="muted">That’s like binge watching 40 episodes of The Office.</p>
            <a href="#stage-0" className={styles.blueBold}>
              Here’s how I did that
            </a>
          </div>
          <Img file="X0CeOUC46HFIfFqVuI9dve1TfA.png" alt="Michael Scott from The Office" className={styles.hookImg} sizes="232px" />
        </section>

        <Divider />

        <Section id="stage-0" eyebrow={<span className={styles.blue}>Stage 0</span>} title="Task Assigned">
          <p>
            I was assigned to <span className={styles.blue}>increase mobile adoption of the internal CRM platform among the sales team.</span>{" "}
            The objective was to identify barriers to on-field usage, improve usability on mobile devices, and design solutions that would
            encourage consistent, real-time updates directly through the mobile interface.
          </p>
        </Section>

        <Divider />

        <Section eyebrow={<span className={styles.blue}>Stage 1</span>} title="Understanding the Product">
          <p>
            When I joined this project, I had little exposure to Salesforce or CRM tools. Before redesigning, I first needed to
            understand what the Godrej CRM app actually did and why dealers used it.
          </p>
        </Section>
        <ul className={`container ${styles.flows}`}>
          {flows.map(([t, b]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ul>

        <section className={styles.rationale}>
          <div className={styles.rationaleText}>
            <div>
              <p className={styles.blue}>Why was this project prioritized?</p>
              <h2>Business Rationale</h2>
            </div>
            <div>
              <p>
                Although a mobile CRM existed, salesmen continued to rely on desktops, physical notebooks, and WhatsApp to record leads
                and orders during the day, and then at the end of the day sat down to enter everything manually on the desktop.
              </p>
              <p className={styles.blueBold}>This cost a lot of time and defeated the purpose of a phone CRM application.</p>
            </div>
          </div>
          <div className={styles.rationaleImg}>
            <Img file="AwJbDx6tEnTpHg7BmddpFuqV4.png" alt="Writing notes by hand" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "50% 70%" }} />
          </div>
        </section>

        <Section eyebrow={<span className={styles.blue}>Stage 2</span>} title="Research & Analysis">
          <p>
            Since showroom dealers use the Godrej CRM app constantly throughout the day, the goal was to understand exactly how they use
            it, what tasks they perform, how they navigate it, and where their workflow breaks down, through interviews, observations and
            analysis.
          </p>
        </Section>

        <section className={styles.heuristic}>
          <div className="container">
            <div className={styles.heuristicHead}>
              <h3>Heuristic Analysis</h3>
              <p>
                A heuristic evaluation was conducted on the CRM application to identify usability gaps and areas for improvement across
                workflows and interface design.
              </p>
            </div>
          </div>
          <div className={styles.deck}>
            <Img file="cap/gc-heuristic.png" alt="Heuristic analysis deck: slides on irregular spacing, inconsistent icons, inconsistent CTAs, form feedback, missing search and more" sizes="(max-width: 809px) 200vw, 1210px" />
          </div>
          <p className={`container ${styles.deckCaption}`}>
            A detailed deck was prepared and presented, pitched to my manager, and later presented to the engineering team. After
            discussions, the agreed changes were implemented.
          </p>
        </section>

        <figure className={styles.interviews}>
          <Img file="NWjVKbeW8iIra8Mn0qLigWVZD4.png" alt="Interviewing a salesman at a showroom" sizes="(max-width: 809px) 100vw, 1200px" />
          <figcaption>Interviews conducted and observations done at multiple showrooms across Mumbai</figcaption>
        </figure>

        <section className={`container ${styles.problems}`}>
          <ul className={styles.problemCards}>
            {problems.map(([t, b]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{b}</p>
              </li>
            ))}
          </ul>
          <ul className={styles.tags}>
            {tags.map(([t, on]) => (
              <li key={t} className={on ? styles.tagOn : undefined}>
                {t}
              </li>
            ))}
          </ul>
        </section>

        <Section eyebrow={<span className={styles.blue}>Stage 3</span>} title="Improvisation & Designing">
          <p>Once the most critical and error-prone flows were identified, I started designing focused solutions to address them.</p>
        </Section>

        <section className={`container ${styles.current}`}>
          <div>
            <p className={`${styles.blue} ${styles.eyebrowBlue}`}>Lead Creation - Current Solution</p>
            <h3>Lead Creation Was Too Slow for Live Conversations</h3>
            <p>
              This form is used to log every new inquiry / lead, for any product a customer asks about. It’s a high-frequency touchpoint,
              so accuracy and speed are critical.
            </p>
            <strong className={styles.bigStat}>14 Taps Needed</strong>
            <p>Too many questions upfront.</p>
            <p>Repetitive or non-essential at the lead stage.</p>
            <p>Completing the form during live conversations was impractical.</p>
          </div>
          <div className={styles.screens}>
            {["kTuv2ckUuEi07iBT1KA91kCy38.png", "QklXsyOirD8IxYX4LAJuON8Gb8A.png", "vTClzX5rD64ixBiilmaT2ACTpno.png"].map((f, i) => (
              <Img key={f} file={f} alt={`Old lead form, screen ${i + 1}`} sizes="180px" />
            ))}
            <span className={styles.oldTag}>Old Design</span>
          </div>
        </section>

        <div className="container">
          <Solution
            eyebrow="Lead Creation - Proposed Solution"
            title="Cut the flow in half!"
            points={[
              "All removed fields were validated through discussions with salesmen and the Salesforce team to ensure no critical data was lost.",
              "The UI was also refined into a cleaner, more standardised design, complemented by subtle success animations for clearer user feedback.",
            ]}
            video="NzLzgKLLwei9GImnIktrpdSBw.mp4"
            label="New lead form"
            stat="6 Taps Needed"
            statColor="#62b238"
            statPoints={["Removed non-critical fields from the initial lead form", "Deferred detailed inputs to later stages"]}
          />
        </div>

        <section className={`container ${styles.order}`}>
          <div>
            <p className={`${styles.blue} ${styles.eyebrowBlue}`}>New Order - Current Solution</p>
            <h3>
              High error prone and High Friction
              <br />
              Order Taking
            </h3>
          </div>
          <p>The existing order-taking process required sales representatives to manually enter 13-digit product codes individually for each item.</p>
        </section>
        <figure className={styles.orderImg}>
          <Img file="HnOKO4rfiIbVpCfu91y6YEsDfU.png" alt="Furniture with long 13-digit product codes on each piece" sizes="(max-width: 809px) 100vw, 1136px" />
        </figure>

        <section className={`container ${styles.order}`}>
          <h3>So what did the Sales staff resort to?</h3>
          <p className={styles.orderBig}>
            Sales staff maintained a large Excel sheet containing all product codes. Instead of entering details manually on mobile, they
            relied on copy-pasting product codes into the desktop CRM to speed up the process and reduce errors.
          </p>
        </section>

        <p className={styles.simple}>But all this had a simple solution</p>

        <div className="container">
          <Solution
            eyebrow="New Order - Proposed Solution"
            title="QR Code Integration"
            points={[
              "Competitors and best practices showed QR code scanning can speed up product entry.",
              "Field research confirmed that salesmen needed a solution that minimised typing and reduced errors.",
              "High-frequency actions like order entry were the key friction point to tackle.",
            ]}
            video="WFV7dGM4BVpf7R0rV30ElCtA.mp4"
            label="Scanning product QR codes to build an order"
            stat="Faster, error-free order entry"
            statColor="#62b238"
            statPoints={["No longer relying on desktop Excel sheets."]}
          />
          <Solution
            eyebrow="Alternative in case"
            title="Manual but make it faster"
            points={[
              "Instead of entering a whole 13 digit code, sales reps can search the product name and use a suggested option to find the product faster, in case they choose to skip the QR.",
            ]}
            video="CuzHQWGaC66JRhv6WyF0WKrADgk.mp4"
            label="Searching products by name"
            stat="Same Process but Faster"
            statColor="#62b238"
            statPoints={["No learning curve or anything new for the sales rep to learn or keep up with."]}
          />
        </div>

        <Section eyebrow={<span className={styles.blue}>Stage 4</span>} title="Implementation">
          <p>Following a discussion with the engineering team, the proposed solutions were assessed for feasibility and quickly implemented.</p>
        </Section>

        <section className={`container ${styles.save}`}>
          <p>And,</p>
          <h2>How does this save 15hrs a month?</h2>
          <p>
            Every evening, salesmen used to spend 30 - 45 minutes transferring information from their notes and WhatsApp messages into the
            desktop CRM, whether logging new leads or orders.
          </p>
          <p>
            With the redesigned mobile CRM, they can now log everything directly in the app in the same amount of time it used to take
            just to write down notes, saving them significant effort every evening.
          </p>
        </section>

        <Divider />

        <Section eyebrow={<span className={styles.blue}>In Retrospect</span>} title="My Learnings">
          <p className={styles.blue}>
            Beyond CRM design, I worked on other side projects such as a heuristic evaluation of the product configurator, created icons for
            the new website and contributed to graphic work, including video edits, banners, and festive social media posts.
          </p>
        </Section>
        <ol className={`container ${styles.learnings}`}>
          {learnings.map(([t, b], i) => (
            <li key={t}>
              <span>{i + 1}.</span>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ol>

        <Quote
          title={
            <>
              Hear from
              <br />
              the team ;)
            </>
          }
          quote="As an intern, Mitali demonstrated a strong drive to learn. Even during the short time we worked together, she showed genuine curiosity and interest to contribute across different projects. She identified ways to optimise our workflows and worked on designing key assets for our rebranded website. I’d happily recommend Mitali to any team."
          by="Chithra Vairavan @ Godrej & Boyce"
        />
      </main>
      <CaseNav next="/ritual" bottom />
      <Footer />
    </>
  );
}
