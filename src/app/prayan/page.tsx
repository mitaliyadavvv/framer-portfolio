import type { Metadata } from "next";
import { CaseNav, Divider, Figure, Img, Section, TLDR, Vid } from "@/components/Case";
import Footer from "@/components/Footer";
import PrayanHero from "./PrayanHero";
import { RecognitionStars } from "./Stars";
import styles from "./prayan.module.css";

export const metadata: Metadata = { title: "Prayan : Post Loss Service" };

const BEHANCE = "https://www.behance.net/gallery/245052835/Prayan-Post-Loss-Service-Design-Project";

const feelings = [
  ["Grief", "Managing paperwork while coping with loss creates constant pressure and anxiety.", "Waa7hBtnBePCzJhe4jtTYMzr8g.png"],
  ["Stress", "Emotional overwhelm makes even simple decisions feel exhausting.", "fycAyCXyenGOpCtmmOsVsEvv0UI.png"],
  ["Confusion", "Families often don’t know what steps to take next or which offices to approach.", "eePjYPN9z2zxE4ZHNPqU9YBL6w.png"],
  ["Helplessness", "Distance, time constraints, and bureaucracy leave families feeling unsupported.", "JljKsgXbQdN3uL5soKEiaKk.png"],
];

const concerns = [
  ["Lack of Awareness & Guidance", "Families are often unaware of the steps involved, leading to confusion and missed or delayed actions."],
  ["No Single Touch Point", "Unclear updates and no progress tracking create anxiety and constant follow-ups."],
  ["Time Constraints & Emotional Overload", "Grief, stress, and daily responsibilities make it difficult to manage complex administrative tasks."],
  ["Distance & Accessibility", "Families living far away or NRIs struggle to coordinate tasks, visit offices, and gather documents, making an already complex process even harder to manage."],
];

const how = [
  ["Book an offline / online call", "A call with an executive is essential as this domain and this service are both new to the Indian market. Understanding it rightly would go a long way."],
  ["Custom Planning Session", "Each family is different, and so will the path be. Based on the person’s or family’s requirements, plans are created to suit them better in the time of need."],
  ["Legal Consent / Authorisation", "Signing the needed documents and giving authority to Prayan for when needed makes the process ahead much easier."],
  ["Will & Estate Planning", "Prayan facilitates will drafting and executor designation through partnered legal professionals, ensuring clarity on asset distribution."],
  ["Institutional Linking", "Relevant institutions (banks, insurers, employers, utilities) are mapped and linked to the individual’s profile to reduce discovery friction later."],
  ["Family Visibility", "Selected family members are informed of Prayan’s role, access points, and next steps without overwhelming them with details."],
];

// heads drawn over the line art: [x, y, size, colour] in px of the 303×202 artwork
type Dot = [number, number, number, string];
const ORANGE = "#ff9c56";
const audiences: [string, string, string, Dot[], boolean?][] = [
  ["For Who Want to Plan Ahead", "For individuals who want to look out for their family, even in their absence.", "3loflzWnnVeAfS4WC44DouteHk.png", [[63, 13, 58, ORANGE], [160, 27, 54, ORANGE], [126, 96, 37, ORANGE]]],
  ["For Families Facing a Loss", "For those who have lost a loved one and don’t know what to do next.", "SZhjRJM3CFd5F2QShulzM2moU0.png", [[114, 20, 54, "#fdbc8e"]], true],
  ["For NRIs & Families Living Away", "For families separated by distance across cities, states, or countries.", "LGlpOGrTZG4o2vgyFFkmiHSr00.png", [[122, 62, 41, ORANGE]]],
];

const model = [
  ["Pre-authorised Support", "Members grant Prayan advance authority to handle documentation, legal, banking, and government processes on their behalf."],
  ["Reduced Friction", "The scope of work is clearly defined in advance. Faster action, fewer approvals, and smoother execution during emotionally vulnerable moments."],
  ["Trust-Led Revenue Model", "A membership model builds trust, ensures recurring revenue, and enables deeper access and more comprehensive support."],
];

const route = [
  ["First Contact", "The family contacts Prayan instead of multiple institutions, initiating the post-loss process through one verified channel."],
  ["Verification", "Death verification and family identity checks are completed to activate the authorised workflows."],
  ["Case Assignment", "A trained case manager is assigned to coordinate all processes, communication, and follow-ups on behalf of the family."],
  ["Execution (Given Authority Exists)", "Prayan submits documents, follows up with institutions, and completes procedural tasks using pre-signed authority."],
  ["Guidance (Where Authority Is Limited)", "Relevant institutions (banks, insurers, employers, utilities) are mapped and linked to the individual’s profile to reduce discovery friction later."],
  ["Handover & Closure", "Completed documents, confirmations, and records are handed over to the family, bringing procedural closure."],
];

const features = [
  ["Document Upload", "Upload required documents securely from home, without visiting offices."],
  ["Timeline View", "See what’s completed, what’s in progress, and what comes next."],
  ["Documents & Bills", "View, download, and store all official documents and invoices in one place."],
  ["Progress Status", "Track progress across services without repeated follow-ups."],
  ["Templates", "Access verified document templates and digitally log submissions."],
  ["Anchor Chat", "Directly message your assigned case manager for updates and clarification."],
  ["Family Access", "Share controlled access with family members to stay aligned."],
];

const screens = [
  ["qj6IrTmUlEGhqbn51NTde8Kk.png", "Home Page"],
  ["p3HNk5XhxUQQm2eNp7ni3sxFbzo.png", "Documents Page"],
  ["NPZRdinSxxSbzvCSkUWUZpDY.png", "In Depth Progress Screens"],
  ["2SgImDpuPhjnIV4lvaFth88u9U.png", "Chat Screen and Progress Overview Page"],
  ["KWNwx4EBKNG70wzohwx8vnZerYo.png", "Settings and Calendar Screen"],
];

const future = [
  ["1.", "Internal Operations Dashboard", "Further, I plan to make internal dashboards and working systems that Prayan employees will use, building their whole ecosystem."],
  ["2.", "Deeper Government Automation", "Integration with available government and institutional APIs to automate status checks, acknowledgements, and progress updates, minimising manual follow-ups and reducing delays."],
  ["3.", "Proactive Case Intelligence", "Smart alerts and dependency tracking to flag stalled processes, missing documents, or upcoming deadlines before they become blockers."],
];

export default function Prayan() {
  return (
    <>
      <CaseNav next="/godrej-crm" />
      <main>
        <header className={`container ${styles.hero}`}>
          <h1>Prayan</h1>
          <p className={styles.subtitle}>For Holistic Post Loss Support</p>
          <dl className={styles.meta}>
            <div>
              <dt>My Role</dt>
              <dd>UX Designer</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>6 weeks</dd>
            </div>
            <div>
              <dt>Project</dt>
              <dd>Service Design</dd>
            </div>
          </dl>
        </header>
        <PrayanHero />

        <TLDR
          rows={[
            ["Task Assigned", "Identify gaps in the Indian market and cater to them by means of service design."],
            ["Problem Identified", "After losing a loved one, people have to navigate the Indian bureaucratic system alone, which is confusing, exhausting, fragmented and way more complicated than expected."],
            ["Solution Found", "Prayan: a 0-1 hybrid service to navigate documentation, formalities, and processes after the loss of a loved one. Designed as a compassionate platform and service to manage logistics and legal paperwork, allowing families to focus on healing."],
            ["Recognition", "Won Best Student Innovation Award @ UX India 2026, and was consulted by multiple designers and investors to collaborate on the project further."],
          ]}
        />

        <Section title="Project Overview">
          <p>
            Built a 0-1 service to navigate documentation, formalities, and processes after the loss of a loved one from scratch. Designed a
            compassionate platform and service to manage logistics and legal paperwork, allowing families to focus on healing.
          </p>
        </Section>

        <Divider />

        <section className={`container ${styles.recog}`}>
          <h2>
            <RecognitionStars className={styles.recogStars} />
            <span>Recognition</span>
          </h2>
          <div>
            <h3>Best Student Innovation Award @ UX India 2026</h3>
            <p>
              Out of 350+ submissions across India, through 2 rounds of juries, Prayan made it to the top 10 and was awarded the Best
              Student Innovation Award @ UX India 2026 Bangalore.
            </p>
          </div>
        </section>
        <div className={`container ${styles.recogGrid}`}>
          <Img file="VYPSKFiUJBEjo3xMgVzMQXKdt4.jpg" alt="Receiving the Best Student Innovation Award at UX India 2026" className={styles.r1} sizes="600px" />
          <Img file="AkPIYt5noZb9dCrcbRGRtGYnbg.jpg" alt="Presenting Prayan on stage" className={styles.r2} sizes="260px" />
          <p className={styles.r3}>
            I was also a speaker for UX India later at the Rising Leaders Forum hosted at Srishti Institute of Design, where I presented the
            project to multiple industry professionals and students.
          </p>
          <Img file="T37iEPZ9oB6aUTvf644fNIPO00.png" alt="Speaking at the Rising Leaders Forum" className={styles.r4} sizes="260px" />
          <Img file="X6m362VUbAmkkVmi0AeajOfKdU.png" alt="With the award" className={styles.r5} sizes="200px" />
        </div>

        <Divider />

        <Section eyebrow="The Problem" title="Setting Context">
          <p>Losing a loved one is already tough as it is; the added bureaucracy helps no one. Families are left confused, tired and helpless.</p>
          <p>
            <span className="muted">What is the current system?</span>
            <br />
            The current system heavily relies on the immediate family members doing all the work through a long process of 2 to 6 months
            instead of grieving. The process is unclear, hectic, brutal and repetitive.
          </p>
        </Section>
        <Figure file="cap/pr-49.png" alt="49% of Indians develop prolonged grief disorder" />

        <Section eyebrow="The Problem" title="Stages Post Death">
          <p>
            Families are left to navigate hospitals, banks, government offices, and endless paperwork, often without knowing what comes first
            or who to approach. The absence of a clear, compassionate system turns a grieving time into a bureaucratic nightmare.
          </p>
        </Section>
        <Figure
          file="cap/pr-stages.png"
          alt="1. Immediate medical confirmation → arranging last rites → obtaining death certificate → 4. informing banks and institutions → 5. settling hospital and cremation bills → 6. legal and property documentation → 7. updating government records → 8. emotional aftermath"
        />
        <div className={`container ${styles.twoCol}`}>
          <p>
            First of all, people are grieving: this is no time to run errands and bounce between offices. And even if we were to keep all the
            emotions aside, systematically too this doesn’t match.
          </p>
          <p>Most people just get a week off as bereavement leave, but the work can stretch anywhere from 3 to 6 months or even longer.</p>
        </div>
        <Figure file="cap/pr-months.png" alt="7 days of bereavement leave ≠ 6 months of paperwork: jobs to be done spread from January to June" />

        <Section eyebrow="The Problem" title="Online Evidence">
          <p>
            The current system heavily relies on the immediate family members doing all the work through a long process of 2 to 6 months
            instead of grieving. The process is unclear, hectic, brutal and repetitive.
          </p>
          <p>Forums like Reddit particularly had younger people and people living away from family asking for help.</p>
        </Section>
        <Figure
          file="cap/pr-evidence.png"
          alt="Reddit posts: 'Dad passed away suddenly, not sure what I should do next' and 'My dad just died'. Quotes: 'I know I should mourn during this period but I wanna get things done.' 'NRIs and Indians abroad with families in India, how do you deal with this?'"
        />

        <Section eyebrow="The Problem" title="Interviews">
          <p>Interviews, to no one’s surprise, revealed people who were sad, frustrated, and mad at the system for showing no empathy.</p>
        </Section>
        <ul className={`container ${styles.feelings}`}>
          {feelings.map(([t, b, img]) => (
            <li key={t}>
              <div className={styles.feelingArt}>
                <span className={styles.feelingDot} aria-hidden />
                <Img file={img} alt="" sizes="200px" className={styles.flip} />
              </div>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ul>

        <Section eyebrow="Insights" title="Areas of Concern">
          <p>From the interviews and online evidence, four recurring areas of concern stood out.</p>
        </Section>
        <ul className={`container ${styles.concerns}`}>
          {concerns.map(([t, b]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ul>

        <Divider />

        <Section title="Defining the Problem">
          <p>
            Losing someone you love is hard enough, but what follows makes it even harder. Families are left to navigate hospitals, banks,
            government offices, and endless paperwork, often without knowing what comes first or who to approach. In the middle of grief,
            they’re expected to function like administrators. The absence of a clear, compassionate system turns a deeply human experience
            into a bureaucratic nightmare.
          </p>
        </Section>
        <div className={`container ${styles.gifs}`}>
          <figure>
            <Vid file="4YqG8cAaSsI9vppFbIMf2BMyvs4.mp4" label="How people think the process looks: a straight line" />
            <figcaption>How people think the process looks like</figcaption>
          </figure>
          <figure>
            <Vid file="5WflZaQKfaD4yLI6Ij0cWYKJA.mp4" label="How it actually is: a tangled path" />
            <figcaption>How it actually is</figcaption>
          </figure>
          <span className="chip chip-grey">GIF</span>
        </div>

        <Section title={<span className={styles.orange}>Introducing Prayan</span>}>
          <p>
            Prayan is a post-loss administrative and support service that helps families navigate documentation, formalities, and processes
            after the loss of a loved one.
          </p>
          <ul className={styles.plain}>
            <li>Designed for moments when families are emotionally overwhelmed</li>
            <li>Handles coordination, paperwork, and procedural guidance</li>
            <li>Reduces stress, confusion, and repeated office visits</li>
          </ul>
        </Section>
        <Figure
          file="cap/pr-mindmap.png"
          alt="You → Prayan → legal and documentation support, hospital and medical formalities, bank and financial assistance, government process"
        />

        <Section title="How Does it Work?">
          <p>
            Prayan is designed as a pre-emptive support service, encouraging people to prepare while life is stable. Members complete
            necessary signings, define consent, and grant limited authority in advance, so if something were to happen, their family is not
            forced to navigate paperwork, offices, and uncertainty during a time of grief.
          </p>
        </Section>
        <ol className={`container ${styles.peach3}`}>
          {how.map(([t, b], i) => (
            <li key={t}>
              <span>{i + 1}</span>
              <div>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            </li>
          ))}
        </ol>

        <Section title="What can Prayan do?">
          <p>With the right authority, much of this work can be handled by people outside the immediate family. Here’s everything Prayan can do as of today.</p>
        </Section>
        <Figure
          file="cap/pr-can-do.png"
          alt="Paperwork, legal and system handling; execution and access support (on-ground support, remote support for NRIs, one point of contact); human-centred and preventive support (emotional sensitivity, pre-planning, will creation)"
        />

        <Section title="Who is it for?">
          <p>It is a hybrid service that focuses majorly on pre-planning for families, making things easier for the family as well as Prayan.</p>
        </Section>
        <ul className={`container ${styles.audience}`}>
          {audiences.map(([t, b, img, dots, tear]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{b}</p>
              <div className={styles.audienceArt}>
                <Img file={img} alt="" sizes="303px" />
                {dots.map(([x, y, d, c]) => (
                  <span
                    key={`${x}-${y}`}
                    className={styles.audienceDot}
                    style={{ left: `${(x / 303) * 100}%`, top: `${(y / 202) * 100}%`, width: `${(d / 303) * 100}%`, background: c }}
                    aria-hidden
                  />
                ))}
                {tear && (
                  <svg className={styles.tear} viewBox="-1 -1 25 23" fill="none" aria-hidden>
                    <path d="M15.9375 19.0626C12.1875 16.875 4.75 15.8126 0 20.3126M19.0625 0C16.6667 3.4375 14.375 10 19.0625 10C20.6265 10 25.0625 9 19.0625 0Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                )}
              </div>
            </li>
          ))}
        </ul>

        <Divider />

        <Section title="Business Model">
          <p>
            Designing is more than just visuals and user flows: whether it is practically feasible, grounded in reality, and works in the
            market is also a perspective I deployed while designing this service.
          </p>
        </Section>
        <div className={`container ${styles.model}`}>
          <h3>1. Proactive Membership Model (Primary Model)</h3>
          <p>
            Individuals can sign up with Prayan through a monthly or annual membership, designed to reduce the emotional and logistical burden
            on their families in the event of a loss.
          </p>
          <ul>
            {model.map(([t, b]) => (
              <li key={t}>
                <h4>{t}</h4>
                <p>{b}</p>
              </li>
            ))}
          </ul>
          <h3>2. Immediate Assistance Model (Secondary / On-demand)</h3>
          <p>
            Prayan provides paid, case-based assistance focused on guidance, coordination, and limited execution, with services scoped by
            legal authority, documentation access, family consent, and jurisdictional constraints.
          </p>
        </div>

        <Section title="Post Loss Route">
          <p>
            This route shows what the process would look like for a family who has approached Prayan post loss, given the loved one had signed
            up prior.
          </p>
        </Section>
        <ol className={`container ${styles.route}`}>
          {route.map(([t, b], i) => (
            <li key={t}>
              <span>{i + 1}</span>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ol>

        <Divider />

        <Section title="Digital Assistance">
          <p>
            Prayan is supported by a companion app designed to reduce confusion during moments of loss. Instead of relying on calls,
            paperwork, or memory, families can track progress, documents, and next steps in one calm, centralised space.
          </p>
          <p>
            The app exists to make an overwhelming process visible, structured, and predictable, showing what’s completed, what’s pending, and
            what Prayan is handling on the family’s behalf.
          </p>
        </Section>
        <ul className={`container ${styles.features}`}>
          {features.map(([t, b]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ul>

        <Section title="Interface Deep Dive">
          <p>Here’s a closer look at the key screens of the companion app and how each one supports the family through the process.</p>
        </Section>
        {screens.map(([f, cap]) => (
          <Figure key={f} file={f} alt={`Prayan app: ${cap}`} caption={cap} />
        ))}

        <Section title="Vibe Coded Demo with Claude">
          <p>
            Alongside the Figma designs, I vibe coded working demos of the app with Claude to test the flows and make the experience easier
            to understand and hand over.
          </p>
        </Section>
        <Figure file="cap/pr-demo1.png" alt="Vibe coded demo: home screen" />

        <section className={`container ${styles.demoRow}`}>
          <div>
            <p className={styles.peachEyebrow}>Vibe Coded Demo</p>
            <h3>Uploading Documents</h3>
            <p>Prototyping with Claude makes it easier to ship visuals to dev teams, understand the flow better &amp; help everyone visualise.</p>
          </div>
          <figure>
            <Img file="cap/pr-demo2.png" alt="Vibe coded demo: progress tracking page" sizes="(max-width: 809px) 100vw, 541px" />
            <figcaption>Progress Tracking Page</figcaption>
          </figure>
        </section>

        <section className={`container ${styles.demoRow} ${styles.demoFlip}`}>
          <Img file="cap/pr-demo3.png" alt="Vibe coded demo: functional search bar" sizes="(max-width: 809px) 100vw, 534px" />
          <div>
            <p className={styles.peachEyebrow}>Vibe Coded Demo</p>
            <h3>Functional Search Bar</h3>
            <p>A working internal system that would’ve been complex and time-consuming to prototype with Figma alone.</p>
          </div>
        </section>

        <section className={`container ${styles.more}`}>
          <div>
            <p className={styles.peachEyebrow}>Vibe Coded Demo</p>
            <h3>And So Much More</h3>
          </div>
          <p>With a few extra minutes and precise prompting, I can turn concepts into functional, tangible prototypes.</p>
        </section>
        <Figure
          file="cap/pr-demo4.png"
          alt="Three more vibe coded screens: progress summary, documents and sectors"
          caption="I’m continuously learning and integrating emerging AI tools into my workflow, not just to stay current, but to meaningfully improve how I design and build."
        />

        <Divider />

        <Section title="Near Future Improvements">
          <p>
            Prayan is a project I plan to continue developing, refining, and pressure-testing until it becomes a fully realised, end-to-end
            service. As I grow as a designer and learn more about operations, policy, and real-world constraints, this project will evolve
            with me. I’m still learning and I don’t plan on stopping :)
          </p>
        </Section>
        <ul className={`container ${styles.future}`}>
          {future.map(([n, t, b]) => (
            <li key={t}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
          <li className={styles.bonus}>
            <span>Bonus</span>
            <h3>Full Case Study</h3>
            <p>If you’d like a deeper look at the research, design thinking, and final outcome, you can explore the complete case study here.</p>
            <a href={BEHANCE} target="_blank" rel="noopener noreferrer" className="link-underline">
              Project Link
            </a>
          </li>
        </ul>
      </main>
      <CaseNav next="/godrej-crm" bottom />
      <Footer />
    </>
  );
}
