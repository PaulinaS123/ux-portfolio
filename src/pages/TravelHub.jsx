
import './TravelHub.css'
import DesignComparison from '../components/DesignComparison'

function TravelHub() {
  return (
    <main className="case-study">

      {/* Back Navigation */}
      <a href="/" className="back-link">
        ← Back to work
      </a>

      {/* Project Header */}
      <header className="case-study-header">
        <p className="eyebrow">
          UX RESEARCH · PRODUCT DESIGN · DEVELOPMENT
        </p>

        <h1>TravelHub</h1>

        <p className="case-study-intro">
          The trip is shared. The planning isn't.
        </p>

        <p className="case-study-description">
          Exploring how group travel planning can become
          more collaborative by reducing the coordination
          burden on one person.
        </p>
      </header>

      {/* Project Cover */}
      <img
        className="case-study-cover"
        src="/images/travel-app-cover.png"
        alt="TravelHub application interface preview"
      />

      {/* Project Details */}
      <section className="case-study-details">
        <div>
          <h2>My Role</h2>
          <p>UX Research, Product Design, Development</p>
        </div>

        <div>
          <h2>Tools</h2>
          <p>Figma, React, Supabase</p>
        </div>

        <div>
          <h2>Project Type</h2>
          <p>Academic Project</p>
        </div>
      </section>

      {/* 01 — The Challenge */}
      <section className="case-study-section">
        <p className="section-label">01 / THE CHALLENGE</p>

        <h2>
          Planning together shouldn't mean
          doing everything yourself.
        </h2>

        <p>
          A group trip starts with excitement, but organizing
          one often means juggling conversations, preferences,
          reservations, and shared expenses across multiple
          platforms.
        </p>

        <p>
          When information is scattered and decisions remain
          unresolved, the responsibility of keeping everyone
          coordinated can fall on one person.
        </p>
      </section>

      {/* 02 — UX Research */}
      <section className="case-study-section research-section">
        <p className="section-label">02 / THE DISCOVERY</p>

        <h2>
          The real friction wasn't the destination.
        </h2>

        <p>
          I conducted three qualitative interviews to
          understand how travelers plan trips, make decisions,
          manage expenses, and deal with uncertainty.
        </p>

        <div className="research-highlight">
          <span>KEY INSIGHT</span>

          <blockquote>
            The biggest challenge wasn't simply planning
            the trip. It was coordinating people,
            responsibilities, and expectations.
          </blockquote>
        </div>

        <h3>What I discovered</h3>

        <div className="insights-grid">
          <article className="insight-card">
            <span>01</span>
            <h4>Scattered information</h4>
            <p>
              Important details were spread across
              conversations, emails, and screenshots.
            </p>
          </article>

          <article className="insight-card">
            <span>02</span>
            <h4>Unequal responsibility</h4>
            <p>
              Group organizers often had to collect
              responses and keep everyone informed.
            </p>
          </article>

          <article className="insight-card">
            <span>03</span>
            <h4>Decision-making friction</h4>
            <p>
              Delayed responses and informal discussions
              made decisions harder to finalize.
            </p>
          </article>

          <article className="insight-card">
            <span>04</span>
            <h4>Financial uncertainty</h4>
            <p>
              Unclear costs and shared payments
              created additional planning stress.
            </p>
          </article>
        </div>
      </section>

      {/* 03 — User Journey */}
      <section className="journey-section">
        <div className="journey-heading">
          <p className="section-label">03 / THE USER JOURNEY</p>

          <h2>
            Where planning starts to feel overwhelming.
          </h2>

          <p>
            I mapped the experience from the perspective
            of a group organizer to visualize how
            coordination challenges build throughout
            the planning process.
          </p>
        </div>

        <figure className="journey-figure">
          <img
            src="/images/travel-current-journey.png"
            alt="Research-informed journey map showing the group organizer's planning stages, actions, inferred emotions, challenges, and opportunities."
            loading="lazy"
          />

          <figcaption>
            Research-informed journey map based on traveler
            interviews. The emotional progression is illustrative.
          </figcaption>
        </figure>

        <div className="research-opportunity">
          <p className="section-label">DESIGN OPPORTUNITY</p>

          <h3>
            How might we make planning feel like
            a shared responsibility rather than
            one person's job?
          </h3>
        </div>
      </section>

      {/* 04 — The Solution */}
      <section className="case-study-section">
        <p className="section-label">04 / THE DESIGN RESPONSE</p>

        <h2>
          From scattered conversations
          to shared decisions.
        </h2>

        <p>
          These findings shaped TravelHub: a collaborative
          space designed to bring trip information,
          group decisions, and itineraries together.
        </p>

        <p>
          Instead of relying on one person to manage
          everything across different tools, the experience
          aims to make planning information and decisions
          more accessible to the group.
        </p>
      </section>

      {/* 05 — Design Iteration */}
      <section className="case-study-section iteration-section">
        <p className="section-label">05 / DESIGN ITERATION</p>

        <h2>
          The first design wasn't always intuitive.
        </h2>

        <p>
          During usability testing with three participants,
          I evaluated key tasks, including creating a poll
          and viewing an itinerary.
        </p>

        <p>
          Some participants struggled to locate the
          Create Poll action or navigate to the correct
          section. These observations informed revisions
          to action visibility, navigation, and visual hierarchy.
        </p>

       
{/* Iteration 01 — Poll Creation */}
<DesignComparison
  title="01 / Making poll creation easier to navigate."
  description="I explored how clearer form structure and a more prominent primary action could help travelers move through poll creation."
  beforeImage="/images/poll-before.png"
  afterImage="/images/poll-after.png"
  beforeAlt="Reconstructed earlier poll creation interface"
  afterAlt="Final TravelHub poll creation interface"
  annotations={[
    {
      title: "Clearer form hierarchy",
      description:
        "Explicit labels make the question and destination options easier to scan.",
    },
    {
      title: "Guided interaction",
      description:
        "Grouped inputs and settings create a more structured experience.",
    },
    {
      title: "Visible primary action",
      description:
        "A prominent Next button makes the next step more noticeable.",
    },
  ]}
/>

{/* Iteration 02 — Poll Results */}
<DesignComparison
  title="02 / Making group decisions clearer."
  variant="poll-results"
  description="I refined how voting results and participation are presented to help travelers understand group preferences and decide what to do next."
  beforeImage="/images/poll-results-before.png"
  afterImage="/images/poll-results-after.png"
  beforeAlt="Reconstructed earlier poll results interface"
  afterAlt="Final TravelHub poll results interface"
  annotations={[
  {
    title: "Visual destination recognition",
    description:
      "The header image provides visual context, helping travelers recognize the destination.",
  },
  {
    title: "Clearer poll context",
    description:
      "Poll status and closing time help travelers understand when a decision is needed.",
  },
  {
    title: "More informative voting results",
    description:
      "Vote counts and percentages make group preferences easier to interpret.",
  },
  {
    title: "More actionable decisions",
    description:
      "Separate actions let travelers confirm a destination or wait for more votes.",
  },
]}

/>

        <p className="iteration-disclaimer">
         
          The before screens are illustrative reconstructions of earlier
          design explorations. The final designs have not yet been retested.
        
        </p>
      </section>

      {/* 06 — Final Design */}
      <section className="case-study-section design-showcase">
        <p className="section-label">06 / THE FINAL DESIGN</p>

        <h2>
          Bringing the experience together.
        </h2>

        <p>
          The resulting interface brings key planning
          activities into a shared experience, with
          dedicated spaces for trip information,
          collaborative decisions, and itineraries.
        </p>

        <div className="screen-grid">
          <figure>
            <img
              src="/images/travel-dashboard.png"
              alt="TravelHub home dashboard showing Barcelona trip"
              loading="lazy"
            />
            <figcaption>01 — Trip Dashboard</figcaption>
          </figure>

          <figure>
            <img
              src="/images/travel-poll.png"
              alt="TravelHub group poll for Barcelona and Bali"
              loading="lazy"
            />
            <figcaption>02 — Collaborative Voting</figcaption>
          </figure>

          <figure>
            <img
              src="/images/travel-itinerary.png"
              alt="TravelHub Barcelona trip itinerary"
              loading="lazy"
            />
            <figcaption>03 — Trip Itinerary</figcaption>
          </figure>
        </div>
      </section>

      {/* 07 — Reflection */}
      <section className="case-study-section">
        <p className="section-label">07 / REFLECTION</p>

        <h2>
          Designing for people, not just plans.
        </h2>

        <p>
          This project reinforced the importance of
          understanding the human challenges behind
          a product. The research shifted my focus
          from organizing trip details to supporting
          collaboration and shared decision-making.
        </p>

        <p>
          Usability testing also reminded me that
          useful features need to be easy to discover.
          A next step would be to retest the revised
          interactions and evaluate how effectively
          groups can coordinate a trip together.
        </p>
      </section>

    </main>
  )
}

export default TravelHub
