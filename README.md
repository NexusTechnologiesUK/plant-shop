# Rootly — client demo build

A draft homepage built with React + Vite, with a small Node.js
serverless API (`/api/products`) and "Sprout," a rule-based AI plant-care
assistant, as a stand-in for the AI Agent feature the client asked about.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Deploy to Vercel (recommended path for tomorrow)

**Option A — no GitHub needed, fastest:**
1. Install the Vercel CLI once: `npm i -g vercel`
2. From this folder, run: `vercel`
3. Follow the prompts (press enter to accept defaults). It will give you a
   live URL in under a minute.

**Option B — via GitHub (better long-term, since the client wants GitHub anyway):**
1. Create a new empty repo on GitHub.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Draft homepage for client review"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Go to vercel.com → "Add New Project" → import that GitHub repo → Deploy.
   Vercel auto-detects Vite and handles the build.

Either way, you'll have a real, live URL to share in the meeting.

## Important note on PHP

Vercel runs Node.js, not PHP. The `/api/products.js` file plays the same
role a PHP backend would (serving data as JSON), but it's written in
JavaScript because that's what Vercel's serverless functions support. If
the client specifically needs PHP (per the job posting), that would need
its own server — worth clarifying with them directly rather than assuming,
since it changes hosting and possibly the final architecture.

## Where to go next

- Swap the hard-coded `products` array in `api/products.js` for a real
  Supabase query once you have a project set up.
- Sprout (the AI widget) currently uses simple keyword matching — no API
  key required, so it works instantly in a demo. A real LLM-backed version
  would call an AI API from a serverless function (so the key stays
  private), and only the `answer()` function in `AIAssistant.jsx` needs to
  change.
