export default function HomePage() {
  return (
    <>
      {/* ============================
          HERO SECTION
          ============================ */}
      <section className="hero" id="hero">
        {/* Ambient glow */}
        <div
          className="glow glow--hero"
          style={{ animation: "glowPulse 6s ease-in-out infinite" }}
        ></div>

        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Now in Early Access
          </div>

          <h1 className="heading-xl hero__title">
            Your mind went blank.
            <br />
            <span className="text-accent">Qlozy didn&rsquo;t.</span>
          </h1>

          <p className="body-lg hero__subtitle">
            Real-time clarity for interviews, presentations, and every moment where
            silence isn&rsquo;t an option.
          </p>

          <div className="hero__actions">
            <a href="#try" className="btn btn--primary">
              Try Qlozy Free
            </a>
            <a href="#demo" className="btn btn--secondary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ opacity: 0.7 }}
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Watch Live Demo
            </a>
          </div>

          <p className="body-sm hero__note" style={{ marginTop: "20px" }}>
            No credit card. No setup. Just clarity.
          </p>
        </div>
      </section>

      {/* ============================
          LIVE DEMO SECTION
          ============================ */}
      <section className="section demo" id="demo">
        <div className="container">
          <div className="text-center fade-in">
            <span className="label">See It Live</span>
            <h2 className="heading-lg" style={{ marginTop: "12px" }}>
              Quiet support, right when you need it
            </h2>
            <p
              className="body-lg"
              style={{ marginTop: "12px", maxWidth: "500px", margin: "12px auto 0" }}
            >
              Watch how Qlozy provides gentle, real-time guidance during a live
              interview — without anyone knowing.
            </p>
          </div>

          <div className="demo__frame fade-in" style={{ marginTop: "48px" }}>
            <div className="demo__frame-bar">
              <div className="demo__frame-dot"></div>
              <div className="demo__frame-dot"></div>
              <div className="demo__frame-dot"></div>
            </div>
            <div className="demo__video-container" id="demoPlayer">
              <video
                id="demoVideo"
                preload="none"
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "none" }}
              >
                <source src="/demo.mp4" type="video/mp4" />
                <source src="/demo.webm" type="video/webm" />
              </video>
              <div className="demo__play-btn" id="playBtn">
                <svg viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </div>

          <p className="demo__caption body-sm fade-in" style={{ marginTop: "20px" }}>
            Qlozy listens to context and offers calm, structured support in
            real-time.
            <br />
            <span className="text-accent">
              A performance companion — not a shortcut.
            </span>
          </p>
        </div>
      </section>

      {/* ============================
          EMOTIONAL MIRROR SECTION
          ============================ */}
      <section className="section" style={{ overflow: "hidden" }}>
        <div className="container container--narrow">
          <div className="text-center fade-in">
            <span className="label">We Understand</span>
            <h2 className="heading-lg" style={{ marginTop: "12px" }}>
              You know the feeling
            </h2>
          </div>

          <div className="mirror__items">
            <div className="mirror__item fade-in">
              <p>&ldquo;The question landed, and my mind just... stopped.&rdquo;</p>
              <p>
                That silence stretches for what feels like a lifetime. Qlozy fills it
                with structure.
              </p>
            </div>

            <div className="divider fade-in"></div>

            <div className="mirror__item fade-in">
              <p>
                &ldquo;I knew the answer. I just couldn&rsquo;t find it fast
                enough.&rdquo;
              </p>
              <p>
                The knowledge is there. Qlozy helps you reach it before the moment
                passes.
              </p>
            </div>

            <div className="divider fade-in"></div>

            <div className="mirror__item fade-in">
              <p>
                &ldquo;I replay it for days. What I should have said.&rdquo;
              </p>
              <p>
                The best version of your response shouldn&rsquo;t arrive at 2am. It
                should arrive on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          TRUST & INTENT SECTION
          ============================ */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in">
            <span className="label">Our Approach</span>
            <h2 className="heading-lg" style={{ marginTop: "12px" }}>
              Built on a simple belief
            </h2>
            <p
              className="body-lg"
              style={{ marginTop: "12px", maxWidth: "480px", margin: "12px auto 0" }}
            >
              Everyone deserves to show up as their best self. Pressure
              shouldn&rsquo;t erase preparation.
            </p>
          </div>

          <div className="trust__grid" style={{ marginTop: "48px" }}>
            <div className="trust__card fade-in">
              <div className="trust__card-icon">🤝</div>
              <h3>Support, not replacement</h3>
              <p className="body-md">
                Qlozy doesn&rsquo;t speak for you. It helps you find what you already
                know — faster, calmer, clearer.
              </p>
            </div>

            <div className="trust__card fade-in">
              <div className="trust__card-icon">🧭</div>
              <h3>Ethical by design</h3>
              <p className="body-md">
                We build assistive technology. Like a note card, a deep breath, or a
                trusted friend whispering &ldquo;you&rsquo;ve got this.&rdquo;
              </p>
            </div>

            <div className="trust__card fade-in">
              <div className="trust__card-icon">🌍</div>
              <h3>Accessible clarity</h3>
              <p className="body-md">
                Performance anxiety doesn&rsquo;t discriminate. Qlozy is built to be
                available to everyone — starting with a free tier, always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          FINAL CTA SECTION
          ============================ */}
      <section className="section final-cta" id="try">
        <div
          className="glow glow--soft"
          style={{
            bottom: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "glowPulse 5s ease-in-out infinite",
          }}
        ></div>

        <div className="container">
          <div className="final-cta__inner fade-in">
            <span className="label">Your Next Moment</span>
            <h2 className="heading-lg" style={{ marginTop: "12px" }}>
              The next time it matters,
              <br />
              <span className="text-accent">you&rsquo;ll be ready</span>
            </h2>
            <p className="body-lg" style={{ marginTop: "16px" }}>
              The interview you&rsquo;ve been preparing for. The pitch that could
              change everything. The conversation you can&rsquo;t afford to fumble.
            </p>
            <p
              className="body-md"
              style={{ marginTop: "12px", color: "var(--text-tertiary)" }}
            >
              Those moments don&rsquo;t wait. Neither should you.
            </p>
            <div style={{ marginTop: "36px" }}>
              <a href="#" className="btn btn--primary">
                Try Qlozy Free
              </a>
            </div>
            <p className="body-sm" style={{ marginTop: "16px" }}>
              Free forever plan available. No commitment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}