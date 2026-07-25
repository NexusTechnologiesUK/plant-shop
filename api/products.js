// api/products.js
// Vercel automatically turns any file in /api into a live backend endpoint —
// this one becomes https://your-site.vercel.app/api/products
//
// This plays the same role api.php would on a traditional PHP host: it hands
// back product data as JSON for the frontend to fetch and render. Vercel's
// serverless functions run Node.js rather than PHP, which is why this file
// is JavaScript instead — if the client specifically needs a PHP server,
// that piece would be hosted separately and this file would be swapped out
// for it, without the React frontend needing to change at all.
//
// For now this returns a hard-coded array. Swapping in Supabase later is a
// small change: install @supabase/supabase-js, create a client with your
// project URL and anon key (kept in Vercel environment variables, never in
// the code), and replace the array below with a query like
// supabase.from('products').select('*').

const products = [
  { id: 1, name: "Monstera Deliciosa", price: 34.0, tag: "Easy care", description: "Bold, split leaves that thrive on a bit of neglect." },
  { id: 2, name: "String of Pearls", price: 22.0, tag: "Trailing", description: "Bead-like leaves that spill beautifully over a shelf edge." },
  { id: 3, name: "Snake Plant", price: 28.0, tag: "Low light OK", description: "Nearly indestructible. A great first plant." },
  { id: 4, name: "Pilea Peperomioides", price: 26.0, tag: "Pet friendly", description: "Round coin-shaped leaves on slender stems." },
];

export default function handler(req, res) {
  res.status(200).json({ success: true, products });
}
