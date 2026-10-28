import { app } from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[BACKEND SERVER] Anuj Gupta Portfolio API running on http://localhost:${PORT}`);
  console.log(`[BACKEND SERVER] Health check available at http://localhost:${PORT}/api/health`);
});
