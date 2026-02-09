export default function PricingPage() {
  return (
    <>
      {/* ============================
          PRICING HERO
          ============================ */}
      <section className="hero" style={{ minHeight: "auto", paddingBottom: "20px" }}>
        <div className="glow glow--hero" style={{ animation: "glowPulse 6s ease-in-out infinite", opacity: 0.25 }}></div>
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Pricing
          </div>
          <h1 className="heading-xl hero__title">
            Fair pricing.
            <br />
            <span className="text-accent">Honest value.</span>
          </h1>
          <p className="body-lg hero__subtitle">
            Start free. Upgrade when Qlozy becomes part of how you prepare. No surprises.
          </p>
        </div>
      </section>

      {/* ============================
          PRICING PHILOSOPHY
          ============================ */}
      <section style={{ paddingBottom: "24px" }}>
        <div className="container container--narrow">
          <div className="text-center fade-in">
            <p className="body-md" style={{ maxWidth: "500px", margin: "0 auto", color: "var(--text-tertiary)" }}>
              We believe clarity shouldn&rsquo;t be a luxury. Every plan includes Qlozy&rsquo;s core experience.
              Premium tiers simply give you more depth, more context, and more room to grow.
            </p>
          </div>
        </div>
      </section>

      {/* ============================
          PRICING CARDS
          ============================ */}
      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="pricing-grid">
            {/* FREE */}
            <div className="pricing-card fade-in">
              <div className="pricing-card__name">Free</div>
              <div className="pricing-card__price">
                $0<span> /month</span>
              </div>
              <p className="pricing-card__desc">
                For trying Qlozy and seeing how it feels.
              </p>
              <ul className="pricing-card__features">
                <li>3 live sessions per month</li>
                <li>Real-time clarity support</li>
                <li>Basic context setting</li>
                <li>Post-session summary</li>
                <li>Works on desktop &amp; mobile</li>
              </ul>
              <a href="#" className="btn btn--secondary">
                Get Started Free
              </a>
            </div>

            {/* PLUS — FEATURED */}
            <div className="pricing-card pricing-card--featured fade-in">
              <div className="pricing-card__badge">Most Popular</div>
              <div className="pricing-card__name">Plus</div>
              <div className="pricing-card__price">
                $19<span> /month</span>
              </div>
              <p className="pricing-card__desc">
                For professionals who face high-stakes moments regularly.
              </p>
              <ul className="pricing-card__features">
                <li>Unlimited live sessions</li>
                <li>Advanced context &amp; memory</li>
                <li>Deep post-session debrief</li>
                <li>Pattern tracking over time</li>
                <li>Priority processing speed</li>
                <li>Scenario-specific modes</li>
              </ul>
              <a href="#" className="btn btn--primary">
                Start with Plus
              </a>
            </div>

            {/* PRO */}
            <div className="pricing-card fade-in">
              <div className="pricing-card__name">Pro</div>
              <div className="pricing-card__price">
                $49<span> /month</span>
              </div>
              <p className="pricing-card__desc">
                For power users and teams who rely on clarity daily.
              </p>
              <ul className="pricing-card__features">
                <li>Everything in Plus</li>
                <li>Custom coaching profiles</li>
                <li>Team &amp; org dashboards</li>
                <li>API access</li>
                <li>Dedicated support channel</li>
                <li>Early access to new features</li>
              </ul>
              <a href="#" className="btn btn--secondary">
                Start with Pro
              </a>
            </div>
          </div>

          <p className="body-sm text-center fade-in" style={{ marginTop: "32px" }}>
            All plans include a 14-day satisfaction guarantee. Cancel anytime, no questions asked.
          </p>
        </div>
      </section>

      {/* ============================
          FAQ
          ============================ */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in">
            <span className="label">Questions</span>
            <h2 className="heading-lg" style={{ marginTop: "12px" }}>
              Honest answers
            </h2>
          </div>

          <div className="faq-list">
            {/* FAQ 1 */}
            <div className="faq-item fade-in">
              <button className="faq-question" aria-expanded="false">
                <span>Is this cheating?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer__inner">
                  No. Qlozy doesn&rsquo;t generate answers you don&rsquo;t have.
                  It&rsquo;s assistive technology — it helps you access your own
                  preparation, structure your thinking, and stay calm under pressure.
                  Think of it as a better version of the notes you already bring, the
                  deep breath you didn&rsquo;t have time for, or the supportive friend
                  who reminds you &ldquo;you know this.&rdquo;
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="faq-item fade-in">
              <button className="faq-question" aria-expanded="false">
                <span>Who is Qlozy for?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer__inner">
                  Anyone who faces moments where clarity matters — job interviews,
                  presentations, client calls, difficult conversations, negotiations.
                  Qlozy is built for ambitious people who prepare thoroughly but want
                  to make sure their preparation shows up when it counts.
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="faq-item fade-in">
              <button className="faq-question" aria-expanded="false">
                <span>Can I cancel anytime?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer__inner">
                  Yes. Cancel anytime from your account settings — no hoops, no
                  retention flows, no guilt. Your free tier access remains active
                  after cancellation. We&rsquo;d rather you come back because you want
                  to, not because you forgot.
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="faq-item fade-in">
              <button className="faq-question" aria-expanded="false">
                <span>Is my data private?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer__inner">
                  Absolutely. Your sessions, context, and personal data are encrypted
                  and never shared. We don&rsquo;t train on your conversations. We
                  don&rsquo;t sell your data. Your clarity is yours alone.
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="faq-item fade-in">
              <button className="faq-question" aria-expanded="false">
                <span>What if it doesn&rsquo;t work for me?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer__inner">
                  