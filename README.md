# 🌱 Rootly

A homepage for an online plant shop, built as a demonstration of modern, production-style web development — a fast React frontend, a live serverless backend, and an embedded AI assistant, all deployed and publicly accessible rather than a static mockup.

**Live demo:** [plant-shop-sepia-eta.vercel.app](https://plant-shop-sepia-eta.vercel.app/)

---

## Core functionality

- **Dynamic product catalog** — plant listings are fetched live from a backend API endpoint (`/api/products`), the same pattern a real e-commerce site uses to pull from a database.
- **Category filtering** — filter products by tag (Easy care, Trailing, Low light OK, Pet friendly) with instant, no-reload results.
- **Live AI chat assistant ("Sprout")** — a floating chat widget that answers plant-care questions (watering, light, yellow/brown leaves, repotting, feeding, pet safety) in real time.
- **Email signup** — a working newsletter form with its own confirmation state.
- **Social proof section** — testimonials with ratings.
- **Fully responsive** — adapts cleanly from desktop down to mobile.

## What makes it different

Most homepage drafts are static — a mockup or a page with no working parts. This one is a functioning application: the data layer is real, the AI feature actually responds contextually rather than being a screenshot, and it's deployed live so anyone can click around it on their own device.

## Role of AI

**Sprout** is an embedded plant-care assistant rather than a bolt-on chatbot. It listens for what a visitor is asking about (watering, light, leaf problems, repotting, pet safety) and gives a relevant, specific answer. It currently runs on lightweight keyword matching so it works instantly with zero setup cost, but the architecture is built so the matching logic can be swapped for a full LLM-backed response without changing anything else in the app.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js serverless functions (Vercel) |
| Hosting | Vercel, connected to GitHub for auto-deploy on push |
| Styling | Hand-written CSS with custom properties, hover states, transitions, responsive breakpoints |
| Version control | Git + GitHub |

## Running locally

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/   # Header, Hero, ProductGrid, Testimonials, Footer, AIAssistant
  data/         # fallback product data
api/
  products.js   # serverless API endpoint
```
