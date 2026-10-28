import { Router, Request, Response } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'anuj-gupta-portfolio-api',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});
