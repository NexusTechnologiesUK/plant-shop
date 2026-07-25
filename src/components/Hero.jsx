export default function Hero() {
  return (
    <section
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "48px",
        padding: "56px 0 100px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ maxWidth: "500px" }}>
        <p
          style={{
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontSize: "12px",
            color: "var(--sage)",
            fontWeight: 600,
            margin: "0 0 14px",
          }}
        >
          Slow-grown, hand-delivered
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "54px",
            lineHeight: 1.06,
            color: "var(--forest)",
            margin: "0 0 22px",
          }}
        >
          A little green
          <br />
          for every windowsill.
        </h1>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.65,
            color: "var(--ink-soft)",
            margin: "0 0 28px",
            maxWidth: "420px",
          }}
        >
          We pick and pot every plant by hand, and pair it with plain-language
          care instructions — so it actually survives the first month with
          you.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "28px" }}>
          <a href="#shop">
            <button className="btn btn-primary">Browse the shop</button>
          </a>
          <a href="#assistant">
            <button className="btn btn-outline">Ask Sprout</button>
          </a>
        </div>
        <TrustBar />
      </div>

      <HeroIllustration />
    </section>
  );
}

function TrustBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "18px",
        fontSize: "13px",
        color: "var(--ink-soft)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Stars />
        <span style={{ fontWeight: 600, color: "var(--ink)" }}>4.9</span>
      </div>
      <span style={{ width: "1px", height: "16px", background: "var(--sand-line)" }} />
      <span>1,200+ plants delivered</span>
    </div>
  );
}

function Stars() {
  return (
    <span style={{ color: "var(--mustard-deep)", letterSpacing: "1px" }}>
      ★★★★★
    </span>
  );
}

function HeroIllustration() {
  return (
    <svg
      width="320"
      height="320"
      viewBox="0 0 320 320"
      role="img"
      aria-label="Illustration of a potted monstera plant"
    >
      <ellipse cx="160" cy="285" rx="90" ry="14" fill="var(--forest)" opacity="0.08" />
      <circle cx="160" cy="150" r="150" fill="#e9dcbb" opacity="0.45" />
      <rect x="126" y="220" width="68" height="60" rx="6" fill="var(--mustard)" />
      <rect x="118" y="210" width="84" height="18" rx="4" fill="var(--mustard-deep)" />
      <path
        d="M160 220 C115 185 105 115 160 68 C215 115 205 185 160 220Z"
        fill="var(--sage)"
      />
      <path
        d="M160 90 C172 135 172 180 160 215"
        stroke="var(--forest)"
        strokeWidth="2"
        opacity="0.45"
        fill="none"
      />
      <path
        d="M128 155 C95 145 78 112 94 80 C126 91 137 124 128 155Z"
        fill="var(--forest)"
        opacity="0.9"
      />
      <path
        d="M192 168 C226 157 242 122 226 90 C194 101 183 136 192 168Z"
        fill="var(--forest)"
        opacity="0.75"
      />
      <path
        d="M160 95 C150 130 150 165 160 195"
        stroke="var(--sand)"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
    </svg>
  );
}
