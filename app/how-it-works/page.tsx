export default function HowItWorksPage() {
  return (
    <>
      {/* ============================
          HERO / INTRO
          ============================ */}
      <section className="hero" style={{ minHeight: "auto", paddingBottom: "40px" }}>
        <div className="glow glow--hero" style={{ animation: "glowPulse 6s ease-in-out infinite", opacity: 0.3 }}></div>
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            How It Works
          </div>
          <h1 className="heading-xl hero__title">
            Preparation meets
            <br />
            <span className="text-accent">the present moment</span>
          </h1>
          <p className="body-lg hero__subtitle">
            You&rsquo;ve done the work. Qlozy makes sure it shows up when it counts — calmly, quietly, in real time.
          </p>
        </div>
      </section>

      {/* ============================
          THREE-PHASE FLOW
          ============================ */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in">
            <span className="label">The Flow</span>
            <h2 className="heading-lg" style={{ marginTop: "12px" }}>
              Three quiet phases
            </h2>
            <p className="body-lg" style={{ marginTop: "12px", maxWidth: "480px", margin: "12px auto 0" }}>
              Qlozy works in the background of your most important moments. No interruption. No distraction.
            </p>
          </div>

          <div className="phase-grid">
            {/* Phase 1 */}
            <div className="phase-card fade-in">
              <div className="phase-card__number">Phase 01 — Before</div>
              <h3 className="phase-card__title">Set your context</h3>
              <p className="phase-card__desc">
                Tell Qlozy what you&rsquo;re walking into — an interview, a presentation, a difficult call. Share any notes, prep material, or just a few words about what matters to you. Qlozy listens and understands your intent.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="phase-card fade-in">
              <div className="phase-card__number">Phase 02 — During</div>
              <h3 className="phase-card__title">Stay clear in the moment</h3>
              <p className="phase-card__desc">
                As the conversation unfolds, Qlozy follows along quietly. When you need a nudge — a structured thought, a key point, a way to reframe — it&rsquo;s there. No noise. No takeover. Just calm, timely clarity.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="phase-card fade-in">
              <div className="phase-card__number">Phase 03 — After</div>
              <h3 className="phase-card__title">Reflect and grow</h3>
              <p className="phase-card__desc">
                After the moment passes, Qlozy gives you a quiet debrief. What went well. Where you hesitated. Patterns over time. Not to judge — but to help you show up even stronger next time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SCENARIOS
          ============================ */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in">
            <span className="label">Where It Helps</span>
            <h2 className="heading-lg" style={{ marginTop: "12px" }}>
              For the moments that shape outcomes
            </h2>
          </div>

          <div className="scenario-grid">
            <div className="scenario-card fade-in">
              <div className="scenario-card__icon">💼</div>
              <h3 className="scenario-card__title">Interviews</h3>
              <p className="scenario-card__desc">
                Behavioral questions, technical deep-dives, curveballs. Qlozy helps you structure your thinking so your preparation actually shows.
              </p>
            </div>

            <div className="scenario-card fade-in">
              <div className="scenario-card__icon">🎤</div>
              <h3 className="scenario-card__title">Presentations</h3>
              <p className="scenario-card__desc">
                When you lose your place or a question catches you off guard, Qlozy gently surfaces your key points so you stay composed.
              </p>
            </div>

            <div className="scenario-card fade-in">
              <div className="scenario-card__icon">💬</div>
              <h3 className="scenario-card__title">Difficult Conversations</h3>
              <p className="scenario-card__desc">
                Negotiations, performance reviews, hard feedback. Qlozy helps you stay grounded when emotions run high and words matter most.
              </p>
            </div>

            <div className="scenario-card fade-in">
              <div className="scenario-card__icon">📋</div>
              <h3 className="scenario-card__title">Sales & Client Calls</h3>
              <p className="scenario-card__desc">
                Stay on message, handle objections gracefully, and never forget the key points that close the deal — all without breaking eye contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          ETHICS SECTION
          ============================ */}
      <section className="section">
        <div className="container container--narrow">
          <div className="text-center fade-in">
            <span className="label">Our Philosophy</span>
            <h2 className="heading-lg" style={{ marginTop: "12px" }}>
              Assistive, not deceptive
            </h2>
            <p className="body-lg" style={{ marginTop: "16px" }}>
              Qlozy exists because we believe the gap between what you know and what you can express under pressure isn&rsquo;t a measure of competence — it&rsquo;s a measure of anxiety.
            </p>
            <p className="body-md" style={{ marginTop: "20px", maxWidth: "520px", margin: "20px auto 0" }}>
              We don&rsquo;t generate answers you don&rsquo;t have. We don&rsquo;t put words in your mouth. We help you access what&rsquo;s already there — your preparation, your knowledge, your voice — when pressure threatens to silence it.
            </p>
            <p className="body-md" style={{ marginTop: "16px", maxWidth: "520px", margin: "16px auto 0", color: "var(--text-tertiary)" }}>
              Think of it as the deep breath you didn&rsquo;t have time to take.
            </p>
          </div>
        </div>
      </section>

      {/* ============================
          SOFT CTA
          ============================ */}
      <section className="section final-cta">
        <div className="glow glow--soft" style={{ bottom: "-100px", left: "50%", transform: "translateX(-50%)", animation: "glowPulse 5s ease-in-out infinite" }}></div>
        <div className="container">
          <div className="final-cta__inner fade-in">
            <h2 className="heading-lg">
              Ready to feel the difference?
            </h2>
            <p className="body-lg" style={{ marginTop: "16px" }}>
              Try Qlozy in your next moment. Free, private, and built around you.
            </p>
            <div style={{ marginTop: "32px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/#try" className="btn btn--primary">
                Try Qlozy Free
              </a>
              <a href="/pricing" className="btn btn--secondary">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}