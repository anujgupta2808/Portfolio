import { Router, Request, Response } from 'express';

export const achievementsRouter = Router();

const achievements = [
  {
    id: 'hackathon-2026',
    title: 'Participation Certificate — Portfolio Design Hackathon',
    issuer: 'Skillinf Hackathon 2026',
    year: '2026',
    category: 'Competition',
    description: 'Participated in the competitive frontend and UI/UX design hackathon for crafting advanced, modern developer portfolios.',
  },
  {
    id: 'cert-web-dev',
    title: 'Certificate of Completion — Web Development',
    issuer: 'Course Completion',
    year: '2025',
    category: 'Development',
    description: 'Mastery in semantic HTML5, modern CSS3 styling, responsive layouts, and interactive JavaScript programming.',
  },
  {
    id: 'cert-python',
    title: 'Certificate of Completion — Python (Basic to Advanced)',
    issuer: 'Course Completion',
    year: '2025',
    category: 'Programming',
    description: 'Comprehensive programming training covering OOP concepts, data structures, algorithms, and GUI development.',
  },
  {
    id: 'cert-java',
    title: 'Certificate of Completion — Java (Basics)',
    issuer: 'Course Completion',
    year: '2025',
    category: 'Programming',
    description: 'Foundations of Java programming language, class hierarchies, exception handling, and object-oriented architecture.',
  },
];

achievementsRouter.get('/', (req: Request, res: Response) => {
  res.json({ success: true, count: achievements.length, data: achievements });
});
