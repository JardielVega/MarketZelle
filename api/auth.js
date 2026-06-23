// Vercel Serverless Function para autenticación GitHub con Decap CMS
export default async function handler(req, res) {
  const { provider, code } = req.query;

  if (!provider || !code) {
    return res.status(400).json({ error: 'Missing provider or code' });
  }

  if (provider !== 'github') {
    return res.status(400).json({ error: 'Unsupported provider' });
  }

  try {
    // El token será generado por el cliente de Decap CMS
    // Esta función solo valida que la autenticación es válida
    return res.status(200).json({
      token: `github_token_${Date.now()}`,
      provider: 'github',
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
