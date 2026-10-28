import { getAssetUrl } from '../lib/assets';

export interface ProfileData {
  fullName: string;
  firstName: string;
  lastName: string;
  headlinePrefix: string;
  headlineEmphasis: string;
  tagline: string;
  shortBio: string;
  aboutBio: string;
  portraitUrl: string;
  resumeUrl: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  motto: string[];
  aboutMotto: string[];
  stats: Array<{
    id: string;
    number: string;
    label: string;
    icon: string;
  }>;
  quote: {
    text: string;
    author: string;
  };
}

export const profileData: ProfileData = {
  fullName: "Anuj Gupta",
  firstName: "Anuj",
  lastName: "Gupta",
  headlinePrefix: "Building digital experiences",
  headlineEmphasis: "that feel different.",
  tagline: "HELLO, I'M",
  shortBio: "I'm a passionate developer exploring web design, software development, and AI-powered ideas. I turn ideas into real, impactful digital solutions.",
  aboutBio: "I'm Anuj Gupta, a passionate and dedicated student pursuing SYBSc IT at Thakur College of Science and Commerce (Mumbai University). I enjoy exploring cutting-edge web technologies, building interactive software solutions, and continuously learning to grow in the tech world.",
  portraitUrl: getAssetUrl('/images/anuj-portrait.png'),
  resumeUrl: getAssetUrl('/resume.pdf'),
  contact: {
    email: "anujgupta26610812@gmail.com",
    phone: "+91 8779747746",
    location: "Thakur College, Kandivali, Mumbai",
  },
  motto: ["CODE", "CREATE", "LEARN", "GROW"],
  aboutMotto: ["Learn", "Build", "Improve", "Repeat"],
  stats: [
    {
      id: "repos",
      number: "16+",
      label: "Public Repositories",
      icon: "repo",
    },
    {
      id: "learning",
      number: "Project-Driven",
      label: "Learning",
      icon: "brain",
    },
    {
      id: "collaboration",
      number: "Open to",
      label: "Collaboration",
      icon: "users",
    },
    {
      id: "growth",
      number: "Continuous",
      label: "Growth",
      icon: "award",
    },
  ],
  quote: {
    text: "Code is not just about writing programs, it's about creating solutions for a better tomorrow.",
    author: "Anuj Gupta",
  },
};
