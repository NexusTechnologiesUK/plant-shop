import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <>
      <section
        id="care"
        style={{
          background: "var(--forest)",
          color: "var(--sand)",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <Feature label="Light guides included" />
            <Feature label="Watering reminders by email" />
            <Feature label="Real replies from real growers" />
          </div>

          <div
            style={{
              maxWidth: "440px",
              margin: "0 auto",
              textAlign: "center",
              borderTop: "1px solid rgba(242,234,216,0.15)",
              paddingTop: "36px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                margin: "0 0 8px",
              }}
            >
              Get a care tip a week
            </h3>
            <p style={{ fontSize: "13px", opacity: 0.75, margin: "0 0 18px" }}>
              No spam — just one useful thing to know about your plants.
            </p>
            {submitted ? (
              <p style={{ fontSize: "14px", color: "var(--mustard)" }}>
                You're on the list — welcome.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", gap: "10px", justifyContent: "center" }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-sm" style={{ background: "var(--mustard)", color: "var(--forest)" }}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer
        id="about"
        className="container"
        style={{
          padding: "28px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span style={{ fontSize: "12px", color: "var(--ink-soft)" }}>
          © 2026 Rootly — demo build for client review
        </span>
        <span style={{ fontSize: "12px", color: "var(--ink-soft)" }}>
          Built with React + Vite, deployed on Vercel
        </span>
      </footer>
    </>
  );
}

function Feature({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
      <span style={{ color: "var(--mustard)", fontSize: "16px" }}>●</span>
      {label}
    </div>
  );
}
