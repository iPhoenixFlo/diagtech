// api/config.js
// Expose la config publique Supabase au frontend
// Variables à définir dans Vercel → Settings → Environment Variables :
//   SUPABASE_DIAGTECH_URL   → https://vkagqzibkjtjisufhtsm.supabase.co
//   SUPABASE_DIAGTECH_ANON  → ta clé anon/public DiagTech iPhoenix

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(`
    window.__SUPABASE_URL__ = "${process.env.SUPABASE_DIAGTECH_URL || ''}";
    window.__SUPABASE_ANON__ = "${process.env.SUPABASE_DIAGTECH_ANON || ''}";
  `);
}
