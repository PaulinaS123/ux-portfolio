
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <header className="navbar">
        <a href="/" className="logo">
          Paulina Salomon
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>

        {/* Hero Section */}
        <section className="hero">
          <p className="eyebrow">
            PRODUCT DESIGNER & DEVELOPER
          </p>

          <h1>
            Designing with <em>curiosity.</em>
          </h1>

          <p className="hero-description">
            I'm a product designer with a background in
            UX and software development. I create thoughtful,
            human-centered digital experiences.
          </p>

          <a className="explore-link" href="#work">
            Explore my work
            <span aria-hidden="true"> ↘</span>
          </a>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="work-section">

          <div className="section-heading">
            <h2>Selected Work</h2>
            <span>01 / Projects</span>
          </div>

          <div className="project-grid">

            {/* Travel Organization App */}
            <a
              href="/projects/travel-app"
              className="project-card"
            >
              <div className="project-image">
                <img
                  src="/images/travel-app-cover.png"
                  alt="Travel Organization App interface preview"
                />
              </div>

              <div className="project-info">
                <div>
                  <h3>Travel Organization App</h3>
                  <p>
                    UX Research · Product Design · Development
                  </p>
                </div>

                <span
                  className="project-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </a>

            {/* Reverse Cloud PWA */}
            <a
              href="/projects/reverse-cloud"
              className="project-card"
            >
              <div className="project-image">
                <img
                  src="/images/reverse-cloud-cover.png"
                  alt="Reverse Cloud offline learning app interface preview"
                />
              </div>

              <div className="project-info">
                <div>
                  <h3>Reverse Cloud PWA</h3>
                  <p>
                    UX/UI Design · Design Systems · Accessibility
                  </p>
                </div>

                <span
                  className="project-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </a>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <h2>A little about me.</h2>

          <p>
            I bring together human-centered design and
            technical problem-solving to create meaningful
            digital experiences.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact">
        <p>Let's create something meaningful.</p>

        <a href="mailto:hello@example.com">
          Get in touch ↗
        </a>
      </footer>

    </div>
  )
}

export default App
