import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import rateLimit from 'express-rate-limit';
import { saveContactSubmission } from '../lib/supabase.js';

export const contactRouter = Router();

// Rate limiter: maximum 10 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    error: 'Too many contact requests from this IP. Please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters long').max(100, 'Name is too long'),
  email: z.string().trim().email('Please provide a valid email address').max(150, 'Email is too long'),
  subject: z.string().trim().min(2, 'Subject must be at least 2 characters long').max(200, 'Subject is too long'),
  message: z.string().trim().min(5, 'Message must be at least 5 characters long').max(3000, 'Message is too long'),
});

contactRouter.post('/', contactLimiter, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parseResult = contactSchema.safeParse(req.body);
    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map((e) => e.message).join(', ');
      res.status(400).json({
        success: false,
        error: errorMessages,
        issues: parseResult.error.format(),
      });
      return;
    }

    const { name, email, subject, message } = parseResult.data;

    // Simple anti-spam: check for honeypot if present
    if (req.body._gotcha) {
      // Silently ignore bot submission
      res.status(200).json({ success: true, message: 'Message sent successfully.' });
      return;
    }

    const saved = await saveContactSubmission({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out, Anuj will get back to you soon!',
      data: {
        id: saved.id,
        created_at: saved.created_at,
      },
    });
  } catch (err) {
    next(err);
  }
});
