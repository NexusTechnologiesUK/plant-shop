import { useEffect, useMemo, useState } from "react";
import { products as fallbackProducts } from "../data/products.js";

const FILTERS = ["All", "Easy care", "Trailing", "Low light OK", "Pet friendly"];

export default function ProductGrid() {
  const [products, setProducts] = useState(fallbackProducts);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    // On Vercel this hits the live serverless function at /api/products.
    // Locally (without `vercel dev`) that route doesn't exist, so it
    // silently keeps the fallback data imported above.
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data?.products) setProducts(data.products);
      })
      .catch(() => {});
  }, []);

  const visibleProducts = useMemo(() => {
    if (activeFilter === "All") return products;
    return products.filter((p) => p.tag === activeFilter);
  }, [products, activeFilter]);

  return (
    <section id="shop" className="container" style={{ padding: "0 0 100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "28px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "30px",
            color: "var(--forest)",
            margin: 0,
          }}
        >
          This week's picks
        </h2>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`chip${activeFilter === filter ? " active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div
        key={activeFilter}
        className="fade-up"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "24px",
        }}
      >
        {visibleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {visibleProducts.length === 0 && (
          <p style={{ color: "var(--ink-soft)", fontSize: "14px" }}>
            Nothing in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-thumb">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C16 5 18 9 15 15C12 18 8 18 5 15C4 10 7 5 12 3Z"
            fill="var(--sage)"
          />
        </svg>
      </div>
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: "var(--mustard-deep)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {product.tag}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "19px",
          margin: "6px 0 6px",
          color: "var(--forest)",
        }}
      >
        {product.name}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "var(--ink-soft)",
          lineHeight: 1.5,
          margin: "0 0 16px",
        }}
      >
        {product.description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ fontSize: "16px", color: "var(--forest)" }}>
          ${product.price.toFixed(2)}
        </strong>
        <button className="btn btn-outline btn-sm">Add</button>
      </div>
    </div>
  );
}
