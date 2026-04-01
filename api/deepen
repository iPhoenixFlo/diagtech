// api/deepen.js
// Endpoint dédié au diagnostic approfondi avec recherche web
// Gère la boucle agentique : Claude cherche sur le net si nécessaire

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing ANTHROPIC_API_KEY' });

  const { system, messages } = req.body;
  if (!messages?.length) return res.status(400).json({ error: 'Missing messages' });

  let msgs = [...messages];
  const MAX_TURNS = 6;

  for (let turn = 0; turn < MAX_TURNS; turn++) {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        system,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        messages: msgs
      })
    });

    const data = await r.json();
    if (!r.ok) return res.status(r.status).json(data);

    // Réponse finale — on retourne tel quel
    if (data.stop_reason === 'end_turn') {
      return res.status(200).json(data);
    }

    // Claude veut utiliser un outil (web search)
    if (data.stop_reason === 'tool_use') {
      // Ajouter le tour assistant avec les tool_use blocks
      msgs.push({ role: 'assistant', content: data.content });

      // Construire les tool_result (vides — Anthropic injecte les résultats de recherche)
      const toolResults = data.content
        .filter(b => b.type === 'tool_use')
        .map(b => ({
          type: 'tool_result',
          tool_use_id: b.id,
          content: ''
        }));

      msgs.push({ role: 'user', content: toolResults });
      continue; // prochain tour
    }

    // Autre stop_reason — on retourne ce qu'on a
    return res.status(200).json(data);
  }

  return res.status(500).json({ error: 'Max turns reached without final response' });
}
