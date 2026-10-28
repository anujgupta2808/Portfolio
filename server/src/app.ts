import express from 'express';
import cors from 'cors';
import path from 'path';
import { healthRouter } from './routes/health.js';
import { contactRouter } from './routes/contact.js';
import { projectsRouter } from './routes/projects.js';
import { achievementsRouter } from './routes/achievements.js';
import { errorHandler } from './middleware/errorHandler.js';

export const app = express();

// Security and Middleware
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// API Routes
app.use('/api/health', healthRouter);
app.use('/api/contact', contactRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/achievements', achievementsRouter);

// Serve static frontend in production
const distPath = path.resolve(process.cwd(), 'dist');
app.use(express.static(distPath));

// Fallback route for SPA
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(404).send('Not Found');
    }
  });
});

// Error handling middleware
app.use(errorHandler);
