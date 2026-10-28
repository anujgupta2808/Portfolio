export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Programming' | 'Database' | 'Tools' | 'Specialized';
  description: string;
  useCase: string;
  iconType: string;
}

export const skillCategories = ['All', 'Frontend', 'Programming', 'Database', 'Tools', 'Specialized'] as const;
export type SkillCategory = (typeof skillCategories)[number];

export const skillsData: SkillItem[] = [
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend',
    iconType: 'html',
    description: 'Semantic markup language used to structure modern, accessible web applications and layouts.',
    useCase: 'Used across all web projects for standard-compliant markup, accessibility (ARIA), and SEO structure.',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Frontend',
    iconType: 'css',
    description: 'Styling engine for creating responsive layouts, flexbox/grid architectures, and custom animations.',
    useCase: 'Leveraged for responsive styling, dark mode themes, keyframe animations, and custom UI micro-interactions.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    iconType: 'javascript',
    description: 'Dynamic scripting language powering interactive frontend logic, DOM manipulation, and asynchronous API calls.',
    useCase: 'Core language for frontend interactivity, event handling, REST API data consumption, and application state.',
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    iconType: 'react',
    description: 'Component-based UI library for building rich single-page applications and interactive web interfaces.',
    useCase: 'Powering ResumePro-Builder and the modern portfolio UI with hooks, state, and modular component hierarchy.',
  },
  {
    id: 'c-cpp',
    name: 'C / C++',
    category: 'Programming',
    iconType: 'cpp',
    description: 'High-performance compiled programming languages teaching low-level memory management and core algorithms.',
    useCase: 'Academic foundation for understanding data structures, memory pointers, time complexity, and procedural programming.',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    iconType: 'python',
    description: 'Versatile language used for rapid prototyping, automation scripts, GUI software, and backend programming.',
    useCase: 'Built SoulTalkAI and attendance management tools with clean scripting, NLP libraries, and file automation.',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Programming',
    iconType: 'java',
    description: 'Object-oriented programming language emphasizing robust typing, inheritance, interfaces, and architecture.',
    useCase: 'Used in university coursework to implement OOP concepts, class hierarchies, multithreading, and design patterns.',
  },

  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database',
    iconType: 'mysql',
    description: 'Relational database management system utilizing SQL for structured queries, schemas, and relational integrity.',
    useCase: 'Used to model relational schemas, table joins, indexes, and transactional queries for student records.',
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'Tools',
    iconType: 'github',
    description: 'Distributed version control system and cloud platform for source tracking, branching, and code collaboration.',
    useCase: 'Manages 16+ public repositories, commit history, releases, and continuous project versioning.',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Tools',
    iconType: 'vscode',
    description: 'Extensible, lightweight source code editor with rich debugging and language server capabilities.',
    useCase: 'Primary daily IDE configured with TypeScript, ESLint, Python, and Git extensions for efficient development.',
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    category: 'Tools',
    iconType: 'antigravity',
    description: 'AI-powered IDE for building modern web applications with an AI-first development approach.',
    useCase: 'Used for rapid prototyping, automated pair programming, and full-stack development workflow.',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    category: 'Specialized',
    iconType: 'design',
    description: 'Visual branding, typography, posters, digital mockups, and UI design assets creation.',
    useCase: 'Designing bespoke logos, hero banners, promotional artwork, and creative portfolio visual elements.',
  },
  {
    id: 'advanced-excel',
    name: 'Advanced Excel',
    category: 'Specialized',
    iconType: 'excel',
    description: 'Spreadsheet mastery with pivot tables, VLOOKUP/XLOOKUP, data analysis, and formula automation.',
    useCase: 'Managing tabular datasets, financial reports, academic grades analysis, and automated formula modeling.',
  },
  {
    id: 'advanced-tally',
    name: 'Advanced Tally',
    category: 'Specialized',
    iconType: 'tally',
    description: 'Enterprise ERP accounting software for ledger management, GST calculation, and financial statements.',
    useCase: 'Handling computerized financial accounting, journal vouchers, inventory tracking, and balance sheets.',
  },
  {
    id: 'hardware-troubleshooting',
    name: 'PC Hardware & Assembly',
    category: 'Specialized',
    iconType: 'hardware',
    description: 'Hands-on computer hardware assembly, diagnostic troubleshooting, component upgrades, and optimization.',
    useCase: 'Custom PC building, thermal management, BIOS configuration, hardware diagnostics, and performance tuning.',
  },
];
