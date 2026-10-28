export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web Development' | 'Python & AI' | 'Other Projects';
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  isLive?: boolean;
  isExternalMore?: boolean;
}

export const projectCategories = ['All Projects', 'Web Development', 'Python & AI', 'Other Projects'] as const;

export const projectsData: ProjectItem[] = [
  {
    id: 'expense-tracker',
    title: 'ExpenseTracker',
    category: 'Web Development',
    shortDescription: 'A personal finance project for recording expenses and viewing spending summaries.',
    fullDescription: 'A personal finance web application for tracking daily expenses, budgeting, and viewing spending analytics. Allows users to categorize purchases, set financial goals, and monitor monthly balances.',
    thumbnail: '/images/project-expense.jpg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    features: [
      'Expense and income tracking ledger',
      'Interactive monthly spending breakdown charts',
      'Category tagging (Food, Rent, Travel, Utilities)',
      'Persistent local storage transaction history'
    ],
    githubUrl: 'https://github.com/anujgupta2808/ExpenseTracker',
    liveUrl: 'https://anujgupta2808.github.io/ExpenseTracker/',
    isLive: true,
  },
  {
    id: 'docuserve',
    title: 'DocuServe',
    category: 'Web Development',
    shortDescription: 'A document-services website concept focused on file conversion and spreadsheet analysis.',
    fullDescription: 'A comprehensive document services platform enabling users to organize, convert file formats, and analyze spreadsheets directly in the browser with security and speed.',
    thumbnail: '/images/project-docuserve.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Document conversion (DOCX, PDF, XLSX)',
      'Spreadsheet data analysis and tabular viewer',
      'Drag-and-drop secure file uploading',
      'Fast client-side document processing'
    ],
    githubUrl: 'https://github.com/anujgupta2808/DocuServe-',
    liveUrl: 'https://anujgupta2808.github.io/DocuServe-/',
    isLive: true,
  },
  {
    id: 'procelya-ai',
    title: 'Procelya-AI',
    category: 'Python & AI',
    shortDescription: 'An AI-powered project for business workflow detection and diagram generation.',
    fullDescription: 'An intelligent AI workflow platform that detects bottlenecks in business pipelines and automatically generates visual node-graph process diagrams with metrics and route optimizations.',
    thumbnail: '/images/project-procelya.jpg',
    technologies: ['Python', 'AI/ML', 'NLP', 'Workflow Engine'],
    features: [
      'AI-driven business pipeline bottleneck detection',
      'Automated visual flowchart & node diagram generation',
      'Process analytics, throughput monitoring, and latency metrics',
      'Interactive prompt-driven workflow adjustments'
    ],
    githubUrl: 'https://github.com/anujgupta2808',
    liveUrl: 'https://vedantmh48-cpu.github.io/Procelya-AI/',
    isLive: true,
  },
  {
    id: 'classcore',
    title: 'ClassCore',
    category: 'Web Development',
    shortDescription: 'A polished student record portal with login/signup flow, live search, student records table, and CSV export.',
    fullDescription: 'A comprehensive student record portal designed for schools and universities. Features responsive attendance management, live instant search, student profiles, and one-click CSV export.',
    thumbnail: '/images/project-classcore.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Student attendance tracking (Present, Absent, Late)',
      'Live instant search and filtering by class & grade',
      'Student profile management with modal edit forms',
      'One-click CSV export for reports and attendance records'
    ],
    githubUrl: 'https://github.com/anujgupta2808/-ClassCore',
    liveUrl: 'https://anujgupta2808.github.io/-ClassCore/',
    isLive: true,
  },
  {
    id: 'marvel-studios',
    title: 'Marvel Studios · ECHOES OF STRUGGLE',
    category: 'Web Development',
    shortDescription: 'An immersive, cinematic scrolling experience showcasing Marvel\'s iconic heroes with GSAP animations, Locomotive Scroll, and audio integration.',
    fullDescription: 'A cinematic web experience dedicated to Marvel heroes. Built with GSAP timelines, Locomotive Scroll for inertia physics, custom audio tracks, and high-impact visual effects.',
    thumbnail: '/images/project-marvel.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Locomotive Scroll'],
    features: [
      'Cinematic parallax scroll-driven hero sequences',
      'GSAP timeline micro-animations and particle effects',
      'Interactive superhero showcase and audio integration',
      'Responsive high-definition layout'
    ],
    githubUrl: 'https://github.com/anujgupta2808/Marvel-Studios',
    liveUrl: 'https://anujgupta2808.github.io/Marvel-Studios/',
    isLive: true,
  },
  {
    id: 'more-projects',
    title: 'Explore More Projects',
    category: 'Other Projects',
    shortDescription: 'Discover 16+ public repositories, web tools, interactive games, and software experiments on GitHub.',
    fullDescription: 'Visit Anuj Gupta\'s official GitHub profile to explore over 16+ open-source repositories including CodeQuiz, ResumePro-Builder, Retro Games Collection, Advanced Calculator, and ongoing projects.',
    thumbnail: '/images/project-more-github.jpg',
    technologies: ['GitHub', '16+ Repos', 'Open Source', 'Explore'],
    features: [
      '16+ active public repositories on GitHub',
      'Web applications, Python scripts, and UI tools',
      'CodeQuiz, ResumePro-Builder, Retro Games, Calculator',
      'Continuous commits, releases, and open-source contributions'
    ],
    githubUrl: 'https://github.com/anujgupta2808?tab=repositories',
    liveUrl: 'https://github.com/anujgupta2808?tab=repositories',
    isLive: true,
    isExternalMore: true,
  },
];
