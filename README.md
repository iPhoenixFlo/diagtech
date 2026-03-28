# DiagTech — Akinator Réparateur

Outil de diagnostic pour techniciens en réparation de smartphones.

## Déploiement sur Vercel

### 1. Pusher sur GitHub
```bash
git init
git add .
git commit -m "DiagTech initial"
git remote add origin https://github.com/TON_COMPTE/diagtech.git
git push -u origin main
```

### 2. Importer sur Vercel
- Aller sur vercel.com
- "Add New Project" → importer le repo diagtech
- Cliquer sur "Deploy"

### 3. Ajouter la clé API
Dans Vercel → Settings → Environment Variables :
- Nom : `ANTHROPIC_API_KEY`
- Valeur : ta clé `sk-ant-...`
- Cliquer "Save" puis "Redeploy"

C'est prêt !
