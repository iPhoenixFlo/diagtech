// api/config.js
// Variables Vercel → Settings → Environment Variables :
//   SUPABASE_DIAGTECH_URL   → https://vkagqzibkjtjisufhtsm.supabase.co
//   SUPABASE_DIAGTECH_ANON  → clé anon/public DiagTech iPhoenix
//   CONTRIB_PIN             → code PIN contributions (ex: 4 chiffres)

export default function handler(req, res) {
  res.status(200).json({
    supabaseUrl:  process.env.SUPABASE_DIAGTECH_URL  || '',
    supabaseAnon: process.env.SUPABASE_DIAGTECH_ANON || '',
    contribPin:   process.env.CONTRIB_PIN            || '1234'
  });
}
