import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Qlozy — Clarity Under Pressure",
  description:
    "Qlozy helps you stay clear when it matters most. Your quiet performance companion for high-stakes moments.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%23a78bfa'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Inter,sans-serif' font-weight='700' font-size='18'>Q</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* ============ NAVIGATION ============ */}
        <nav className="nav" id="nav">
          <div className="nav__inner">
            <a href="/" className="nav__logo">
              <div className="nav__logo-mark">Q</div>
              Qlozy
            </a>

            <ul className="nav__links">
              <li>
                <a href="/" className="nav__link">
                  Home
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="nav__link">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/pricing" className="nav__link">
                  Pricing
                </a>
              </li>
            </ul>

            <a
              href="#try"
              className="btn btn--primary nav__cta nav__cta-desktop"
              style={{ padding: "10px 22px", fontSize: "0.85rem" }}
            >
              Try Qlozy Free
            </a>

            <button
              className="nav__mobile-toggle"
              id="mobileToggle"
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className="nav__mobile-menu" id="mobileMenu">
            <a href="/">Home</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/pricing">Pricing</a>
            <a href="#try" className="btn btn--primary" style={{ marginTop: "16px" }}>
              Try Qlozy Free
            </a>
          </div>
        </nav>

        {/* ============ MAIN CONTENT ============ */}
        <main>{children}</main>

        {/* ============ FOOTER ============ */}
        <footer className="footer">
          <div className="footer__inner">
            <a href="/" className="nav__logo" style={{ fontSize: "1.1rem" }}>
              <div
                className="nav__logo-mark"
                style={{ width: "28px", height: "28px", fontSize: "0.75rem" }}
              >
                Q
              </div>
              Qlozy
            </a>
            <div className="footer__links">
              <a href="/">Home</a>
              <a href="/how-it-works">How It Works</a>
              <a href="/pricing">Pricing</a>
              <a href="mailto:hello@qlozy.com">Contact</a>
            </div>
            <p className="body-sm" style={{ marginTop: "8px" }}>
              © {new Date().getFullYear()} Qlozy. Clarity under pressure changes
              outcomes.
            </p>
          </div>
        </footer>

        {/* ============ STICKY MOBILE CTA ============ */}
        <div className="sticky-cta" id="stickyCta">
          <a href="#try" className="btn btn--primary">
            Try Qlozy Free
          </a>
        </div>

        {/* ============ CLIENT-SIDE JS ============ */}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}