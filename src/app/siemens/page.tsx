import type { Metadata } from "next";
import { CaseHero, CaseNav, Divider, Figure, Img, Panel, Quote, Section, TLDR } from "@/components/Case";
import Footer from "@/components/Footer";
import styles from "./siemens.module.css";

export const metadata: Metadata = { title: "Icons AI Agent — Siemens" };

function Impact() {
  return (
    <section className={`container ${styles.impact}`}>
      <h2>Impact</h2>
      <div className={styles.impactWide}>
        <strong>4000+</strong> <span>assets discoverable through conversational AI</span>
      </div>
      <div className={styles.impactCards}>
        <div>
          <strong>81.5 SUS</strong>
          <span>on version 1</span>
        </div>
        <div>
          <strong>Upto 15 days</strong>
          <span>shaved off SLA timelines</span>
        </div>
        <div>
          <strong>$$$ saved</strong>
          <span>in production costs with in-house icon creation</span>
        </div>
      </div>
      <p className={styles.impactNote}>*Exact savings confidential</p>
    </section>
  );
}

const features = [
  ["Finding an Existing Icon", "Find the icons you need through conversations instead of keywords."],
  ["Suggest Icons for Use", "Talk to Glyph and let it help you find the best icon for your use case."],
  ["Modify & Resize Icons", "Get .svg to .png or sizes changed within a few minutes."],
  ["Make your own icons", "Get icons made the same day as you need them and request edits as much as you like."],
];

const learnings = [
  ["AI application Reality", "It’s easier said than done to add an AI feature anywhere, just because it works fast doesn’t mean it’s fast to implement."],
  ["Fail Fast, Learn Fast", "I learned to value early failures as a blueprint for rapid improvisation. The sooner I try, the earlier I know & faster I adapt."],
  ["Pushing My Boundaries", "Building an AI agent, custom knowledge base, and basics of code were entirely new, but not seeing them as setbacks & learning how to learn helped me be a better designer."],
];

const knowledge = [
  "Design System / Guidelines",
  "SVG + CSS Rules",
  "Prompt Interpretation Rules",
  "User Clarification Questions",
  "How to Use Knowledge Base",
  "Delivery Format",
  "Existing Data / Icons",
];

export default function Siemens() {
  return (
    <>
      <CaseNav next="/prayan" />
      <main>
        <CaseHero
          title="Icons AI Agent"
          subtitle="Siemens LCS Icon Agent"
          meta={[
            ["My Role", "UX Designer"],
            ["Timeline", "2 months"],
            ["Company", "Siemens"],
          ]}
          logo="eW9ImRNpE9y6r5BCuoH0ROoCT0.png"
          banner="kywgajq8hd73A0XR72bHtmazpMw.png"
          bannerAlt="The Siemens LCS design team"
          bannerHeight={334}
        />

        <TLDR
          rows={[
            ["Task Assigned", "Find gaps and friction in the current icon processing and find ways to integrate AI to solve them."],
            ["Problem Identified", "Poor searchability in the icons repository, too many icons to parse through and increasing costs every year to get icons made through 3rd party organizations."],
            ["Solution Found", "Glyph : AI Agent, to help users find relevant icons through use cases, resize and refile them & to make new icons or modify existing ones."],
            ["Impact", "Upto 15 days shaved off SLA time lines, 4000+ icons discoverable through conversational AI, capital saved by cutting 3rd party costs."],
          ]}
        />

        <Section title="Project Overview">
          <p>
            Built an AI Agent to help people find, resize and re-design icons in house following company and design guidelines and
            building and finding icons that are actually useful and efficient, without external 3rd party costs like it was being done
            so far at Siemens.
          </p>
        </Section>

        <Divider />
        <Impact />
        <Divider />

        <Section title="Project Assigned">
          <p>
            I was tasked with identifying opportunities to integrate AI across the existing workflow, without a predefined scope or
            implementation area. This could range from asset production and code pipelines to repository search or entirely new
            solutions. My role was to identify the most impactful use cases and determine how to implement them effectively.
          </p>
        </Section>
        <ol className={`container ${styles.tasks}`}>
          <li>
            <span>1.</span>
            <p>
              Find <strong>where</strong> in the entire process we should implement AI
            </p>
          </li>
          <li>
            <span>2.</span>
            <p>
              Identify the right AI tool and <strong>how</strong> to integrate it
            </p>
          </li>
        </ol>

        <Divider />

        <section className={`container ${styles.imagine}`}>
          <p className={styles.blueEyebrow}>Imagine This</p>
          <ul>
            <li>
              <Img file="t4gtFEBy3FkCVDVQmINIVTuZ7c.png" alt="Sketch: a moody, hungry person at a restaurant table" sizes="210px" />
              <p>You go to a restaurant super moody and hungry</p>
            </li>
            <li>
              <Img file="aYFnxBl9eWz1O0z6myq5Pse1lk.png" alt="Sketch: asking the waiter for something spicy and cheesy but no nuts" sizes="200px" />
              <p>You ask the waiter what you’re craving hoping for suggestions</p>
            </li>
            <li>
              <Img file="HZEMQDKx6RK4zot7Y1Q8FettJ5Y.png" alt="Sketch: the waiter asks for the exact dish name" sizes="210px" />
              <p>And he asks you to give an exact dish word to word from the menu</p>
            </li>
          </ul>
          <p className={styles.imagineText}>
            Wouldn’t it be weird ordering a meal from a waiter who doesn’t actually understand food, context, or dietary needs and only
            processes strict menu names.
          </p>
          <p className={styles.imagineText}>
            <strong>That’s exactly how our current icon repository treats the designers at Siemens.</strong>
          </p>
        </section>

        <Divider />

        <Section title="Current Scenario">
          <p>
            I mapped the current workflow between designers, the Icon Management team, and the third-party organisation responsible for
            creating icons to identify bottlenecks and friction points.
          </p>
        </Section>
        <Figure file="nfot31Z7K3ACeYMzu1J0idH3Rw.png" alt="Swimlane map of the current icon request workflow" className={styles.rounded} />

        <div className={`container ${styles.subhead}`}>
          <h3>TL;DR for the Icons Process</h3>
          <p>Has an SLA of 30 days</p>
        </div>
        <Figure
          file="IQXAvcPwnLmUwKPfsTyTS5h9aAE.png"
          alt="Requestor needs an icon → searches the repository and can't find it → requests a new icon through the portal → calls with the core icons team and creator → drafts go back and forth → final icon is used in the product"
          className={`${styles.rounded} ${styles.tightFigure}`}
        />

        <Section title="Business Rationale">
          <p>
            Balancing user needs with business goals was essential. Through conversations with my manager and senior leadership, I
            understood the business priorities that would guide the project, alongside insights from interviews, observations, and task
            analysis.
          </p>
        </Section>
        <Figure
          file="Fmq26WblsEqA9do62q1YsyIJlA.png"
          alt="Being efficient with our resources (cost cutting) leads to in-house icon production, fewer people needed in the core icons team, and better reuse of existing icons"
          className={styles.rounded}
        />

        <Section title="Current Problems">
          <p>
            I mapped out and visualised all the existing issues in a diagram to make them easier to understand and compare, highlighting
            which problems affected the greatest number of people.
          </p>
        </Section>
        <Figure
          file="cap/si-venn-problems.png"
          alt="Venn diagram of problems across requesters, the core team and creators. Shared: brief quality, metadata and tagging, finding existing icons."
        />
        <div className={`container ${styles.spot}`}>
          <h3>How did I spot these issues?</h3>
          <ul>
            <li>20 Interviews</li>
            <li>Task Observations</li>
            <li>Mapping UX Flows</li>
          </ul>
        </div>

        <Divider />

        <Section title="AI Landscaping">
          <p>
            With so many AI tools available, I evaluated five relevant options to understand their capabilities and identify which could
            best address the challenges we were facing. This was a valuable opportunity to explore how AI is applied in industry.
          </p>
        </Section>
        <Figure
          file="BdzDQ6IkZ4baUf1PdojvgJb0tE.png"
          alt="Use-case based top 5 AI tools → benchmarking enterprise tools → best use cases → potential AI integration in the current flow → impact-to-effort matrix → final solution"
          className={styles.rounded}
        />

        <Section title="Problem Prioritisation">
          <p>
            With multiple problems and five potential tools, I prioritised the opportunities that could deliver the greatest impact for
            the largest number of users, and placed all of them in the current flow of icons processing.
          </p>
        </Section>
        <Figure
          file="cap/si-phases.png"
          alt="Four phases (search, brief prep, triage and iteration, merge and handoff) with the AI opportunities mapped to each: semantic search, gen AI icon design, push notifications, and a DAM metadata layer"
        />

        <Section title={<>Solution &amp; AI Agent</>}>
          <p>
            In this section, I’ll walk through the solution ie the AI Agent, how I built it, what it does, how it does that, and the
            thinking behind the AI agent.
          </p>
        </Section>
        <Section title="Why AI Agent" className={styles.mid}>
          <p>
            Among the available approaches, an AI agent emerged as the most suitable solution. Again a diagram to illustrate how its
            capabilities overlap with the identified problems &amp; how it could address multiple needs within a single system.
          </p>
        </Section>
        <Figure
          file="cap/si-venn-agent.png"
          alt="Venn diagram: making our own icons, helping find icons faster and easier, and managing icon data overlap in the AI agent"
        />

        <Section title="How does an AI Agent work" className={styles.mid}>
          <p>
            This high-level overview breaks down the core components of an AI agent and how information flows through the system,
            offering a simple way to understand its underlying process.
          </p>
        </Section>
        <Figure
          file="cap/si-agent-flow.png"
          alt="User query → understand query (perceive) → decide what to execute (plan) → execute actions with tools (tool use) → prepare a deliverable (reflect) → response"
        />

        <Section title="Introducing Glyph">
          <p className="muted">
            Super excited to show Glyph in detail: what it does, why it works the way it does, whom it helps, and how it was built.
          </p>
          <p>
            Glyph is an internal AI-powered icon agent for Siemens, designed to help designers, product managers, and engineers discover,
            create, and explore a library of over 4,000 icons.
          </p>
        </Section>
        <div className={`container ${styles.glyphName}`}>
          <Img
            file="cap/si-glyph-box-v2.png"
            alt="Why the name Glyph: a glyph is a symbolic figure, mark, or character that conveys information non-verbally, like a hieroglyph."
            sizes="(max-width: 809px) 100vw, 1078px"
          />
          {/* overlays: sit outside the box and never affect its alignment */}
          <Img file="k9TnoNdLUWs0oOnC2xqPCcWNTM.png" alt="" className={styles.glyphSticker} sizes="192px" />
          <p className={styles.glyphLabel}>Whats going in Mitali’s head</p>
        </div>

        <Section title="Feature List">
          <p>
            Built over the course of my two-month internship, the latest version of Glyph brings together key features designed to make
            icon-related workflows more efficient and accessible, establishing a strong foundation for future development.
          </p>
        </Section>
        <ul className={`container ${styles.features}`}>
          {features.map(([t, b], i) => (
            <li key={t}>
              <Img file={`cap/si-feat-icon-${i}-c.png`} alt="" className={styles.featIcon} sizes="60px" />
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ul>

        <Section title="Task Flows">
          <p>
            Glyph is designed around three primary user queries. This high-level flow illustrates how each query is processed and how
            the agent responds to different user needs.
          </p>
        </Section>
        <Figure
          file="cap/si-task-flows.png"
          alt="Task flows for three queries: find an icon, modify an existing icon, and make a new icon, with handoffs between the requester, Glyph and the icon team"
        />

        <Section title="How to Build an Agent">
          <p>
            Building an AI agent requires a structured knowledge base, with extensive data organised into a specific format. The agent
            must also be guided on what information to reference, when to use it, and how to interpret it. This data preparation and
            instruction design form a critical part of building a reliable agent.
          </p>
        </Section>
        <Figure file="eS4UZHLTWR6O9BiWwZhJLmQUI.png" alt="Knowledge base planning sheet: what to feed the agent" className={styles.rounded} />

        <div className={`container ${styles.kb}`}>
          <h3>TL;DR</h3>
          <ul>
            {knowledge.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>

        <Section eyebrow="Glyph in Action" title="Find an Icon" className={styles.action}>
          <p>
            In an initial test, I asked Glyph to find an icon for deleting labels. Although the repository contained a Remove Label icon,
            searching for “Delete Label” returned no results. This served as a baseline to evaluate Glyph against more complex scenarios
            later in the presentation.
          </p>
        </Section>
        <Panel pad={50}>
          <div className={styles.findIcon}>
            <Img file="D3GEx2cTWGWAG35X5WdmeOSDoDk.png" alt="Glyph finds an exact match: the Remove Label icon" sizes="540px" />
            <Img file="I40qBa5aQlXAwVg2NyOPS3kYXYk.png" alt="Glyph packages the icon into a downloadable ZIP" sizes="420px" />
          </div>
        </Panel>

        <Section eyebrow="Glyph in Action" title="Help Ideate Options" className={styles.action}>
          <p>
            Glyph can also interpret a given scenario and suggest relevant icon options, helping users explore two to three suitable
            alternatives from a library of over 4,000 icons.
          </p>
        </Section>
        <Figure file="cap/si-ideate-1.png" alt="Glyph suggests icon options for an 'update removed' state, then packages the chosen one" />

        <Section eyebrow="Glyph in Action" title="Complex Scenarios" className={styles.action}>
          <p>
            I tested Glyph against more complex, context-driven scenarios with no obvious keyword matches. It successfully identified
            relevant icons, demonstrating its ability to go beyond simple keyword-based search.
          </p>
        </Section>
        <Figure file="cap/si-ideate-2.png" alt="Screenshots from user testing: Glyph matching context-driven requests to existing icons" />

        <Section eyebrow="Glyph in Action" title="Resizing an Icon" className={styles.action}>
          <p>
            Previously, resizing icons and converting them into different file formats required the third-party organisation, which
            charged for these services. With Glyph, users can resize and reformat icons independently, even in bulk, reducing both
            dependency and operational costs.
          </p>
        </Section>
        <Panel chip="GIF" style={{ padding: "2.8% 0 3.4%" }}>
          <div style={{ width: "64%", margin: "0 auto", borderRadius: 8, overflow: "hidden" }}>
            <Img file="70JG1SBtjtOuEVD9qGrJplwK9A.gif" alt="Glyph resizing an icon from 24 to 32 pixels and returning a ZIP" sizes="700px" />
          </div>
        </Panel>

        <Section eyebrow="Glyph in Action" title="Modify an Icon" className={styles.action}>
          <p>
            The user had asked the agent: “I need an ‘Add Label’ instead of delete label. Can you make and give the new icon?” Glyph used
            existing icons, such as Remove and Label, as references to generate a new icon.
          </p>
        </Section>
        <Panel chip="GIF" style={{ padding: "3.4% 0 3.4%" }}>
          <div style={{ width: "61.8%", margin: "0 auto", borderRadius: 7, overflow: "hidden" }}>
            <Img file="5bfktKE53DHmZOSbSAXdMvnk.png" alt="A new label icon generated by Glyph from existing references" sizes="680px" />
          </div>
        </Panel>

        <Divider />

        <Section title="Usability Testing">
          <p>
            Towards the end of my two-month internship, I conducted usability testing in a professional corporate environment for the
            first time. From preparing the test script to coordinating the sessions, the experience gave me valuable hands-on exposure to
            evaluating a real product.
          </p>
        </Section>
        <Figure file="cap/si-participants.png" alt="11 usability tests, with participants grouped by experience: more than 5 years, less than 5 years, and less than 1 year" />

        <section className={`container ${styles.results}`}>
          <div>
            <h2>Task Results</h2>
            <p className="muted">
              The testing UX script had 4 tasks for all individuals with the liberty to try out more functions on their own after
              completing the 4 tasks.
            </p>
          </div>
          <Img file="cap/si-task-results.png" alt="Task results: 67% completed, 25% completed with difficulty, 8% not completed" sizes="(max-width: 809px) 100vw, 640px" />
        </section>

        <Divider />

        <Section title="SUS Scoring">
          <p>
            Participants also completed a post-test questionnaire, including questions used to calculate the System Usability Scale (SUS)
            score. Glyph performed well on this measure, providing an indication of its usability.
          </p>
        </Section>
        <Figure file="cap/si-sus.png" alt="SUS scale: Glyph scores 81.5, in the acceptable range between good and excellent" />

        <Impact />

        <Divider />

        <Section title="My learnings">
          <p>
            Two months gave me learnings that go far beyond a single slide. Alongside tangible skills in research, AI, and product
            design, the experience shaped how I approach problems, collaborate with teams, and grow as both a designer and an individual.
          </p>
        </Section>
        <ul className={`container ${styles.learnings}`}>
          {learnings.map(([t, b], i) => (
            <li key={t}>
              <Img file={`cap/si-learn-icon-${i}-c.png`} alt="" className={styles.learnIcon} sizes="80px" />
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ul>

        <Quote
          title={
            <>
              Hear from
              <br />
              the team ;)
            </>
          }
          quote="“Mitali demonstrated strong ownership, curiosity, and a user-centered approach, translating research and stakeholder insights into actionable solutions. Her ability to navigate complexity, embrace feedback, and explore AI-driven solutions reflected strong growth in research, problem-solving, and collaboration.”"
          by="Aditya Rajamani, Senior UXer @ Siemens"
        />
      </main>
      <CaseNav next="/prayan" bottom />
      <Footer />
    </>
  );
}
