const REVIEWS = [
  {
    name: "Priya M.",
    quote:
      "My monstera arrived perfectly packed and the care card actually made sense. Three months in and it's thriving.",
    initials: "PM",
  },
  {
    name: "Daniel K.",
    quote:
      "I've killed every plant I've owned until this one. The email reminders genuinely helped me not overwater it.",
    initials: "DK",
  },
  {
    name: "Amara O.",
    quote:
      "Asked Sprout a question at 11pm about yellow leaves and got a useful answer immediately. Small thing, made a difference.",
    initials: "AO",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="container" style={{ padding: "0 0 100px" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "30px",
          color: "var(--forest)",
          margin: "0 0 28px",
        }}
      >
        What people are saying
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {REVIEWS.map((r) => (
          <div key={r.name} className="testimonial-card">
            <span style={{ color: "var(--mustard-deep)", fontSize: "14px", letterSpacing: "1px" }}>
              ★★★★★
            </span>
            <p
              style={{
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.6,
                margin: "12px 0 18px",
              }}
            >
              "{r.quote}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--sage)",
                  color: "var(--forest)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {r.initials}
              </div>
              <span style={{ fontSize: "13px", fontWeight: 500 }}>{r.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
