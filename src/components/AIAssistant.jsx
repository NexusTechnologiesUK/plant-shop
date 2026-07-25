import { useState, useRef, useEffect } from "react";

// "Sprout" is a small rule-based plant-care assistant. It's the page's
// answer to the "AI Agent skills" the client asked about: it recognizes
// what the visitor is asking (watering, light, yellow leaves, etc.) and
// answers with relevant care advice, entirely in the browser.
//
// This version runs on simple keyword matching, so it works instantly
// with zero setup and zero API cost — good for a live demo. If the client
// wants a true LLM-backed agent later, the answer() function below is the
// single place to swap in a real call to an AI API (e.g. from a serverless
// function so the API key stays private), without touching the UI code.

const RULES = [
  {
    keywords: ["yellow"],
    reply:
      "Yellow leaves are usually overwatering. Let the top 2 inches of soil dry out fully between waterings, and check the pot has drainage.",
  },
  {
    keywords: ["brown", "crispy", "tip"],
    reply:
      "Brown, crispy tips point to low humidity or dry air. Try misting a few times a week, or move it away from radiators and AC vents.",
  },
  {
    keywords: ["water", "watering"],
    reply:
      "Most houseplants prefer to dry out between waterings rather than staying damp. Stick a finger 2 inches into the soil — if it's dry, it's time.",
  },
  {
    keywords: ["light", "sun", "window"],
    reply:
      "Bright, indirect light suits most of our plants — a few feet back from a south or east-facing window is ideal. Direct midday sun can scorch leaves.",
  },
  {
    keywords: ["repot", "pot", "root"],
    reply:
      "If roots are circling the pot or poking through the drainage holes, it's time to repot — go up just one pot size, not several.",
  },
  {
    keywords: ["fertiliz", "feed"],
    reply:
      "Feed monthly during spring and summer with a diluted houseplant fertilizer, and skip it entirely in winter while growth slows.",
  },
  {
    keywords: ["pet", "cat", "dog", "toxic"],
    reply:
      "Good question — toxicity varies by plant. Pilea and most succulents are pet-safe; Monstera is mildly toxic if chewed. I'd keep any plant out of reach of curious pets.",
  },
];

const FALLBACK_REPLY =
  "I'm still learning that one! Try asking about watering, light, yellow or brown leaves, repotting, or feeding.";

function answer(message) {
  const lower = message.toLowerCase();
  const match = RULES.find((rule) =>
    rule.keywords.some((keyword) => lower.includes(keyword))
  );
  return match ? match.reply : FALLBACK_REPLY;
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "sprout",
      text: "Hi, I'm Sprout 🌱 Ask me about watering, light, or why a leaf might be turning yellow.",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function handleSend(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { from: "user", text: trimmed };
    const sproutMessage = { from: "sprout", text: answer(trimmed) };

    setMessages((prev) => [...prev, userMessage, sproutMessage]);
    setInput("");
  }

  return (
    <div id="assistant" style={{ position: "fixed", right: "24px", bottom: "24px", zIndex: 50 }}>
      {open && (
        <div
          style={{
            width: "300px",
            height: "380px",
            background: "var(--sand-card)",
            border: "1px solid var(--sand-line)",
            borderRadius: "12px",
            marginBottom: "12px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(31, 58, 44, 0.18)",
          }}
        >
          <div
            style={{
              background: "var(--forest)",
              color: "var(--sand)",
              padding: "14px 16px",
              fontFamily: "var(--font-display)",
              fontSize: "15px",
            }}
          >
            Sprout — plant care assistant
          </div>

          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  background: m.from === "user" ? "var(--forest)" : "#ede4c8",
                  color: m.from === "user" ? "var(--sand)" : "var(--ink)",
                  padding: "9px 12px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  lineHeight: 1.5,
                  maxWidth: "85%",
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSend}
            style={{
              display: "flex",
              borderTop: "1px solid var(--sand-line)",
              padding: "8px",
              gap: "8px",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your plant..."
              style={{
                flex: 1,
                border: "1px solid var(--sand-line)",
                borderRadius: "6px",
                padding: "8px 10px",
                fontSize: "13px",
                fontFamily: "var(--font-body)",
              }}
            />
            <button
              type="submit"
              style={{
                background: "var(--mustard)",
                border: "none",
                borderRadius: "6px",
                padding: "0 14px",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--forest)",
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open plant care assistant"
        className={open ? "" : "sprout-launcher"}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "var(--forest)",
          border: "none",
          color: "var(--sand)",
          fontSize: "22px",
          boxShadow: "0 6px 16px rgba(31, 58, 44, 0.3)",
        }}
      >
        {open ? "×" : "🌱"}
      </button>
    </div>
  );
}
