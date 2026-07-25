export default function Header() {
  return (
    <header className="site-header">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "22px",
            color: "var(--forest)",
          }}
        >
          <LeafMark />
          Rootly
        </div>
        <nav style={{ display: "flex", gap: "36px" }}>
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#reviews" className="nav-link">Reviews</a>
          <a href="#care" className="nav-link">Care guides</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  );
}

function LeafMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3C16 5 18 9 15 15C12 18 8 18 5 15C4 10 7 5 12 3Z"
        fill="var(--mustard)"
      />
    </svg>
  );
}
