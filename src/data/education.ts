export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
  periodOrScore: string;
  isCurrent?: boolean;
}

export interface LanguageItem {
  name: string;
  level: string;
  percentage: number;
}

export interface LearningHighlights {
  intro: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export const educationData: EducationItem[] = [
  {
    id: 'B.Sc IT',
    degree: 'B.Sc IT',
    institution: 'Thakur College of Science and Commerce',
    status: '(Currently Pursuing — Mumbai University)',
    periodOrScore: '2024 – Present',
    isCurrent: true,
  },

  {
    id: 'hsc-commerce',
    degree: '12th (Commerce)',
    institution: 'Maharashtra State Board',
    status: 'Higher Secondary Certificate',
    periodOrScore: '83.67%',
    isCurrent: false,
  },
  {
    id: 'ssc',
    degree: '10th (SSC)',
    institution: 'Maharashtra State Board',
    status: 'Secondary School Certificate',
    periodOrScore: '77%',
    isCurrent: false,
  },
];

export const learningHighlightsData: LearningHighlights = {
  intro: 'I am a self-driven learner and project-oriented developer passionate about technology, programming, and problem-solving. I have worked on 10+ real projects and web applications gaining practical experience in software development. I enjoy turning ideas into functional, user-friendly applications while exploring new technologies and continuously improving my skills. My goal is to build innovative digital solutions and grow as a software engineer.',
  stats: [
    { value: '10+', label: 'Mini Projects' },
    { value: '8+', label: 'Technologies' },
    { value: '1', label: 'Goal' },
  ],
};

export const languagesData: LanguageItem[] = [
  { name: 'English', level: 'Fluent', percentage: 90 },
  { name: 'Hindi', level: 'Native', percentage: 98 },
  { name: 'Marathi', level: 'Working Proficiency', percentage: 80 },
  { name: 'German', level: 'Beginner', percentage: 20 },
];
