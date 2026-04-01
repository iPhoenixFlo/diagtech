export default function handler(req, res) {
  res.status(200).json({
    supabaseUrl:  process.env.SUPABASE_DIAGTECH_URL  || '',
    supabaseAnon: process.env.SUPABASE_DIAGTECH_ANON || ''
  });
}
