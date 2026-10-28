export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: 'hackathon-2026',
    title: 'Participation Certificate — Portfolio Design Hackathon',
    issuer: 'Skillinf Hackathon',
    year: '2026',
    description: 'Recognized for creating an original, high-performance cyberpunk portfolio website with modern responsive UI/UX architecture.',
  },
  {
    id: 'cert-web-dev',
    title: 'Certificate of Completion — Web Development',
    issuer: 'Web Tech Institute',
    year: '2025',
    description: 'Comprehensive certification in frontend development fundamentals, responsive layouts, CSS frameworks, and DOM manipulation.',
  },
  {
    id: 'cert-python',
    title: 'Certificate of Completion — Python (Basic to Advanced)',
    issuer: 'Coding Academy',
    year: '2025',
    description: 'Mastery in Python syntax, object-oriented programming paradigms, file I/O operations, and GUI desktop application architecture.',
  },
  {
    id: 'cert-java',
    title: 'Certificate of Completion — Java (Basics)',
    issuer: 'Tech Learning Hub',
    year: '2025',
    description: 'Foundations of Java development, OOP principles, data structures, and algorithmic problem-solving techniques.',
  },
];
