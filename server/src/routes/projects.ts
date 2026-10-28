import { Router, Request, Response } from 'express';

export const projectsRouter = Router();

const projects = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Web Development',
    description: 'A responsive and modern portfolio website built using HTML, CSS, JavaScript, React, Tailwind CSS and smooth Framer Motion animations.',
    thumbnail: '/images/project-portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Dark cyberpunk aesthetic with neon red accents',
      'Fully responsive for desktop, tablet, and mobile devices',
      'Live contact form with serverless database storage',
      'Smooth micro-interactions and scroll-triggered animations',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/anujgupta/portfolio',
    status: 'Live',
  },
  {
    id: 'student-attendance-system',
    title: 'Student Attendance System',
    category: 'Python',
    description: 'A Python and Tkinter application designed to manage student attendance, records, and attendance-related analytics with SQLite database.',
    thumbnail: '/images/project-attendance.jpg',
    technologies: ['Python', 'Tkinter', 'SQLite', 'Matplotlib'],
    features: [
      'Interactive student profile management and database records',
      'Automated attendance tracking and monthly percentage calculation',
      'Visual attendance trends chart and reporting export',
      'Admin authentication and data safety safeguards',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/anujgupta/student-attendance-system',
    status: 'Completed',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    category: 'Web Development',
    description: 'A sleek weather application displaying real-time global weather conditions, forecasts, and live meteorological metrics via REST API.',
    thumbnail: '/images/project-weather.jpg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Open-Meteo API'],
    features: [
      'City search with auto-complete and geocoding',
      'Real-time temperature, humidity, wind velocity, and precipitation',
      '7-day dynamic forecast graph with temperature trendline',
      'Lightweight and fully responsive mobile-first UI',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/anujgupta/weather-app',
    status: 'Completed',
  },
];

projectsRouter.get('/', (req: Request, res: Response) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    const filtered = projects.filter((p) => p.category.toLowerCase() === (category as string).toLowerCase());
    return res.json({ success: true, count: filtered.length, data: filtered });
  }
  res.json({ success: true, count: projects.length, data: projects });
});
